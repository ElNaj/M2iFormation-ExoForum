package m2i.exo.forum.forum.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import m2i.exo.forum.forum.models.Message;
import m2i.exo.forum.forum.models.Sujet;
import m2i.exo.forum.forum.repositories.SujetRepository;

public class SujetServiceImpl extends AbstractGenrericCRUDService<Sujet> implements SujetService {

    private SujetRepository repository;

    public SujetServiceImpl(SujetRepository repository) {
        super(repository);
        this.repository = repository;
    }

    @Override
    public Sujet save(Sujet entity) {
        entity.setCreatedDate(LocalDate.now());
        return super.save(entity);
    }

    // public Message likeMsg(String id, Message entity) {
    //     Sujet sujet = super.findById(id);
    //     entity.likeMessage(entity.getLikes());
    //     super.save(sujet);
    //     return entity; 
    // }

    public Sujet addMessage(String id, Message message) {
        Sujet sujet = this.findById(id);
        sujet.getMessages().add(message);
        return this.save(sujet);
    }
    
}