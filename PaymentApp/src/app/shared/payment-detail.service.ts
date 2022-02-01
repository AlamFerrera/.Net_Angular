import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];
  readonly baseUrl = "http://localhost:5286/api/PaymentDetail";

  constructor(private http: HttpClient) { }

  //insert
  postPaymentDetail(){
    return this.http.post(this.baseUrl, this.formData);
  }

  //update
  putPaymentDetail(){
    return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  //get
  refreshList(){
    return this.http.get(this.baseUrl)
          .toPromise()
          .then(res => this.list = res as PaymentDetail[]);
  }
}

