import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  editPet: object = {petName: "", petType: "", description: ""};
  editResults: object;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.editResults = { content: "" }
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      let observable = this._httpService.getPet(params.id);
      observable.subscribe(data => {
        console.log("Returned:", data);
        if (data['errors']) {
          this.editResults['content']=data['message']
        } else {
          this.editPet = data;
          console.log('editPet:', this.editPet)
        }
      });
    })
  }

  onSubmitEdit() {
    let id = this.editPet['_id'];
    console.log("onSubmit: ", "Id:", id, this.editPet);
    let observable = this._httpService.putToServer(id, this.editPet);
    observable.subscribe(data => {
      console.log("Returned:", data);
      if (data != null && data != undefined) { 
        if (data['errors']) {
          this.editResults['content']=data['message'];
        } else {
          this._router.navigate(['/pets/' + id]);
        }
      } else {
        this._router.navigate(['/pets/' + id]);
      }
    });
  }
}
