package RLRC.rlrc.notice;

import RLRC.rlrc.file.FileStore;
import RLRC.rlrc.file.UploadFile;
import RLRC.rlrc.file.UploadFileService;
import RLRC.rlrc.notice.dto.NoticeDto;
import RLRC.rlrc.session.SessionConst;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriUtils;

import javax.persistence.RollbackException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;
    private final UploadFileService uploadFileService;
    private final FileStore fileStore;


    @PostMapping("/admin/notice/save")
    public ResponseEntity<Void> saveNotice(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Long adminId, NoticeDto noticeDto) {

        try {
            if (adminId == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }

            Notice notice = new Notice(noticeDto);


            if(noticeDto.getAttachFiles() != null) {
                log.info("ori:{}", noticeDto.getAttachFiles().get(0).getOriginalFilename());

                List<UploadFile> uploadFiles = fileStore.storeFiles(noticeDto.getAttachFiles());

                for (UploadFile attachFile : uploadFiles) {
                    log.info("==========================");
                    log.info("storeName:{}", attachFile.getStoreFileName());
                    log.info("uploadName:{}", attachFile.getUploadFileName());
                }
                uploadFileService.saveAll(uploadFiles);
                notice.setAttachFile(uploadFiles);
            }

            if (noticeDto.getImageFile() != null) {
                UploadFile imageFile = fileStore.storeFile(noticeDto.getImageFile());
                uploadFileService.save(imageFile);
                notice.setImageFile(imageFile);
            }

            noticeService.save(notice);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (RollbackException | IOException e) {
            log.info("ex{}",e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/notice/{id}")
    public ResponseEntity<Notice> searchNotice(@PathVariable Long id) {
        Notice findNotice = noticeService.findNotice(id);

        if (findNotice == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(findNotice, HttpStatus.OK);
    }

    @GetMapping("/notice/image/{filename}")
    public ResponseEntity<UrlResource> downloadImage(@PathVariable String filename) throws MalformedURLException {
        return new ResponseEntity<>(new UrlResource("file:" + fileStore.getFullPath(filename)), HttpStatus.OK);
    }

    @GetMapping("/notice/search/all")
    public ResponseEntity<Page<Notice>> searchAllNotice(
            @PageableDefault(size = 6, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {

        try {
            Page<Notice> findNotices = noticeService.searchAllNotice(pageable);

            for (Notice findNotice : findNotices) {
                log.info("find title: {}", findNotice.getTitle());
            }
            return new ResponseEntity<>(findNotices, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/notice/search/title")
    public ResponseEntity<Page<Notice>> searchNotice(@RequestParam String word,
                                                     @PageableDefault(size = 6, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        try {
            String title = URLDecoder.decode(word, "UTF-8");
            Page<Notice> findNotices = noticeService.searchNotice(title, pageable);

            return new ResponseEntity<>(findNotices, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/admin/notice/{id}")
    public ResponseEntity<Void> deleteNotice(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Long adminId, @PathVariable("id") Long id) {
        try {

            if (adminId == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            noticeService.delete(id);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (IllegalAccessError e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/notice/attach/{id}")
    public ResponseEntity<Resource> downloadAttach(@PathVariable Long id) throws MalformedURLException {

        UploadFile attachFile = uploadFileService.findUploadFile(id);
        String storeFileName = attachFile.getStoreFileName();
        String uploadFileName = attachFile.getUploadFileName();

        UrlResource resource = new UrlResource("file:" + fileStore.getFullPath(storeFileName));

        log.info("uploadFileName={}", uploadFileName);
        String encodedUploadFileName = UriUtils.encode(uploadFileName,
                StandardCharsets.UTF_8);

        String contentDisposition = "attachment; filename=\"" +
                encodedUploadFileName + "\"";

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, contentDisposition)
                .body(resource);
    }
}
