import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {ReactiveFormsModule} from '@angular/forms';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class DashboardModule {
}
