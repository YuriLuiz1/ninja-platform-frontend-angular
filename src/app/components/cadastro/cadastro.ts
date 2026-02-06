import { Component, inject, signal } from '@angular/core';
import { ICadastro } from './ModelCadastro';
import { FormsModule } from '@angular/forms';
import { ApiResponse, User } from '../../services/user';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule , FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  private userService = inject(User);

  user: string = '';
  email: string = '';
  password: string = '';

  messageSucess = signal<string>('');
  messageError = signal<string>('');
  sending = signal<boolean>(false);

  saveData(): void{
    this.messageSucess.set('');
    this.messageError.set('');

    if(!this.user || !this.email || !this.password){
      this.messageError.set("All inputs is required!");
      return;
    }

    const data: ICadastro = {
      user: this.user,
      email: this.email,
      password: this.password
    };

    this.sending.set(true);

    this.userService.register(data).subscribe({
      next: (resposta: ApiResponse) => { 
        if(resposta.success){
          this.messageSucess.set(resposta.message || `User cadastred with successfully`)
          this.user = '';
          this.email = '';
          this.password = '';
        } else {
          this.messageError.set(resposta.message);
        }

        this.sending.set(false);
      },
      error: (erro) => {
        console.error(`Error user cadastred: `, erro);
        this.messageError.set(erro.message || `Error in cadastred user`);
        this.sending.set(false);
      }
    });
  }
}  
