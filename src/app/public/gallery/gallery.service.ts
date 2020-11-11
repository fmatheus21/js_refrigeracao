import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  private image1: string;
  private image2: string;
  private image3: string;
  private image4: string;
  private image5: string;
  private image6: string;

  constructor() {
    this.loadImages();
  }


  private loadImages() {
    this.image1 = './assets/images/gallery/gallery-1.jpg';
    this.image2 = './assets/images/gallery/gallery-2.jpg';
    this.image3 = './assets/images/gallery/gallery-3.jpg';
    this.image4 = './assets/images/gallery/gallery-4.jpg';
    this.image5 = './assets/images/gallery/gallery-5.jpg';
    this.image6 = './assets/images/gallery/gallery-6.jpg';
  }

  public loadGallery() {
    return [
      { id: 1, title: 'Manutenção e Reparo', image: this.image1 },
      { id: 2, title: 'Manutenção e Reparo', image: this.image2 },
      { id: 3, title: 'Manutenção e Reparo', image: this.image3 },
      { id: 4, title: 'Manutenção e Reparo', image: this.image4 },
      { id: 5, title: 'Manutenção e Reparo', image: this.image5 },
      { id: 6, title: 'Manutenção e Reparo', image: this.image6 }
    ];
  }


}
