import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit{

  data: any={};

  constructor(private apiservice:ApiService){}

  ngOnInit(): void {
    this.llenarData()
  }

  llenarData(){
      this.apiservice.getData().subscribe( data => { this.data=data;
      console.log(this.data);
      })

  }

}
