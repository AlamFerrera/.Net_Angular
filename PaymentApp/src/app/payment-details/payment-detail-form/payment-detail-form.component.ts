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
    //Si el id es == 0 hace insert, de lo contrario update
    if(this.service.formData.paymentDetailId == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm){
    this.service.postPaymentDetail()
      .subscribe({
        next: () => {
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Submitted succesfully', 'Payment Detail Registered');
        },
        error: (e) => console.log(e)
      });
  }

  updateRecord(form:NgForm){
    this.service.putPaymentDetail()
        .subscribe({
          next: () => {
            this.resetForm(form);
            this.service.refreshList();
            this.toastr.info('Updated succesfully', 'Payment Detail Updated');
          },
          error: (e) => console.log(e)
        });
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

}
