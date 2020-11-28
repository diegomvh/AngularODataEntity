import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RegistryHive } from './registryhive.enum';
import { RegistryOperation } from './registryoperation.enum';
import { RegistryValueType } from './registryvaluetype.enum';
import { RegistryKeyState } from './registrykeystate.complex';
import { RegistryKeyStateModel } from './registrykeystate.model';
//#endregion

export class RegistryKeyStateCollection<E extends RegistryKeyState, M extends RegistryKeyStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}