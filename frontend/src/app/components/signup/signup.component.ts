import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../types/User';
import { NgClass, NgIf } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { signupRequest } from '../../state/user.action';
import { selectErrorMessage } from '../../state/user.selector';
import { take } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {

  errorMessage: any = "";
  form !: FormGroup;

  constructor(private formBuilder : FormBuilder, private store: Store){}

  ngOnInit(): void {
 
    this.form = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z]{3,15}$")]),
      email : new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,4}$")]),
      password : new FormControl(null, [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    })
  }

  onFormSubmit(){
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });
    if(this.form.valid){
      const user : User ={
        name : this.form.value.name,
        email : this.form.value.email,
        password : this.form.value.password,
      }

      this.store.dispatch(signupRequest({user}));
      this.store.pipe(select(selectErrorMessage)).pipe(take(2)).subscribe((error) => this.errorMessage = error);
    }
  }
}
