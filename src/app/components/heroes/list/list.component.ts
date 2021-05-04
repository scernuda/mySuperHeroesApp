// Core Items.
import { Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';

// Mat table.
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Types import.
import { Hero } from '../../../base/types/hero';

// Services.
import { ListService } from './service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  // Table Config.
  displayedColumns: string[] = ['urlImage', 'id', 'name', 'alias', 
  'hability', 'birthDate', 'race', 'isAlive', 'canFly', 
  'civilStatus', 'numberOfMovies', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  heroes: Hero[] = [];
  dataSource = new MatTableDataSource();


  constructor(private router: Router,private listService: ListService,) {
    // Call the service to load promotions table datasource.
    this.heroes = this.listService.getHeroes();
    this.dataSource = new MatTableDataSource(this.heroes);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
