package RLRC.rlrc.thesis;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ThesisService {

    private final ThesisRepository thesisRepository;

    public void excelSave(List<Thesis> dataList) {
        thesisRepository.saveAll(dataList);
    }

//    public List<YearCount> searchYearThesis() {
//        return thesisRepository.findGroupByYearWithJPQL();
//    }

    public Page<Thesis> searchAllThesis(Pageable pageable) throws Exception {
        Page<Thesis> findThesis = thesisRepository.findAll(pageable);

        if (findThesis.isEmpty()) {
            throw new Exception("조회한 결과가 없습니다.");
        }

        return findThesis;
    }

    public Page<Thesis> searchThesis(String word, Pageable pageable) throws Exception {

        Page<Thesis> findThesis = thesisRepository.findAllByTitleContaining(word, pageable);

        if (findThesis.isEmpty()) {
            throw new Exception("조회한 결과가 없습니다.");
        }

        return findThesis;
    }

    public void delete(Long id) {
        Optional<Thesis> findThesis = thesisRepository.findById(id);

        Thesis getThesis = findThesis.orElseThrow(IllegalAccessError::new);
        thesisRepository.delete(getThesis);
    }


}
