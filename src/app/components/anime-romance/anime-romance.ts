import { Component, inject, signal } from '@angular/core';
import { AnimeService } from '../../services/anime-service';
import { CommonModule, SlicePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-anime-romance',
  imports: [CommonModule, SlicePipe, RouterModule],
  templateUrl: './anime-romance.html',
  styleUrl: './anime-romance.css',
})
export class AnimeRomance {
  private animeService = inject(AnimeService);

  animeList = signal<any[]>([]);

  async ngOnInit(){
    try{
      const response = await this.animeService.getRomanceAnimes();

      if(response && response.romanceSearch){
        this.animeList.set(response.romanceSearch);
      }else if(Array.isArray(response)){
        this.animeList.set(response)
      }

      console.log(`All animes load with successfully`);
    }catch(error){
      console.error("Error in loading animes:", error);
    }
  }
}
