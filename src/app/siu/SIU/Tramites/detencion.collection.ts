import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LugarDetencion } from '../Lugares/lugardetencion.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { Requirente } from '../Personas/requirente.entity';
import { CasoPenal } from './casopenal.entity';
import { Detencion } from './detencion.entity';
import { LugarDetencionModel } from '../Lugares/lugardetencion.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { CasoPenalModel } from './casopenal.model';
import { DetencionModel } from './detencion.model';
import { LugarDetencionCollection } from '../Lugares/lugardetencion.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { CasoPenalCollection } from './casopenal.collection';
//#endregion

export class DetencionCollection<E extends Detencion, M extends DetencionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}