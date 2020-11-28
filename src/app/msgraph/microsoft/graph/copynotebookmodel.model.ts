import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteUserRole } from './onenoteuserrole.enum';
import { IdentitySet } from './identityset.complex';
import { CopyNotebookModel } from './copynotebookmodel.complex';
import { NotebookLinks } from './notebooklinks.complex';
import { IdentitySetModel } from './identityset.model';
import { NotebookLinksModel } from './notebooklinks.model';
import { IdentitySetCollection } from './identityset.collection';
import { CopyNotebookModelCollection } from './copynotebookmodel.collection';
import { NotebookLinksCollection } from './notebooklinks.collection';
//#endregion

export class CopyNotebookModelModel<E extends CopyNotebookModel> extends ODataModel<E> {
  //#region ODataApi Properties
  createdBy?: string;
  createdByIdentity?: IdentitySetModel<IdentitySet>;
  createdTime?: Date;
  id?: string;
  isDefault?: boolean;
  isShared?: boolean;
  lastModifiedBy?: string;
  lastModifiedByIdentity?: IdentitySetModel<IdentitySet>;
  lastModifiedTime?: Date;
  links?: NotebookLinksModel<NotebookLinks>;
  name?: string;
  sectionGroupsUrl?: string;
  sectionsUrl?: string;
  self?: string;
  userRole?: OnenoteUserRole;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}