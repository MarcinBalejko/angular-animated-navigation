import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ElementRef,
  Inject,
  Input,
  HostListener,
} from '@angular/core';
import { ListItem } from '../models/ListItem';

@Component({
  selector: 'app-navigation',
  providers: [{ provide: Window, useValue: window }],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChildren('listitem') listitem: QueryList<ElementRef>;
  @ViewChild('selectwindow') selectwindow: any;
  @Input() items: ListItem[];
  selectedOne: string;
  currentWidth: string;
  currentLeft: string;

  constructor(@Inject(Window) private window: Window) {}

  ngOnInit(): void {}

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

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('RESIZED');
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
