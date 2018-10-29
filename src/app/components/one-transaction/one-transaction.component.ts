import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../services/request.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-one-transaction',
  templateUrl: './one-transaction.component.html',
  styleUrls: ['./one-transaction.component.scss']
})
export class OneTransactionComponent implements OnInit {

  oneTransaction: any = {};
  constructor(private req: RequestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.req.get('tx/' + id).subscribe((res: any) => {
        this.oneTransaction = res['com.gk_software.gkr.api.txpool.dto.Transaction'];
        console.log(this.oneTransaction);
      });
    });
  }

}
