import { Component } from '@angular/core';
import { NavbarComponent } from '../../widgets/navbar/navbar.component';
import { FooterComponent } from '../../widgets/footer/footer.component';
import { MenuLateralComponent } from '../../widgets/menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MenuLateralComponent
  ]
})
export class ContactComponent {

}
