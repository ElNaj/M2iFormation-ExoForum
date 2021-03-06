package m2i.exo.forum.forum.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import m2i.exo.forum.forum.models.Message;
import m2i.exo.forum.forum.models.Sujet;
import m2i.exo.forum.forum.services.SujetService;
import m2i.exo.forum.forum.services.SujetServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("sujets")
public class SujetsController {

    private SujetService sujetService;

    public SujetsController(SujetService sujetService) {
        this.sujetService = sujetService;
    }

    /**
     * Route GET retournant l'ensemble des sujets
     * @return Liste de Sujets
     * @author Najim
     */
    @GetMapping()
    public List<Sujet> findAll() {
        return this.sujetService.findAll();
    }

    @GetMapping("/{id}")
    public Sujet findById(@PathVariable("id") String id) {
        return this.sujetService.findById(id);
    }

    /**
     * Route POST ajoutant un sujet/ enregistrer le sujet dans la bdd.
     * @param sujetDto 
     * Prend un objet SujetDTO en paramètre
     * @return Sujet enregistré
     * @author Najim
     */
    @PostMapping()
    public Sujet create(@RequestBody Sujet sujet) {

        if (sujet.getMessages().isEmpty()){
            // List<Message> messages = new ArrayList<>();
            
            sujet.setMessages(sujet.getMessages());
            return this.sujetService.save(sujet);
        }else {
            return this.sujetService.save(sujet);
        }
    }

     /**
     * Route POST pour liker un sujet, incrémente la propriété likes en bdd.
     * @param id 
     * Prend un objet SujetDTO en paramètre
     * @return SujetDTO enregistré avec nouveau like
     * @author Najim
     */
    @PostMapping("/like/{id}")
    public Sujet like(@PathVariable("id") String id, @RequestBody Sujet sujet) {
        sujet = this.sujetService.findById(id);
        sujet.setLikes(sujet.getLikes() + 1);
        return this.sujetService.save(sujet);
    }

    // @PostMapping("/like-message/{id}")
    // public Sujet likerMessage(@PathVariable("id") String id,  @RequestBody Message message) {
    //     Sujet sujet = this.findById(id);
    //     // List<Message> messages = sujet.getMessages();
    //     // SI boucle on modifie les boucles de tous les messages...
    //     // ((SujetServiceImpl) this.sujetService).likeMsg(id, message);
    //     message.likeMessage(message.getLikes());
    //     System.out.println("Controller : " + message.getLikes());
    //     this.sujetService.save(sujet);
    //     return sujet;
    // }
    @PostMapping("/update/{id}")
    public Sujet update(@PathVariable("id") String id) {
        Sujet sujet = this.findById(id);
        this.sujetService.save(sujet);
        return sujet;
    }

    @PostMapping("/{id}/messages")
    public Sujet addMessage(@PathVariable String id, @RequestBody Message message) {
        return ((SujetServiceImpl) this.sujetService).addMessage(id, message);
    }

    /**
     * Route DELETE supprimant un sujet par son id
     * @param id 
     * Prend un id en paramètre 
     * @author Najim
     */
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteById(@PathVariable("id") String id) {
        this.sujetService.deleteById(id);
    }
    
}
