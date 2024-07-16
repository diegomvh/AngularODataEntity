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
import { Person } from './person.entity';
import { PersonDetail } from './person-detail.entity';
import { PersonModel } from './person.model';
import { PersonDetailModel } from './person-detail.model';
import { PersonDetailCollection } from './person-detail.collection';
//#endregion

export class PersonCollection<E extends Person, M extends PersonModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}