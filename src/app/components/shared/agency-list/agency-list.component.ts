import { Component, OnInit } from '@angular/core';
import { Agency } from 'src/app/models/agency';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {

  // agencies: Agency[] = [];
  agencies: Agency[] = [
    {
      "id": 1,
      "name": "Capitan Soap"
  },
  {
    "id": 1,
    "name": "Capitan Soap"
},
{
  "id": 1,
  "name": "Capitan Soap"
}
  ]

  constructor(private realtorService: AgencyService) { }

  ngOnInit(): void {
    // this.realtorService.loadAgencies().subscribe(result => {
    //   this.agencies = result as Agency[];
    // });
  }
}
