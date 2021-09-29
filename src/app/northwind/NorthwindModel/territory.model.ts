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
  public $TerritoryID() {
    return this.property<string>('TerritoryID');
  }
  public getTerritoryID(options?: ODataOptions) {
    return this.getValue<string>('TerritoryID', options) as Observable<string>;
  }
  
  @ModelField()
  TerritoryDescription!: string;
  public $TerritoryDescription() {
    return this.property<string>('TerritoryDescription');
  }
  public getTerritoryDescription(options?: ODataOptions) {
    return this.getValue<string>('TerritoryDescription', options) as Observable<string>;
  }
  
  @ModelField()
  RegionID!: number;
  public $RegionID() {
    return this.property<number>('RegionID');
  }
  public getRegionID(options?: ODataOptions) {
    return this.getValue<number>('RegionID', options) as Observable<number>;
  }
  
  @ModelField()
  Region?: RegionModel<Region>;
  public $Region() {
    return this.navigationProperty<Region>('Region');
  }
  public getRegion() {
    return this.getReference<Region>('Region') as RegionModel<Region>;
  }
  public setRegion(model: RegionModel<Region> | null, options?: ODataOptions) {
    return this.setReference<Region>('Region', model, options);
  }
  @ModelField()
  Employees?: EmployeeCollection<Employee, EmployeeModel<Employee>>;
  public $Employees() {
    return this.navigationProperty<Employee>('Employees');
  }
  public getEmployees() {
    return this.getReference<Employee>('Employees') as EmployeeCollection<Employee, EmployeeModel<Employee>>;
  }
  public setEmployees(model: EmployeeCollection<Employee, EmployeeModel<Employee>> | null, options?: ODataOptions) {
    return this.setReference<Employee>('Employees', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}