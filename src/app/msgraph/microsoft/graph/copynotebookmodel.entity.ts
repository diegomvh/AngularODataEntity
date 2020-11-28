import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteUserRole } from './onenoteuserrole.enum';
import { IdentitySet } from './identityset.entity';
import { NotebookLinks } from './notebooklinks.entity';
import { IdentitySetModel } from './identityset.model';
import { NotebookLinksModel } from './notebooklinks.model';
import { IdentitySetCollection } from './identityset.collection';
import { NotebookLinksCollection } from './notebooklinks.collection';
//#endregion

export interface CopyNotebookModel {
  //#region ODataApi Properties
  createdBy?: string;
  createdByIdentity?: IdentitySet;
  createdTime?: Date;
  id?: string;
  isDefault?: boolean;
  isShared?: boolean;
  lastModifiedBy?: string;
  lastModifiedByIdentity?: IdentitySet;
  lastModifiedTime?: Date;
  links?: NotebookLinks;
  name?: string;
  sectionGroupsUrl?: string;
  sectionsUrl?: string;
  self?: string;
  userRole?: OnenoteUserRole;
  //#endregion
}