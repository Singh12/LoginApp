import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
imageArr: any[] = [
  'assets/images/login/clients/IMG-1.jpg',
  'assets/images/login/clients/IMG-2.jpg',
  'assets/images/login/clients/IMG-3.jpg',
  'assets/images/login/clients/IMG-4.jpg',
  'assets/images/login/clients/IMG-5.jpg',
  'assets/images/login/clients/IMG-6.jpg',
  'assets/images/login/clients/IMG-7.jpg',
  'assets/images/login/clients/IMG-8.jpg',
  'assets/images/login/clients/IMG-9.jpg',
  'assets/images/login/clients/IMG-10.jpg',
   'assets/images/login/clients/IMG-11.jpg',
  'assets/images/login/clients/IMG-12.jpg'
];
constructor() {
 }

  ngOnInit() {
    $('.group1').colorbox({ rel: 'group1' });
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
