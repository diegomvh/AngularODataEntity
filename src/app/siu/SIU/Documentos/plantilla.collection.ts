import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoCollection } from '../Recursos/recurso.collection';
import { Categoria } from '../Metadatos/categoria.entity';
import { Plantilla } from './plantilla.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Empleado } from '../Personas/empleado.entity';
import { CategoriaModel } from '../Metadatos/categoria.model';
import { PlantillaModel } from './plantilla.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CategoriaCollection } from '../Metadatos/categoria.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export class PlantillaCollection<E extends Plantilla, M extends PlantillaModel<E>> extends RecursoCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}