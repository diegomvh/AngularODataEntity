import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { Caso } from './caso.entity';
import { RequirenteCaso } from './requirentecaso.entity';
import { SubMateria } from './submateria.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { CasoModel } from './caso.model';
import { RequirenteCasoModel } from './requirentecaso.model';
import { SubMateriaModel } from './submateria.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { CasoCollection } from './caso.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { SubMateriaCollection } from './submateria.collection';
//#endregion

export interface HistoricoSubmateria {
  //#region ODataApi Properties
  casoId?: number;
  requirenteId?: number;
  subMateriaId?: number;
  fecha: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: Caso;
  requirente?: Requirente;
  requirenteCaso?: RequirenteCaso;
  subMateria?: SubMateria;
  //#endregion
}