import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
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
  //#region ODataApi Properties
  @ModelField()
  TerritoryID!: string;
  
  
  @ModelField()
  TerritoryDescription!: string;
  
  
  @ModelField()
  RegionID!: number;
  
  
  @ModelField()
  Region?: RegionModel<Region>;
  public getRegion({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Region>('Region', {asEntity, ...options}) as Observable<RegionModel<Region>>;
  }
  public setRegion(model: RegionModel<Region> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Region>('Region', model, {asEntity, ...options});
  }
  @ModelField()
  Employees?: EmployeeCollection<Employee, EmployeeModel<Employee>>;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}