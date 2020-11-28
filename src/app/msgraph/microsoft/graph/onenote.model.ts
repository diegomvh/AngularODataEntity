import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Onenote } from './onenote.entity';
import { Notebook } from './notebook.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenoteSection } from './onenotesection.entity';
import { OnenoteOperation } from './onenoteoperation.entity';
import { OnenotePage } from './onenotepage.entity';
import { OnenoteResource } from './onenoteresource.entity';
import { NotebookModel } from './notebook.model';
import { SectionGroupModel } from './sectiongroup.model';
import { OnenoteSectionModel } from './onenotesection.model';
import { OnenoteOperationModel } from './onenoteoperation.model';
import { OnenotePageModel } from './onenotepage.model';
import { OnenoteResourceModel } from './onenoteresource.model';
import { OnenoteCollection } from './onenote.collection';
import { NotebookCollection } from './notebook.collection';
import { SectionGroupCollection } from './sectiongroup.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
import { OnenoteOperationCollection } from './onenoteoperation.collection';
import { OnenotePageCollection } from './onenotepage.collection';
import { OnenoteResourceCollection } from './onenoteresource.collection';
//#endregion

export class OnenoteModel<E extends Onenote> extends EntityModel<E> {
  //#region ODataApi Properties
  notebooks?: NotebookCollection<Notebook, NotebookModel<Notebook>>;
  operations?: OnenoteOperationCollection<OnenoteOperation, OnenoteOperationModel<OnenoteOperation>>;
  pages?: OnenotePageCollection<OnenotePage, OnenotePageModel<OnenotePage>>;
  resources?: OnenoteResourceCollection<OnenoteResource, OnenoteResourceModel<OnenoteResource>>;
  sectionGroups?: SectionGroupCollection<SectionGroup, SectionGroupModel<SectionGroup>>;
  sections?: OnenoteSectionCollection<OnenoteSection, OnenoteSectionModel<OnenoteSection>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}