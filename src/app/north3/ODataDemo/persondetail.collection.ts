import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Address } from './address.complex';
import { Person } from './person.entity';
import { PersonDetail } from './persondetail.entity';
import { AddressModel } from './address.model';
import { PersonModel } from './person.model';
import { PersonDetailModel } from './persondetail.model';
import { AddressCollection } from './address.collection';
import { PersonCollection } from './person.collection';
//#endregion

export class PersonDetailCollection<E extends PersonDetail, M extends PersonDetailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}