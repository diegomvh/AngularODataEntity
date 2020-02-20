import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService, Person } from '../trippin';
import { ODataEntitySetResource, ODataSettings } from 'angular-odata';
import { PersonComponent } from './person.component';

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
        <tr (click)="viewPerson(rowData)">
            <td *ngFor="let col of columns">
                {{rowData[col.field]}}
            </td>
        </tr>
    </ng-template>
</p-table>
<trip-person #person></trip-person>`,
})
export class PeopleComponent implements OnInit {
  rows: Person[];
  cols: any[];

  total: number;
  size: number;

  query: ODataEntitySetResource<Person>;
  loading: boolean;

  @ViewChild('person') person: PersonComponent;

  constructor(
    private settings: ODataSettings,
    private people: PeopleService
  ) { 
    this.query = this.people.entities();
  }

  ngOnInit() {
    let schema = this.settings.schemaForType<Person>(this.query.type()) 
    this.cols = schema.fields
      .filter(f => !f.navigation)
      .map(f => ({ field: f.name, header: f.name, sort: (f.type === 'string' && !f.collection) }));
    this.loading = true;
  }

  fetch() {
    this.loading = true;
    this.query.get({withCount: true}).subscribe(([people, annots]) => {
      console.log(people, annots);
      this.rows = people;
      if (!this.total)
        this.total = annots.count;
      if (!this.size)
        this.size = annots.skip;
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

  viewPerson(person: Person) {
    this.person.show(person.UserName);
  }
}