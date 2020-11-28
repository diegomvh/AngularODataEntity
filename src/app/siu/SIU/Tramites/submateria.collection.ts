import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RequirenteEnEspera } from '../Personas/requirenteenespera.entity';
import { Caso } from './caso.entity';
import { RequirenteCaso } from './requirentecaso.entity';
import { Avenimiento } from './avenimiento.entity';
import { NotaAvenimiento } from './notaavenimiento.entity';
import { Materia } from './materia.entity';
import { SubMateria } from './submateria.entity';
import { HistoricoSubmateria } from './historicosubmateria.entity';
import { RequirenteEnEsperaModel } from '../Personas/requirenteenespera.model';
import { CasoModel } from './caso.model';
import { RequirenteCasoModel } from './requirentecaso.model';
import { AvenimientoModel } from './avenimiento.model';
import { NotaAvenimientoModel } from './notaavenimiento.model';
import { MateriaModel } from './materia.model';
import { SubMateriaModel } from './submateria.model';
import { HistoricoSubmateriaModel } from './historicosubmateria.model';
import { RequirenteEnEsperaCollection } from '../Personas/requirenteenespera.collection';
import { CasoCollection } from './caso.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { AvenimientoCollection } from './avenimiento.collection';
import { NotaAvenimientoCollection } from './notaavenimiento.collection';
import { MateriaCollection } from './materia.collection';
import { HistoricoSubmateriaCollection } from './historicosubmateria.collection';
//#endregion

export class SubMateriaCollection<E extends SubMateria, M extends SubMateriaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}