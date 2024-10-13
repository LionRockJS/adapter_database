import {ControllerMixinDatabase, Model} from "@lionrockjs/central";
import {DatabaseAdapterBetterSQLite3, ORMAdapterSQLite} from "./index.js";

Model.defaultAdapter = ORMAdapterSQLite;
ControllerMixinDatabase.defaultAdapter = DatabaseAdapterBetterSQLite3;