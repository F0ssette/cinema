import { ListComponent as Actor} from './Actor/list/list.component';
import { ListComponent as Movie} from './Movie/list/list.component';
import { ListComponent as Gender} from './Gender/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'actor', component: Actor},
  {path:'movie', component: Movie},
  {path:'gender', component: Gender},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
