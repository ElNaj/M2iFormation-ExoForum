package m2i.exo.forum.forum.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import m2i.exo.forum.forum.models.Message;
import m2i.exo.forum.forum.repositories.MessageRepository;

public class MessageServiceImpl extends AbstractGenrericCRUDService<Message> implements MessageService{

    private MessageRepository repository;

    public MessageServiceImpl(MessageRepository repository) {
        super(repository);
        this.repository = repository;
    }


    @Override
    public Message save(Message entity) {
        entity.setCreatedDate(LocalDate.now());
        return super.save(entity);
    }

}
