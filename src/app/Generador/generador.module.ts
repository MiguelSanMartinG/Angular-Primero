import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"
import { RfcComponent } from "./rfc/rfc.component";
import { PasswordComponent } from './password/password.component';


@NgModule({
    declarations: [
        RfcComponent,
        PasswordComponent
    ],
    exports: [
        RfcComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GeneradorModule {}