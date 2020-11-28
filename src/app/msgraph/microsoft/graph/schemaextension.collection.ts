import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ExtensionSchemaProperty } from './extensionschemaproperty.complex';
import { SchemaExtension } from './schemaextension.entity';
import { ExtensionSchemaPropertyModel } from './extensionschemaproperty.model';
import { SchemaExtensionModel } from './schemaextension.model';
import { ExtensionSchemaPropertyCollection } from './extensionschemaproperty.collection';
//#endregion

export class SchemaExtensionCollection<E extends SchemaExtension, M extends SchemaExtensionModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}