import { Component, OnInit } from '@angular/core';
import { ODataEntitySetResource } from 'angular-odata';
import { LazyLoadEvent } from 'primeng/api';
import { Product, ProductsService } from 'src/app/northwind';

@Component({
  selector: 'northwind-products',
  template: `<p-table #table [columns]="cols" [value]="rows" [lazy]="true" (onLazyLoad)="loadProductsLazy($event)" [paginator]="true"
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
              <input *ngIf="col.filter" pInputText type="text" (input)="filter($event, col.field)">
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
export class ProductsComponent {
  rows: Product[] = [];
  cols: any[];

  total: number = 0;
  size: number = 6;

  resource: ODataEntitySetResource<Product>;
  loading: boolean = false;

  constructor(
    private products: ProductsService
  ) {
    this.resource = this.products.entities().top(this.size);
    const schema = this.resource.schema();
    this.cols = (schema !== null) ?
      (schema?.fields() || [])
        .filter(f => !f.navigation)
        .map(f => ({ field: f.name, header: f.name, sort: !f.collection, filter: f.type === 'Edm.String' })) :
      [];
  }

  fetch(resource: ODataEntitySetResource<Product>) {
    this.loading = true;
    resource.get({withCount: true}).subscribe(({entities, annots}) => {
      this.rows = entities || [];
      if (!this.total)
        this.total = annots.count as number;
      this.loading = false;
    });
  }

  filter(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
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

  loadProductsLazy(event: LazyLoadEvent) {
    //Pagination
    let resource = this.resource.clone();
    if (event.first !== undefined)
      resource = resource.skip(event.first);
    if (event.rows !== undefined)
      resource = resource.top(event.rows);
    //Ordering
    if (event.sortField !== undefined)
      resource = resource.orderBy([[event.sortField as keyof Product, event.sortOrder == -1 ? "desc": "asc"]]);
    this.fetch(resource);
  }
}
