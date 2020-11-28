import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Address } from './address.entity';
import { PersonDetail } from './persondetail.entity';
import { AddressModel } from './address.model';
import { AddressCollection } from './address.collection';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

export class PersonDetailModel<E extends PersonDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  PersonID: number;
  Age: number;
  Gender: boolean;
  Phone?: string;
  Address?: AddressModel<Address>;
  Photo: any;
  Person?: PersonModel<Person>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}