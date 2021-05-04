// Core Items.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * addHero.
   *
   * Method go to create hero view.
   *
   * @since 1.0.0
   * @access public
   */
  addHero() {
    this.router.navigateByUrl('/heroes/detail/' + 'new');
  }

}
