import { Component, OnInit } from '@angular/core';
import { TabServiceService } from '../tab-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count: number | undefined;
  learnHover: string = '';
  constructor(private service: TabServiceService) { }

  ngOnInit(): void {
    this.service.count.subscribe(c => {
      this.count = c;
    })

    this.service.nextCount(1);
  }

  hoverLearn(service: any, bool: boolean) {
    if (bool === true) {
      this.learnHover = service;
    } else {
      this.learnHover = '';
    }
  }
}
