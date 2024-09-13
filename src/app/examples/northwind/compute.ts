import { Injector } from "@angular/core";
import { ProductsService } from "../../northwind";

async function usingProductsServiceForComputePriceByTwo(injector: Injector) {
  const productsService = injector.get(ProductsService);

  const products = productsService.entities().query(q => 
    q.compute(({e, t}) => e().field("DoublePrice", ({o}) => o.add(t.UnitPrice, 2)))
  );
  products.fetch().subscribe(console.log);
}

export default async (injector: Injector) => {
  await usingProductsServiceForComputePriceByTwo(injector);
}
