import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

export interface ApiResponse{
  success: boolean;
  message: string;
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class User {
  readonly #http = inject(HttpClient);
  readonly #apiUrl = 'https://ninja-platform-backend.onrender.com/api';

  register(dados: any): Observable<ApiResponse> {
    return this.#http.post<ApiResponse>(`${this.#apiUrl}/register`, dados).pipe(
      tap((response) => console.log('Register successfully')),
      catchError(this.#handleError),
    );
  }

  login(dados: any): Observable<ApiResponse> {
    return this.#http.post<ApiResponse>(`${this.#apiUrl}/login`, dados).pipe(
      tap((response) => console.log('Login successfully')),
      catchError(this.#handleError),
    );
  }

  #handleError = (error: HttpErrorResponse): Observable<never> => {
    const errorMessage = this.#getErrorMessage(error);

    console.error('Erro na requisição:', {
      status: error.status,
      url: error.url,
      message: error.message,
      error: error.error,
    });

    return throwError(() => ({
      success: false,
      message: errorMessage,
    }));
  };

  #getErrorMessage(error: HttpErrorResponse): string {
    if (error.status === 0) {
      return 'No possible connection with server, please verify your connection';
    }

    if (error.error?.message) {
      return error.error.message;
    }

    const messages: Record<number, string> = {
      400: 'Data Invalid',
      401: 'Credentials Invalid',
      403: 'Acess denied',
      404: 'Route not found',
      409: 'Please verify Email, is already registered',
      422: 'Datas is not processed',
      500: 'Error internal in server',
      502: 'Server off',
      503: 'Server temporarily off',
    };

    return messages[error.status] || `Error in process request (${error.status})`;
  }
} 
