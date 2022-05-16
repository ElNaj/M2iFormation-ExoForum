package m2i.exo.forum.forum.models;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "messages")
public class Message {

    @Id
    private String id;
    private String content;
    private int likes;
    private LocalDate createdDate;
    private LocalDate updatedDate;   
}
