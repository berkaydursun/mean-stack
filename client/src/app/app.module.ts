import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './components/menubar/menubar.component';
import { FormComponent } from './components/form/form.component';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './components/update/update.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDelayComponent } from './components/user-delay/user-delay.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    FormComponent,
    UsersComponent,
    ProfileComponent,
    UserDetailComponent,
    CreateFormComponent,
    RegisterComponent,
    UpdateComponent,
    ConfirmationDialogComponent,
    UserDelayComponent
  ],
  imports: [
    CardModule,
    TableModule,
    ReactiveFormsModule,
    PasswordModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    MenubarModule,
    PanelModule,
    HttpClientModule,
    NgbModule,
    ProgressSpinnerModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
