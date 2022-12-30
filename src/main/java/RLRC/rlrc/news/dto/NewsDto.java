package RLRC.rlrc.news.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter @Setter
public class NewsDto {
    private String title;
    private String content;
    private List<MultipartFile> attachFiles;
    private MultipartFile imageFile;
}
