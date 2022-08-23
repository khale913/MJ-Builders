import { Component, OnInit } from '@angular/core';
import { TabServiceService } from 'src/app/tab-service.service';

@Component({
  selector: 'app-commercial-services',
  templateUrl: './commercial-services.component.html',
  styleUrls: ['./commercial-services.component.scss']
})
export class CommercialServicesComponent implements OnInit {
  count: number | undefined;
  constructor(private service: TabServiceService) { }

  ngOnInit(): void {
    this.service.count.subscribe(c => {
      this.count = c;
    })

    this.service.nextCount(2);


  }

}
