import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  gifs = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

getgift () {
  return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=HY9cgVoQszCpzVzNhIIS0pCkSdaoV3Bx&limit=30=pt')
  .subscribe((response: any) => {
    this.gifs.next(response.data);

  });
}
searchGifs (cafe:string){
  return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=HY9cgVoQszCpzVzNhIIS0pCkSdaoV3Bx&cafe=$q&limit=24=pt')
  .subscribe((response: any) => {
    this.gifs.next(response.data);

  });
}

getGifs(){
  return this.gifs.asObservable();
}
}