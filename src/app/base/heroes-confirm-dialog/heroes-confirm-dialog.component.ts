import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-heroes-confirm-dialog',
  templateUrl: './heroes-confirm-dialog.component.html',
  styleUrls: ['./heroes-confirm-dialog.component.scss']
})
export class HeroesConfirmDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      type?: string,
      title?: string,
      text: string,
      confirmButton: string,
      rejectButton: string
    }
  ) { }

  ngOnInit(): void {
  }

}
