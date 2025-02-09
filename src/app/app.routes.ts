import { Routes } from '@angular/router';
import {UsersComponent} from './features/users/users.component';
import {ProjectsComponent} from './features/projects/projects.component';
import {TasksComponent} from './features/tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Liste des taches',
    component: TasksComponent
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
