import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medida } from '../models/medida';

@Injectable({
  providedIn: 'root'
})
export class MedidaService {

  selectedMedida: Medida;
  medidas: Medida[];
  readonly URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.selectedMedida = new Medida();
   }

  getMedidas(){
    return this.http.get(this.URL_API);
  }

  postMedida(Medida: Medida){
    return this.http.post(this.URL_API, Medida);
  }

  putMedida(medida: Medida){
    return this.http.put(this.URL_API + `/${medida._id}`, medida);
  }

  deleteMedida(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
