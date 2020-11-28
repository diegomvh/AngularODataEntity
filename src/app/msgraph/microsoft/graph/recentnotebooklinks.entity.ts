import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
import { ExternalLinkModel } from './externallink.model';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export interface RecentNotebookLinks {
  //#region ODataApi Properties
  oneNoteClientUrl?: ExternalLink;
  oneNoteWebUrl?: ExternalLink;
  //#endregion
}