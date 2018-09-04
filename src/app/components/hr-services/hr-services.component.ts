import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-hr-services',
  templateUrl: './hr-services.component.html',
  styleUrls: ['./hr-services.component.css']
})
export class HrServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const footerHeight = $('#footer-wrapper').outerHeight();
    $('#content-wrapper').css('margin-bottom', footerHeight);
    $('.customer-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
    });
  }

}
