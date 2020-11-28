import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from './requirente.entity';
import { Nacionalidad } from './nacionalidad.entity';
import { RequirenteModel } from './requirente.model';
import { RequirenteCollection } from './requirente.collection';
import { NacionalidadCollection } from './nacionalidad.collection';
//#endregion

export class NacionalidadModel<E extends Nacionalidad> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  oculto: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirentes?: RequirenteCollection<Requirente, RequirenteModel<Requirente>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}