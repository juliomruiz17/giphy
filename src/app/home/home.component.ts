import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ServiceService:ServiceService) { }

  q: string;
  searchTerm: any = []
  termo: string;

  ngOnInit(): void {


    }
  searchGifs(searchTerm: string){
    if (searchTerm !== ''){
      this.ServiceService.searchGifs(searchTerm);
    }
  }

}
