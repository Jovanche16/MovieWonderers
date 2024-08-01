import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  authForm!: FormGroup;
  isLogin: boolean = true;
  showSpinner: boolean = false;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder,
     private authService: AuthService,
     private router: Router
     ) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      // Additional fields for sign-up
      email: ['', Validators.required, Validators.email],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  submitForm() {
    this.showSpinner = true; // Show spinner
    if (this.isLogin) {
      // Login form submission
      const logInData = {
        userName: this.authForm.value.username,
        password: this.authForm.value.password,
      };
      // Call login service method
      this.authService.login(logInData).subscribe(
        // Handle login response
        response => {
          debugger
          console.log('Login success:', response);
          localStorage.setItem('token', JSON.stringify(response)); // Store token in local storage
          this.router.navigate(['/home']);
          this.showSpinner = false; // Hide spinner after login
        },
        error => {
          console.error('Login error:', error);
          this.showSpinner = false;
        }
      );
    } else {
      // Sign up form submission
      const signUpData = {
        firstName: this.authForm.value.firstName,
        lastName: this.authForm.value.lastName,
        dateOfBirth: this.authForm.value.dateOfBirth,
        gender: this.authForm.value.gender,
        email: this.authForm.value.email,
        userName: this.authForm.value.username,
        password: this.authForm.value.password,
      };
      // Call sign up service method
      this.authService.signUp(signUpData).subscribe(
        // Handle sign up response
        response => {
          console.log('Sign up success:', response);

          this.router.navigate(['/login']);
        },
        error => {
          console.error('Sign up error:', error);
        }
      );
    }
  }

  toggleLoginSignup() {
    this.isLogin = !this.isLogin;
    // Reset form and validation when toggling between login and sign up
    this.authForm.reset();
   
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
