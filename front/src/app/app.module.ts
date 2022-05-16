import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PageSujetsComponent } from './pages/page-sujets/page-sujets.component';
import { SujetFormComponent } from './pages/sujet-form/sujet-form.component';
import { SujetCardComponent } from './components/sujets/sujet-card/sujet-card.component';
import { SujetListComponent } from './components/sujets/sujet-list/sujet-list.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MessageFormComponent } from './pages/message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    PageSujetsComponent,
    SujetFormComponent,
    SujetCardComponent,
    SujetListComponent,
    MessagesComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
