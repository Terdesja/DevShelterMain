import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'dev-shelter-storage';
  showFiller = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  click() {
    console.log("holi")
  }

  gotoInicio() {
    this.router.navigateByUrl('inicio')
  }
  gotoBlog() {
    this.router.navigateByUrl('blog')
  }
  gotoContactos() {
    this.router.navigateByUrl('contactos')
  }
  gotoGallery() {
    this.router.navigateByUrl('gallery')
  }
}

