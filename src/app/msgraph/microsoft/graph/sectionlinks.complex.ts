import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ExternalLink } from './externallink.complex';
import { ExternalLinkModel } from './externallink.model';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export interface SectionLinks {
  //#region ODataApi Properties
  oneNoteClientUrl?: ExternalLink;
  oneNoteWebUrl?: ExternalLink;
  //#endregion
}