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
import { Employee } from './employee.entity';
import { Order } from './order.entity';
import { Territory } from './territory.entity';
import { EmployeeModel } from './employee.model';
import { OrderModel } from './order.model';
import { TerritoryModel } from './territory.model';
import { OrderCollection } from './order.collection';
import { TerritoryCollection } from './territory.collection';
//#endregion

export class EmployeeCollection<E extends Employee, M extends EmployeeModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}