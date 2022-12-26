import { FormsModule ,NgForm,FormBuilder} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CreateComponent } from './supplier/create/create.component';
import { MaterialModule } from './material.module';
import { DemoComponent } from './demo/demo.component';
import { SupplierService } from './service/supplier.service';

@NgModule({
  declarations: [
    AppComponent,
    SupplierComponent,
    CreateComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    
  ],
  // providers: [SupplierService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
