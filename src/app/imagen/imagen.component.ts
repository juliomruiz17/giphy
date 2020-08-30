import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {
  git: any=[]
  gifs: any=[]
  subscription: Subscription;


  constructor(private ServiceService:ServiceService) { }
  ngOnInit(): void {
    this.ServiceService.getgift();
    this.subscription = this.ServiceService.getGifs()
    .subscribe((response: any) =>{
      this.gifs = response;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }
}

