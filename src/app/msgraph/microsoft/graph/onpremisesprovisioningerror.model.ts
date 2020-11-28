import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { OnPremisesProvisioningErrorCollection } from './onpremisesprovisioningerror.collection';
//#endregion

export class OnPremisesProvisioningErrorModel<E extends OnPremisesProvisioningError> extends ODataModel<E> {
  //#region ODataApi Properties
  category?: string;
  occurredDateTime?: Date;
  propertyCausingError?: string;
  value?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}