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
      name: 'Programación',
      route: '/programacion'
    },
    {
      name: 'Audiovisuales',
      route: '/audiovisuales'
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

    const navbarCollapse = () => {
      if ($('#mainNav').offset().top > 100) {
        $('#mainNav').addClass('navbar-scrolled');
      } else {
        $('#mainNav').removeClass('navbar-scrolled');
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

  }

}
