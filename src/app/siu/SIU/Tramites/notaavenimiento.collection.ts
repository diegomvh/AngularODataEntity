import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { RequirenteNotaAvenimiento } from './requirentenotaavenimiento.entity';
import { NotaAvenimiento } from './notaavenimiento.entity';
import { SubMateria } from './submateria.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { RequirenteNotaAvenimientoModel } from './requirentenotaavenimiento.model';
import { NotaAvenimientoModel } from './notaavenimiento.model';
import { SubMateriaModel } from './submateria.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { RequirenteNotaAvenimientoCollection } from './requirentenotaavenimiento.collection';
import { SubMateriaCollection } from './submateria.collection';
//#endregion

export class NotaAvenimientoCollection<E extends NotaAvenimiento, M extends NotaAvenimientoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}