import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for the | currency pipe
import { ExpenseService } from './services/expense';
import { ExpenseFormComponent } from './components/expense-form/expense-form';
import { ExpenseList } from './components/expense-list/expense-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,         // Fixes the 'currency' pipe error
    ExpenseFormComponent, // Fixes the 'app-expense-form' error
    ExpenseList          // Allows the list to show up
  ],
  templateUrl: './app.html',
})
export class App {
  // This connects your shared "brain" (Service) to the main page
  expenseService = inject(ExpenseService);
}
