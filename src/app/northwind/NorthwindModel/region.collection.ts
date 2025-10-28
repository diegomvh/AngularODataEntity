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
import { Region } from './region.entity';
import { RegionModel } from './region.model';
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { TerritoryCollection } from './territory.collection';

export class RegionCollection<E extends Region, M extends RegionModel<E>> extends ODataCollection<E, M> {
  
}
