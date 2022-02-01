import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail()
        .subscribe({
          next: () => {
            this.resetForm(form);
            this.toastr.success('Submitted succesfully', 'Payment Detail Registered');
          },
          error: (e) => console.log(e)
        });
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

}
