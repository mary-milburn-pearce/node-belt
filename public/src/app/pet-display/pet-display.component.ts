import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent implements OnInit {

  pet: object = {petName: "", petType: "", description: "", skillOne: "", 
      skillTwo: "", skillThree: "", likes: 0};
  results: object = {content: ""};
  liked: boolean = false;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.results = { content: "" }
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      let observable = this._httpService.getPet(params.id);
      observable.subscribe(data => {
        console.log("Returned:", data);
        if (data['errors']) {
          this.results['content']=data['message']
        } else {
          this.pet = data;
          console.log('Pet:', this.pet)
        }
      });
    })

    }

  delPet(pet) {
    let observable = this._httpService.deleteFromServer(pet._id);
    observable.subscribe(data => {
      console.log("Delete Returned:", data);
      if (data['errors']) {
        this.results['content']=data['message']
      } else {
        this._router.navigate(['/pets']);
      }
    });
  }

  addLike(pet) {
    pet.likes += 1;
    let observable = this._httpService.putToServer(pet._id, pet);
    observable.subscribe(data => {
      console.log("Returned:", data);
      if (data != null && data != undefined) { 
        if (data['errors']) {
          this.results['content']=data['message'];
        }
        else
        {
          this.liked = true;
        }
      } 
    });
  }
}