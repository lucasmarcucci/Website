import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFreezbeComponent } from './edit-freezbe/edit-freezbe.component';
import { EditIngredientComponent } from './edit-ingredient/edit-ingredient.component';
import { EditProcedeComponent } from './edit-procede/edit-procede.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'freezbee',
    component: EditFreezbeComponent
  },
  {
    path: 'procede',
    component: EditProcedeComponent
  },
  {
    path: 'ingredient',
    component: EditIngredientComponent
  },  
  {
    path: 'liste',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
