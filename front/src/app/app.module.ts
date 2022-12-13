import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditProcedeComponent } from './edit-procede/edit-procede.component';
import { EditFreezbeComponent } from './edit-freezbe/edit-freezbe.component';
import { EditIngredientComponent } from './edit-ingredient/edit-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EditProcedeComponent,
    EditFreezbeComponent,
    EditIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
