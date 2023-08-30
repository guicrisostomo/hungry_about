import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { FooterComponent } from '../../widgets/footer/footer.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { MenuLateralComponent } from '../../widgets/menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    YouTubePlayerModule,
    MenuLateralComponent
  ],
})
export class HomeComponent {
  publications = [
    {
      title: 'Bolo de chocolate',
      description: 'Aprenda a preparar um delicioso bolo de chocolate.',
      image: '/assets/img/chocolateCake.jpg',
      link: '/sign-up',
      user: {
        name: 'Maria',
        image: 'https://avatars.githubusercontent.com/u/60005589?v=4'
      },
      // video: 'https://www.youtube.com/embed/1IszT_guI08'
    },

    {
      title: 'Bolo de cenoura',
      description: 'Aprenda a preparar um delicioso bolo de cenoura.',
      image: '/assets/img/carrotCake.jpg',
      link: '/sign-up',
      user: {
        name: 'João',
        image: 'https://avatars.githubusercontent.com/u/60005589?v=4'
      },
      // video: 'https://www.youtube.com/embed/1IszT_guI08'
    },

    {
      title: 'Bolo de laranja',
      description: 'Aprenda a preparar um delicioso bolo de laranja.',
      // image: '/assets/img/orangeCake.jpg',
      link: '/sign-up',
      user: {
        name: 'Maria',
        image: 'https://avatars.githubusercontent.com/u/60005589?v=4'
      },
      video: 'PRQCAL_RMVo'
    }
  ]
}
