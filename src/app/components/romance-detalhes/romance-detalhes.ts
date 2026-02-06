import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../services/anime-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-romance-detalhes',
  imports: [CommonModule],
  templateUrl: './romance-detalhes.html',
  styleUrl: './romance-detalhes.css',
})
export class RomanceDetalhes implements OnInit {
  private route = inject(ActivatedRoute);
  private animeService = inject(AnimeService);

  anime = signal<any>(null);

  async ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      try{
        const dados = await this.animeService.getAnimeById(id);
        this.anime.set(dados);
      }catch(error){
        console.error('Error in search anime', error);
      }
    }
  }
}
