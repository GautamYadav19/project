import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('SampleComponent') SampleComponent: any;
  visibility: boolean = false;
  constructor(
    private breakpoint: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.breakpoint.observe(['(min-width:768px)']).subscribe((res) => {
      if (res.matches) {
        console.log('min-width:768px', res.matches);
        this.visibility = false;
      }
    });
    this.breakpoint.observe(['(max-width:768px)']).subscribe((res) => {
      if (res.matches) {
        console.log('max-width:768px', res.matches);
        this.visibility = true;
      }
    });
    this.cdr.detectChanges();
  }
}
