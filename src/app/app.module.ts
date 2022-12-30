import { FormsModule ,NgForm,FormBuilder} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CreateComponent } from './supplier/create/create.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './posts/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    SupplierComponent,
    CreateComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
