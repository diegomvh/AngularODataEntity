import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { CitacionConParticipante } from './citacionconparticipante.entity';
import { Audiencia } from './audiencia.entity';
import { Citacion } from './citacion.entity';
import { RequirenteCitacion } from './requirentecitacion.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CitacionConParticipanteModel } from './citacionconparticipante.model';
import { AudienciaModel } from './audiencia.model';
import { RequirenteCitacionModel } from './requirentecitacion.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CitacionConParticipanteCollection } from './citacionconparticipante.collection';
import { AudienciaCollection } from './audiencia.collection';
import { CitacionCollection } from './citacion.collection';
import { RequirenteCitacionCollection } from './requirentecitacion.collection';
//#endregion

export class CitacionModel<E extends Citacion> extends ODataModel<E> {
  //#region ODataApi Properties
  audienciaId?: number;
  empleadoAltaId: number;
  fechaImpresion: Date;
  tipo: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  audiencia?: AudienciaModel<Audiencia>;
  empleado?: EmpleadoModel<Empleado>;
  requirenteCitaciones?: RequirenteCitacionCollection<RequirenteCitacion, RequirenteCitacionModel<RequirenteCitacion>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}