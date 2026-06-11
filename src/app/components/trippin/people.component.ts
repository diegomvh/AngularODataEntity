import { Component, inject, signal, viewChild } from '@angular/core';
import { PeopleService, Person, PersonGender } from '../../trip-pin';
import { ODataEntitySetResource, ODataClient, EdmType } from 'angular-odata';
import { PersonComponent } from './person.component';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trip-people',
  standalone: true,
  imports: [CommonModule, TableModule, PersonComponent],
  template: `<p-table
      #table
      [columns]="cols()"
      [value]="rows()"
      [lazy]="true"
      (onLazyLoad)="loadPeopleLazy($event)"
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
        <tr (click)="viewPerson(rowData)">
          @for (col of columns; track col) {
            <td>
              @switch (col.field) {
                @case ('AddressInfo') {
                  <span>{{ rowData[col.field] | json }}</span>
                }
                @case ('Gender') {
                  <span>{{ Gender[rowData[col.field]] | json }}</span>
                }
                @default {
                  <span>{{ rowData[col.field] }}</span>
                }
              }
            </td>
          }
        </tr>
      </ng-template>
    </p-table>
    <trip-person #person></trip-person>`,
})
export class PeopleComponent {
  Gender = PersonGender;
  odataClient = inject(ODataClient);
  peopleService = inject(PeopleService);
  rows = signal<Person[]>([]);
  loading = signal<boolean | null>(null);
  total = signal<number>(0);
  size = signal<number>(0);
  cols = signal<any[]>([]);

  person = viewChild.required<PersonComponent>('person');

  constructor() {
    const schema = this.peopleService.structuredTypeSchema;
    if (schema !== null) {
      const cols = (schema?.fields({ include_parents: true, include_navigation: false }) ?? [])
        .map((f) => ({ field: f.name, header: f.name, sort: !f.collection, filter: f.type === EdmType.String }));
      this.cols.set(cols);
    }
  }

  fetch(resource: ODataEntitySetResource<Person>) {
    const firstFetch = this.loading() === null; 
    this.loading.set(true);
    resource
      .fetch({ withCount: firstFetch, fetchPolicy: 'cache-and-network' })
      .subscribe(({ entities, annots }) => {
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
    const resource = this.peopleService.entities();
    if (value) {
      resource.query((q) => {
        q.filter(({e, t, f}) => e().contains(f.toLower(field), value.toLowerCase()));
      });
    }
    this.fetch(resource);
  }

  loadPeopleLazy(event: TableLazyLoadEvent) {
    const resource = this.peopleService.entities().query((q) => {
      if (event.first) q.skip(event.first);
      if (event.rows) q.top(event.rows);
      if (event.sortField !== undefined)
        q.orderBy(({e, t}) => (event.sortOrder == 1) ? e().ascending(event.sortField) : e().descending(event.sortField))
    });
    this.fetch(resource);
  }

  viewPerson(person: Person) {
    this.person().show(person.UserName);
  }
}
