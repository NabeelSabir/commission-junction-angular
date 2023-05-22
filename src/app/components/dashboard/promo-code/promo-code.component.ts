import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.scss'],
})
export class PromoCodeComponent implements OnInit, OnDestroy {
  // products: Product[];
  genratePromo!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.genratePromo = this.formBuilder.group({
      promoCode: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  ngOnDestroy(): void {}
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  onSubmit() {
    console.log(this.genratePromo.value);
    this.visible = false;
  }
}
