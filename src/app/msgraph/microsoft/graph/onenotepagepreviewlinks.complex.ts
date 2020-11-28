import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ExternalLink } from './externallink.complex';
import { ExternalLinkModel } from './externallink.model';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export interface OnenotePagePreviewLinks {
  //#region ODataApi Properties
  previewImageUrl?: ExternalLink;
  //#endregion
}