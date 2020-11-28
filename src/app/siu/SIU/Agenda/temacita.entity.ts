import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Audiencia } from '../Tramites/audiencia.entity';
import { Cita } from './cita.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { AudienciaModel } from '../Tramites/audiencia.model';
import { CitaModel } from './cita.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { AudienciaCollection } from '../Tramites/audiencia.collection';
import { CitaCollection } from './cita.collection';
//#endregion

export interface TemaCita {
  //#region ODataApi Properties
  descripcion: string;
  diasAnticipacion: number;
  sistema: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  audiencias?: Audiencia[];
  citas?: Cita[];
  oficinas?: Oficina[];
  //#endregion
}