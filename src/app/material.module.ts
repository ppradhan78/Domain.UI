import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule,MatDatepickerToggle} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table' ;
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
const MaterialComponent=[
  MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule,
  MatCheckboxModule,MatRadioModule,MatIconModule,MatMenuModule,MatGridListModule,MatListModule,
  MatProgressSpinnerModule,MatSliderModule,MatTabsModule,MatTooltipModule,MatTreeModule,
  MatExpansionModule,MatTableModule,MatSortModule,MatCardModule
]
@NgModule({
  imports: [MaterialComponent,ReactiveFormsModule,FormsModule,BrowserAnimationsModule],
  exports: [MaterialComponent]
})
export class MaterialModule { }
