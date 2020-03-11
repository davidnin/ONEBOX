import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CatalogListingComponent } from "./catalog-listing/catalog-listing.component";
import { AppService } from "./app.service";
import { SessionListingComponent } from "./session-listing/session-listing.component";

@NgModule({
  declarations: [
    AppComponent,
    CatalogListingComponent,
    SessionListingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
