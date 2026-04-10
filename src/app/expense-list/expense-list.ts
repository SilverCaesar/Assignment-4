import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpenseItem } from '../expense-item/expense-item';
import { ExpenseService } from '../services/expense-service';

@Component({
  selector: 'app-expense-list',
  imports: [RouterLink, ExpenseItem],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  expenseService = inject(ExpenseService);
}
