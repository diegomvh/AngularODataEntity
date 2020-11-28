import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Address } from './address.entity';
import { PersonDetail } from './persondetail.entity';
import { AddressModel } from './address.model';
import { PersonDetailModel } from './persondetail.model';
import { AddressCollection } from './address.collection';
//#endregion

export class PersonDetailCollection<E extends PersonDetail, M extends PersonDetailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}