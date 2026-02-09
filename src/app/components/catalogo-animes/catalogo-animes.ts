import { Component, inject, signal } from '@angular/core';
import { AnimeService } from '../../services/anime-service';
import { CommonModule, SlicePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo-animes',
  imports: [CommonModule, SlicePipe, RouterModule],
  templateUrl: './catalogo-animes.html',
  styleUrl: './catalogo-animes.css',
})
export class CatalogoAnimes {
  private animeService = inject(AnimeService);

  animeList = signal<any[]>([]);

  async ngOnInit(){
    try{
      const response = await this.animeService.getAnimes();

      if(response && response.animeSearch){
        this.animeList.set(response.animeSearch);
      }else if(Array.isArray(response)){
        this.animeList.set(response)
      }

      console.log(`All animes load with successfully`);
    }catch(error){
      console.error("Error in loading animes:", error);
    }
  }
}
