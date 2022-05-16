import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  url?: string;

  constructor(private route : ActivatedRoute,
    private router : Router) { 
    
    this.url = this.route.snapshot.url.toString(); 
      setTimeout(() => {
        this.router.navigateByUrl("/home");
      }, 5000)
    }
  ngOnInit(): void {
  }

}
