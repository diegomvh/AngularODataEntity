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
import { Address } from './address.complex';
import { PersonDetail } from './persondetail.entity';
import { AddressModel } from './address.model';
import { PersonDetailModel } from './persondetail.model';
import { AddressCollection } from './address.collection';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

@Injectable()
export class PersonDetailsService extends ODataEntityService<PersonDetail> {
  constructor(protected client: ODataClient) {
    super(client, 'PersonDetails', 'ODataDemo.PersonDetail');
  }

  //#region ODataApi Model
  personDetailModel(): PersonDetailModel<PersonDetail> {
    return this.entity().asModel() as PersonDetailModel<PersonDetail>;
  }
  //#endregion
  //#region ODataApi Collection
  personDetailCollection(): PersonDetailCollection<PersonDetail, PersonDetailModel<PersonDetail>> {
    return this.entities().asCollection() as PersonDetailCollection<PersonDetail, PersonDetailModel<PersonDetail>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
