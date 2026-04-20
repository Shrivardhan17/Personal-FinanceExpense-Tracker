import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense'; // Import the service

@Component({
  selector: 'app-expense-form',
  standalone: true,
  templateUrl: './expense-form.html',
  styleUrls: ['./expense-form.css']
})
export class ExpenseFormComponent {
  private expenseService = inject(ExpenseService); // Inject the service

  addExpense(title: string, amount: string, category: string) {
    if(!title || !amount) return;

    this.expenseService.addExpense({
      id: Date.now(),
      title: title,
      amount: Number(amount),
      category: category,
      date: new Date()
    });
    
    alert('Expense saved!');
  }
}
