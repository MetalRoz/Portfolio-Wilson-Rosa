import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Interfaz } from '../models/interfaz';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetfilyFormService {

  constructor(private httpClient: HttpClient) { }

  submitForm(interfaz: Interfaz): Observable<string> {
    const entry = new HttpParams({
      fromObject: {
        "form-name": "formulario",
        ...interfaz,

      },
    });
    return this.submitEntry(entry)
  }

  public submitEntry(entry: HttpParams): Observable<string> {
    return this.httpClient.post(
      '/',
      entry.toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text',
      }
    ).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = '';

    if (err.error instanceof ErrorEvent) {
      errMsg = `A client-side error occurred: ${err.error.message}`;
    } else {
      errMsg = `A server-side error occurred. Code: ${err.status}. Message: ${err.message}`;
    }

    return throwError(errMsg);
  }
}
