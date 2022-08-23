import { Component, OnInit } from '@angular/core';
import { TabServiceService } from 'src/app/tab-service.service';

@Component({
  selector: 'app-water-damage',
  templateUrl: './water-damage.component.html',
  styleUrls: ['./water-damage.component.scss']
})
export class WaterDamageComponent implements OnInit {

  count: number | undefined;
  constructor(private service: TabServiceService) { }

  ngOnInit(): void {
    this.service.count.subscribe(c => {
      this.count = c;
    })

    this.service.nextCount(2);


  }

}
