import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnPremisesExtensionAttributes } from './onpremisesextensionattributes.entity';
import { OnPremisesExtensionAttributesModel } from './onpremisesextensionattributes.model';
//#endregion

export class OnPremisesExtensionAttributesCollection<E extends OnPremisesExtensionAttributes, M extends OnPremisesExtensionAttributesModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}