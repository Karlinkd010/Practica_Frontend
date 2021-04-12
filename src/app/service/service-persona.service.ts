import { HttpClient} from '@angular/common/http';
import { Injectable,Output,EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { PeriodicElement } from '../persona/persona.component';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonaService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
 

  private apiURL=environment.MyAppURL+'api/persona/';

  constructor(private http: HttpClient) { }
  
  public getListpersona(): Observable<PeriodicElement[]>{

    return this.http.get<PeriodicElement[]>(this.apiURL);
  
 }

 public crearPersona(persona: any):Observable<any>{

  console.log(persona);

  return this.http.post(this.apiURL,persona);

 }

 public editarPersona(id:number, persona: any):Observable<any>{

  console.log(persona);

  return this.http.put(this.apiURL+id,persona);

 }
 public eliminarPersona(id:number):Observable<any>{
  return this.http.delete(this.apiURL+id);

 }

 public getid(id:String):Observable<any>{
  return this.http.get(this.apiURL+id);

 }
}
