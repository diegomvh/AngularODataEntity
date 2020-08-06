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
import { LinkList } from '../CBS/Website/ODataApi/Models/linklist.entity';
import { Vacancy } from '../CBS/Website/ODataApi/Models/vacancy.entity';
//#endregion

@Injectable()
export class VacanciesService extends ODataEntityService<Vacancy> {
  constructor(protected client: ODataClient) {
    super(client, 'Vacancies', 'CBS.Website.ODataApi.Models.Vacancy');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
