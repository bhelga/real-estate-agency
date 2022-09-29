import { Component, OnInit } from '@angular/core';
import { Realtor } from 'src/app/models/realtor';
import { RealtorService } from 'src/app/services/realtor.service';

@Component({
  selector: 'app-realtor-list',
  templateUrl: './realtor-list.component.html',
  styleUrls: ['./realtor-list.component.scss']
})
export class RealtorListComponent implements OnInit {
  // realtors: Realtor[] = [];
  realtors: Realtor[] = [
    {
      "id": 1,
      "firstname": "Петро",
      "middlename": "Петрович",
      "lastname": "Петренко",
      "experience": 5,
      "agencyid": 1
  },
  {
    "id": 1,
    "firstname": "Петро",
    "middlename": "Петрович",
    "lastname": "Петренко",
    "experience": 5,
    "agencyid": 1
},
{
  "id": 1,
  "firstname": "Петро",
  "middlename": "Петрович",
  "lastname": "Петренко",
  "experience": 5,
  "agencyid": 1
}
  ]

  constructor(private realtorService: RealtorService) { }

  ngOnInit(): void {
    // this.realtorService.loadRealtors().subscribe(result => {
    //   this.realtors = result as Realtor[];
    // })
  }
}
