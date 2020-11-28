import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
import { PageLinks } from './pagelinks.entity';
import { Notebook } from './notebook.entity';
import { OnenoteSection } from './onenotesection.entity';
import { PageLinksModel } from './pagelinks.model';
import { OnenoteEntitySchemaObjectModelModel } from './onenoteentityschemaobjectmodel.model';
import { NotebookModel } from './notebook.model';
import { OnenoteSectionModel } from './onenotesection.model';
import { PageLinksCollection } from './pagelinks.collection';
import { OnenoteEntitySchemaObjectModelCollection } from './onenoteentityschemaobjectmodel.collection';
import { NotebookCollection } from './notebook.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
//#endregion

export interface OnenotePage extends OnenoteEntitySchemaObjectModel {
  //#region ODataApi Properties
  content?: any;
  contentUrl?: string;
  createdByAppId?: string;
  lastModifiedDateTime?: Date;
  level?: number;
  links?: PageLinks;
  order?: number;
  title?: string;
  userTags?: string[];
  parentNotebook?: Notebook;
  parentSection?: OnenoteSection;
  //#endregion
}