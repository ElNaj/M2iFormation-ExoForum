package m2i.exo.forum.forum.models;

import java.time.LocalDate;

import lombok.Data;

@Data
public class Message {

    private String content;
    private int likes;
    private LocalDate createdDate;
    private LocalDate updatedDate;  
    
    public int likeMessage(int likes) {
        likes ++;
        System.out.println(likes);
        return likes;
    }
}
