import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePagePreviewLinks } from './onenotepagepreviewlinks.entity';
//#endregion

export interface OnenotePagePreview {
  //#region ODataApi Properties
  previewText?: string;
  links?: OnenotePagePreviewLinks;
  //#endregion
}