package com.frac.frac_backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Serve uploaded files from the uploads directory
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/");

        // Also serve specific vehicle images
        registry.addResourceHandler("/vehicles/**")
                .addResourceLocations("file:uploads/vehicles/");

        // Serve from absolute path (for Windows)
        registry.addResourceHandler("/static-uploads/**")
                .addResourceLocations("file:C:/Users/Kavindu/Desktop/Fair_Rent_A_Car_Club/frac_backend/frac_backend/uploads/");
    }
}