import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const footerHeight = $('#footer-wrapper').outerHeight();
    $('#content-wrapper').css('margin-bottom', footerHeight);
  }

}
