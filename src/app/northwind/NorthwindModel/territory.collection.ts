import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { Region } from './region.entity';
import { RegionModel } from './region.model';
import { Employee } from './employee.entity';
import { EmployeeModel } from './employee.model';
import { EmployeeCollection } from './employee.collection';

export class TerritoryCollection<E extends Territory, M extends TerritoryModel<E>> extends ODataCollection<E, M> {
  
}
