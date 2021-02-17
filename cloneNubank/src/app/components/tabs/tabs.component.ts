import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  public tabsIcons = [
    {
      title: 'Indicar Amigos',
      url: '/cartao-chamada',
      icon: 'person-add-outline',
    },
    {
      title: 'Transferir',
      url: '/contatos',
      icon: 'push-outline',
    },
    {
      title: 'Depositar',
      url: '/opcionais-adquiridos',
      icon: 'download-outline',
    },
    {
      title: 'Bloquear cartão',
      url: '/passaporte',
      icon: 'lock-closed-outline',
    },
    {
      title: 'Cobrar',
      url: '/passaporte',
      icon: 'receipt-outline',
    },

    {
      title: 'Me ajuda',
      url: '/passaporte',
      icon: 'help-circle-outline',
    }
  ];

  constructor() { }

  ngOnInit() { }

}
