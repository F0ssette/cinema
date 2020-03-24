import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent as MovieList } from './Movie/list/list.component';
import { AddComponent as MovieAdd } from './Movie/add/add.component';
import { EditComponent as MovieEdit } from './Movie/edit/edit.component';
import { ListComponent as ActorList } from './Actor/list/list.component';
import { AddComponent as ActorAdd } from './Actor/add/add.component';
import { EditComponent as ActorEdit } from './Actor/edit/edit.component';
import { ListComponent as GenderList } from './Gender/list/list.component';
import { AddComponent as GenderAdd } from './Gender/add/add.component';
import { EditComponent as GenderEdit } from './Gender/edit/edit.component';
import { DashboardComponent as Dashboard } from './dashboard/dashboard.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { ActorchartComponent } from './Chart/actorchart/actorchart.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieList,
    MovieAdd,
    MovieEdit,
    ActorList,
    ActorAdd,
    ActorEdit,
    GenderList,
    GenderAdd,
    GenderEdit,
    Dashboard,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ActorchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
