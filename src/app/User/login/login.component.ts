import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from './../../Service/auth.service';
import { UserModel } from './../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.compose([])),
      password: new FormControl('', Validators.compose([])),
    })
  }

  onSubmit(): void {
    console.log(this.form.valid);

    if (this.form.valid) {
      this.authService.login(
        this.form.value.username,
        this.form.value.password
      ).subscribe(
        (data: UserModel) => {
          console.log(data);
          this.router.navigate(['/'])
        }
      );
      console.log(this.form.value);
    }
  }

}
