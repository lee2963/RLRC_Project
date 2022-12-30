package RLRC.rlrc.thesis;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class Thesis {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long no;
    private int year;
    @Lob
    private String title;
    private String authors;
    @Lob
    private String journal;
    private Double iif;
    private Double jcr;
    private String doi;

}
