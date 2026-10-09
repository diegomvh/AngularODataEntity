import { Component, inject, signal, viewChild, ViewChild } from '@angular/core';
import { PeopleService, Person, PersonGender } from '../../trip-pin';
import {
  ODataEntitySetResource,
  ODataClient,
  EdmType,
} from 'angular-odata';
import { PersonComponent } from './person.component';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trip-people',
  standalone: true,
  imports: [CommonModule, TableModule, PersonComponent],
  template: `<p-table
      #table
      [columns]="columns()"
      [value]="people()"
      [lazy]="true"
      (onLazyLoad)="loadPeopleLazy($event)"
      [paginator]="true"
      [rows]="size()"
      [totalRecords]="total()"
      [loading]="loading()"
    >
      <ng-template #header let-columns>
        <tr>
        @for (col of columns; track col) {
          <th
            [pSortableColumn]="col.sort ? col.field : ''"
          >
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
      <ng-template #body let-person let-columns="columns">
        <tr (click)="viewPerson(person)">
        @for (col of columns; track col) {
          <td>
            @switch (col.field) {
              @case ('AddressInfo') { <span>{{ person[col.field] | json }}</span> }
              @case ('Gender') { <span>{{ Gender[person[col.field]] | json }}</span> }
              @default { <span>{{ person[col.field] }}</span> }
            }
          </td>
          }
        </tr>
      </ng-template>
    </p-table>
    <trip-person #person></trip-person>`,
})
export class PeopleComponent {
  peopleService = inject(PeopleService);

  people = signal<Person[]>([]);
  columns = signal<{ field: string; header: string; sort: boolean; filter: boolean }[]>([]);

  total = signal<number>(0);
  size =  signal<number>(0);

  resource: ODataEntitySetResource<Person>;
  loading = signal<boolean>(false);
  Gender = PersonGender;

  person = viewChild.required(PersonComponent);

  constructor() {
    this.resource = this.peopleService.entities();
    const schema = this.resource.structuredType();
    const columns =
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
            filter: f.type === EdmType.String,
          }))
        : [];
    this.columns.set(columns);
  }

  fetch(resource: ODataEntitySetResource<Person>) {
    this.loading.set(true);
    resource
      .fetch({ withCount: true, fetchPolicy: 'cache-and-network' })
      .subscribe(({ entities: people, annots }) => {
        this.people.set(people ?? []);
        if (this.total() === 0) this.total.set(annots.count as number);
        if (this.size() === 0) this.size.set(annots.skip ?? this.people().length);
        this.loading.set(false);
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
    this.total.set(0);
    this.fetch(this.resource);
  }

  loadPeopleLazy(event: TableLazyLoadEvent) {
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
    this.person().show(person.UserName);
  }
}
