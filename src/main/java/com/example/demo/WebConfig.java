package com.example.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Настроим CORS для всех эндпоинтов
        registry.addMapping("/api/**")  // Разрешаем CORS для всех эндпоинтов, начинающихся с /api/
                .allowedOrigins("http://localhost:3000")  // Указываем разрешенные источники (например, фронтенд на порту 3000)
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Разрешенные методы
                .allowedHeaders("*")  // Разрешаем все заголовки
                .allowCredentials(true);  // Разрешаем отправку cookies (если нужно)
    }
}
