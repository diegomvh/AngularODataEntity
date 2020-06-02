import { Component, OnInit } from '@angular/core';
import { Airline, AirlinesService } from '../../trippin';
import { ODataEntitySetResource, ODataSettings, ODataClient, Alias } from 'angular-odata';

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

  resource: ODataEntitySetResource<Airline>;
  loading: boolean;
  alias: Alias;

  constructor(
    private airlines: AirlinesService
  ) { 
    this.resource = this.airlines.entities();
    this.alias = this.resource.alias("alias");
  }

  ngOnInit() {
    let config = this.resource.config()
    this.cols = config.fields()
      .filter(f => !f.navigation)
      .map(f => ({ field: f.name, header: f.name, sort: (f.type === 'string' && !f.collection) }));
    this.loading = true;
  }

  fetch() {
    this.loading = true;
    this.resource.get({withCount: true}).subscribe(([airlines, annots]) => {
      this.rows = airlines;
      if (!this.total)
        this.total = annots.count;
      if (!this.size)
        this.size = annots.skip || airlines.length;
      this.loading = false;
    });
  }

  filter(value: string, field: string) {
    field = `tolower(${field})`; 
    if (value) {
      this.alias.value = value.toLowerCase();
      let filter = {[field]: {contains: this.alias}};
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
    if (event.sortField)
      this.resource.orderBy([[event.sortField, event.sortOrder == -1 ? "desc": "asc"]]);
    this.fetch();
  }
}