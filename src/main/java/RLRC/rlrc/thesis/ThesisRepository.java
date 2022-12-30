package RLRC.rlrc.thesis;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ThesisRepository extends JpaRepository<Thesis, Long> {

    Page<Thesis> findAll(Pageable pageable);
    Page<Thesis> findAllByTitleContaining(String title , Pageable pageable);

//    @Query(value =
//            "SELECT "+
//                    " new RLRC.rlrc.thesis.YearCount(t.year, count(t.year))" +
//                    "FROM Thesis t " +
//                    "GROUP BY t.year"
//    )
//    List<YearCount> findGroupByYearWithJPQL();

}
