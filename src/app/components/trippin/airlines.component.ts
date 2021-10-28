import { Component } from '@angular/core';
import { Airline, AirlinesService } from '../../trippin';
import { ODataEntitySetResource, ODataClient } from 'angular-odata';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'trip-airlines',
  template: `<p-table
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
        <th
          *ngFor="let col of columns"
          [pSortableColumn]="col.sort ? col.field : ''"
        >
          {{ col.header }}
          <p-sortIcon
            *ngIf="col.sort"
            [field]="col.field"
            ariaLabel="Activate to sort"
            ariaLabelDesc="Activate to sort in descending order"
            ariaLabelAsc="Activate to sort in ascending order"
          ></p-sortIcon>
        </th>
      </tr>
      <tr>
        <th *ngFor="let col of columns" [ngSwitch]="col.field">
          <input
            *ngIf="col.filter"
            pInputText
            type="text"
            (input)="filter($event, col.field)"
          />
        </th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
      <tr>
        <td *ngFor="let col of columns">
          {{ rowData[col.field] }}
        </td>
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
    const schema = this.resource.schema();
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
              filter: f.type === 'Edm.String',
            }))
        : [];
    // Try toJSON, fromJSON
    this.resource = this.client.fromJSON<Airline>(
      this.resource.toJSON()
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

  loadAirlinesLazy(event: LazyLoadEvent) {
    //Pagination
    let resource = this.resource.clone().query((q) => {
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
