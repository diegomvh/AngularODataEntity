import { Component, inject, signal } from '@angular/core';
import { Employee, EmployeesService } from '../../northwind';
import { ODataEntitySetResource, EdmType } from 'angular-odata';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'northwind-employees',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `<p-table
    #table
    [columns]="columns()"
    [value]="employees()"
    [lazy]="true"
    (onLazyLoad)="loadEmployeesLazy($event)"
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
    <ng-template #body let-employee let-columns="columns">
      <tr>
        @for (col of columns; track col) {
          <td>
            <span>{{ employee[col.field] }}</span>
          </td>
        }
      </tr>
    </ng-template>
  </p-table>`,
})
export class EmployeesComponent {
  employeesService = inject(EmployeesService);

  employees = signal<Employee[]>([]);
  columns = signal<{ field: string; header: string; sort: boolean; filter: boolean }[]>([]);

  total = signal<number>(0);
  size = signal<number>(6);

  resource: ODataEntitySetResource<Employee>;
  loading = signal<boolean>(false);

  constructor() {
    this.resource = this.employeesService.entities().query((q) => q.top(this.size()));
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

  fetch(resource: ODataEntitySetResource<Employee>) {
    this.loading.set(true);
    resource.fetch({ withCount: true }).subscribe(({ entities, annots }) => {
      this.employees.set(entities ?? []);
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

  loadEmployeesLazy(event: TableLazyLoadEvent) {
    //Pagination
    const resource = this.resource.clone().query((q) => {
      if (event.first) q.skip(event.first);
      if (event.rows) q.top(event.rows);
      //Ordering
      if (event.sortField !== undefined)
        q.orderBy([[event.sortField as keyof Employee, event.sortOrder == -1 ? 'desc' : 'asc']]);
    });
    this.fetch(resource);
  }

  photoImgSource(employee: Employee) {
    let binary = '';
    const bytes = new Uint8Array(employee.Photo as ArrayBuffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return `data:image/png;base64,${window.btoa(binary)}`;
  }
}
