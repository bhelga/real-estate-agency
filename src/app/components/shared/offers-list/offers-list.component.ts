import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {

  

  mockedOffers: Offer[] = [];
  filteredOffer: Offer[] = [];

  searchValue: string = '';

  roomEnabled: boolean = true;
  houseEnabled: boolean = true;
  garageEnabled: boolean = true;
  terrainEnabled: boolean = true;

  minPrice: number = 0;
  maxPrice: number = 100;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.filteredOffer = this.mockedOffers;
    this.offerService.allOffers.subscribe(result => {
      this.mockedOffers = result as Offer[];
    })
  }

  onRoomSwitch() {
    this.roomEnabled = !this.roomEnabled;
    this.applyFilters();
  }

  onHouseSwitch() {
    this.houseEnabled = !this.houseEnabled;
    this.applyFilters();
  }

  onGarageSwitch() {
    this.garageEnabled = !this.garageEnabled;
    this.applyFilters();
  }

  onTerrainSwitch() {
    this.terrainEnabled = !this.terrainEnabled;
    this.applyFilters();
  }

  applyFilters() {
    let filteredArray = [];
    let switchedArray: Offer[] = [];
    let switchFilters: number[] = [];
    if (this.roomEnabled) {
      switchFilters.push(1);
    }
    if (this.houseEnabled) {
      switchFilters.push(2);
    }
    if (this.garageEnabled) {
      switchFilters.push(3);
    }
    if (this.terrainEnabled) {
      switchFilters.push(4);
    }
    filteredArray = this.mockedOffers.filter(offer => {
      return offer.title.toLowerCase().includes(this.searchValue.toLowerCase());
    });

    filteredArray.forEach(filter => {
      if (switchFilters.includes(filter.offerType)) {
        switchedArray.push(filter);
      }
    });

    switchedArray = switchedArray.filter(offer => {
      return offer.price > this.minPrice || offer.price < this.maxPrice;
    });

    this.filteredOffer = switchedArray;
  }

  private getStringOfferType(offer: Offer): string {
    switch (offer.offerType) {
      case 1:
        return 'Room';
      case 2: 
        return 'House';
      case 3:
        return 'Garage';
      case 4:
        return 'Terrain';
    }
    return '';
  }

}
