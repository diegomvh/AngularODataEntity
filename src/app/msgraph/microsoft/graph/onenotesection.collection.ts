import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModelCollection } from './onenoteentityhierarchymodel.collection';
import { SectionLinks } from './sectionlinks.entity';
import { Notebook } from './notebook.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenoteSection } from './onenotesection.entity';
import { OnenoteOperation } from './onenoteoperation.entity';
import { OnenotePage } from './onenotepage.entity';
import { SectionLinksModel } from './sectionlinks.model';
import { NotebookModel } from './notebook.model';
import { SectionGroupModel } from './sectiongroup.model';
import { OnenoteSectionModel } from './onenotesection.model';
import { OnenoteOperationModel } from './onenoteoperation.model';
import { OnenotePageModel } from './onenotepage.model';
import { SectionLinksCollection } from './sectionlinks.collection';
import { NotebookCollection } from './notebook.collection';
import { SectionGroupCollection } from './sectiongroup.collection';
import { OnenoteOperationCollection } from './onenoteoperation.collection';
import { OnenotePageCollection } from './onenotepage.collection';
//#endregion

export class OnenoteSectionCollection<E extends OnenoteSection, M extends OnenoteSectionModel<E>> extends OnenoteEntityHierarchyModelCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}