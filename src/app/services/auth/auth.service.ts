import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { HeaderService } from '../header.service';

@Injectable({
  providedIn: 'root',

})
export class AuthService {
  private api = environment.urlApi;

  constructor(
    private cookieService: CookieService,
  ) { }
  
  googleAuth() {
    window.open(`${this.api}/auth/google`, '_blank');
    // get token
    window.addEventListener('message', (message) => {
      this.cookieService.set('auth', message.data.token);
    });
  }

  getHeader() {
    return HeaderService.getInstance()!.getHeader();
  }

  async signIn(email: string, password: string) {
    const fetchLogin = async () => {
      let status;

      try {
        const request = await fetch(`${this.api}/auth/login`, {
          method: 'POST',
          headers: this.getHeader(),
          body: JSON.stringify({
            username: email,
            password,
          }),
        });

        status = request.status;

        const json = await request.json();

        return {
          ...json,
          status,
        };
      } catch (error) {
        return {
          status,
        };
      }
    };

    fetchLogin().then((response) => {
      if (response.status === 200) {
        this.cookieService.set('auth', response.token);
      }
    });
  }
}