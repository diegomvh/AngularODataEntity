import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GeoDetailCategory } from './geodetailcategory.entity';
import { GeoDetailCategoryCollection } from './geodetailcategory.collection';
//#endregion

@Model()
export class GeoDetailCategoryModel<E extends GeoDetailCategory> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Key!: string;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  Municipality?: string;
  
  
  @ModelField()
  DetailRegionCode?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}