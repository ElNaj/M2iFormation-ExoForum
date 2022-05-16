package m2i.exo.forum.forum.services;

import java.time.LocalDate;
import java.util.List;

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
    
}