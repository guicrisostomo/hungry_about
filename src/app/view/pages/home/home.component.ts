import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../widgets/navbar/navbar.component';
import { FooterComponent } from '../../widgets/footer/footer.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MenuLateralComponent } from '../../widgets/menu-lateral/menu-lateral.component';
import { PublicationsService } from 'src/app/services/publication/publications.service';
import { ReturnPublication } from 'src/app/dtos/return-publication';

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
    MenuLateralComponent,
  ],
})
export class HomeComponent {
  constructor(private publicationService: PublicationsService) {}

  publications = [
    {
      title: 'Bolo de chocolate',
      description: 'Aprenda a preparar um delicioso bolo de chocolate.',
      image: '/assets/img/chocolateCake.jpg',
      link: '/sign-up',
      user: {
        name: 'Maria',
        image: 'https://avatars.githubusercontent.com/u/60005589?v=4',
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
        image: 'https://avatars.githubusercontent.com/u/60005589?v=4',
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
        image: 'https://avatars.githubusercontent.com/u/60005589?v=4',
      },
      video: 'PRQCAL_RMVo',
    },
  ];

  async ngOnInit() {
    const publications = await this.publicationService.getPublications();
    console.log(publications);
    if (publications.status === 200) {
      this.publications = publications.publications.map((item) => {
        return {
          title: item.title,
          description: item.description || '',
          link: '/sign-up',
          user: {
            ...item.user,
            image:
              item.user.image ||
              'https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-v2/64/chef-man-white-512.png',
          },
          video: '',
        };
      });
    }
  }
}
