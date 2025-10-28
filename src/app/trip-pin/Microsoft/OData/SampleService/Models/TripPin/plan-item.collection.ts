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
import { PlanItem } from './plan-item.entity';
import { PlanItemModel } from './plan-item.model';

export class PlanItemCollection<E extends PlanItem, M extends PlanItemModel<E>> extends ODataCollection<E, M> {
  
}
