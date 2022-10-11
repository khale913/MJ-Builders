import { Component, OnInit } from '@angular/core';
import { TabServiceService } from 'src/app/tab-service.service';

@Component({
  selector: 'app-fire-damage',
  templateUrl: './fire-damage.component.html',
  styleUrls: ['./fire-damage.component.scss']
})
export class FireDamageComponent implements OnInit {

  count: number | undefined;
  constructor(private service: TabServiceService) { }

  ngOnInit(): void {
    this.service.count.subscribe(c => {
      this.count = c;
    })

    this.service.nextCount(2);

  }

  thisCall(e: any) {
    console.log('loaded!')
  }

}
