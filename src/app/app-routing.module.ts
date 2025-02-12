import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from './features/tasks/tasks.component';
import {UsersComponent} from './features/users/users.component';
import {ProjectsComponent} from './features/projects/projects.component';
import {LoginComponent} from './features/authentification/login/login.component';


// @ts-ignore
export const routes: Routes = [

  {
    path: '',
    redirectTo: 'authentication/login',
    pathMatch: 'full',
  },
  {
    path: 'authentication',
    component: LoginComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/authentification/authentification.module').then(
            m => m.AuthentificationModule,
          ),
      },
    ],
  },
  {
    path: 'first-component',
    title: 'Liste des utilisateurs',
    component: UsersComponent
  },
  {
    path: 'second-component',
    title: 'Liste des projets',
    component: ProjectsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
