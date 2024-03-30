import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  static instance: HeaderService | null = null;

  static setInstance(instance: HeaderService) {
    HeaderService.instance = instance;
  }

  static getInstance() {
    if (HeaderService.instance === null) {
      this.setInstance(new HeaderService(new CookieService(document, 0)));
    }
    return HeaderService.instance;
  }

  getHeader() {
    if (this.cookieService.check('auth')) {
      return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.cookieService.get('auth'),
      };
    } else {
      return {
        'Content-Type': 'application/json',
        'Authorization': '',
      };
    }
  }

  constructor(private cookieService: CookieService) {}
}
