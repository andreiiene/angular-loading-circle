import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AngularLoadingCircleModule } from "../../dist/angular-loading-circle";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularLoadingCircleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
