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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageFormComponent } from './pages/message-form/message-form.component';
import { SujetDetailsComponent } from './pages/sujet-details/sujet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    PageSujetsComponent,
    SujetCardComponent,
    SujetListComponent,
    SujetFormComponent,
    MessageFormComponent,
    SujetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
