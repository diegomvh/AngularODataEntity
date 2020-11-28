import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GeoDetailCategory } from './geodetailcategory.entity';
import { GeoDetailCategoryModel } from './geodetailcategory.model';
//#endregion

export class GeoDetailCategoryCollection<E extends GeoDetailCategory, M extends GeoDetailCategoryModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}