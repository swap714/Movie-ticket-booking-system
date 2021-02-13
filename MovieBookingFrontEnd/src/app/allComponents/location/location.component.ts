import { City } from './../../classesEntity/City';
import { LocationService } from './../../Shared/location.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private _city : LocationService) {
    console.log("Location Constructor");
  }

  cities:any;

  isShowCity=false;
  showCities()
  {
    this.isShowCity=true;
  }

  selectedCity(mycity)
  {
    alert("You selected " + mycity.cityname + " city.")


  }

  ngOnInit(): void {

    this.getAllCities();

  }


  getAllCities()
  {
    this._city.getCity()
    .subscribe(
        (data)=>{
          let jsoncities = JSON.stringify(data);
          this.cities = JSON.parse(jsoncities);
        },
        (error)=>{console.log("error : "+ error + " Cant get the cities...");}
      );
    }
















  heroes = [
    {city1: 'aaa', city2:'Superman'},
    {city1: 'bbb', city2:'Batman'},
    {city1: 'ccc', city2:'BatGirl'},
    {city1: 'ddd', city2:'Robin'},
    {city1: 'eee', city2:'Flash'}
];

  // tableData = [
  //   {id1 : 1, id2 :2, id3 :3} ,
  //   {id1 : 1, id2 :2, id3 :3} ,
  //   {id1 : 1, id2 :2, id3 :3}];

}
