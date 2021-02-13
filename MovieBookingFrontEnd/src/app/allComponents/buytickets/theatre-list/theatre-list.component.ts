import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.css']
})
export class TheatreListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shows : any = [
    {theatrename : "VijayMamta" , showlist :["2:30AM", "3:00PM" ,"2:30AM", "3:00PM" , "1:30PM", "4:00PM","2:30AM", "3:00PM" ,"2:30AM", "3:00PM" , "1:30PM", "4:00PM"]},
    {theatrename : "Inox" , showlist :["3:00PM" ,"2:30AM"]},
    {theatrename : "Cinemax" , showlist :["2:30AM", "3:00PM" , "1:30PM", "4:00PM"]}
  ]

}
