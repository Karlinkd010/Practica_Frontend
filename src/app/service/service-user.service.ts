import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userDTO } from '../registro-user/user';



@Injectable({
  providedIn: 'root'
})

export class ServiceUserService {
  private apiURL=environment.MyAppURL+'api/Usuario/';

  constructor(private http: HttpClient) {  }

  public crearUser(user: any):Observable<any>{

   
    console.log(user);
    return this.http.post(this.apiURL,user);
  }
}




