import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {

  // mockedOffers: Offer[] = [
  //   {
  //     id: 1,
  //     title: 'Beautiful room for you',
  //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     price: 1500,
  //     square: 21.3,
  //     offerType: 1,
  //     buyType: 1,
  //     user: {
  //       id: 2,
  //       firstName: "Hanna",
  //       middleName: "Ops",
  //       lastName: "Montana",
  //       telephone: "+38000000000",
  //       email: "example@example.com",
  //       login: "hannamontana",
  //       password: "123456",
  //       role: 3,
  //     },
  //     reviews: []
  //   },
  //   {
  //     id: 1,
  //     title: 'Hello world',
  //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
  //     price: 1500,
  //     square: 21.3,
  //     offerType: 2,
  //     buyType: 1,
  //     user: {
  //       id: 2,
  //       firstName: "Hanna",
  //       middleName: "Ops",
  //       lastName: "Montana",
  //       telephone: "+38000000000",
  //       email: "example@example.com",
  //       login: "hannamontana",
  //       password: "123456",
  //       role: 3,
  //     },
  //     reviews: []
  //   },
  //   {
  //     id: 1,
  //     title: 'Beautiful room for you',
  //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
  //     price: 1500,
  //     square: 21.3,
  //     offerType: 3,
  //     buyType: 1,
  //     user: {
  //       id: 2,
  //       firstName: "Hanna",
  //       middleName: "Ops",
  //       lastName: "Montana",
  //       telephone: "+38000000000",
  //       email: "example@example.com",
  //       login: "hannamontana",
  //       password: "123456",
  //       role: 3,
  //     },
  //     reviews: []
  //   },
  //   {
  //     id: 1,
  //     title: 'Beautiful room for you',
  //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
  //     price: 1500,
  //     square: 21.3,
  //     offerType: 4,
  //     buyType: 1,
  //     user: {
  //       id: 2,
  //       firstName: "Hanna",
  //       middleName: "Ops",
  //       lastName: "Montana",
  //       telephone: "+38000000000",
  //       email: "example@example.com",
  //       login: "hannamontana",
  //       password: "123456",
  //       role: 3,
  //     },
  //     reviews: []
  //   },
  //   {
  //     id: 1,
  //     title: 'Beautiful room for you',
  //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
  //     price: 1500,
  //     square: 21.3,
  //     offerType: 1,
  //     buyType: 1,
  //     user: {
  //       id: 2,
  //       firstName: "Hanna",
  //       middleName: "Ops",
  //       lastName: "Montana",
  //       telephone: "+38000000000",
  //       email: "example@example.com",
  //       login: "hannamontana",
  //       password: "123456",
  //       role: 3,
  //     },
  //     reviews: []
  //   },
  //   {
  //     id: 1,
  //     title: 'Beautiful room for you',
  //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
  //     price: 1500,
  //     square: 21.3,
  //     offerType: 1,
  //     buyType: 1,
  //     user: {
  //       id: 2,
  //       firstName: "Hanna",
  //       middleName: "Ops",
  //       lastName: "Montana",
  //       telephone: "+38000000000",
  //       email: "example@example.com",
  //       login: "hannamontana",
  //       password: "123456",
  //       role: 3,
  //     },
  //     reviews: []
  //   }
  // ]

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
