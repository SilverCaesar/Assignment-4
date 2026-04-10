import { Component, inject, input, computed } from '@angular/core';
import { ExpenseService } from '../services/expense-service';
import { ExpenseCategory } from '../models/expense';
import { CurrencyPipe } from '@angular/common';
import { EditExpense } from '../edit-expense/edit-expense';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-expense-item',
  imports: [CurrencyPipe, EditExpense, RouterLink],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  expenseService = inject(ExpenseService);
  expense = input.required<{id:string, title:string, amount:number, category:string}>();
  
  //dynamically assign color based on category
  categoryColor = computed(() =>
  {
    const category = this.expense().category;
    if (!category) return 'red';

    switch (category) {
      case 'Utilities':
        return 'orange';
      case 'School':
        return 'teal';
      case 'Personal':
        return 'purple';
      case 'Grocery':
        return 'green';
      case 'Shopping':
        return 'pink';
      case 'Travel':
        return 'cyan';
      case 'Food':
        return 'red';
      default:
        return 'blue';
    }
  });

  onDeleteExpense(){
    this.expenseService.deleteExpense(this.expense().id);
  }
}
