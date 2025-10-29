import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';

import { Region } from './region.entity';
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { TerritoryCollection } from './territory.collection';

@Model()
export class RegionModel<E extends Region> extends ODataModel<E> {
  @ModelField()
  declare RegionID: number;
  public $$RegionID() {
    return this.property<number>('RegionID');
  }
  public $RegionID() {
    return this.getAttribute<number>('RegionID') as number;
  }
  
  public RegionID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('RegionID', options) as Observable<number>;
  }

  @ModelField()
  declare RegionDescription: string;
  public $$RegionDescription() {
    return this.property<string>('RegionDescription');
  }
  public $RegionDescription() {
    return this.getAttribute<string>('RegionDescription') as string;
  }
  
  public RegionDescription$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('RegionDescription', options) as Observable<string>;
  }

  @ModelField()
  declare Territories?: TerritoryCollection<Territory, TerritoryModel<Territory>>;
  public $$Territories() {
    return this.navigationProperty<Territory>('Territories');
  }
  public $Territories() {
    return this.getAttribute<Territory>('Territories') as Territory;
  }
  public Territories$$(model: TerritoryCollection<Territory, TerritoryModel<Territory>> | null, options?: ODataOptions) {
    return this.setReference<Territory>('Territories', model, options);
  }
  public Territories$(options?: ODataQueryArgumentsOptions<Territory>) {
    return this.fetchAttribute<Territory>('Territories', options) as Observable<Territory>;
  }

  
  
  
}