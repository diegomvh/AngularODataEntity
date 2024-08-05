import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
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
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Region } from './region.entity';
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { RegionCollection } from './region.collection';
import { TerritoryCollection } from './territory.collection';
//#endregion

@Model()
export class RegionModel<E extends Region> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  RegionID!: number;
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
  RegionDescription?: string;
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
  Territories?: TerritoryCollection<Territory, TerritoryModel<Territory>>;
  public $$Territories() {
    return this.navigationProperty<Territory>('Territories');
  }
  public $Territories() {
    return this.getAttribute<Territory>('Territories') as TerritoryCollection<Territory, TerritoryModel<Territory>>;
  }
  public Territories$$(model: TerritoryCollection<Territory, TerritoryModel<Territory>> | null, options?: ODataOptions) {
    return this.setReference<Territory>('Territories', model, options);
  }
  public Territories$(options?: ODataQueryArgumentsOptions<Territory>) {
      return this.fetchAttribute<Territory>('Territories', options) as Observable<TerritoryCollection<Territory, TerritoryModel<Territory>>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}