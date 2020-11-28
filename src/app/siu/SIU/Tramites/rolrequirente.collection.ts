import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { RolRequirenteModel } from './rolrequirente.model';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { RequirenteNotaAvenimientoCollection } from './requirentenotaavenimiento.collection';
import { RequirenteAvenimientoCollection } from './requirenteavenimiento.collection';
import { RequirenteCitacionCollection } from './requirentecitacion.collection';
//#endregion

export class RolRequirenteCollection<E extends RolRequirente, M extends RolRequirenteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}