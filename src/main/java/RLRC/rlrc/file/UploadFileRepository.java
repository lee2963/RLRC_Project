package RLRC.rlrc.file;

import RLRC.rlrc.notice.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UploadFileRepository extends JpaRepository<UploadFile, Long> {

     UploadFile findByStoreFileName(String storedFileName);


}
