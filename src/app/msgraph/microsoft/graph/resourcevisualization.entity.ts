import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ResourceVisualization {
  //#region ODataApi Properties
  title?: string;
  type?: string;
  mediaType?: string;
  previewImageUrl?: string;
  previewText?: string;
  containerWebUrl?: string;
  containerDisplayName?: string;
  containerType?: string;
  //#endregion
}