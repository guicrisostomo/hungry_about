import { Host, Inject, Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/pages/home/home.component';
import { ContactComponent } from './view/pages/contact/contact.component';
import { InitialComponent } from './view/pages/initial/initial.component';
import { SignupComponent } from './view/pages/signup/signup.component';
import { LoginComponent } from './view/pages/login/login.component';
import { HandleInitialPageModule } from './utils/handle-initial-page/handle-initial-page.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./utils/handle-initial-page/handle-initial-page.module').then(
        (m) => m.HandleInitialPageModule
      ),
  },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
