package m2i.exo.forum.forum.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import m2i.exo.forum.forum.repositories.MessageRepository;
import m2i.exo.forum.forum.services.MessageService;
import m2i.exo.forum.forum.services.MessageServiceImpl;

@Configuration
public class MessageConfiguration {

    @Bean
    public MessageService messageService(MessageRepository messageRepository) {
        return new MessageServiceImpl(messageRepository);
    }
    
}
