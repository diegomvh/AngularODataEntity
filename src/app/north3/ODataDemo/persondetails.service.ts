﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Address } from './address.complex';
import { PersonDetail } from './persondetail.entity';
import { AddressModel } from './address.model';
import { PersonDetailModel } from './persondetail.model';
import { AddressCollection } from './address.collection';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

@Injectable()
export class PersonDetailsService extends ODataEntitySetService<PersonDetail> {
  constructor(protected client: ODataClient) {
    super(client, 'PersonDetails', 'ODataDemo.PersonDetail');
  }
  //#region ODataApi Model
  personDetailModel(attrs?: Partial<PersonDetail>): PersonDetailModel<PersonDetail> {
    return this.entity().asModel<PersonDetailModel<PersonDetail>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  personDetailCollection(models?: Partial<PersonDetail>[]): PersonDetailCollection<PersonDetail, PersonDetailModel<PersonDetail>> {
    return this.entities().asCollection<PersonDetailModel<PersonDetail>, PersonDetailCollection<PersonDetail, PersonDetailModel<PersonDetail>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
