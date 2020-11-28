import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EmpleadoCaso } from './empleadocaso.entity';
import { HistoricoResponsable } from './historicoresponsable.entity';
import { EmpleadoCasoModel } from './empleadocaso.model';
import { HistoricoResponsableModel } from './historicoresponsable.model';
import { EmpleadoCasoCollection } from './empleadocaso.collection';
import { HistoricoResponsableCollection } from './historicoresponsable.collection';
//#endregion

export interface MotivoCambioResponsable {
  //#region ODataApi Properties
  motivo: string;
  descripcion?: string;
  oculto?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  empleadoCasos?: EmpleadoCaso[];
  historicoResponsables?: HistoricoResponsable[];
  //#endregion
}