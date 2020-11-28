import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CategoriaCasoCaso } from './categoriacasocaso.entity';
import { CategoriaCasoCasoModel } from './categoriacasocaso.model';
import { CategoriaCasoCasoCollection } from './categoriacasocaso.collection';
//#endregion

export interface MotivoCambioCategoria {
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
  categoriaCasoCasos?: CategoriaCasoCaso[];
  //#endregion
}