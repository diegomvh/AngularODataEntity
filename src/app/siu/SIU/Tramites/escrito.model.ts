import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Recurso } from '../Recursos/recurso.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Expediente } from './expediente.entity';
import { Escrito } from './escrito.entity';
import { RecursoModel } from '../Recursos/recurso.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { ExpedienteModel } from './expediente.model';
import { RecursoCollection } from '../Recursos/recurso.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { ExpedienteCollection } from './expediente.collection';
import { EscritoCollection } from './escrito.collection';
//#endregion

export class EscritoModel<E extends Escrito> extends ODataModel<E> {
  //#region ODataApi Properties
  empleadoId?: number;
  expedienteId?: number;
  extraprocesal?: boolean;
  contenido: string;
  fecha?: Date;
  empleadoRegistroId?: number;
  fechaRegistro?: Date;
  oficinaId?: number;
  esModificable: boolean;
  esEliminable: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  empleado?: EmpleadoModel<Empleado>;
  empleadoRegistro?: EmpleadoModel<Empleado>;
  expediente?: ExpedienteModel<Expediente>;
  oficina?: OficinaModel<Oficina>;
  recursos?: RecursoCollection<Recurso, RecursoModel<Recurso>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}