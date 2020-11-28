import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnPremisesExtensionAttributes } from './onpremisesextensionattributes.complex';
import { OnPremisesExtensionAttributesCollection } from './onpremisesextensionattributes.collection';
//#endregion

export class OnPremisesExtensionAttributesModel<E extends OnPremisesExtensionAttributes> extends ODataModel<E> {
  //#region ODataApi Properties
  extensionAttribute1?: string;
  extensionAttribute10?: string;
  extensionAttribute11?: string;
  extensionAttribute12?: string;
  extensionAttribute13?: string;
  extensionAttribute14?: string;
  extensionAttribute15?: string;
  extensionAttribute2?: string;
  extensionAttribute3?: string;
  extensionAttribute4?: string;
  extensionAttribute5?: string;
  extensionAttribute6?: string;
  extensionAttribute7?: string;
  extensionAttribute8?: string;
  extensionAttribute9?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}