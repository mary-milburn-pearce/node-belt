import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pets: [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPetsFromService();
  }

  getPetsFromService() {
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.pets = data['data'];
    })
  }

}
