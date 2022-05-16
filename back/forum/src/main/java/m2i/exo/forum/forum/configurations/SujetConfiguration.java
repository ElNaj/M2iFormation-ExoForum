package m2i.exo.forum.forum.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import m2i.exo.forum.forum.repositories.SujetRepository;
import m2i.exo.forum.forum.services.SujetService;
import m2i.exo.forum.forum.services.SujetServiceImpl;

@Configuration
public class SujetConfiguration {

    @Bean
    public SujetService sujetService(SujetRepository sujetRepository) {
        return new SujetServiceImpl(sujetRepository);
    }
    
}
