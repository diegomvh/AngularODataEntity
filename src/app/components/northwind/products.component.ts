import { Component, inject, signal } from '@angular/core';
import { Product, ProductsService } from '../../northwind';
import { ODataEntitySetResource, EdmType } from 'angular-odata';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'northwind-products',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `<p-table
    #table
    [columns]="columns()"
    [value]="products()"
    [lazy]="true"
    (onLazyLoad)="loadProductsLazy($event)"
    [paginator]="true"
    [rows]="size()"
    [totalRecords]="total()"
    [loading]="loading()"
  >
    <ng-template #header let-columns>
      <tr>
        @for (col of columns; track col) {
          <th [pSortableColumn]="col.sort ? col.field : ''">
            {{ col.header }}
            @if (col.sort) {
              <p-sorticon
                [field]="col.field"
                ariaLabel="Activate to sort"
                ariaLabelDesc="Activate to sort in descending order"
                ariaLabelAsc="Activate to sort in ascending order"
              ></p-sorticon>
            }
          </th>
        }
      </tr>
      <tr>
        @for (col of columns; track col) {
          <th>
            @if (col.filter) {
              <input pInputText type="text" (input)="filter($event, col.field)" />
            }
          </th>
        }
      </tr>
    </ng-template>
    <ng-template #body let-product let-columns="columns">
      <tr>
        @for (col of columns; track col) {
          <td>
            <span>{{ product[col.field] }}</span>
          </td>
        }
      </tr>
    </ng-template>
  </p-table>`,
})
export class ProductsComponent {
  productsService = inject(ProductsService);

  products = signal<Product[]>([]);
  columns = signal<{ field: string; header: string; sort: boolean; filter: boolean }[]>([]);

  total = signal<number>(0);
  size = signal<number>(6);

  resource: ODataEntitySetResource<Product>;
  loading = signal<boolean>(false);

  constructor() {
    this.resource = this.productsService.entities().query((q) => q.top(this.size()));
    const schema = this.resource.structuredType();
    const columns =
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
    this.columns.set(columns);
  }

  fetch(resource: ODataEntitySetResource<Product>) {
    this.loading.set(true);
    resource.fetch({ withCount: true }).subscribe(({ entities, annots }) => {
      this.products.set(entities ?? []);
      if (this.total() === 0) this.total.set(annots.count as number);
      this.loading.set(false);
    });
  }

  filter(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    field = `tolower(${field})`;
    if (value) {
      const filter = { [field]: { contains: value.toLowerCase() } };
      this.resource.query((q) => q.filter().assign(filter));
    } else {
      this.resource.query((q) => q.filter().unset(field));
    }
    this.total.set(0);
    this.fetch(this.resource);
  }

  loadProductsLazy(event: TableLazyLoadEvent) {
    //Pagination
    const resource = this.resource.clone().query((q) => {
      if (event.first) q.skip(event.first);
      if (event.rows) q.top(event.rows);
      //Ordering
      if (event.sortField !== undefined)
        q.orderBy([[event.sortField as keyof Product, event.sortOrder == -1 ? 'desc' : 'asc']]);
    });
    this.fetch(resource);
  }
}
