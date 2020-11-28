import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Notebook } from './notebook.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenoteSection } from './onenotesection.entity';
import { OnenoteOperation } from './onenoteoperation.entity';
import { OnenotePage } from './onenotepage.entity';
import { OnenoteResource } from './onenoteresource.entity';
import { EntityModel } from './entity.model';
import { NotebookModel } from './notebook.model';
import { SectionGroupModel } from './sectiongroup.model';
import { OnenoteSectionModel } from './onenotesection.model';
import { OnenoteOperationModel } from './onenoteoperation.model';
import { OnenotePageModel } from './onenotepage.model';
import { OnenoteResourceModel } from './onenoteresource.model';
import { EntityCollection } from './entity.collection';
import { NotebookCollection } from './notebook.collection';
import { SectionGroupCollection } from './sectiongroup.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
import { OnenoteOperationCollection } from './onenoteoperation.collection';
import { OnenotePageCollection } from './onenotepage.collection';
import { OnenoteResourceCollection } from './onenoteresource.collection';
//#endregion

export interface Onenote extends Entity {
  //#region ODataApi Properties
  notebooks?: Notebook[];
  operations?: OnenoteOperation[];
  pages?: OnenotePage[];
  resources?: OnenoteResource[];
  sectionGroups?: SectionGroup[];
  sections?: OnenoteSection[];
  //#endregion
}