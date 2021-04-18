import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../services/random-user.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  data: Array<any>;
  totalRecords: string;
  page: number = 1;

  constructor(private randomUser: RandomUserService) {
    this.data = new Array<any>();
  }

  getUsers() {
    this.randomUser.getData().subscribe((data) => {
      console.log(data);
      this.data = data.results;
      this.totalRecords = data.results.length;
    });
  }

  ngOnInit(): void {}
}
