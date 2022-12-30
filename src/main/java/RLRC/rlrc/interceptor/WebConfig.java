package RLRC.rlrc.interceptor;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginCheckInterceptor())
                .order(1)
                .addPathPatterns("/admin/**");
    }


    @Override
    public void addViewControllers(ViewControllerRegistry registry){
        registry.addViewController("/{spring:\\w+}")
                .setViewName("forward:/");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:8080", "http://http://52.78.153.224/:8080",
                        "http://localhost:3000",
                        "https://localhost:3000",
                        "https://127.0.0.1:3000"
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE")
        ;

    }
}
