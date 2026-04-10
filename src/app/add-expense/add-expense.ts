import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpenseService } from '../services/expense-service';
import { ExpenseList } from '../expense-list/expense-list';
import { ExpenseCategory } from '../models/expense';

@Component({
  selector: 'app-add-expense',
  imports: [RouterLink],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
  expenseService = inject(ExpenseService);
  showWarning = signal<boolean>(false); //signal for required fields

  constructor(){}

  onAddExpense(titleInput:HTMLInputElement, amountInput:HTMLInputElement, categoryInput:HTMLSelectElement){
    this.showWarning.set(false);
    const newTitle = titleInput.value;
    const newAmount:number = amountInput.valueAsNumber;
    const newCategory:ExpenseCategory = categoryInput.value as ExpenseCategory;

    if(!newTitle || newTitle.trim() === ''){
      this.showWarning.set(true);
      return;
    }

    if (isNaN(newAmount)) {
        this.showWarning.set(true);
        return;
    }

    this.expenseService.addExpense(newTitle, newAmount, newCategory);
    titleInput.value = '';
    amountInput.value = '';
    categoryInput.value = '';
  }
}
