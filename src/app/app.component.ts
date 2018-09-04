import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ServiceService } from './services/service.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public constructor(private titleService: ServiceService) {
    titleService.init();
  }
 ngOnInit() {

 }
}
