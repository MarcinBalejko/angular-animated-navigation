import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RandomUserService } from '../services/random-user.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, AfterViewInit {
  data: Array<any>;
  currentResults: Array<any>;
  totalRecords: number;
  page: number = 0;
  currentLimit: number = 10;
  currentRange: number = 10;
  currentFrom: number = 0;
  currentTo: number;

  constructor(private randomUser: RandomUserService) {
    this.data = new Array<any>();
  }

  getUsers() {
    this.randomUser.getData().subscribe((data) => {
      let fetchedData = data.results;
      this.currentTo = this.currentLimit;
      this.data = fetchedData;
      this.currentResults = this.data.slice(this.currentFrom, this.currentTo);
      this.totalRecords = data.results.length;
      this.currentFrom = this.page * this.currentLimit;
      this.currentTo = this.currentLimit;
    });
  }

  next() {
    this.page = this.page + 1;
    console.log(this.page);
    this.currentRange = this.currentRange + this.currentLimit;
    this.currentFrom = this.page * this.currentLimit;
    this.currentTo = this.currentRange;
    console.log(this.currentFrom);
    console.log(this.currentTo);
    if (this.currentTo >= this.totalRecords) {
      return;
    }
    this.currentResults = this.data.slice(this.currentFrom, this.currentTo);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit() {}
}
