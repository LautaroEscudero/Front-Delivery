import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManufacturadoService {
  url = 'http://localhost:9000/manufacturado';

  constructor(private http: HttpClient) { }

  setManufacturado(data) {
    return this.http.post(`${this.url}/agregar`, data);
  }

  updateImage(data) {
    return this.http.put(`${this.url}/image`, data);
  }

  updateManufacturado(manufacturado) {
    return this.http.put(`${this.url}/actualizar`, manufacturado);
  }
  getManufacturado() {
    return this.http.get(`${this.url}/listar`);
  }

  getManufacturadoPag(page: number, size: number) {
    return this.http.get(`${this.url}/pages?page=${page}&size=${size}`);
  }
  getManufacturadoPagR(page: number, size: number,rubro:number) {
    return this.http.get(`${this.url}/pagess?page=${page}&size=${size}&rubro=${rubro}`);
  }
}
