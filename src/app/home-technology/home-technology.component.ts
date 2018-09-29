import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
declare function require(url: string);
var dta = require('../../assets/data/data.json');

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-home-technology',
    templateUrl: './home-technology.component.html',
    styleUrls: ['./home-technology.component.scss']
})
export class HomeTechnologyComponent implements OnInit {

    technologyImg = dta.techImg;
    bootstrapClass = "tech-mat-card";
    hover;

    @ViewChild('techCard') techCard: ElementRef;

    // @HostListener('mouseenter', ['$event'])

    constructor(public el: ElementRef, public dialog: MatDialog) { }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverview, {
            width: '250px',
            // position: { top: '0', left: '0' },
            data: { name: "tomy", animal: "dog" }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    ngOnInit() {
    }

}



@Component({
    selector: 'dialog-overview',
    templateUrl: 'dialog-overview.html',
})
export class DialogOverview {

    constructor(
        public dialogRef: MatDialogRef<DialogOverview>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
