import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items = [
    {
      title: 'stage 1',
      link: 'www.onet.pl',
      selected: false,
    },
    {
      title: 'stage 2',
      link: 'www.interia.pl',
      selected: false,
    },
    {
      title: 'stage 3',
      link: 'www.o2.pl',
      selected: false,
    },
    {
      title: 'stage 4',
      link: 'www.youtube.com',
      selected: false,
    },
    {
      title: 'stage 5',
      link: 'www.instagram.com',
      selected: true,
    },
    {
      title: 'final stage',
      link: 'www.twitter.com',
      selected: false,
    },
  ];
}
