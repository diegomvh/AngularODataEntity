import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteUserRole } from './onenoteuserrole.enum';
import { IdentitySet } from './identityset.complex';
import { CopyNotebookModel } from './copynotebookmodel.complex';
import { NotebookLinks } from './notebooklinks.complex';
import { IdentitySetModel } from './identityset.model';
import { CopyNotebookModelModel } from './copynotebookmodel.model';
import { NotebookLinksModel } from './notebooklinks.model';
import { IdentitySetCollection } from './identityset.collection';
import { NotebookLinksCollection } from './notebooklinks.collection';
//#endregion

export class CopyNotebookModelCollection<E extends CopyNotebookModel, M extends CopyNotebookModelModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}