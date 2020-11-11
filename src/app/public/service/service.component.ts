import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public services: any[];

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.loadServices();
  }

  private loadServices() {
    this.services = this.serviceService.loadServices();
  }

}
