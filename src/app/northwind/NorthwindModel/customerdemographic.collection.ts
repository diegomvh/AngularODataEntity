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
import { CustomerDemographic } from './customerdemographic.entity';
import { Customer } from './customer.entity';
import { CustomerDemographicModel } from './customerdemographic.model';
import { CustomerModel } from './customer.model';
import { CustomerCollection } from './customer.collection';
//#endregion

export class CustomerDemographicCollection<E extends CustomerDemographic, M extends CustomerDemographicModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}