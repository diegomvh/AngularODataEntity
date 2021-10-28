import { Component, ViewChild } from '@angular/core';
import { PeopleService, Person, PersonGender } from '../../trippin';
import { ODataEntitySetResource, ODataClient } from 'angular-odata';
import { PersonComponent } from './person.component';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'trip-people',
  template: `<p-table
      #table
      [columns]="cols"
      [value]="rows"
      [lazy]="true"
      (onLazyLoad)="loadPeopleLazy($event)"
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
        <tr (click)="viewPerson(rowData)">
          <td *ngFor="let col of columns" [ngSwitch]="col.field">
            <span *ngSwitchCase="'AddressInfo'">{{
              rowData[col.field] | json
            }}</span>
            <span *ngSwitchCase="'Gender'">{{
              Gender[rowData[col.field]]
            }}</span>
            <span *ngSwitchDefault>{{ rowData[col.field] }}</span>
          </td>
        </tr>
      </ng-template>
    </p-table>
    <trip-person #person></trip-person>`,
})
export class PeopleComponent {
  Gender = PersonGender;
  rows!: Person[];
  cols: any[];

  total: number = 0;
  size!: number;

  resource: ODataEntitySetResource<Person>;
  loading: boolean = false;

  @ViewChild('person') person!: PersonComponent;

  constructor(private client: ODataClient, private people: PeopleService) {
    this.resource = this.people.entities();
    const schema = this.resource.schema();
    this.cols =
      schema !== null
        ? (
            schema?.fields({
              include_parents: true,
              include_navigation: false,
            }) || []
          ).map((f) => ({
            field: f.name,
            header: f.name,
            sort: !f.collection,
            filter: f.type === 'Edm.String',
          }))
        : [];
    // Try toJSON, fromJSON
    this.resource = this.client.fromJSON<Person>(
      this.resource.toJSON()
    ) as ODataEntitySetResource<Person>;
  }

  fetch(resource: ODataEntitySetResource<Person>) {
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
      let filter = { [field]: { contains: value.toLowerCase() } };
      this.resource.query((q) => q.filter().assign(filter));
    } else {
      this.resource.query((q) => q.filter().unset(field));
    }
    this.total = 0;
    this.fetch(this.resource);
  }

  loadPeopleLazy(event: LazyLoadEvent) {
    //Pagination
    let resource = this.resource.clone().query((q) => {
      if (event.first) q.skip(event.first);
      if (event.rows) q.top(event.rows);
      //Ordering
      if (event.sortField !== undefined)
        q.orderBy([
          [
            event.sortField as keyof Person,
            event.sortOrder == -1 ? 'desc' : 'asc',
          ],
        ]);
    });
    this.fetch(resource);
  }

  viewPerson(person: Person) {
    this.person.show(person.UserName);
  }
}
