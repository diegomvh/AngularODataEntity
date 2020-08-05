import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Contact } from './contact.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
//#endregion

export interface ContactFolder extends Entity {
  //#region ODataApi Properties
  parentFolderId?: string;
  displayName?: string;
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  contacts?: Contact[];
  childFolders?: ContactFolder[];
  //#endregion
}