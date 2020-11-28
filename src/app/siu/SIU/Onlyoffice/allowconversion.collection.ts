import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AllowConversion } from './allowconversion.entity';
import { AllowConversionModel } from './allowconversion.model';
//#endregion

export class AllowConversionCollection<E extends AllowConversion, M extends AllowConversionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}