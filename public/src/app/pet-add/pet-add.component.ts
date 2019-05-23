import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  newPet: object;
  addResults: object;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newPet = { petName: "", petType: "", description: "" }
    this.addResults = { content: "" }
  }

  onSubmitAdd() { 
    console.log(this.newPet)
    let observable = this._httpService.postToServer(this.newPet);
    observable.subscribe(data => {
      if (data['errors']) {
        this.addResults['content']=data['message']
      } else {
        this._router.navigate(['/pets']);
      }
    });
    this.newPet = { petName: "", petType: "", description: "" }
    this.addResults = { content: "" };
  }
}
