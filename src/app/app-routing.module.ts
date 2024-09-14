import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { IndexComponent } from './pages/index/index.component';
import { UnlockComponent } from './pages/unlock/unlock.component';

const routes: Routes = [
  { path: '', component: IndexComponent }, // Default route, home page
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'unlock', component: UnlockComponent },
  { path: '**', redirectTo: '' } // Wildcard route for unknown paths, redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
