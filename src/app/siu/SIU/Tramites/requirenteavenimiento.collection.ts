import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Avenimiento } from './avenimiento.entity';
import { RequirenteAvenimiento } from './requirenteavenimiento.entity';
import { RolRequirente } from './rolrequirente.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { AvenimientoModel } from './avenimiento.model';
import { RequirenteAvenimientoModel } from './requirenteavenimiento.model';
import { RolRequirenteModel } from './rolrequirente.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { AvenimientoCollection } from './avenimiento.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export class RequirenteAvenimientoCollection<E extends RequirenteAvenimiento, M extends RequirenteAvenimientoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}