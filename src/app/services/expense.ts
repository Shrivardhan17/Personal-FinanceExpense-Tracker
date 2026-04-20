import { Injectable, signal, computed, effect } from '@angular/core';
import { Expense } from '../models/expense';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private storageKey = 'my_data';
  private savedData = localStorage.getItem(this.storageKey);
  
  // 1. New Signal for Salary
  salary = signal<number>(0);
  expenses = signal<Expense[]>([]);

  constructor() {
    // Load saved data if it exists
    if (this.savedData) {
      const data = JSON.parse(this.savedData);
      this.salary.set(data.salary || 0);
      this.expenses.set(data.expenses || []);
    }

    // Auto-save both salary and expenses
    effect(() => {
      const data = { salary: this.salary(), expenses: this.expenses() };
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    });
  }

  // 2. Updated Logic: Salary minus Total Expenses
  totalBalance = computed(() => {
    const totalSpent = this.expenses().reduce((sum, item) => sum + item.amount, 0);
    return this.salary() - totalSpent;
  });

  updateSalary(amount: number) {
    this.salary.set(amount);
  }

  addExpense(expense: Expense) {
    this.expenses.update(prev => [...prev, expense]);
  }

  deleteExpense(id: number) {
    this.expenses.update(prev => prev.filter(e => e.id !== id));
  }
}
