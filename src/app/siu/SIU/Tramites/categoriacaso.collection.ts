import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RequirenteEnEspera } from '../Personas/requirenteenespera.entity';
import { CategoriaCaso } from './categoriacaso.entity';
import { CategoriaCasoCaso } from './categoriacasocaso.entity';
import { RequirenteEnEsperaModel } from '../Personas/requirenteenespera.model';
import { CategoriaCasoModel } from './categoriacaso.model';
import { CategoriaCasoCasoModel } from './categoriacasocaso.model';
import { RequirenteEnEsperaCollection } from '../Personas/requirenteenespera.collection';
import { CategoriaCasoCasoCollection } from './categoriacasocaso.collection';
//#endregion

export class CategoriaCasoCollection<E extends CategoriaCaso, M extends CategoriaCasoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}