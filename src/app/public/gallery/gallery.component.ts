import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public gallery: any[];

  constructor(private galleryService: GalleryService) {

  }

  ngOnInit(): void {
    this.loadGallery();
  }


  private loadGallery() {
    this.gallery = this.galleryService.loadGallery();
  }

}
