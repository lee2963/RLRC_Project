package RLRC.rlrc.news;

import RLRC.rlrc.notice.Notice;
import RLRC.rlrc.notice.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class NewsService {

    private final NewsRepository newsRepository;

    public void save(News news) {

        newsRepository.save(news);
    }

    public void delete(Long id) {
        Optional<News> findNews = newsRepository.findById(id);

        News getNews = findNews.orElseThrow(IllegalAccessError::new);
        newsRepository.delete(getNews);
    }

    public News findNews(Long id) {
        Optional<News> findNews = newsRepository.findById(id);

        return findNews.orElseThrow(IllegalAccessError::new);
    }

    public Page<News> searchAllNews( Pageable pageable) throws Exception {

        Page<News> findNews = newsRepository.findAll(pageable);

        if (findNews.isEmpty()) {
            throw new Exception("조회한 결과가 없습니다.");
        }

        return findNews;
    }

    public Page<News> searchNews(String word, Pageable pageable) throws Exception {

        Page<News> findNews = newsRepository.findAllByTitleContaining(word, pageable);

        if (findNews.isEmpty()) {
            throw new Exception("조회한 결과가 없습니다.");
        }

        return findNews;
    }
}
