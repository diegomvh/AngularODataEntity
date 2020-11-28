import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteCaso } from '../Tramites/requirentecaso.entity';
import { RequirenteCasoModel } from '../Tramites/requirentecaso.model';
import { RequirenteCasoCollection } from '../Tramites/requirentecaso.collection';
//#endregion

export interface CalidadRequirente {
  //#region ODataApi Properties
  nombre: string;
  criterioOrden: number;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  rolRequirenteCasos?: RequirenteCaso[];
  //#endregion
}