import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
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
import { SubMateriaModel } from './submateria.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { RequirenteNotaAvenimientoCollection } from './requirentenotaavenimiento.collection';
import { NotaAvenimientoCollection } from './notaavenimiento.collection';
import { SubMateriaCollection } from './submateria.collection';
//#endregion

export class NotaAvenimientoModel<E extends NotaAvenimiento> extends ODataModel<E> {
  //#region ODataApi Properties
  casoId?: number;
  subMateriaId?: number;
  nroNota: number;
  fecha: Date;
  observaciones?: string;
  asunto?: string;
  referenteId?: number;
  responsableId: number;
  subResponsableId?: number;
  empleadoAltaId?: number;
  fechaAlta?: Date;
  incluyePoder?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: CasoModel<Caso>;
  responsable?: EmpleadoModel<Empleado>;
  empleadoAlta?: EmpleadoModel<Empleado>;
  referente?: EmpleadoModel<Empleado>;
  subResponsable?: EmpleadoModel<Empleado>;
  subMateria?: SubMateriaModel<SubMateria>;
  requirentes?: RequirenteNotaAvenimientoCollection<RequirenteNotaAvenimiento, RequirenteNotaAvenimientoModel<RequirenteNotaAvenimiento>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}