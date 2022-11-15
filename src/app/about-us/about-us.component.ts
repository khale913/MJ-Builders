import { Component, OnInit } from '@angular/core';
import { TabServiceService } from '../tab-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  count: number | undefined;
  employees: any = [
    {
      name: 'Jarrett Hale',
      title: 'CEO',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus, esse soluta itaque ipsa, commo
      unde, eligendi minus aliquam dolorum praesentium mollitia! Praesentium ratione ducimus iste possimus autem,
      totam molestiae.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quae corrupti quas tenetur
      eaque ipsam. Veritatis laudantium voluptates, impedit provident est, harum minima quos assumenda quisquam a
      illum placeat officia.`
    },
    {
      name: 'Mark Mark',
      title: 'CEO',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus, esse soluta itaque ipsa, commo
      unde, eligendi minus aliquam dolorum praesentium mollitia! Praesentium ratione ducimus iste possimus autem,
      totam molestiae.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quae corrupti quas tenetur
      eaque ipsam. Veritatis laudantium voluptates, impedit provident est, harum minima quos assumenda quisquam a
      illum placeat officia.`
    }
  ]
  constructor(private service: TabServiceService) { }

  ngOnInit(): void {
    this.service.count.subscribe(c => {
      this.count = c;
    })

    this.service.nextCount(4);


  }
}
