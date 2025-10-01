import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
isAdmin : boolean =true;
cAdmin : string ="navbar navbar-expand-lg bg-dark navbar-dark border-bottom shadow-sm";
cNotAdmin : string ="navbar navbar-expand-lg bg-light navbar-light border-bottom shadow-sm"
}
