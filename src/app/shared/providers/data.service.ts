import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /**
   * Criação de item no backend
   * 
   * @param endpoint 
   * @param body 
   * @returns 
   */
  create(endpoint: string, body) {
    console.log('body', body);
    return this.http.post<any>(`${environment.apiUrl}/${endpoint}`, body);
  }

  /**
   * Leitura de itens no backend
   * 
   * @param endpoint 
   * @returns 
   */
  read(endpoint: string) {
    return this.http.get<any>(`${environment.apiUrl}/${endpoint}`)
      .pipe(map(data => data));
  }

  /**
   * Alteração de itens no backend
   * 
   * @param endpoint 
   * @param body 
   * @returns 
   */
  update(endpoint: string, body) {
    return this.http.patch<any>(`${environment.apiUrl}/${endpoint}`, body);
  }

  /**
   * Deleção de item no backend
   * 
   * @param endpoint 
   * @param id 
   * @returns 
   */
  delete(endpoint: string, id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/${endpoint}/${id}`);
  }


}
