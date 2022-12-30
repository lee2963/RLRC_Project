package RLRC.rlrc.news;

import RLRC.rlrc.file.UploadFile;
import RLRC.rlrc.news.dto.NewsDto;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter @Setter
public class News {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    private List<UploadFile> attachFile;

    @OneToOne
    private UploadFile imageFile;

    @Lob
    private String title;
    @Lob
    private String content;
    private LocalDate date;

    public News(NewsDto newsDto) {
        this.title = newsDto.getTitle();
        this.content = newsDto.getContent();
        this.date = LocalDate.now();
    }

    public News() {

    }
}
