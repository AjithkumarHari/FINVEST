import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { User } from '../../types/User';
import { loginRequest } from '../../state/user.action';
import { selectErrorMessage } from '../../state/user.selector';
import { take } from 'rxjs';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    ReactiveFormsModule,
    NgClass,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  errorMessage: any = "";
  form !: FormGroup;

  constructor(private formBuilder : FormBuilder, private store: Store){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email : new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,4}$")]),
      password : new FormControl(null, [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    })
  }

  onFormSubmit(){
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });
    if(this.form.valid){
      const credentials: { email: string, password: string } ={
        email : this.form.value.email,
        password : this.form.value.password,
      }

      console.log(credentials,"haai");
      

      this.store.dispatch(loginRequest({credentials}));
      this.store.pipe(select(selectErrorMessage)).pipe(take(2)).subscribe((error) => this.errorMessage = error);
    }
  }

}
