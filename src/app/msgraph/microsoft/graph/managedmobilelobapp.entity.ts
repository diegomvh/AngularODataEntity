import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedApp } from './managedapp.entity';
import { MobileAppContent } from './mobileappcontent.entity';
//#endregion

export interface ManagedMobileLobApp extends ManagedApp {
  //#region ODataApi Properties
  committedContentVersion?: string;
  fileName?: string;
  size: number;
  contentVersions?: MobileAppContent[];
  //#endregion
}