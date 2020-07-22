import { Component, OnInit } from '@angular/core';
import { ODataEntitySetResource, ODataSettings, ODataClient } from 'angular-odata';
import { Product, ProductsService, Employee, EmployeesService } from 'src/app/northwind';

@Component({
  selector: 'northwind-employees',
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
              <input *ngIf="col.filter" pInputText type="text" (input)="filter($event.target.value, col.field)">
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr>
            <td *ngFor="let col of columns" [ngSwitch]="col.field">
              <span>{{rowData[col.field]}}</span>
            </td>
        </tr>
    </ng-template>
</p-table>`,
})
export class EmployeesComponent implements OnInit {
  rows: Employee[];
  cols: any[];

  total: number;
  size: number = 6;

  resource: ODataEntitySetResource<Employee>;
  loading: boolean;

  constructor(
    private employees: EmployeesService
  ) { 
    this.resource = this.employees.entities().top(this.size);
  }

  ngOnInit() {
    let config = this.resource.config();
    this.cols = config.fields()
      .filter(f => !f.navigation)
      .map(f => ({ field: f.name, header: f.name, sort: !f.collection, filter: f.type === 'Edm.String' }));
    this.loading = true;
  }

  fetch(resource: ODataEntitySetResource<Employee>) {
    this.loading = true;
    resource.get({withCount: true}).subscribe(([employees, odata]) => {
      this.rows = employees;
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
      this.resource.query.filter().assign(filter);
    } else {
      this.resource.query.filter().unset(field);
    }
    this.total = 0;
    this.fetch(this.resource);
  }

  loadPeopleLazy(event) {
    //Pagination
    let resource = this.resource.skip(event.first).top(event.rows);
    //Ordering
    if (event.sortField)
      resource = resource.orderBy([[event.sortField, event.sortOrder == -1 ? "desc": "asc"]]);
    this.fetch(resource);
  }
}