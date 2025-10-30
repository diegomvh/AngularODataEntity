import { Component } from '@angular/core';
import { Airline, AirlinesService } from '../../trip-pin';
import {
  ODataEntitySetResource,
  ODataClient,
  EdmType,
} from 'angular-odata';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trip-airlines',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `<p-table *ngIf="cols"
    #table
    [columns]="cols"
    [value]="rows"
    [lazy]="true"
    (onLazyLoad)="loadAirlinesLazy($event)"
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
          {{ rowData[col.field] }}
        </td>
        }
      </tr>
    </ng-template>
  </p-table>`,
})
export class AirlinesComponent {
  rows: Airline[] = [];
  cols: any[];

  total: number = 0;
  size!: number;

  resource: ODataEntitySetResource<Airline>;
  loading: boolean = false;

  constructor(private client: ODataClient, private airlines: AirlinesService) {
    this.resource = this.airlines.entities();
    console.log(this.resource);
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
    // Try toJSON, fromJSON
    this.resource = this.client.fromJson<Airline>(
      this.resource.toJson()
    ) as ODataEntitySetResource<Airline>;
  }

  fetch(resource: ODataEntitySetResource<Airline>) {
    this.loading = true;
    resource
      .fetch({ withCount: true, fetchPolicy: 'cache-and-network' })
      .subscribe(({ entities, annots }) => {
        this.rows = entities || [];
        if (!this.total) this.total = annots.count as number;
        if (!this.size) this.size = annots.skip || this.rows.length;
        this.loading = false;
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
    this.total = 0;
    this.fetch(this.resource);
  }

  loadAirlinesLazy(event: TableLazyLoadEvent) {
    //Pagination
    let resource = this.resource
      .clone()
      .query((q) => {
        if (event.first) q.skip(event.first);
        if (event.rows) q.top(event.rows);
        //Ordering
        if (event.sortField !== undefined)
          q.orderBy([
            [
              event.sortField as keyof Airline,
              event.sortOrder == -1 ? 'desc' : 'asc',
            ],
          ]);
      });
    this.fetch(resource);
  }
}
