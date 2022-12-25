import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MaterialComponent=[
  MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule
]
@NgModule({
  imports: [MaterialComponent,ReactiveFormsModule,FormsModule,BrowserAnimationsModule],
  exports: [MaterialComponent]
})
export class MaterialModule { }
