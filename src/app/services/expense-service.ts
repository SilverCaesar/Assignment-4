import { Injectable, signal, computed } from '@angular/core';
import { ExpenseItem } from '../expense-item/expense-item';
import { ExpenseCategory } from '../models/expense';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenses = signal<Expense[]>([]);
  categories = signal<string[]>(['Work','Personal','Grocery','Utilities','Shopping','Travel','Food']);

  
  transactionCount = computed(() => this.expenses().length)
  totalExpense = computed(() => 
    this.expenses().reduce((acc, item) => acc + (item.amount), 0));
  highestExpense = computed(() => 
    this.expenses().reduce((max:number, current) => Math.max(max, current.amount),0));
  averageExpense = computed(() =>
    this.expenses().length ? +(this.totalExpense() / this.expenses().length).toFixed(2) : 0);

  addExpense(expenseName:string, expenseAmount:number, expenseCategory: ExpenseCategory){
    const newExpense:Expense = {
      id:this.generateExpenseId(),
      title:expenseName,
      amount:expenseAmount,
      category:expenseCategory
    }
    this.expenses.update(expenses => [...expenses, newExpense]);
  }

  deleteExpense(expenseId:string){
    this.expenses.update(expenses => expenses.filter(expenses => expenses.id !== expenseId))
  }

  editExpense(expenseId:string, newName:string, newAmount:number, newCategory:ExpenseCategory){
    this.expenses.update(expenses =>
      expenses.map(expense =>
        expense.id === expenseId ? {...expense, title:newName, amount:newAmount, category:newCategory} : expense
      )
    )
  }

  getExpenseById(expenseId:string){
    return this.expenses().find(expense => expense.id === expenseId)
  }

  private generateExpenseId = () => {
  return Date.now() + '' + Math.floor(Math.random() * 1000);
  }

}
