import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BounceButtonComponent } from './bounce-button/bounce-button.component';
import { ColorChangeComponent } from './color-change/color-change.component';

const routes: Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'bounce-button', component: BounceButtonComponent },
    { path: 'color-change', component: ColorChangeComponent }
  ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
