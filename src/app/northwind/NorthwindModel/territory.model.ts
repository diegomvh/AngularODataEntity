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
import { Employee } from './employee.entity';
import { Region } from './region.entity';
import { Territory } from './territory.entity';
import { EmployeeModel } from './employee.model';
import { RegionModel } from './region.model';
import { EmployeeCollection } from './employee.collection';
import { RegionCollection } from './region.collection';
import { TerritoryCollection } from './territory.collection';
//#endregion

@Model()
export class TerritoryModel<E extends Territory> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  TerritoryID!: string;
  public $$TerritoryID() {
    return this.property<string>('TerritoryID');
  }
  public $TerritoryID() {
    return this.getAttribute<string>('TerritoryID') as string;
  }
  
  public TerritoryID$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('TerritoryID', options) as Observable<string>;
  }
  @ModelField()
  TerritoryDescription?: string;
  public $$TerritoryDescription() {
    return this.property<string>('TerritoryDescription');
  }
  public $TerritoryDescription() {
    return this.getAttribute<string>('TerritoryDescription') as string;
  }
  
  public TerritoryDescription$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('TerritoryDescription', options) as Observable<string>;
  }
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
  Region?: RegionModel<Region>;
  public $$Region() {
    return this.navigationProperty<Region>('Region');
  }
  public $Region() {
    return this.getAttribute<Region>('Region') as RegionModel<Region>;
  }
  public Region$$(model: RegionModel<Region> | null, options?: ODataOptions) {
    return this.setReference<Region>('Region', model, options);
  }
  public Region$(options?: ODataQueryArgumentsOptions<Region>) {
      return this.fetchAttribute<Region>('Region', options) as Observable<RegionModel<Region>>;
    }
  @ModelField()
  Employees?: EmployeeCollection<Employee, EmployeeModel<Employee>>;
  public $$Employees() {
    return this.navigationProperty<Employee>('Employees');
  }
  public $Employees() {
    return this.getAttribute<Employee>('Employees') as EmployeeCollection<Employee, EmployeeModel<Employee>>;
  }
  public Employees$$(model: EmployeeCollection<Employee, EmployeeModel<Employee>> | null, options?: ODataOptions) {
    return this.setReference<Employee>('Employees', model, options);
  }
  public Employees$(options?: ODataQueryArgumentsOptions<Employee>) {
      return this.fetchAttribute<Employee>('Employees', options) as Observable<EmployeeCollection<Employee, EmployeeModel<Employee>>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}