import { ScriptService } from './../../script.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private scriptService: ScriptService) { }

  ngOnInit(): void {
 
  /*  this.scriptService.loadExternalScript('./assets/js/jquery.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/bootstrap.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/owl.carousel.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/jquery.magnific-popup.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/waypoint.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/jquery.counterup.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/custom-map.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/custom.js').then(() => { }).catch(() => { });*/

  }

}
