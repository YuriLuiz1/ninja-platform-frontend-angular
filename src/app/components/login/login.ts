import { Component, inject, signal } from '@angular/core';
import { ILogin } from './ModelLogin';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { ApiResponse, User } from '../../services/user';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router){}

  private userService = inject(User);


  email: string = '';
  password: string = '';
  
  messageError = signal<string>('');
  messageSucess = signal<string>('');
  sending = signal<boolean>(false);
  
  saveData(): void {

    this.messageError.set('')

    if(!this.email || !this.password){
      this.messageError.set("All inputs is required!");
      return;
    }

    const data: ILogin = {
      email: this.email,
      password: this.password
    };

    this.sending.set(true);

    this.userService.login(data).subscribe({
      next: (resposta: ApiResponse) => {
        if(resposta.success){
          this.messageSucess.set(resposta.message || `Login successfully`)
          this.email = '';
          this.password = '';
          setTimeout(() => {
            this.router.navigate(['/dojo']);
          }, 1200)
        }else {
          this.messageError.set(resposta.message);
        }

        this.sending.set(false);
      },
      error: (erro) => {
        console.error(`Error in logging user: `, erro);
        this.messageError.set(erro.message || `Error in logging User`);
        this.sending.set(false);
      }
    });
  }
}
