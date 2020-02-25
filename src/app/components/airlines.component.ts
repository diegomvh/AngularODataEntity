import { Component, OnInit } from '@angular/core';
import { Airline, AirlinesService } from '../trippin';
import { ODataEntitySetResource, ODataSettings } from 'angular-odata';

@Component({
  selector: 'trip-airlines',
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
              <input *ngSwitchCase="'Name'" pInputText type="text" (input)="filter($event.target.value, col.field)">
              <input *ngSwitchCase="'AirlineCode'" pInputText type="text" (input)="filter($event.target.value, col.field)">
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
export class AirlinesComponent implements OnInit {
  rows: Airline[];
  cols: any[];

  total: number;
  size: number;

  query: ODataEntitySetResource<Airline>;
  loading: boolean;

  constructor(
    private settings: ODataSettings,
    private airlines: AirlinesService
  ) { 
    this.query = this.airlines.entities();
  }

  ngOnInit() {
    let schema = this.settings.schemaForType<Airline>(this.query.type()) 
    this.cols = schema.fields
      .filter(f => !f.navigation)
      .map(f => ({ field: f.name, header: f.name, sort: (f.type === 'string' && !f.collection) }));
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
      this.query.orderBy([[event.sortField, event.sortOrder == -1 ? "desc": "asc"]]);
    this.fetch();
  }
}