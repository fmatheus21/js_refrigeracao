import { Component, OnInit } from '@angular/core';
import { ScriptService } from './../../script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private scriptService: ScriptService) { }

  ngOnInit() {
    this.scriptService.loadExternalScript('./assets/js/jquery.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/bootstrap.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/owl.carousel.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/jquery.magnific-popup.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/waypoint.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/jquery.counterup.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/custom-map.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/custom.js').then(() => { }).catch(() => { });

}

}
