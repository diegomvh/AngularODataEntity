import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteCaso } from './requirentecaso.entity';
import { CasoPenal } from './casopenal.entity';
import { EstadoRequirenteCaso } from './estadorequirentecaso.entity';
import { Cita } from '../Agenda/cita.entity';
import { RequirenteCasoModel } from './requirentecaso.model';
import { CasoPenalModel } from './casopenal.model';
import { EstadoRequirenteCasoModel } from './estadorequirentecaso.model';
import { CitaModel } from '../Agenda/cita.model';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { CasoPenalCollection } from './casopenal.collection';
import { EstadoRequirenteCasoCollection } from './estadorequirentecaso.collection';
import { CitaCollection } from '../Agenda/cita.collection';
//#endregion

export interface MovimientoCaso {
  //#region ODataApi Properties
  casoPenalId?: number;
  requirenteId: number;
  estadoCasoId: number;
  fecha: Date;
  observaciones?: string;
  vencimiento1?: Date;
  vencimiento2?: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  casoPenal?: CasoPenal;
  estadoCaso?: EstadoRequirenteCaso;
  requirenteCaso?: RequirenteCaso;
  citas?: Cita[];
  //#endregion
}