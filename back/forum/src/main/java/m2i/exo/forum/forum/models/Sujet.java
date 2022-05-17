package m2i.exo.forum.forum.models;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "sujets")
public class Sujet {

    @Id
    private String id;
    private String title;
    private int likes;
    private List<Message> messages;
    private LocalDate createdDate;
    private LocalDate updatedDate;
}
