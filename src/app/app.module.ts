import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { RequestService } from './services/request.service';
import { AllTransactionsComponent } from './components/all-transactions/all-transactions.component';
import { OneTransactionComponent } from './components/one-transaction/one-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTransactionsComponent,
    OneTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
