import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService, Person, PersonGender } from '../trippin';
import { ODataEntitySetResource, ODataSettings, ODataClient } from 'angular-odata';
import { PersonComponent } from './person.component';
import { config } from 'rxjs';

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
            <td *ngFor="let col of columns" [ngSwitch]="col.field">
              <span *ngSwitchCase="'AddressInfo'">{{rowData[col.field] | json}}</span>
              <span *ngSwitchCase="'Gender'">{{Gender[rowData[col.field]]}}</span>
              <span *ngSwitchDefault>{{rowData[col.field]}}</span>
            </td>
        </tr>
    </ng-template>
</p-table>
<trip-person #person></trip-person>`,
})
export class PeopleComponent implements OnInit {
  Gender = PersonGender;
  rows: Person[];
  cols: any[];

  total: number;
  size: number;

  resource: ODataEntitySetResource<Person>;
  loading: boolean;

  @ViewChild('person') person: PersonComponent;

  constructor(
    private settings: ODataSettings,
    private odata: ODataClient,
    private people: PeopleService
  ) { 
    this.resource = this.people.entities();
    console.log(this.resource.toJSON());
    console.log(this.odata.fromJSON(this.resource.toJSON()));
  }

  ngOnInit() {
    let schema = this.settings.schemaForType<Person>(this.resource.type()) 
    console.log(schema.toJsonSchema());
    this.cols = schema.fields
      .filter(f => !f.navigation)
      .map(f => ({ field: f.name, header: f.name, sort: (f.type === 'string' && !f.collection) }));
    this.loading = true;
  }

  fetch() {
    this.loading = true;
    this.resource.get({withCount: true}).subscribe(([people, annots]) => {
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
      this.resource.filter().assign(filter);
    } else {
      this.resource.filter().unset(field);
    }
    this.resource.skip().clear();
    this.resource.top().clear();
    this.total = 0;
    this.fetch();
  }

  loadPeopleLazy(event) {
    //Pagination
    this.resource.skip(event.first);
    this.resource.top(event.rows);
    //Ordering
    if (event.sortField) {
      this.resource.orderBy([[event.sortField, event.sortOrder == -1 ? "desc": "asc"]]);
    }
    this.fetch();
  }

  viewPerson(person: Person) {
    this.person.show(person.UserName);
  }
}