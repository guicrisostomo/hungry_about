import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ReturnPublication } from 'src/app/dtos/return-publication';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PublicationsService {
  private api = environment.urlApi;

  constructor(private cookieService: CookieService) {}

  async getPublications(): Promise<ReturnPublication> {
    const fetchPublications = async () => {
      let status;

      try {
        const request = await fetch(`${this.api}/publications`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.cookieService.get('auth'),
          },
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

    return fetchPublications();
  }
}
