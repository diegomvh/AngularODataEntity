import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Contact } from './contact.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { EntityModel } from './entity.model';
import { ContactFolderModel } from './contactfolder.model';
import { ContactModel } from './contact.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { EntityCollection } from './entity.collection';
import { ContactFolderCollection } from './contactfolder.collection';
import { ContactCollection } from './contact.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export interface ContactFolder extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  parentFolderId?: string;
  childFolders?: ContactFolder[];
  contacts?: Contact[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  //#endregion
}