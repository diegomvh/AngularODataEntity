import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteEnEspera } from '../Personas/requirenteenespera.entity';
import { CategoriaCasoCaso } from './categoriacasocaso.entity';
import { RequirenteEnEsperaModel } from '../Personas/requirenteenespera.model';
import { CategoriaCasoCasoModel } from './categoriacasocaso.model';
import { RequirenteEnEsperaCollection } from '../Personas/requirenteenespera.collection';
import { CategoriaCasoCasoCollection } from './categoriacasocaso.collection';
//#endregion

export interface CategoriaCaso {
  //#region ODataApi Properties
  nombre: string;
  oculto: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  categoriaCasoCasos?: CategoriaCasoCaso[];
  requirentesEnEspera?: RequirenteEnEspera[];
  //#endregion
}