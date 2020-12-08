import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GeoDetailCategory } from './geodetailcategory.entity';
import { GeoDetailCategoryCollection } from './geodetailcategory.collection';
//#endregion

export class GeoDetailCategoryModel<E extends GeoDetailCategory> extends ODataModel<E> {
  //#region ODataApi Properties
  Key!: string;
  Title?: string;
  Description?: string;
  Municipality?: string;
  DetailRegionCode?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}