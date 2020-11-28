import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Caso } from './caso.entity';
import { Expediente } from './expediente.entity';
import { CasoModel } from './caso.model';
import { ExpedienteModel } from './expediente.model';
import { CasoCollection } from './caso.collection';
import { ExpedienteCollection } from './expediente.collection';
//#endregion

export interface CasoJudiciable {
  //#region ODataApi Properties
  casoId?: number;
  expedienteId?: number;
  key?: string;
  envio: Date;
  recepcion?: Date;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: Caso;
  expediente?: Expediente;
  //#endregion
}