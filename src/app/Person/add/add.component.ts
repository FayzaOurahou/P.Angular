import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Module/Person';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  person: Person = new Person;
  constructor(private router:Router, private service:ServiceService) { }
  

  ngOnInit():void {
    }

    Enregistrer(person:Person) {
      this.service.createPerson(person)
      .subscribe(data=>{
      alert("L'Utilisateur a été enregistré avec succès");
      this.router.navigate(["list"]);
    })
  }
}