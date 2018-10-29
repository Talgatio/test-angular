import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
})
export class AllTransactionsComponent implements OnInit {

  transactions: string[] = [];

  constructor(private req: RequestService) { }

  ngOnInit() {
    this.req.get('tx').subscribe((res: any) => {
      this.transactions = res;
    });
  }

}
