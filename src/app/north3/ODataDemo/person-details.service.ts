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
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Address } from './address.complex';
import { PersonDetail } from './person-detail.entity';
import { AddressModel } from './address.model';
import { PersonDetailModel } from './person-detail.model';
import { AddressCollection } from './address.collection';
import { PersonDetailCollection } from './person-detail.collection';
//#endregion

@Injectable()
export class PersonDetailsService extends ODataEntitySetService<PersonDetail> {
  constructor(client: ODataClient) {
    super(client, 'PersonDetails', 'ODataDemo.PersonDetail');
  }
  //#region ODataApiGen Model
  personDetailModel(entity?: Partial<PersonDetail>): PersonDetailModel<PersonDetail> {
    return this.entity().asModel<PersonDetailModel<PersonDetail>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  personDetailCollection(entities?: Partial<PersonDetail>[]): PersonDetailCollection<PersonDetail, PersonDetailModel<PersonDetail>> {
    return this.entities().asCollection<PersonDetailModel<PersonDetail>, PersonDetailCollection<PersonDetail, PersonDetailModel<PersonDetail>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
