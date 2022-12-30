package RLRC.rlrc.news;

import RLRC.rlrc.file.FileStore;
import RLRC.rlrc.file.UploadFile;
import RLRC.rlrc.file.UploadFileService;
import RLRC.rlrc.news.dto.NewsDetailDto;
import RLRC.rlrc.news.dto.NewsDto;
import RLRC.rlrc.notice.Notice;
import RLRC.rlrc.notice.NoticeService;
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
@RequestMapping
@RequiredArgsConstructor
public class NewsController {

    private final NewsService newsService;
    private final UploadFileService uploadFileService;
    private final FileStore fileStore;


    @PostMapping("/admin/news/save")
    public ResponseEntity<Void> saveNews(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Long adminId, NewsDto newsDto) {

        try {

            News news = new News(newsDto);

            if (adminId == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }

            if(newsDto.getAttachFiles()!= null) {
                log.info("ori:{}", newsDto.getAttachFiles().get(0).getOriginalFilename());

                List<UploadFile> attachFiles = fileStore.storeFiles(newsDto.getAttachFiles());

                uploadFileService.saveAll(attachFiles);
                news.setAttachFile(attachFiles);
            }

            if (newsDto.getImageFile() != null) {
                UploadFile imageFile = fileStore.storeFile(newsDto.getImageFile());
                uploadFileService.save(imageFile);
                news.setImageFile(imageFile);
            }

            newsService.save(news);


            return new ResponseEntity<>(HttpStatus.OK);
        } catch (RollbackException | IOException e) {
            log.info("ex{}",e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/news/{id}")
    public ResponseEntity<News> searchNews(@PathVariable Long id) {
        News findNews = newsService.findNews(id);

        if (findNews == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(findNews, HttpStatus.OK);
    }

    @GetMapping("/news/search/all")
    public ResponseEntity<Page<News>> searchAllNews(
            @PageableDefault(size = 6, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {

        try {
            Page<News> findNews = newsService.searchAllNews(pageable);

            return new ResponseEntity<>(findNews, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/news/search/title")
    public ResponseEntity<Page<News>> searchNews(@RequestParam String word,
                                                     @PageableDefault(size = 6, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        try {
            String title = URLDecoder.decode(word, "UTF-8");
            Page<News> findNotices = newsService.searchNews(title, pageable);

            return new ResponseEntity<>(findNotices, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/news/image/{filename}")
    public ResponseEntity<UrlResource> downloadImage(@PathVariable String filename) throws MalformedURLException {
        return new ResponseEntity<>(new UrlResource("file:" + fileStore.getFullPath(filename)), HttpStatus.OK);
    }

    @DeleteMapping("/admin/news/{id}")
    public ResponseEntity<Void> deleteNews(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Long adminId, @PathVariable("id") Long id) {
        try {

            if (adminId == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }

            newsService.delete(id);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (IllegalAccessError e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/news/attach/{id}")
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
