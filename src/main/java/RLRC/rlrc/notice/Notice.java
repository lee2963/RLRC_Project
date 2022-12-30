package RLRC.rlrc.notice;

import RLRC.rlrc.file.UploadFile;
import RLRC.rlrc.notice.dto.NoticeDto;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter @Setter
public class Notice {

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

    public Notice(NoticeDto noticeDto) {
        this.title = noticeDto.getTitle();
        this.content = noticeDto.getContent();
        this.date = LocalDate.now();
    }

    public Notice() {

    }
}
