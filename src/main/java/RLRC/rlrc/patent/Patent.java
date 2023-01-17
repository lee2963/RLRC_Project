package RLRC.rlrc.patent;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter @Setter
public class Patent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long no;
    private String date;
    private int year;
    @Lob
    private String submit;
    private String title;
    private String author;
}
