import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { AddressConfig } from './address.entity.config';
import { ProductConfig } from './product.entity.config';
import { CategoryConfig } from './category.entity.config';
import { SupplierConfig } from './supplier.entity.config';
import { DemoServiceContainer } from './demoservice.container';
//#endregion

export const ODataDemoSchema = {
  namespace: "ODataDemo",
  enums: [],
  entities: [AddressConfig,
    ProductConfig,
    CategoryConfig,
    SupplierConfig],
  callables: [],
  containers: [DemoServiceContainer]
} as SchemaConfig;