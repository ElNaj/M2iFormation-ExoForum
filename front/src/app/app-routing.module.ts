import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SujetListComponent } from './components/sujets/sujet-list/sujet-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MessageFormComponent } from './pages/message-form/message-form.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SujetFormComponent } from './pages/sujet-form/sujet-form.component';

const routes: Routes = [
  { path : "home", component : HomeComponent},
  { path : "sujets", component : SujetListComponent},
  { path : "messages", component : MessagesComponent},
  { path : "sujet-form", component : SujetFormComponent},
  { path : "message-form", component : MessageFormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : "**", component :  NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
