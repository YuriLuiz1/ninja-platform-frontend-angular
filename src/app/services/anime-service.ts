import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private http = inject(HttpClient);
  private readonly myApiUrl = 'https://ninja-platform-backend.onrender.com/api';

  async getRomanceAnimes(): Promise<any>{
    return await firstValueFrom(this.http.get<any>(`${this.myApiUrl}/get-romance`));
  }

  async getAnimeById(id: string): Promise<any>{
    return await firstValueFrom(this.http.get<any>(`${this.myApiUrl}/anime-romance/${id}`));
  }
}
