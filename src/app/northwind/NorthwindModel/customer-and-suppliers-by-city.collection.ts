﻿import { HttpHeaders, HttpParams } from '@angular/common/http';
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
import { CustomerAndSuppliersByCity } from './customer-and-suppliers-by-city.entity';
import { CustomerAndSuppliersByCityModel } from './customer-and-suppliers-by-city.model';
//#endregion

export class CustomerAndSuppliersByCityCollection<E extends CustomerAndSuppliersByCity, M extends CustomerAndSuppliersByCityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}