import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserAgentModel } from './useragent.model';
import { ClientPlatform } from './clientplatform.enum';
import { ProductFamily } from './productfamily.enum';
import { ClientUserAgent } from './clientuseragent.entity';
import { ClientUserAgentCollection } from './clientuseragent.collection';
//#endregion

export class ClientUserAgentModel<E extends ClientUserAgent> extends UserAgentModel<E> {
  //#region ODataApi Properties
  platform: ClientPlatform;
  productFamily: ProductFamily;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}