import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { InitialComponent } from '../../view/pages/initial/initial.component';
import { HomeComponent } from '../../view/pages/home/home.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: getCorrectComponent,
      deps: [CookieService],
      multi: true,
    },
  ],
})
export class HandleInitialPageModule {}
function getCorrectComponent(cookieService: CookieService) {
  let routes: Routes = [];
  if (cookieService.get('auth')) {
    routes = [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
    ];
  } else {
    return [
      {
        path: '',
        component: InitialComponent,
        pathMatch: 'full',
      },
    ];
  }

  return routes;
}
