package RLRC.rlrc.notice.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@Getter @Setter
public class NoticeDto {
    private String title;
    private String content;
    private List<MultipartFile> attachFiles;
    private MultipartFile imageFile;
}
