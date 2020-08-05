import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ExtensionSchemaProperty } from './extensionschemaproperty.entity';
//#endregion

export interface SchemaExtension extends Entity {
  //#region ODataApi Properties
  description?: string;
  targetTypes: string[];
  properties: ExtensionSchemaProperty[];
  status: string;
  owner: string;
  //#endregion
}