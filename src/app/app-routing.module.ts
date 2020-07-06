import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';


const appRroutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(appRroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
