import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sujet } from '../models/sujet.model';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private http: HttpClient) { }

    /**
   * Méthode Read du CRUD, méthode  pour récupérer une liste d'objet Sujet 
   * @returns liste d'objet Sujet depuis la bdd via le back
   */
     getAll(): Observable<Sujet[]> {
      return this.http.get<Sujet[]>(`${environment.apiSujetUrl}`);
    }

    getById(id ?: string): Observable<Sujet> {
      return this.http.get<Sujet>(`${environment.apiSujetUrl}/${id}`);
    }
  
    /**
     * Méthode Create du CRUD, méthode pour créer un sujet et l'ajouter en base
     * @param sujet 
     * @returns le cadeau créé
     */
    create(sujet: Sujet): Observable<Sujet> {
      return this.http.post<Sujet>(`${environment.apiSujetUrl}`, sujet);
    }

    update(id: string, sujet: Sujet): Observable<Sujet> {
      return this.http.post<Sujet>(`${environment.apiSujetUrl}/update/${id}`, sujet);
    }
  
    /**
     * Méthode Delete du CRUD, méthode pour supprimer un cadeau de 
     * @param id 
     * Id de l'objet Cadeau à supprimer de la Bdd
     * @returns supprime le cadeau identifié
     */
    delete(id: string): Observable<Sujet> {
      return this.http.delete<Sujet>(`${environment.apiSujetUrl}/delete/${id}`);
    }

    public addMessage(id : string, message: Message) {
      return this.http.post<Message>(`${environment.apiSujetUrl}/${id}/messages`, message);
    }

    public addLike(id: string, sujet: Sujet): Observable<Sujet>{
      console.log('Service ', id);
      return this.http.post<Sujet>(`${environment.apiSujetUrl}/like/${id}`, sujet);
    }

    // public likeMessage(id: string, message: Message): Observable<Sujet>{
    //   return this.http.post<Sujet>(`${environment.apiSujetUrl}/like-message/${id}`, message);
    // }

}
