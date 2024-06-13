import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: '';
  imgUrl = 'https://picsum.photos/536/354';
  loading = true;
  user: any;

  constructor(private routerActive: ActivatedRoute, private usuarioService: UsuarioService) {
    this.id = this.routerActive.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      this.user = data;
      this.loading = false;
    }, error => {
      console.error(error);
      this.loading = false;

    });
  }

}
