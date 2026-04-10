import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseService } from './services/expense-service';
import { DashboardComponent } from "./dashboard-component/dashboard-component";
import { RouterLink } from '@angular/router';
import { EditExpense } from './edit-expense/edit-expense';
import { AddExpense } from './add-expense/add-expense';
import { ExpenseList } from './expense-list/expense-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, RouterLink,EditExpense,AddExpense,ExpenseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment-4');
  
  expenseService = inject(ExpenseService);
}
