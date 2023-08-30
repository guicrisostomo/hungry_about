import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../widgets/navbar/navbar.component';
import { FooterComponent } from '../../widgets/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MatIconModule,
  ],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'hungry_website';
}
