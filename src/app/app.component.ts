import { Component } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';

  constructor(private rooter:Router){}
  
  List(){
    this.rooter.navigate(["list"]);
  }
  Nouveau(){
    this.rooter.navigate(["add"]);
  }
}
