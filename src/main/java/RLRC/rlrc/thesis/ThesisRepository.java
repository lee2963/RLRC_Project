package RLRC.rlrc.thesis;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ThesisRepository extends JpaRepository<Thesis, Long> {
    @Modifying
    @Query(value = "truncate table thesis", nativeQuery = true)
    void truncateThesis();
    Page<Thesis> findAll(Pageable pageable);

    Page<Thesis> findAllByTitleContaining(String title , Pageable pageable);

    Page<Thesis> findAllByYear(int year, Pageable pageable);

    List<Thesis> findAllByAuthorsContaining(String author);





}
