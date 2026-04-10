import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { ExpenseList } from './expense-list/expense-list';
import { AddExpense } from './add-expense/add-expense';
import { EditExpense } from './edit-expense/edit-expense';

export const routes: Routes = [
    {
        path:'',
        component:DashboardComponent,
        title:'Dashboard'
    },
    {
        path:'expenses',
        component:ExpenseList,
        title:'Expense List'
    },
    {
        path:'add',
        component:AddExpense,
        title:'Add Expense'
    },
    {
        path:'edit/:id',
        component:EditExpense,
        title:'Edit Expense',
    }
];
