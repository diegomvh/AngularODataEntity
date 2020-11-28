import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteEnEspera } from '../Personas/requirenteenespera.entity';
import { Caso } from './caso.entity';
import { RequirenteCaso } from './requirentecaso.entity';
import { Avenimiento } from './avenimiento.entity';
import { NotaAvenimiento } from './notaavenimiento.entity';
import { Materia } from './materia.entity';
import { HistoricoSubmateria } from './historicosubmateria.entity';
import { RequirenteEnEsperaModel } from '../Personas/requirenteenespera.model';
import { CasoModel } from './caso.model';
import { RequirenteCasoModel } from './requirentecaso.model';
import { AvenimientoModel } from './avenimiento.model';
import { NotaAvenimientoModel } from './notaavenimiento.model';
import { MateriaModel } from './materia.model';
import { HistoricoSubmateriaModel } from './historicosubmateria.model';
import { RequirenteEnEsperaCollection } from '../Personas/requirenteenespera.collection';
import { CasoCollection } from './caso.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { AvenimientoCollection } from './avenimiento.collection';
import { NotaAvenimientoCollection } from './notaavenimiento.collection';
import { MateriaCollection } from './materia.collection';
import { HistoricoSubmateriaCollection } from './historicosubmateria.collection';
//#endregion

export interface SubMateria {
  //#region ODataApi Properties
  nombre: string;
  descripcion?: string;
  oculto?: boolean;
  materiaId?: number;
  shortname?: string;
  name?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  longname?: string;
  casos?: Caso[];
  avenimientos?: Avenimiento[];
  historicoSubmaterias?: HistoricoSubmateria[];
  notaAvenimientos?: NotaAvenimiento[];
  requirentesEnEsperas?: RequirenteEnEspera[];
  requirenteCasos?: RequirenteCaso[];
  materia?: Materia;
  //#endregion
}