import { Component } from '@angular/core';
import { NavbarComponent } from '../../widgets/navbar/navbar.component';
import { FooterComponent } from '../../widgets/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule
  ]
})
export class InitialComponent {
  items = [
    {
      title: 'Compartilhe',
      description: 'Compartilhe seus conhecimentos com outras pessoas',
      image: '/assets/img/socialMedia.svg',
      link: '/signup'
    },

    {
      title: 'Descubra',
      description: 'Descubra novas receitas e aprenda a preparar pratos incríveis.',
      image: '/assets/img/food.png',
      link: '/signup'
    },

    {
      title: 'Aprenda',
      description: 'Aprenda a preparar pratos incríveis com receitas de pessoas reais.',
      image: '/assets/img/cooking.svg',
      link: '/signup'
    },

    {
      title: 'Saúde',
      description: 'Aprenda a preparar pratos incríveis com receitas de pessoas reais.',
      image: '/assets/img/healthlyFood.jpg',
      link: '/signup'
    },

    {
      title: 'Orgânico',
      description: 'Aprenda a preparar pratos com ingredientes orgânicos e sustentáveis.',
      image: '/assets/img/organicFood.jpg',
      link: '/signup'
    },

    {
      title: 'Utensílios',
      description: 'Encontre os utensílios necessários para preparar os pratos mais deliciosos.',
      image: '/assets/img/utensils.jpg',
      link: '/signup'
    }
  ];

  itemsPopular = [
    {
      title: 'Bolo de chocolate',
      description: 'Aprenda a preparar um delicioso bolo de chocolate.',
      image: '/assets/img/chocolateCake.jpg',
      link: '/signup'
    },

    {
      title: 'Bolo de cenoura',
      description: 'Aprenda a preparar um delicioso bolo de cenoura.',
      image: '/assets/img/carrotCake.jpg',
      link: '/signup'
    },

    {
      title: 'Bolo de laranja',
      description: 'Aprenda a preparar um delicioso bolo de laranja.',
      image: '/assets/img/orangeCake.jpg',
      link: '/signup'
    }
  ]
}
