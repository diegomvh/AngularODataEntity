import { afterRenderEffect, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Airline, AirlinesService } from '../../trip-pin';
import { ODataEntitySetResource, EdmType } from 'angular-odata';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trip-airlines',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `<p-table
    #table
    [columns]="columns()"
    [value]="airlines()"
    [lazy]="true"
    (onLazyLoad)="loadAirlinesLazy($event)"
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
    <ng-template #body let-airline let-columns="columns">
      <tr>
        @for (col of columns; track col) {
          <td>
            {{ airline[col.field] }}
          </td>
        }
      </tr>
    </ng-template>
  </p-table>`,
})
export class AirlinesComponent {
  airlinesService = inject(AirlinesService);

  airlines = signal<Airline[]>([]);
  columns = signal<{ field: string; header: string; sort: boolean; filter: boolean }[]>([]);

  total = signal<number>(0);
  size =  signal<number>(0);

  resource: ODataEntitySetResource<Airline>;
  loading = signal<boolean>(false);

  constructor() {
    this.resource = this.airlinesService.entities();
    const schema = this.resource.structuredType();
    const cols =
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
    this.columns.set(cols);
  }

  fetch(resource: ODataEntitySetResource<Airline>) {
    this.loading.set(true);
    resource
      .fetch({ withCount: true, fetchPolicy: 'cache-and-network' })
      .subscribe(({ entities, annots }) => {
        this.airlines.set(entities ?? []);
        if (this.total() === 0)
          this.total.set(annots.count as number);
        if (this.size() === 0)
          this.size.set(annots.skip ?? this.airlines().length);
        this.loading.set(false);
      });
  }

  filter(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    field = `tolower(${field})`;
    if (value) {
      this.resource.query((q) => {
        let alias = q.alias(value.toLowerCase());
        q.filter().assign({ [field]: { contains: alias } });
      });
    } else {
      this.resource.query((q) => q.filter().unset(field));
    }
    this.total.set(0);
    this.fetch(this.resource);
  }

  loadAirlinesLazy(event: TableLazyLoadEvent) {
    //Pagination
    const resource = this.resource.clone().query((q) => {
      if (event.first) q.skip(event.first);
      if (event.rows) q.top(event.rows);
      //Ordering
      if (event.sortField !== undefined)
        q.orderBy([[event.sortField as keyof Airline, event.sortOrder == -1 ? 'desc' : 'asc']]);
    });
    this.fetch(resource);
  }
}
