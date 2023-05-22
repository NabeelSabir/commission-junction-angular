import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  options = [{ label: 'Paypal', value: 'paypal' }];
  signUpForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      profileLink: ['', Validators.required],
      payoutEmail: ['', [Validators.required, Validators.email]],
      PayoutMethod: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
