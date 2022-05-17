import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sujet } from 'src/app/models/sujet.model';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'sujet-card',
  templateUrl: './sujet-card.component.html',
  styleUrls: ['./sujet-card.component.scss']
})
export class SujetCardComponent implements OnInit {

  @Input() 
  sujet !: Sujet;

  sujetLiked!: Sujet;

  constructor(private service : SujetService, private router: Router) { 

  }

  ngOnInit(): void {
 
  }

  details() {
    this.router.navigateByUrl("sujets/"+this.sujet.id);
  }
}
