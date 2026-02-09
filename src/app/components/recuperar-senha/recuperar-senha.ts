import { Component, inject, signal, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recuperar-senha.html',
  styleUrl: './recuperar-senha.css',
})
export class RecuperarSenha {
  email: string = '';
  code: string = '';
  newPassword: string = '';
  etapa: number = 1; // Controla qual formulário mostrar
  mensagem: string = '';
  apiUrl = 'https://ninja-platform-backend.onrender.com/api';
  carregando: boolean = false;

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    private router: Router,
  ) {}

  solicitarCodigo() {
    this.carregando = true; // Mostra loader se tiver

    this.http.post(`${this.apiUrl}`, { email: this.email }).subscribe({
      next: (res: any) => {
        this.mensagem = 'Código enviado!';
        this.etapa = 2; // <--- Esta variável muda o *ngIf no HTML
        this.carregando = false;
        this.cd.detectChanges();
      },
      error: (err) => {
        this.mensagem = 'Erro: ' + err.error.error;
        this.carregando = false;
        this.cd.detectChanges();
      },
    });
  }

  redefinirSenha() {
    this.http
      .post(`${this.apiUrl}/redefinir-senha`, {
        email: this.email,
        code: this.code,
        newPassword: this.newPassword,
      })
      .subscribe({
        next: (res: any) => {
          this.mensagem = 'Senha alterada com sucesso! Você já pode logar.';
          this.cd.detectChanges();
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error: (err) => (this.mensagem = 'Erro: ' + err.error.error),
      });
  }
}
