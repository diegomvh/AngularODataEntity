import { Component, ViewChild } from '@angular/core';
import { PeopleService, Person } from '../trippin';
import { ODataEntitySetResource } from 'angular-odata';
import { Table } from 'primeng/table';

@Component({
  selector: 'trip-people',
  template: `<p-table #table [columns]="cols" [value]="rows" [lazy]="true" (onLazyLoad)="loadPeopleLazy($event)" [paginator]="true" 
    [rows]="size" [totalRecords]="total" [loading]="loading">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns" [pSortableColumn]="col.sort ? col.field : ''">
              {{col.header}}
              <p-sortIcon *ngIf="col.sort" [field]="col.field" ariaLabel="Activate to sort" ariaLabelDesc="Activate to sort in descending order" ariaLabelAsc="Activate to sort in ascending order"></p-sortIcon>
            </th>
        </tr>
        <tr>
            <th *ngFor="let col of columns" [ngSwitch]="col.field">
              <input *ngSwitchCase="'UserName'" pInputText type="text" (input)="filter($event.target.value, col.field)">
              <input *ngSwitchCase="'FirstName'" pInputText type="text" (input)="filter($event.target.value, col.field)">
              <input *ngSwitchCase="'LastName'" pInputText type="text" (input)="filter($event.target.value, col.field)">
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

  query: ODataEntitySetResource<Person>;
  loading: boolean;

  constructor(
    private people: PeopleService
  ) { 
    this.query = this.people.entities();
  }

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

  fetch() {
    this.loading = true;
    this.query.get({withCount: true}).subscribe(([people, odata]) => {
      this.rows = people;
      if (!this.total)
        this.total = odata.count;
      if (!this.size)
        this.size = odata.skip;
      this.loading = false;
    });
  }

  filter(value: string, field: string) {
    field = `tolower(${field})`; 
    if (value) {
      let filter = {[field]: {contains: value.toLowerCase()}};
      this.query.filter().assign(filter);
    } else {
      this.query.filter().unset(field);
    }
    this.query.skip().clear();
    this.query.top().clear();
    this.total = 0;
    this.fetch();
  }

  loadPeopleLazy(event) {
    //Pagination
    this.query.skip(event.first);
    this.query.top(event.rows);
    //Ordering
    if (event.sortField)
      this.query.orderBy(event.sortField + (event.sortOrder == -1 ? " desc": " asc"));
    this.fetch();
  }
}