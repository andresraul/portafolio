import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbar = [
    {
      name: 'Inicio',
      route: '/home'
    },
    {
      name: 'Audiovisuales',
      route: '/audiovisuales'
    },
    {
      name: 'Programación',
      route: '/programacion'
    },
    {
      name: 'Sobre mí',
      route: '/sobre-mi'
    },
    {
      name: 'Contacto',
      route: '/contacto'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
