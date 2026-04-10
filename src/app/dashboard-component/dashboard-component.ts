import { Component, inject } from '@angular/core';
import { ExpenseService } from '../services/expense-service';
import { RouterLink } from "@angular/router";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-component',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  
  expenseService = inject(ExpenseService)


  //highest = largest expense
  //average = average expense
}
