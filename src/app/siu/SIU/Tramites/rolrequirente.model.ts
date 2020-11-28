import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RequirenteCaso } from './requirentecaso.entity';
import { RequirenteNotaAvenimiento } from './requirentenotaavenimiento.entity';
import { RequirenteAvenimiento } from './requirenteavenimiento.entity';
import { RequirenteCitacion } from './requirentecitacion.entity';
import { RolRequirente } from './rolrequirente.entity';
import { RequirenteCasoModel } from './requirentecaso.model';
import { RequirenteNotaAvenimientoModel } from './requirentenotaavenimiento.model';
import { RequirenteAvenimientoModel } from './requirenteavenimiento.model';
import { RequirenteCitacionModel } from './requirentecitacion.model';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { RequirenteNotaAvenimientoCollection } from './requirentenotaavenimiento.collection';
import { RequirenteAvenimientoCollection } from './requirenteavenimiento.collection';
import { RequirenteCitacionCollection } from './requirentecitacion.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export class RolRequirenteModel<E extends RolRequirente> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirenteCasos?: RequirenteCasoCollection<RequirenteCaso, RequirenteCasoModel<RequirenteCaso>>;
  requirenteAvenimientos?: RequirenteAvenimientoCollection<RequirenteAvenimiento, RequirenteAvenimientoModel<RequirenteAvenimiento>>;
  requirenteCitaciones?: RequirenteCitacionCollection<RequirenteCitacion, RequirenteCitacionModel<RequirenteCitacion>>;
  requirenteNotasAvenimientos?: RequirenteNotaAvenimientoCollection<RequirenteNotaAvenimiento, RequirenteNotaAvenimientoModel<RequirenteNotaAvenimiento>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}