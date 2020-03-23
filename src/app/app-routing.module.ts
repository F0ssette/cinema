import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Liste des components
import { ListComponent as Actor } from './Actor/list/list.component';
import { ListComponent as Movie } from './Movie/list/list.component';
import { ListComponent as Gender } from './Gender/list/list.component';
import { AddComponent as addActor } from './Actor/add/add.component';
import { AddComponent as addMovie } from './Movie/add/add.component';
import { AddComponent as addGender } from './Gender/add/add.component';
import { DashboardComponent as Dashboard } from './dashboard/dashboard.component';
import { RegisterComponent as Register } from './User/register/register.component';
import { LoginComponent as Login } from './User/login/login.component';

// Liste des imports pour la connexion/inscription des utilisateurs
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from './../environments/environment.prod';
import { BaseUrlInterceptor, API_URL } from './interceptors/base-url.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

const routes: Routes = [
  {
    path: 'actor',
    children:
      [
        { path: '', component: Actor },
        { path: 'new', component: addActor }
      ]
  },
  {
    path: 'movie',
    children:
      [
        { path: '', component: Movie },
        { path: 'new', component: addMovie }
      ]
  },
  {
    path: 'gender',
    children:
      [
        { path: '', component: Gender },
        { path: 'new', component: addGender }
      ]
  },
  { path: '', component: Dashboard },
  {
    path: 'user',
    children: [
      { path: 'register', component: Register },
      { path: 'login', component: Login }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
