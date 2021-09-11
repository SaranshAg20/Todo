import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  constructor(private gs:GlobalService) { }
  users:any;

  ngOnInit(): void {
    this.gs.getUserData().subscribe((res)=>{
      this.users = res;
    })
  }

}
