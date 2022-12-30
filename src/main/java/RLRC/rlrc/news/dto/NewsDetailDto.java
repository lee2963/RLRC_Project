package RLRC.rlrc.news.dto;

import RLRC.rlrc.file.UploadFile;
import RLRC.rlrc.news.News;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Getter @Setter
public class NewsDetailDto {

    private Long id;
    private List<UploadFile> attachFile;
    private String filePath;
    private String title;
    private String content;
    private LocalDate date;

    public NewsDetailDto(News news, String filePath) {
        this.id = news.getId();
        this.attachFile = news.getAttachFile();
        this.title = news.getTitle();
        this.content = news.getContent();
        this.date = news.getDate();
        this.filePath = filePath;
    }
}
