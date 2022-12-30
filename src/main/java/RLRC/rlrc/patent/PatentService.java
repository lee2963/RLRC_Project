package RLRC.rlrc.patent;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PatentService {

    private final PatentRepository patentRepository;

    public void excelSave(List<Patent> dataList) {
        patentRepository.saveAll(dataList);
    }


    public Page<Patent> searchAllPatent(Pageable pageable) throws Exception {
        Page<Patent> findPatent = patentRepository.findAll(pageable);

        if (findPatent.isEmpty()) {
            throw new Exception("조회한 결과가 없습니다.");
        }

        return findPatent;
    }

    public Page<Patent> searchPatent(String word, Pageable pageable) throws Exception {

        Page<Patent> findPatent = patentRepository.findAllByTitleContaining(word, pageable);

        if (findPatent.isEmpty()) {
            throw new Exception("조회한 결과가 없습니다.");
        }

        return findPatent;
    }

    public void delete(Long id) {
        Optional<Patent> findThesis = patentRepository.findById(id);

        Patent getPatent = findThesis.orElseThrow(IllegalAccessError::new);
        patentRepository.delete(getPatent);
    }


}
