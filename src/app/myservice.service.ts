import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor(private http : HttpClient) { }

  ngOnInit() : void {

  }

  loadTable(){
    this.http.get("http://localhost:3000/table").subscribe((data: any) =>
    {
      
    }
    )
  }

}
