import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { FormComponent } from './components/form/form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './components/update/update.component';
import { UserDelayComponent } from './components/user-delay/user-delay.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';
import { LoginguardService as AuthGuard } from './services/loginguard.service';

const routes: Routes = [

  { path: 'login', component: FormComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user-detail/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'createUser', component: CreateFormComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateComponent, canActivate: [AuthGuard] },
  { path: '', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'usersDelay', component: UserDelayComponent, canActivate: [AuthGuard] }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
