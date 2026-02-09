import { Routes } from '@angular/router';
import { Cadastro } from './components/cadastro/cadastro';
import { Login } from './components/login/login';
import { PaginaSobre } from './components/pagina-sobre/pagina-sobre';
import { PaginaPrincipal } from './components/pagina-principal/pagina-principal';
import { CatalogoAnimes } from './components/catalogo-animes/catalogo-animes';
import { AnimesDetalhes } from './components/animes-detalhes/animes-detalhes';
import { RecuperarSenha } from './components/recuperar-senha/recuperar-senha';

export const routes: Routes = [
    { path: '', component: PaginaSobre },
    { path: 'login', component: Login},
    { path: 'register', component: Cadastro },
    { path: 'dojo', component: PaginaPrincipal},
    { path: 'animes', component: CatalogoAnimes},
    { path: 'animes/:id', component: AnimesDetalhes},
    { path: 'esqueci-senha', component: RecuperarSenha}
];
