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
import m2i.exo.forum.forum.services.MessageService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("messages")
public class MessagesController {


    private MessageService messageService;

    public MessagesController(MessageService messageService){
        this.messageService = messageService;
    }

    /**
     * Route GET retournant l'ensemble des messages
     * @return Liste de Messages
     * @author Najim
     */
    @GetMapping()
    public List<Message> findAll() {
        return this.messageService.findAll();
    }

    /**
     * Route GET retournant un message en fonction de son id
     * @return Objet Message
     * @param id
     * @author Najim
     */
    @GetMapping("/{id}")
    public Message findById(@PathVariable String id) {
        return this.messageService.findById(id);
    }

    /**
     * Route POST ajoutant un message/ enregistrer le message dans la bdd.
     * @param sujetDto 
     * Prend un objet MessageDTO en paramètre
     * @return Sujet enregistré
     * @author Najim
     */
    @PostMapping()
    public Message create(@RequestBody Message message) {
        return this.messageService.save(message);
    }

    

    /**
     * Route POST pour liker un message, incrémente la propriété likes en bdd.
     * @param messageDto 
     * Prend un objet MessageDTO en paramètre
     * @return MessageDTO enregistré avec nouveau like
     * @author Najim
     */
    // A Retravailler, non fonctionnel pour le moment
    @PostMapping("/like/{id}")
    public Message like(@PathVariable("id") String id) {
        Message message = this.messageService.findById(id);
        // message.setContent(message.getContent());
        // message.setCreatedDate(message.getCreatedDate());
        // message.setUpdatedDate(message.getUpdatedDate());
        message.setLikes(message.getLikes()+1);
        return this.messageService. save(message);
    }

    /**
     * Route DELETE supprimant un message par son id
     * @param id 
     * Prend un id en paramètre 
     * @author Najim
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteById(@PathVariable("id") String id) {
        this.messageService.deleteById(id);
    }
    
}
