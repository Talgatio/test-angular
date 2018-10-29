import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AllTransactionsComponent} from './components/all-transactions/all-transactions.component';
import { OneTransactionComponent } from './components/one-transaction/one-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: AllTransactionsComponent
  },
  {
    path: ':id',
    component: OneTransactionComponent
  }
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {
  }