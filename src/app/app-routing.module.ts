import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUsuariosComponent } from './dashboard/list-usuarios/list-usuarios.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' }, //cuando la ruta de la direccion es vacia que redireccione al componente layout
  { path: 'layout', component: LayoutComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: ListUsuariosComponent },
      { path: 'usuario/:id', component: UsuarioComponent }
    ]
  },
  { path: '**', redirectTo: 'layout', pathMatch: 'full' }// si el usuario introduce una URL incorrecta lo redireccionas al layout
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
