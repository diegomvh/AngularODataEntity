import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Caso } from './caso.entity';
import { CategoriaCaso } from './categoriacaso.entity';
import { CategoriaCasoCaso } from './categoriacasocaso.entity';
import { MotivoCambioCategoria } from './motivocambiocategoria.entity';
import { CasoModel } from './caso.model';
import { CategoriaCasoModel } from './categoriacaso.model';
import { MotivoCambioCategoriaModel } from './motivocambiocategoria.model';
import { CasoCollection } from './caso.collection';
import { CategoriaCasoCollection } from './categoriacaso.collection';
import { CategoriaCasoCasoCollection } from './categoriacasocaso.collection';
import { MotivoCambioCategoriaCollection } from './motivocambiocategoria.collection';
//#endregion

export class CategoriaCasoCasoModel<E extends CategoriaCasoCaso> extends ODataModel<E> {
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
  categoriaCaso?: CategoriaCasoModel<CategoriaCaso>;
  caso?: CasoModel<Caso>;
  motivoCambioCategoria?: MotivoCambioCategoriaModel<MotivoCambioCategoria>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}