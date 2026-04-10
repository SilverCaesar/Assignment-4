import { Component, inject, signal, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpenseService } from '../services/expense-service';
import { ExpenseCategory } from '../models/expense';

@Component({
  selector: 'app-edit-expense',
  imports: [RouterLink],
  templateUrl: './edit-expense.html',
  styleUrl: './edit-expense.css',
})
export class EditExpense {
  expenseService = inject(ExpenseService);
  id = input.required<string>();
  expense = computed(() => this.expenseService.getExpenseById((this.id()))!);


  showWarning = signal<boolean>(false); //signal for required fields

  constructor(){}

  onEditExpense(titleInput:HTMLInputElement, amountInput:HTMLInputElement, categoryInput:HTMLSelectElement){
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
  
      this.expenseService.editExpense(this.id(), newTitle, newAmount, newCategory);
    }
}
