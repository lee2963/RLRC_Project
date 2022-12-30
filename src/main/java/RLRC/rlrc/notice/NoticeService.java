package RLRC.rlrc.notice;

import RLRC.rlrc.file.FileStore;
import RLRC.rlrc.file.UploadFile;
import RLRC.rlrc.file.UploadFileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;
    private final UploadFileRepository uploadFileRepository;

    private final FileStore fileStore;

    public Notice save(Notice notice) {

        return noticeRepository.save(notice);
    }

    public void delete(Long id) {
        Optional<Notice> findNotice = noticeRepository.findById(id);

        Notice getNotice = findNotice.orElseThrow(IllegalAccessError::new);

        if (getNotice.getAttachFile() != null) {
            List<UploadFile> attachFiles = getNotice.getAttachFile();

            for (UploadFile attachFile : attachFiles) {
                UploadFile findUploadFile = uploadFileRepository.findByStoreFileName(attachFile.getStoreFileName());
                fileStore.deleteFile(findUploadFile.getStoreFileName());
                uploadFileRepository.delete(findUploadFile);
            }
        }

        noticeRepository.delete(getNotice);
    }

    public Notice findNotice(Long id) {
        Optional<Notice> findNotice = noticeRepository.findById(id);

        return findNotice.orElseThrow(IllegalAccessError::new);
    }

    public Page<Notice> searchAllNotice( Pageable pageable) throws Exception {

        Page<Notice> findNotices = noticeRepository.findAll(pageable);

        if (findNotices.isEmpty()) {
            throw new Exception("조회한 결과가 없습니다.");
        }

        return findNotices;
    }

    public Page<Notice> searchNotice(String word, Pageable pageable) throws Exception {

        Page<Notice> findNotices = noticeRepository.findAllByTitleContaining(word, pageable);

        if (findNotices.isEmpty()) {
            throw new Exception("조회한 결과가 없습니다.");
        }

        return findNotices;
    }
}
