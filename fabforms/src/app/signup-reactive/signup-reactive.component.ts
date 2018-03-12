import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.css',
  './signup-reactive.component.scss']
})
export class SignupReactiveComponent implements OnInit {

  signupForm: FormGroup
  passwordVisible = false
  showMessages = false

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }


  createForm() {
    this.signupForm = new FormGroup({
      firstname: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      lastname: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      username: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      email: new FormControl('', {
        validators: Validators.email,
        updateOn: 'change'
      }),
      password: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      showPassword: new FormControl(false, {
        updateOn: 'blur'
      }),
      terms: new FormControl(false, {
        validators: Validators.requiredTrue,
        updateOn: 'change'
      }),
    })
  }

  get firstname() { return this.signupForm.get('firstname') }
  get lastname() { return this.signupForm.get('lastname') }
  get username() { return this.signupForm.get('username') }
  get email() { return this.signupForm.get('email') }
  get password() { return this.signupForm.get('password') }
  get terms() { return this.signupForm.get('terms') }
  get showPassword() { return this.signupForm.get('showPassword') }

  checkPasswordVisibility(event) {
    this.passwordVisible = event.target.checked
  }

  submit() {
    console.log(this.signupForm)
    if (!this.signupForm.valid) {
      this.showMessages = true
    } else {
      this.showMessages = false
      alert('signed up!')
    }
  }
  ngOnInit() {
  }

}
