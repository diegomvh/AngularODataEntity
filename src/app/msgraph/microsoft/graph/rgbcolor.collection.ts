import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RgbColor } from './rgbcolor.entity';
import { RgbColorModel } from './rgbcolor.model';
//#endregion

export class RgbColorCollection<E extends RgbColor, M extends RgbColorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}