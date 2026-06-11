import { Component, inject, signal } from '@angular/core';
import { EdmType, ODataEntitySetResource } from 'angular-odata';
import { Employee, EmployeesService } from '../../northwind';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'northwind-employees',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `<p-table
    #table
    [columns]="cols()"
    [value]="rows()"
    [lazy]="true"
    (onLazyLoad)="loadEmployeesLazy($event)"
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
            <span>{{ rowData[col.field] }}</span>
          </td>
        }
      </tr>
    </ng-template>
  </p-table>`,
})
export class EmployeesComponent {
  employeesService = inject(EmployeesService);
  rows = signal<Employee[]>([]);
  loading = signal<boolean | null>(null);
  total = signal<number>(0);
  size = signal<number>(6);
  cols = signal<any[]>([]);

  constructor() {
    const schema = this.employeesService.structuredTypeSchema;
    if (schema !== null) {
      const cols = (schema?.fields({ include_parents: true, include_navigation: false }) ?? [])
        .filter((f) => !f.navigation)
        .map((f) => ({
          field: f.name,
          header: f.name,
          sort: !f.collection,
          filter: f.type === EdmType.String,
        }));
      this.cols.set(cols);
    }
  }

  fetch(resource: ODataEntitySetResource<Employee>) {
    const firstFetch = this.loading() === null;
    this.loading.set(true);
    resource.fetch({ withCount: firstFetch, fetchPolicy: 'cache-and-network' }).subscribe(({ entities, annots }) => {
      this.rows.set(entities ?? []);
      if (firstFetch) {
        this.total.set(annots.count ?? entities?.length ?? 0);
        this.size.set(annots.skip ?? entities?.length ?? 0);
      }
      this.loading.set(false);
    });
  }

  filter(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const resource = this.employeesService.entities();
    if (value) {
      resource.query((q) => {
        q.filter(({e, t, f}) => e().contains(f.toLower(field), value.toLowerCase()));
      });
    }
    this.fetch(resource);
  }

  loadEmployeesLazy(event: TableLazyLoadEvent) {
    const resource = this.employeesService.entities().query((q) => {
      if (event.first) q.skip(event.first);
      if (event.rows) q.top(event.rows);
      if (event.sortField !== undefined)
        q.orderBy(({e, t}) => (event.sortOrder == 1) ? e().ascending(event.sortField) : e().descending(event.sortField))
    });
    this.fetch(resource);
  }

  photoImgSource(employee: Employee) {
    let binary = '';
    let bytes = new Uint8Array(employee.Photo as ArrayBuffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    var base64 = window.btoa(binary);
    return `data:image/png;base64,${base64}`;
  }
}
