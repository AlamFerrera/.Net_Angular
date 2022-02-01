import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail){
    //Crea una copia del objeto
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(selectedId: number){
    if(confirm("Are you sure you want to delete this item?")){
      this.service.deletePaymentDetail(selectedId)
      .subscribe({
        next: () => {
          this.service.refreshList();
          this.toastr.success('Delete succesfully', 'Payment Detail Removed');
        },
        error: (e) => console.log(e)
      });;
    }
  }

}
