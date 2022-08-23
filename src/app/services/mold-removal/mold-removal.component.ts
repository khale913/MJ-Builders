import { Component, OnInit } from '@angular/core';
import { TabServiceService } from 'src/app/tab-service.service';

@Component({
  selector: 'app-mold-removal',
  templateUrl: './mold-removal.component.html',
  styleUrls: ['./mold-removal.component.scss']
})
export class MoldRemovalComponent implements OnInit {

  count: number | undefined;
  constructor(private service: TabServiceService) { }

  ngOnInit(): void {
    this.service.count.subscribe(c => {
      this.count = c;
    })

    this.service.nextCount(2);


  }

}
