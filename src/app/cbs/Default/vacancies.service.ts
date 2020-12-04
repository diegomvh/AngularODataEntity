import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { LinkList } from '../CBS/Website/ODataApi/Models/linklist.complex';
import { Vacancy } from '../CBS/Website/ODataApi/Models/vacancy.entity';
import { LinkListModel } from '../CBS/Website/ODataApi/Models/linklist.model';
import { VacancyModel } from '../CBS/Website/ODataApi/Models/vacancy.model';
import { LinkListCollection } from '../CBS/Website/ODataApi/Models/linklist.collection';
import { VacancyCollection } from '../CBS/Website/ODataApi/Models/vacancy.collection';
//#endregion

@Injectable()
export class VacanciesService extends ODataEntityService<Vacancy> {
  constructor(protected client: ODataClient) {
    super(client, 'Vacancies', 'CBS.Website.ODataApi.Models.Vacancy');
  }

  //#region ODataApi Model
  vacancyModel(attrs?: Partial<Vacancy>): VacancyModel<Vacancy> {
    return this.entity().asModel(attrs || {}) as VacancyModel<Vacancy>;
  }
  //#endregion
  //#region ODataApi Collection
  vacancyCollection(models?: Partial<Vacancy>[]): VacancyCollection<Vacancy, VacancyModel<Vacancy>> {
    return this.entities().asCollection(models || []) as VacancyCollection<Vacancy, VacancyModel<Vacancy>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
