import { Component, inject, signal } from '@angular/core';
import { Airport, AirportsService } from '../../trip-pin';
import { ODataEntitySetResource, ODataClient, EdmType } from 'angular-odata';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trip-airports',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `<p-table
    #table
    [columns]="cols()"
    [value]="rows()"
    [lazy]="true"
    (onLazyLoad)="loadAirportsLazy($event)"
    [paginator]="true"
    [rows]="size()"
    [totalRecords]="total()"
    [loading]="loading()"
  >
    <ng-template pTemplate="header" let-columns>
      <tr>
        @for (col of columns; track col) {
          <th [pSortableColumn]="col.sort ? col.field : ''">
            {{ col.header }}
            @if (col.sort) {
              <p-sortIcon
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
              <input pInputText type="text" (input)="filter($event, col.field)" />
            }
          </th>
        }
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
      <tr>
        @for (col of columns; track col) {
          <td>
            @switch (col.field) {
              @case ('Location') {
                <span>{{ rowData[col.field] | json }}</span>
              }
              @default {
                <span>{{ rowData[col.field] }}</span>
              }
            }
          </td>
        }
      </tr>
    </ng-template>
  </p-table>`,
})
export class AirportsComponent {
  odataClient = inject(ODataClient);
  airportsService = inject(AirportsService);
  rows = signal<Airport[]>([]);
  loading = signal<boolean>(false);
  total = signal<number>(0);
  size = signal<number>(0);
  cols = signal<any[]>([]);

  constructor() {
    const schema = this.airportsService.structuredTypeSchema;
    if (schema !== null) {
      const cols = (schema?.fields({ include_parents: true, include_navigation: false }) ?? [])
        .map((f) => ({ field: f.name, header: f.name, sort: !f.collection, filter: f.type === EdmType.String }));
      this.cols.set(cols);
    }
  }

  fetch(resource: ODataEntitySetResource<Airport>) {
    this.loading.set(true);
    resource
      .fetch({ withCount: true, fetchPolicy: 'cache-and-network' })
      .subscribe(({ entities, annots }) => {
        this.rows.set(entities ?? []);
        this.total.set(annots.count ?? entities?.length ?? 0);
        this.size.set(annots.skip ?? entities?.length ?? 0);
        this.loading.set(false);
      });
  }

  filter(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    field = `tolower(${field})`;
    const resource = this.airportsService.entities();
    if (value) {
      resource.query((q) => {
        let alias = q.alias(value.toLowerCase());
        q.filter().assign({ [field]: { contains: alias } });
      });
    } else {
      resource.query((q) => q.filter().unset(field));
    }
    this.fetch(resource);
  }

  loadAirportsLazy(event: TableLazyLoadEvent) {
    const resource = this.airportsService.entities().query((q) => {
      if (event.first) q.skip(event.first);
      if (event.rows) q.top(event.rows);
      if (event.sortField !== undefined)
        q.orderBy(({e, t}) => (event.sortOrder == 1) ? e().ascending(event.sortField) : e().descending(event.sortField))
    });
    this.fetch(resource);
  }
}
