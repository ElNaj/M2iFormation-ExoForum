import { Component, OnInit } from '@angular/core';
import { Sujet } from 'src/app/models/sujet.model';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'sujet-list',
  templateUrl: './sujet-list.component.html',
  styleUrls: ['./sujet-list.component.scss']
})
export class SujetListComponent implements OnInit {

  sujets: Sujet[] = [];

  constructor(private service: SujetService) { }

  ngOnInit(): void {
    this.initSujets();
  }

  initSujets() {
    this.service.getAll().subscribe({
      next: (data) => {
        this.sujets = data;
        console.log('Init Liste Sujet : ', data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
