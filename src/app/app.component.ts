import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http : HttpClient ){}

  headArray = ["name" , "nooftimesduplication"]
  gridArray: any[] = [];
  
  ngOnInit(): void{
     this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:3000/name").subscribe((data: any) =>
      {
        this.gridArray = data;
      }
    );
  }




}
