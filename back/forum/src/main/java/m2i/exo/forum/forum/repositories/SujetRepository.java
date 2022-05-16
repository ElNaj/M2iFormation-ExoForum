package m2i.exo.forum.forum.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import m2i.exo.forum.forum.models.Sujet;

public interface SujetRepository extends MongoRepository<Sujet, String>{
    
}
