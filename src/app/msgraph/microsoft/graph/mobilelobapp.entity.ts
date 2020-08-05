import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { MobileAppContent } from './mobileappcontent.entity';
//#endregion

export interface MobileLobApp extends MobileApp {
  //#region ODataApi Properties
  committedContentVersion?: string;
  fileName?: string;
  size: number;
  contentVersions?: MobileAppContent[];
  //#endregion
}