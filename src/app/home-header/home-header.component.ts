import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements AfterViewInit, OnInit {
  @ViewChild('mainHeader') mainHeader: ElementRef;
  topPos;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    console.log("onScroll");

  }
  
  
  ngAfterViewInit() {
    this.topPos = this.mainHeader.nativeElement.offsetTop;
    console.log('Values on ngAfterViewInit():');
    console.log("mainHeader:", this.mainHeader.nativeElement);
    console.log("topPosition:", this.topPos);

    if (this.topPos <= 0) {
      console.log(this.topPos);

    }

  }

  ngOnInit() { }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
