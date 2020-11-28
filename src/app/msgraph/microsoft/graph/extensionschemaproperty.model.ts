import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExtensionSchemaProperty } from './extensionschemaproperty.entity';
import { ExtensionSchemaPropertyCollection } from './extensionschemaproperty.collection';
//#endregion

export class ExtensionSchemaPropertyModel<E extends ExtensionSchemaProperty> extends ODataModel<E> {
  //#region ODataApi Properties
  name?: string;
  type?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}