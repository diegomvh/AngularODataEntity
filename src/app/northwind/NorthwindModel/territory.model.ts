import { ODataModel, HttpOptions, Duration } from 'angular-odata';
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

export class TerritoryModel<E extends Territory> extends ODataModel<E> {
  //#region ODataApi Properties
  territoryID: string;
  territoryDescription: string;
  regionID: number;
  region?: RegionModel<Region>;
  employees?: EmployeeCollection<Employee, EmployeeModel<Employee>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public setRegion(model: RegionModel<Region> | null): Observable<this> {
    return this.setNavigationProperty<Region, RegionModel<Region>>('Region', model);
  }
  //#endregion
}