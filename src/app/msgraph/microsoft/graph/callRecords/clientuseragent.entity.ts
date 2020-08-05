import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { UserAgent } from './useragent.entity';
import { ClientPlatform } from './clientplatform.enum';
import { ProductFamily } from './productfamily.enum';
//#endregion

export interface ClientUserAgent extends UserAgent {
  //#region ODataApi Properties
  platform: ClientPlatform;
  productFamily: ProductFamily;
  //#endregion
}