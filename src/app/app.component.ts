import { ScriptService } from './script.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'refrigeracao';

  constructor(private scriptService: ScriptService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 10);
    });

    this.scriptService.loadExternalScript('./assets/js/jquery.min.js').then(() => { }).catch(() => { });       
    this.scriptService.loadExternalScript('./assets/js/bootstrap.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/owl.carousel.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/jquery.magnific-popup.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/waypoint.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/jquery.counterup.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/custom-map.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/custom.js').then(() => { }).catch(() => { });    
    this.scriptService.loadExternalScript('./assets/js/sweetalert2.all.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/send-email.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/jquery.mask.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/mask.js').then(() => { }).catch(() => { });


  }

}
