import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExtensionModel } from './extension.model';
import { OpenTypeExtension } from './opentypeextension.entity';
import { OpenTypeExtensionCollection } from './opentypeextension.collection';
//#endregion

export class OpenTypeExtensionModel<E extends OpenTypeExtension> extends ExtensionModel<E> {
  //#region ODataApi Properties
  extensionName: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}