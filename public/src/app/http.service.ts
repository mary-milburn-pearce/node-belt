import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  constructor(private _http: HttpClient){
  }
  getPets(){
    return this._http.get('/pets-api');
  }
  getPet(id){
    let url = '/pets-api/' + id;
    return this._http.get(url);
  }
  postToServer(newPet){
    return this._http.post('/pets-api', newPet);  
  }
  putToServer(id, editPet){
    let url = '/pets-api/' + id;
    console.log(`Putting to url: ${url}`, editPet);
    return this._http.put(url, editPet);
  }
  deleteFromServer(id){
    return this._http.delete('/pets-api/' + id);  
  }
}
  