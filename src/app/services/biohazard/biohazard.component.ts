import { Component, OnInit } from '@angular/core';
import { TabServiceService } from 'src/app/tab-service.service';

@Component({
  selector: 'app-biohazard',
  templateUrl: './biohazard.component.html',
  styleUrls: ['./biohazard.component.scss']
})
export class BiohazardComponent implements OnInit {

  count: number | undefined;
  constructor(private service: TabServiceService) { }

  ngOnInit(): void {
    this.service.count.subscribe(c => {
      this.count = c;
    })

    this.service.nextCount(2);


  }
}
