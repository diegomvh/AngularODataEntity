import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LinkList } from '../CBS/Website/ODataApi/Models/linklist.complex';
import { Vacancy } from '../CBS/Website/ODataApi/Models/vacancy.entity';
import { LinkListModel } from '../CBS/Website/ODataApi/Models/linklist.model';
import { VacancyModel } from '../CBS/Website/ODataApi/Models/vacancy.model';
import { LinkListCollection } from '../CBS/Website/ODataApi/Models/linklist.collection';
import { VacancyCollection } from '../CBS/Website/ODataApi/Models/vacancy.collection';
//#endregion

@Injectable()
export class VacanciesService extends ODataEntitySetService<Vacancy> {
  constructor(protected client: ODataClient) {
    super(client, 'Vacancies', 'CBS.Website.ODataApi.Models.Vacancy');
  }
  //#region ODataApiGen Model
  vacancyModel(attrs?: Partial<Vacancy>): VacancyModel<Vacancy> {
    return this.entity().asModel<VacancyModel<Vacancy>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  vacancyCollection(models?: Partial<Vacancy>[]): VacancyCollection<Vacancy, VacancyModel<Vacancy>> {
    return this.entities().asCollection<VacancyModel<Vacancy>, VacancyCollection<Vacancy, VacancyModel<Vacancy>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
