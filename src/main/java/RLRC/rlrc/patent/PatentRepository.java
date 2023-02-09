package RLRC.rlrc.patent;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface PatentRepository extends JpaRepository<Patent, Long> {

    @Transactional
    @Modifying
    @Query(value = "truncate table patent", nativeQuery = true)
    void truncatePatent();

    Page<Patent> findAll(Pageable pageable);

    Page<Patent> findAllByTitleContaining(String title , Pageable pageable);

    Page<Patent> findAllByYear(int year, Pageable pageable);


}
