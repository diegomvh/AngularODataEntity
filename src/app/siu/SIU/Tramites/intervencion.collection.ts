import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IntervencionTipos } from './intervenciontipos.enum';
import { Etiqueta } from '../Metadatos/etiqueta.entity';
import { Recurso } from '../Recursos/recurso.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Institucion } from '../Lugares/institucion.entity';
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { Intervencion } from './intervencion.entity';
import { EtiquetaModel } from '../Metadatos/etiqueta.model';
import { RecursoModel } from '../Recursos/recurso.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { InstitucionModel } from '../Lugares/institucion.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { IntervencionModel } from './intervencion.model';
import { EtiquetaCollection } from '../Metadatos/etiqueta.collection';
import { RecursoCollection } from '../Recursos/recurso.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { InstitucionCollection } from '../Lugares/institucion.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
//#endregion

export class IntervencionCollection<E extends Intervencion, M extends IntervencionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}