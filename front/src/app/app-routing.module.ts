import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SujetListComponent } from './components/sujets/sujet-list/sujet-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SujetDetailsComponent } from './pages/sujet-details/sujet-details.component';
import { SujetFormComponent } from './pages/sujet-form/sujet-form.component';

const routes: Routes = [
  { path : "home", component : HomeComponent},
  { path : "sujets", component : SujetListComponent},
  { path : "sujets/:id", component : SujetDetailsComponent},
  { path : "sujet-form", component : SujetFormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : "**", component :  NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
