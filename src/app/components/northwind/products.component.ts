import { Component } from '@angular/core';
import { EdmType, ODataEntitySetResource, ODataStructuredType } from 'angular-odata';
import { Product, ProductsService } from '../../northwind';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'northwind-products',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `<p-table
    #table
    [columns]="cols"
    [value]="rows"
    [lazy]="true"
    (onLazyLoad)="loadProductsLazy($event)"
    [paginator]="true"
    [rows]="size"
    [totalRecords]="total"
    [loading]="loading"
  >
    <ng-template pTemplate="header" let-columns>
      <tr>
        @for (col of columns; track col) {
        <th
          [pSortableColumn]="col.sort ? col.field : ''"
        >
          {{ col.header }}
          @if (col.sort) {
          <p-sortIcon
            *ngIf="col.sort"
            [field]="col.field"
            ariaLabel="Activate to sort"
            ariaLabelDesc="Activate to sort in descending order"
            ariaLabelAsc="Activate to sort in ascending order"
          ></p-sortIcon>
          }
        </th>
        }
      </tr>
      <tr>
        @for (col of columns; track col) {
        <th>
          @if (col.filter) {
          <input
            *ngIf="col.filter"
            pInputText
            type="text"
            (input)="filter($event, col.field)"
          />
          }
        </th>
        }
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
      <tr>
        @for (col of columns; track col) {
        <td>
          <span>{{ rowData[col.field] }}</span>
        </td>
        }
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

  constructor(private products: ProductsService) {
    this.resource = this.products.entities().query((q) => q.top(this.size));
    const schema = this.resource.structuredType();
    this.cols =
      schema !== null
        ? (
          schema?.fields({
            include_parents: true,
            include_navigation: false,
          }) || []
        )
          .filter((f) => !f.navigation)
          .map((f) => ({
            field: f.name,
            header: f.name,
            sort: !f.collection,
            filter: f.type === EdmType.String,
          }))
        : [];
  }

  fetch(resource: ODataEntitySetResource<Product>) {
    this.loading = true;
    resource.fetch({ withCount: true }).subscribe(({ entities, annots }) => {
      this.rows = entities || [];
      if (!this.total) this.total = annots.count as number;
      this.loading = false;
    });
  }

  filter(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    field = `tolower(${field})`;
    if (value) {
      let filter = { [field]: { contains: value.toLowerCase() } };
      this.resource.query((q) => q.filter().assign(filter));
    } else {
      this.resource.query((q) => q.filter().unset(field));
    }
    this.total = 0;
    this.fetch(this.resource);
  }

  loadProductsLazy(event: TableLazyLoadEvent) {
    //Pagination
    let resource = this.resource.clone().query((q) => {
      if (event.first) q.skip(event.first);
      if (event.rows) q.top(event.rows);
      //Ordering
      if (event.sortField !== undefined)
        q.orderBy([
          [
            event.sortField as keyof Product,
            event.sortOrder == -1 ? 'desc' : 'asc',
          ],
        ]);
    });
    this.fetch(resource);
  }
}
