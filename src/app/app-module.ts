import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ExpenseFormComponent } from './components/expense-form/expense-form';
import { ExpenseList } from './components/expense-list/expense-list';

@NgModule({
  declarations: [], // Leave this empty
  imports: [
    BrowserModule, 
    AppRoutingModule,
    App,                 // Move App here
    ExpenseFormComponent, 
    ExpenseList          // Move ExpenseList here
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
