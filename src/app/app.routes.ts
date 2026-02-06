import { Routes } from '@angular/router';
import { Cadastro } from './components/cadastro/cadastro';
import { Login } from './components/login/login';
import { PaginaSobre } from './components/pagina-sobre/pagina-sobre';
import { PaginaPrincipal } from './components/pagina-principal/pagina-principal';
import { AnimeRomance } from './components/anime-romance/anime-romance';
import { RomanceDetalhes } from './components/romance-detalhes/romance-detalhes';

export const routes: Routes = [
    { path: '/', component: PaginaSobre },
    { path: 'login', component: Login},
    { path: 'register', component: Cadastro },
    { path: 'dojo', component: PaginaPrincipal},
    { path: 'anime-romance', component: AnimeRomance},
    { path: 'anime-romance/:id', component: RomanceDetalhes}
];
