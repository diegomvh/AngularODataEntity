import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ExtensionSchemaProperty } from './extensionschemaproperty.complex';
import { ExtensionSchemaPropertyModel } from './extensionschemaproperty.model';
import { EntityModel } from './entity.model';
import { ExtensionSchemaPropertyCollection } from './extensionschemaproperty.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface SchemaExtension extends Entity {
  //#region ODataApi Properties
  description?: string;
  owner: string;
  properties: ExtensionSchemaProperty[];
  status: string;
  targetTypes: string[];
  //#endregion
}