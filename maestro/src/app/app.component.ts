import { Component, OnInit } from '@angular/core';
import { MaestroComponents } from './utils/maestro-components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentComponent: string;
  maestroComponents = MaestroComponents;

  ngOnInit() {
    this.currentComponent = this.maestroComponents.SETUP;
  }

  setComponent(event) {
    this.currentComponent = event;
  }
}
