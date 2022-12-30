package RLRC.rlrc.file;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UploadFileService {

    private final UploadFileRepository uploadFileRepository;

    public void save(UploadFile imageFile) {
        uploadFileRepository.save(imageFile);
    }

    public void saveAll(List<UploadFile> uploadFiles) {

        uploadFileRepository.saveAll(uploadFiles);
    }

    public UploadFile findUploadFile(Long id) {
        Optional<UploadFile> uploadFile = uploadFileRepository.findById(id);
        return uploadFile.orElse(null);
    }
}
