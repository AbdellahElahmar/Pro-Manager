import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) }, { path: 'tasks', loadChildren: () => import('./features/tasks/tasks.module').then(m => m.TasksModule) }, { path: 'projects', loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
