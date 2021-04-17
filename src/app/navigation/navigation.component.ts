import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ElementRef,
} from '@angular/core';
import { ListItem } from '../models/ListItem';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChildren('listitem') listitem: QueryList<ElementRef>;
  @ViewChild('selectwindow') selectwindow: any;
  items: ListItem[];
  selectedOne: string;
  currentWidth: string;
  currentLeft: string;

  constructor() {}

  ngOnInit(): void {
    this.items = [
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
        selected: true,
      },
      {
        title: 'stage 4',
        link: 'www.youtube.com',
        selected: false,
      },
      {
        title: 'stage 5',
        link: 'www.instagram.com',
        selected: false,
      },
      {
        title: 'final stage',
        link: 'www.twitter.com',
        selected: false,
      },
    ];
  }

  ngAfterViewInit() {
    console.log(this.listitem);
    this.listitem.forEach((el) => {
      if (el.nativeElement.classList.contains('selected')) {
        this.currentLeft = el.nativeElement.offsetLeft + 'px';
        this.currentWidth = el.nativeElement.offsetWidth + 'px';
      }
    });
  }

  adjustSelectorWindow() {
    this.selectwindow.nativeElement.offsetWidth = this.currentWidth;
    this.selectwindow.nativeElement.offsetLeft = this.currentLeft;
  }

  removeSelected(item) {
    this.items.forEach((el) => {
      if (el != item) {
        el.selected = false;
      }
    });
  }

  onResize() {
    setTimeout(() => {
      this.listitem.forEach((el) => {
        if (el.nativeElement.classList.contains('selected')) {
          this.currentLeft = el.nativeElement.offsetLeft + 'px';
          this.currentWidth = el.nativeElement.offsetWidth + 'px';
        }
      });
    }, 100);
  }

  addSelected(selecteditem) {
    this.removeSelected(selecteditem);

    selecteditem.selected = true;
    setTimeout(() => {
      this.listitem.forEach((el) => {
        if (el.nativeElement.classList.contains('selected')) {
          this.currentLeft = el.nativeElement.offsetLeft + 'px';
          this.currentWidth = el.nativeElement.offsetWidth + 'px';
        }
      });
    }, 100);
  }
}
