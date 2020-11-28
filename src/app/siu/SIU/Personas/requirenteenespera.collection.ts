import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { RequirenteEnEspera } from './requirenteenespera.entity';
import { Caso } from '../Tramites/caso.entity';
import { CategoriaCaso } from '../Tramites/categoriacaso.entity';
import { SubMateria } from '../Tramites/submateria.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { RequirenteEnEsperaModel } from './requirenteenespera.model';
import { CasoModel } from '../Tramites/caso.model';
import { CategoriaCasoModel } from '../Tramites/categoriacaso.model';
import { SubMateriaModel } from '../Tramites/submateria.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { CategoriaCasoCollection } from '../Tramites/categoriacaso.collection';
import { SubMateriaCollection } from '../Tramites/submateria.collection';
//#endregion

export class RequirenteEnEsperaCollection<E extends RequirenteEnEspera, M extends RequirenteEnEsperaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}