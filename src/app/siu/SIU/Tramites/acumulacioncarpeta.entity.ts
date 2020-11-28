import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CasoPenal } from './casopenal.entity';
import { CasoPenalModel } from './casopenal.model';
import { CasoPenalCollection } from './casopenal.collection';
//#endregion

export interface AcumulacionCarpeta {
  //#region ODataApi Properties
  casoHijoId: number;
  casoPadreId: number;
  motivo?: string;
  desde: Date;
  hasta?: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  casoHijo?: CasoPenal;
  casoPadre?: CasoPenal;
  //#endregion
}