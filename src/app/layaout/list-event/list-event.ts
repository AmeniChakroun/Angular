import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Events } from '../../models/events';

@Component({
  selector: 'app-list-event',
  standalone: false,
  templateUrl: './list-event.html',
  styleUrl: './list-event.css'
})
export class ListEvent {
  title:string="Liste des événements !"
  recherche:string="Rechercher un événement"
  Like(ev : Events){
    ev.likes ++
  }
  pror1:string ="Bonjour"
  prongmodule:string="Rechercher un événement"
  list : Events[]=[
    {id:1,title:"Angular Summit" ,date:new Date("12-02-2025"), description :"description of first event",prix:50.000,place:25,likes:0,imagePath:"/images/feedback.png"},
    {id:2,title:"Web Dev Days" ,date:new Date("12-02-2025"), description :"description of second event",prix:30.000,place:0,likes:0,imagePath:"/images/event.png"}

  ]
}
