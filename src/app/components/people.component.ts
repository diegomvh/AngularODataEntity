import { Component } from '@angular/core';
import { PeopleService, Person } from '../trippin';

@Component({
  selector: 'trip-people',
  template: `<p-table [columns]="cols" [value]="rows" [lazy]="true" (onLazyLoad)="loadPeopleLazy($event)" [paginator]="true" 
    [rows]="size" [totalRecords]="total" [loading]="loading">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns" [pSortableColumn]="col.sort ? col.field : ''">
                {{col.header}}
                <p-sortIcon *ngIf="col.sort" [field]="col.field" ariaLabel="Activate to sort" ariaLabelDesc="Activate to sort in descending order" ariaLabelAsc="Activate to sort in ascending order"></p-sortIcon>
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr>
            <td *ngFor="let col of columns">
                {{rowData[col.field]}}
            </td>
        </tr>
    </ng-template>
</p-table>`,
})
export class PeopleComponent {
  rows: Person[];
  cols: any[];

  total: number;
  size: number;

  loading: boolean;

  constructor(
    private people: PeopleService
  ) { }


  ngOnInit() {
    this.cols = [
      { field: 'UserName', header: 'User Name', sort: true },
      { field: 'FirstName', header: 'First Name', sort: true },
      { field: 'LastName', header: 'Last Name', sort: true },
      { field: 'Gender', header: 'Gender', sort: false },
      { field: 'Emails', header: 'Emails', sort: false }
    ];
    this.loading = true;
  }

  loadPeopleLazy(event) {
    console.log(event);
    this.loading = true;
    //datasource imitation
    let res = this.people.entities();
    //Pagination
    if (event.first)
      res.skip(event.first);
    if (event.rows)
      res.top(event.rows);
    //Ordering
    if (event.sortField)
      res.orderBy(event.sortField + (event.sortOrder == -1 ? " desc": " asc"));
    res.get({withCount: true}).subscribe(people => {
      this.rows = people.value;
      if (!this.total)
        this.total = people.count;
      if (!this.size)
        this.size = people.skip;
      this.loading = false;
    });
  }
}