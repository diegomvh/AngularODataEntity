import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RegistryHive } from './registryhive.enum';
import { RegistryOperation } from './registryoperation.enum';
import { RegistryValueType } from './registryvaluetype.enum';
import { RegistryKeyState } from './registrykeystate.entity';
import { RegistryKeyStateCollection } from './registrykeystate.collection';
//#endregion

export class RegistryKeyStateModel<E extends RegistryKeyState> extends ODataModel<E> {
  //#region ODataApi Properties
  hive?: RegistryHive;
  key?: string;
  oldKey?: string;
  oldValueData?: string;
  oldValueName?: string;
  operation?: RegistryOperation;
  processId?: number;
  valueData?: string;
  valueName?: string;
  valueType?: RegistryValueType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}