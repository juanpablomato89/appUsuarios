import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-card-usuarios',
  templateUrl: './card-usuarios.component.html',
  styleUrls: ['./card-usuarios.component.css']
})
export class CardUsuariosComponent implements OnInit {

  imgUrl = 'https://picsum.photos/536/354';
  @Input() usuario?: Usuario;
  constructor() { }

  ngOnInit(): void {
  }

}
