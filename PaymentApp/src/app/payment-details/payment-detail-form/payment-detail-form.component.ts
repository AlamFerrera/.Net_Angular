import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail()
        .subscribe({
          next: (v) => console.log("done"),
          error: (e) => console.log(e)
        });
  }

}
