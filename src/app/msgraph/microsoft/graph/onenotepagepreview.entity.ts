import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePagePreviewLinks } from './onenotepagepreviewlinks.entity';
import { OnenotePagePreviewLinksModel } from './onenotepagepreviewlinks.model';
import { OnenotePagePreviewLinksCollection } from './onenotepagepreviewlinks.collection';
//#endregion

export interface OnenotePagePreview {
  //#region ODataApi Properties
  links?: OnenotePagePreviewLinks;
  previewText?: string;
  //#endregion
}