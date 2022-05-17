import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { Sujet } from 'src/app/models/sujet.model';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-sujet-details',
  templateUrl: './sujet-details.component.html',
  styleUrls: ['./sujet-details.component.scss']
})
export class SujetDetailsComponent implements OnInit {

  sujet: Sujet = new Sujet();
  message: Message = {
    "content": "",
    likes: 0
  };
  index!: number;
  id!: string;
  likes?: number;
  likesMsg?: number;
 
  messageForm : FormGroup;
  displayStyle = "none";

  constructor(private route: ActivatedRoute, private service: SujetService, private fb : FormBuilder, private router: Router) { 
    this.id = this.route.snapshot.params['id'];
    this.messageForm = this.fb.group({
      content: "",
      likes: "",
      createdDate: "",
      updatedDate: ""
    }) 
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.initSujet();
    }, 1000)
    this.initSujet();
 
  }

  initSujet() {
    this.service.getById(this.id).subscribe((data) => {
      this.sujet = data;
      this.likes = this.sujet.likes;
    })
  }

  liker() {
    this.service.addLike(this.id, this.sujet).subscribe((data) => {
      this.sujet = data;
      if(this.likes){
        this.likes ++; 
      }
    }); 
    this.initSujet();
    console.log('Sujet Card, addLike : ', this.sujet.title, this.sujet.likes);
  }

  likerMessage(index: number) {
    this.service.update(this.id, this.sujet).subscribe((data) => {
      this.sujet = data;
      this.likes = this.sujet.likes;
      this.likesMsg = this.sujet.messages[index].likes;
      console.log(this.likesMsg + 1);
      this.sujet.messages[index].likes = this.likesMsg + 1;
    });
    this.initSujet();
  }

  ajouterMessage() {
    
    console.log('TEST ', this.messageForm.get('content')?.value);
    this.message.content = this.messageForm.get('content')?.value;
    console.log('TEST 2', this.message.content);
    this.message.createdDate = this.messageForm.get('createdDate')?.value;
    this.message.updatedDate = this.messageForm.get('updatedDate')?.value;
    this.service.addMessage(this.id, this.message).subscribe({
      next: () => {
        this.router.navigateByUrl("/sujets/" + this.id);
        this.initSujet();
      }, 
      error: (err) => {
        alert(err);
      }
    });
    this.closeModal();

  }

  openModal() {
    this.displayStyle = "block";
  }

  closeModal() {
    this.displayStyle = 'none';
  }

}
