import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ExtensionSchemaProperty } from './extensionschemaproperty.entity';
import { SchemaExtension } from './schemaextension.entity';
import { ExtensionSchemaPropertyModel } from './extensionschemaproperty.model';
import { ExtensionSchemaPropertyCollection } from './extensionschemaproperty.collection';
import { SchemaExtensionCollection } from './schemaextension.collection';
//#endregion

export class SchemaExtensionModel<E extends SchemaExtension> extends EntityModel<E> {
  //#region ODataApi Properties
  description?: string;
  owner: string;
  properties: ExtensionSchemaPropertyCollection<ExtensionSchemaProperty, ExtensionSchemaPropertyModel<ExtensionSchemaProperty>>;
  status: string;
  targetTypes: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}