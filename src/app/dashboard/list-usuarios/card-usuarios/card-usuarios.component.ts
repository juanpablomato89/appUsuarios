import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuarios',
  templateUrl: './card-usuarios.component.html',
  styleUrls: ['./card-usuarios.component.css']
})
export class CardUsuariosComponent implements OnInit {

  imgUrl = 'https://picsum.photos/536/354';
  constructor() { }

  ngOnInit(): void {
  }

}
