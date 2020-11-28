import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { SubMateria } from './submateria.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { SubMateriaModel } from './submateria.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { SubMateriaCollection } from './submateria.collection';
//#endregion

export interface Materia {
  //#region ODataApi Properties
  nombre: string;
  descripcion?: string;
  oculto?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  subMaterias?: SubMateria[];
  oficinas?: Oficina[];
  //#endregion
}