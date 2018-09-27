import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare function require(url: string);
var data = require('../../assets/data/data.json');


@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  technologyImg = data.techImg;
  menus = data.menu;

  @ViewChild('mainHeader') mainHeader: ElementRef;

  // @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    // ViewChild('mainHeader');
    // this.ngAfterViewInit();
    // this.ngAfterViewChecked();
    console.log("scroll", this.mainHeader.nativeElement.scrollTop, window.pageYOffset);
    

  }

  // ngAfterViewInit() {
  //   console.log("scroll", this.mainHeader.nativeElement.scrollTop, window.pageYOffset);
  // }

  // ngAfterViewChecked() {
  //   console.log("scroll", this.mainHeader.nativeElement.scrollTop, window.pageYOffset);
  // }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public el: ElementRef) { }


  ngOnInit() {
  }

}
