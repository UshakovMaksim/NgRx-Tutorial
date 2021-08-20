import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";

export const extStoreDevtoolsModule = StoreDevtoolsModule.instrument({
  maxAge: 25,
  logOnly: environment.production,
  autoPause: true
})
