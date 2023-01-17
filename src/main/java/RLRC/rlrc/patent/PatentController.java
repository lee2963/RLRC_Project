package RLRC.rlrc.patent;

import RLRC.rlrc.session.SessionConst;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.tika.exception.TikaException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URLDecoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class PatentController {

    private final PatentService patentService;

    @PostMapping("/admin/patent/read")
    public ResponseEntity<Void> readExcel(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Long adminId, @RequestParam("file") MultipartFile file) throws TikaException, IOException, ParseException { // 2

        if (adminId == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<Patent> dataList = new ArrayList<>();

        String extension = FilenameUtils.getExtension(file.getOriginalFilename()); // 3

        if (!extension.equals("xlsx") && !extension.equals("xls")) {
            throw new IOException("엑셀파일만 업로드 해주세요.");
        }

        Workbook workbook = null;

        if (extension.equals("xlsx")) {
            workbook = new XSSFWorkbook(file.getInputStream());
        } else if (extension.equals("xls")) {
            workbook = new HSSFWorkbook(file.getInputStream());
        }

        Sheet worksheet = workbook.getSheetAt(0);

        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) { // 1번째 행부터 끝까지
            Row row = worksheet.getRow(i);

            Patent data = new Patent();
            if (row.getCell(0).getCellType() == CellType.NUMERIC) {
                data.setNo((long) row.getCell(0).getNumericCellValue());
            } else if (row.getCell(0).getCellType() == CellType.STRING) {
                data.setNo(Long.parseLong(row.getCell(0).getStringCellValue()));
            }

            if (row.getCell(1).getCellType() == CellType.STRING) {
                data.setDate(row.getCell(1).getStringCellValue());
            } else if (row.getCell(1).getCellType() == CellType.NUMERIC) {
                data.setDate(Double.toString(row.getCell(1).getNumericCellValue()));
            }
            data.setYear(Integer.parseInt(data.getDate().substring(0, 4)));;
            data.setSubmit(row.getCell(2).getStringCellValue());
            data.setTitle(row.getCell(3).getStringCellValue());
            data.setAuthor(row.getCell(4).getStringCellValue());

            dataList.add(data);
        }

        patentService.excelSave(dataList);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/patent/search/all")
    public ResponseEntity<Page<Patent>> searchAllNotice(
            @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {

        try {
            Page<Patent> findPatent = patentService.searchAllPatent(pageable);

            return new ResponseEntity<>(findPatent, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/patent/search/title")
    public ResponseEntity<Page<Patent>> searchNoticeByTitle(@RequestParam String word,
                                                     @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        try {
            String title = URLDecoder.decode(word, "UTF-8");
            Page<Patent> findPatent = patentService.searchPatentByTitle(title, pageable);

            return new ResponseEntity<>(findPatent, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/patent/search/year")
    public ResponseEntity<Page<Patent>> searchNoticeByYear(@RequestParam int year,
                                                            @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        try {
            Page<Patent> findPatent = patentService.searchPatentByYear(year, pageable);

            return new ResponseEntity<>(findPatent, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("/admin/patent/{id}")
    public ResponseEntity<Void> deleteNotice(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Long adminId, @PathVariable("id") Long id) {
        try {

            if (adminId == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            patentService.delete(id);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (IllegalAccessError e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
