import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {

  @Input() offer!: Offer;

  constructor() { }

  ngOnInit(): void {
  }

}
