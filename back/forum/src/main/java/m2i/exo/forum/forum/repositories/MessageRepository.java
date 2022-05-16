package m2i.exo.forum.forum.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import m2i.exo.forum.forum.models.Message;

public interface MessageRepository extends MongoRepository<Message, String> {
    
}
