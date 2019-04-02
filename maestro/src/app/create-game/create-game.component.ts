import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from '../model/actor';
import { MaestroComponents } from '../utils/maestro-components';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  newActor: string;
  actorList: Actor[] = [];
  @Output() changeComponent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addActor() {
    const actor = new Actor();
    actor.name = this.newActor;
    this.actorList.push(actor);
  }

  onPressEnter(event) {
    if (event.key === 'Enter') {
      this.addActor();
      this.newActor = '';
    }
  }

  deleteActor(name: string) {
    for (let i = 0; i < this.actorList.length; i++) {
      if (this.actorList[i].name === name) {
        this.actorList.splice(i, 1);
      }
    }
  }

  onPressStart() {
    localStorage.setItem('actorList', JSON.stringify(this.actorList));
    this.changeComponent.emit(MaestroComponents.GAME);
  }

}
