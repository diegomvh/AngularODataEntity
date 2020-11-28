import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { MobileAppContent } from './mobileappcontent.entity';
import { MobileAppModel } from './mobileapp.model';
import { MobileAppContentModel } from './mobileappcontent.model';
import { MobileAppCollection } from './mobileapp.collection';
import { MobileAppContentCollection } from './mobileappcontent.collection';
//#endregion

export interface MobileLobApp extends MobileApp {
  //#region ODataApi Properties
  committedContentVersion?: string;
  fileName?: string;
  size: number;
  contentVersions?: MobileAppContent[];
  //#endregion
}