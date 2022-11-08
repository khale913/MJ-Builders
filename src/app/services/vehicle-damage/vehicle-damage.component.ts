import { Component, OnInit } from '@angular/core';
import { TabServiceService } from 'src/app/tab-service.service';

@Component({
  selector: 'app-vehicle-damage',
  templateUrl: './vehicle-damage.component.html',
  styleUrls: ['./vehicle-damage.component.scss']
})
export class VehicleDamageComponent implements OnInit {

  count: number | undefined;
  constructor(private service: TabServiceService) { }

  ngOnInit(): void {
    this.service.count.subscribe(c => {
      this.count = c;
    })

    this.service.nextCount(2);


  }
}
