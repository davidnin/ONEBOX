import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CatalogListingComponent } from "./catalog-listing/catalog-listing.component";
import { SessionListingComponent } from "./session-listing/session-listing.component";

const routes: Routes = [
  { path: "session", component: SessionListingComponent },
  { path: "", component: CatalogListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
