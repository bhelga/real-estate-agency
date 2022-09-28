import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {
  @Input() offer!: Offer;

  imagesArray: string[] = [
    'https://i.pinimg.com/564x/19/ad/b5/19adb513a7a943bc471dc0fd03594797.jpg',
    'https://i.pinimg.com/564x/70/35/a3/7035a340bf0eff6a25b669641af754a8.jpg',
    'https://i.pinimg.com/564x/62/5e/67/625e6750455e00233c44af37feee5c38.jpg',
    'https://i.pinimg.com/564x/78/05/a4/7805a4bf5bfd027b6781a22cdf77cc94.jpg',
    'https://i.pinimg.com/564x/31/a5/4b/31a54b669d559861cd3c367a5919f616.jpg',
    'https://i.pinimg.com/564x/0b/c0/39/0bc039b722fc2a35dd4f21731b669a7b.jpg',
    'https://i.pinimg.com/564x/e8/76/a8/e876a8bb20cb6de993d19ec8d1af4ec6.jpg',
    'https://i.pinimg.com/564x/18/f9/dd/18f9dd048ee4750f61cf494497ac6efb.jpg',
    'https://i.pinimg.com/564x/a6/93/81/a693812d5e09fca1fda71f9c9f6af966.jpg',
    'https://i.pinimg.com/564x/7e/49/6b/7e496b36da5af2c9fa740eb03a1a55a9.jpg'
  ];
  avatarsArray: string[] = [

  ];

  image: string = '';
  avatar: string = '';
  offerType: string = '';
  currentUser: User | undefined;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
) {
    this.currentUser = {
        id: 2,
        firstName: "Петро",
        middleName: "Петрович",
        lastName: "Петренко",
        telephone: "+38000000000",
        email: "example@example.com",
        login: "123",
        password: "123",
        role: 3,
      }
    // this.currentUserSubscription = this.authenticationService.currentUser.subscribe((user: any) => {
    //     this.currentUser = user;
    // });
}

  ngOnInit(): void {
    this.image = this.imagesArray.at(Math.floor(Math.random() * 10)) ?? '';
    this.avatar = this.avatarsArray.at(Math.floor(Math.random() * 10)) ?? '';
    this.offerType = this.getStringOfferType();
  }

  private getStringOfferType(): string {
    switch (this.offer.offerType) {
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
