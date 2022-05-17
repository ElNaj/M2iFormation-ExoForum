import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-sujet-form',
  templateUrl: './sujet-form.component.html',
  styleUrls: ['./sujet-form.component.scss']
})
export class SujetFormComponent implements OnInit {

  sujetForm : FormGroup;

  constructor(
    private fb : FormBuilder, 
    private service : SujetService,
    private router : Router
  ) { 
    this.sujetForm = this.fb.group({
      title: "",
      likes: "",
      messages: this.fb.array([]),
      createdDate: "",
      updatedDate: ""
    }) 
  }

  ngOnInit(): void {
  }

  get messages() {
    return this.sujetForm.get('messages') as FormArray;
  }

  ajouterSujet() {
    this.service.create(this.sujetForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl("/sujets");
      }, 
      error: (err) => {
        alert(err);
      }
    });
  }
}
