import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RequirenteEnEspera } from '../Personas/requirenteenespera.entity';
import { CategoriaCaso } from './categoriacaso.entity';
import { CategoriaCasoCaso } from './categoriacasocaso.entity';
import { RequirenteEnEsperaModel } from '../Personas/requirenteenespera.model';
import { CategoriaCasoCasoModel } from './categoriacasocaso.model';
import { RequirenteEnEsperaCollection } from '../Personas/requirenteenespera.collection';
import { CategoriaCasoCollection } from './categoriacaso.collection';
import { CategoriaCasoCasoCollection } from './categoriacasocaso.collection';
//#endregion

export class CategoriaCasoModel<E extends CategoriaCaso> extends ODataModel<E> {
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
  categoriaCasoCasos?: CategoriaCasoCasoCollection<CategoriaCasoCaso, CategoriaCasoCasoModel<CategoriaCasoCaso>>;
  requirentesEnEspera?: RequirenteEnEsperaCollection<RequirenteEnEspera, RequirenteEnEsperaModel<RequirenteEnEspera>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}