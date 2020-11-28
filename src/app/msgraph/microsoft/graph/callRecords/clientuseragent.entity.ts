import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { UserAgent } from './useragent.entity';
import { ClientPlatform } from './clientplatform.enum';
import { ProductFamily } from './productfamily.enum';
import { UserAgentModel } from './useragent.model';
import { UserAgentCollection } from './useragent.collection';
//#endregion

export interface ClientUserAgent extends UserAgent {
  //#region ODataApi Properties
  platform: ClientPlatform;
  productFamily: ProductFamily;
  //#endregion
}