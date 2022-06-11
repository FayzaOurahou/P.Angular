import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Person } from 'src/app/Module/Person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personnes!: Person[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonnes()
    .subscribe(data=>{
      this.personnes=data;
    });
  }

  Edit(person:Person): void{
    localStorage.setItem("id",person.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(person:Person){
    this.service.deletePerson(person)
    .subscribe(data =>{
      this.personnes=this.personnes.filter(p=>p!==person);
      alert("Utilisateur a été supprimé avec succès");
    });

  }
}
