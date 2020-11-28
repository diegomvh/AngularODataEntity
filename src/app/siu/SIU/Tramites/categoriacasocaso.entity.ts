import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Caso } from './caso.entity';
import { CategoriaCaso } from './categoriacaso.entity';
import { MotivoCambioCategoria } from './motivocambiocategoria.entity';
import { CasoModel } from './caso.model';
import { CategoriaCasoModel } from './categoriacaso.model';
import { MotivoCambioCategoriaModel } from './motivocambiocategoria.model';
import { CasoCollection } from './caso.collection';
import { CategoriaCasoCollection } from './categoriacaso.collection';
import { MotivoCambioCategoriaCollection } from './motivocambiocategoria.collection';
//#endregion

export interface CategoriaCasoCaso {
  //#region ODataApi Properties
  categoriaCasoId?: number;
  casoId?: number;
  desde: Date;
  key?: string;
  motivoCambioCategoriaId?: number;
  hasta?: Date;
  observaciones?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  categoriaCaso?: CategoriaCaso;
  caso?: Caso;
  motivoCambioCategoria?: MotivoCambioCategoria;
  //#endregion
}