import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-dashboard';
  public url1: string = "";
  constructor(public route: Router){}
  ngOnInit(){
    this.url1 = this.route.url;
  }
}
