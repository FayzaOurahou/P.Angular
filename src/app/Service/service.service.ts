import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Person } from '../Module/Person';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}

  url='http://localhost:8080/myproject/personnes';

  getPersonnes(){
    return this.http.get<Person[]>(this.url);
  }
  createPerson(person:Person){
    return this.http.post<Person>(this.url,person);
  }
  getPersonId(id:number){
return this.http.get<Person>(this.url + "/"+ id);
  }

  updatePerson(person:Person){
    return this.http.put<Person>(this.url +"/" +person.id, person);
  }
  deletePerson(person:Person){
return this.http.delete<Person>(this.url + "/"+ person.id);
  }
}

