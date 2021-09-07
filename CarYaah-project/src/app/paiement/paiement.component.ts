import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/payment.service';
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css'],
})
export class PaiementComponent implements OnInit {
  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {}
  pay(data: any) {
    this.paymentService.ppp(data).subscribe((url: any) => {
      window.open(url, 'fyghj');
      console.log(url);
    });
  }
}
