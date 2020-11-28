import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExtensionCollection } from './extension.collection';
import { OpenTypeExtension } from './opentypeextension.entity';
import { OpenTypeExtensionModel } from './opentypeextension.model';
//#endregion

export class OpenTypeExtensionCollection<E extends OpenTypeExtension, M extends OpenTypeExtensionModel<E>> extends ExtensionCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}