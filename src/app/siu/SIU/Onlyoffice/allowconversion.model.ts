import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AllowConversion } from './allowconversion.entity';
import { AllowConversionCollection } from './allowconversion.collection';
//#endregion

export class AllowConversionModel<E extends AllowConversion> extends ODataModel<E> {
  //#region ODataApi Properties
  bmp: boolean;
  gif: boolean;
  jpg: boolean;
  png: boolean;
  odt: boolean;
  odp: boolean;
  ods: boolean;
  pdf: boolean;
  rtf: boolean;
  txt: boolean;
  docx: boolean;
  xlsx: boolean;
  pptx: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}