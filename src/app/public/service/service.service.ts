import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private image1: string;
  private image2: string;
  private image3: string;

  constructor() {
    this.loadImages();
  }


  private loadImages() {
    this.image1 = './assets/images/services/service-1.jpg';
    this.image2 = './assets/images/services/service-2.jpg';
    this.image3 = './assets/images/services/service-3.jpg';
  }

  public loadServices() {
    return [
      { id: 1, title: 'Refrigerador', description: 'Trabalhamos com manutenção de geladeiras de todas as marcas e modelos.', image: this.image1, icon: 'icon-snow' },
      { id: 2, title: 'Freezer e Expositora', description: 'Consertamos todo tipo de Freezer, Expositoras e Balcão Frio.', image: this.image2, icon: 'icon-snow' },
      { id: 3, title: 'Ar Condicionado', description: 'Realizamos instalação e manutenção de ar condicionado de odas as marcas e modelos.', image: this.image3, icon: 'icon-ac' }
    ];
  }

}
