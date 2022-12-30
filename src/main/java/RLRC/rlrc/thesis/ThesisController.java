package RLRC.rlrc.thesis;

import RLRC.rlrc.session.SessionConst;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
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
import java.util.ArrayList;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class ThesisController {

    private final ThesisService thesisService;

    @PostMapping("/admin/thesis/read")
    public ResponseEntity<Void> readExcel(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Long adminId, @RequestParam("file") MultipartFile file) throws TikaException, IOException { // 2

        if (adminId == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<Thesis> dataList = new ArrayList<>();

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

            Thesis data = new Thesis();

            if (row.getCell(0).getCellType() == CellType.NUMERIC) {
                data.setNo((long) row.getCell(0).getNumericCellValue());
            } else if (row.getCell(0).getCellType() == CellType.STRING) {
                data.setNo(Long.parseLong(row.getCell(0).getStringCellValue()));
            }

            if (row.getCell(1).getCellType() == CellType.NUMERIC) {
                data.setYear((int) row.getCell(1).getNumericCellValue());
            } else if (row.getCell(1).getCellType() == CellType.STRING) {
                data.setYear(Integer.parseInt(row.getCell(1).getStringCellValue()));
            }

            data.setTitle(row.getCell(2).getStringCellValue());
            data.setAuthors(row.getCell(3).getStringCellValue());
            data.setJournal(row.getCell(4).getStringCellValue());
            if (row.getCell(5).getCellType() == CellType.NUMERIC) {
                data.setIif(row.getCell(5).getNumericCellValue());
            } else if (row.getCell(5).getCellType() == CellType.STRING) {
                data.setIif(null);
            }
            if (row.getCell(6).getCellType() == CellType.NUMERIC) {
                data.setJcr(row.getCell(6).getNumericCellValue());
            } else if (row.getCell(6).getCellType() == CellType.STRING) {
                data.setJcr(null);
            }

            if (row.getCell(7).getCellType() == CellType.NUMERIC) {
                data.setDoi(Double.toString(row.getCell(7).getNumericCellValue()));
            } else if (row.getCell(7).getCellType() == CellType.STRING) {
                data.setDoi(row.getCell(7).getStringCellValue());
            }


            dataList.add(data);
        }

        thesisService.excelSave(dataList);


        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @GetMapping("/thesis/year")
//    public ResponseEntity<List<YearCount>> countYear() {
//        List<YearCount> yearCount = thesisService.searchYearThesis();
//        return new ResponseEntity<>(yearCount, HttpStatus.OK);
//    }
    @GetMapping("/thesis/search/all")
    public ResponseEntity<Page<Thesis>> searchAllNotice(
            @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {

        try {
            Page<Thesis> findThesis = thesisService.searchAllThesis(pageable);

            return new ResponseEntity<>(findThesis, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/thesis/search/title")
    public ResponseEntity<Page<Thesis>> searchNotice(@RequestParam String word,
                                                     @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        try {
            String title = URLDecoder.decode(word, "UTF-8");
            Page<Thesis> findThesis = thesisService.searchThesis(title, pageable);

            return new ResponseEntity<>(findThesis, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/admin/thesis/{id}")
    public ResponseEntity<Void> deleteNotice(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Long adminId, @PathVariable("id") Long id) {
        try {

            if (adminId == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            thesisService.delete(id);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (IllegalAccessError e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
