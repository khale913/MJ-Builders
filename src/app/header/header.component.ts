import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { TabServiceService } from '../tab-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @HostListener("window:scroll", ['$event']) onScrollEvent(event: any) {
  //   // console.log(event);
  //   // console.log(window.pageYOffset)
  //   console.log(window.scrollY)
  //   // if (window.pageYOffset >= 0 || window.scrollY >= 0) {
  //   //   this.sticky = true;
  //   // } else {
  //   //   this.sticky = false;
  //   // }

  // }
  count: number | undefined;
  activeTab: number = 1;
  openOverlay: boolean = false;
  serviceOpen: boolean = false;
  constructor(private appsevice: TabServiceService) {
  }

  ngOnInit(): void {
    this.appsevice.count.subscribe(c => {
      this.count = c;
    })
  }
  openOverlayMenu() {
    this.openOverlay = !this.openOverlay;
  }

  closeModal() {
    this.openOverlay = false;
  }

  openSubServices() {
    console.log('OPEN ME');
    this.serviceOpen = !this.serviceOpen;
    console.log(this.serviceOpen)
  }

}
