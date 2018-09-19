import { Component, HostListener, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('mainHeader') mainHeader: ElementRef;
  
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    // ViewChild('mainHeader');
    this.ngAfterViewInit();
    this.ngAfterViewChecked();

  }

  ngAfterViewInit() {
    console.log("scroll",this.mainHeader.nativeElement.scrollTop, window.pageYOffset );
  }
  
  ngAfterViewChecked() {
    console.log("scroll",this.mainHeader.nativeElement.scrollTop, window.pageYOffset );
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public el: ElementRef) { }

}
