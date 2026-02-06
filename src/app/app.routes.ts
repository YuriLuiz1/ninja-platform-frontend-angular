import { Routes } from '@angular/router';
import { Cadastro } from './components/cadastro/cadastro';
import { Login } from './components/login/login';
import { PaginaSobre } from './components/pagina-sobre/pagina-sobre';
import { PaginaPrincipal } from './components/pagina-principal/pagina-principal';
import { CatalogoAnimes } from './components/catalogo-animes/catalogo-animes';
import { AnimesDetalhes } from './components/animes-detalhes/animes-detalhes';

export const routes: Routes = [
    { path: '', component: PaginaSobre },
    { path: 'login', component: Login},
    { path: 'register', component: Cadastro },
    { path: 'dojo', component: PaginaPrincipal},
    { path: 'anime-romance', component: CatalogoAnimes},
    { path: 'anime-romance/:id', component: AnimesDetalhes}
];
