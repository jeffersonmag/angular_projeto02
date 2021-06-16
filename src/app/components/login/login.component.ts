import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private form: FormBuilder,
    private router: Router) { }

  storage: Storage = localStorage;

  builderForm = this.form.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  efetuarLogin(): void {
    let usuario = this.builderForm.value.usuario;
    let senha = this.builderForm.value.senha;

    if(usuario === 'admin' && senha === 'admin'){
      
      this.storage.setItem('usuario', usuario);

      this.router.navigate(['/home']);
    } else {
      this.builderForm.reset();
    }
  }

  

}
