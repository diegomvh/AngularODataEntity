import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExtensionSchemaProperty } from './extensionschemaproperty.entity';
import { ExtensionSchemaPropertyModel } from './extensionschemaproperty.model';
//#endregion

export class ExtensionSchemaPropertyCollection<E extends ExtensionSchemaProperty, M extends ExtensionSchemaPropertyModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}