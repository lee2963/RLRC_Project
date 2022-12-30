package RLRC.rlrc.patent;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatentRepository extends JpaRepository<Patent, Long> {

    Page<Patent> findAll(Pageable pageable);
    Page<Patent> findAllByTitleContaining(String title , Pageable pageable);


}
