import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Module/Person';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
person:Person=new Person;
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
this.Edit();
  }
Edit(){
let id = localStorage.getItem("id");
this.service.getPersonId(+"id")
.subscribe(data =>{
this.person=data;
}) 
}

Actualiser(person:Person){
  this.service.updatePerson(person)
  .subscribe(data =>{
    this.person=data;
    }) 
    alert("Les informations sont modifier avec succèes.");
    this.router.navigate(["list"]);
}
}
