import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoTipoEstado } from './recursotipoestado.enum';
import { RecursoEstadoMetadata } from './recursoestadometadata.entity';
import { Recurso } from './recurso.entity';
import { RecursoEstado } from './recursoestado.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoModel } from './recurso.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoCollection } from './recurso.collection';
import { RecursoEstadoCollection } from './recursoestado.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export class RecursoEstadoModel<E extends RecursoEstado> extends ODataModel<E> {
  //#region ODataApi Properties
  recursoId?: number;
  usuarioId: number;
  tipo: RecursoTipoEstado;
  _Metadata?: string;
  metadata?: RecursoEstadoMetadataModel<RecursoEstadoMetadata>;
  nombre: string;
  fecha: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  recurso?: RecursoModel<Recurso>;
  usuario?: EmpleadoModel<Empleado>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}