import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { Audiencia } from './audiencia.entity';
import { Avenimiento } from './avenimiento.entity';
import { RequirenteAvenimiento } from './requirenteavenimiento.entity';
import { SubMateria } from './submateria.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { AudienciaModel } from './audiencia.model';
import { AvenimientoModel } from './avenimiento.model';
import { RequirenteAvenimientoModel } from './requirenteavenimiento.model';
import { SubMateriaModel } from './submateria.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { AudienciaCollection } from './audiencia.collection';
import { RequirenteAvenimientoCollection } from './requirenteavenimiento.collection';
import { SubMateriaCollection } from './submateria.collection';
//#endregion

export class AvenimientoCollection<E extends Avenimiento, M extends AvenimientoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  public insertar(avenimiento: Avenimiento, destinatarios: RequirenteAvenimiento[], options?: HttpOptions): Observable<AvenimientoModel<Avenimiento>> {
    var res = this._action<{avenimiento: Avenimiento, destinatarios: RequirenteAvenimiento[]}, Avenimiento>('SIU.Insertar');
    res.segment.entitySet('avenimientos');
    return res.call({avenimiento, destinatarios}, 'model', options) as Observable<AvenimientoModel<Avenimiento>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
}