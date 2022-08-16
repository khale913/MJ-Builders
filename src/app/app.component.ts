import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jdhconstruction';

  onActivate(event: any) {
    // window.scroll(0,0);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }
  //   onActivate(event: any) {
  //     let scrollToTop = window.setInterval(() => {
  //         let pos = window.pageYOffset;
  //         if (pos > 0) {
  //             window.scrollTo(0, pos - 20); // how far to scroll on each step
  //         } else {
  //             window.clearInterval(scrollToTop);
  //         }
  //     }, 16);
  // }
}
