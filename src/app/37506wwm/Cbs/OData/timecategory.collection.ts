import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryModel } from './timecategory.model';
//#endregion

export class TimeCategoryCollection<E extends TimeCategory, M extends TimeCategoryModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}