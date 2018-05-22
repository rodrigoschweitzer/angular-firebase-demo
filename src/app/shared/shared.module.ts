import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentLoadingModule } from '@covalent/core/loading';

const MATERIAL_MODULES = [
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatDialogModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatToolbarModule,
	MatTooltipModule
];

const COVALENT_MODULES = [
	CovalentDialogsModule,
	CovalentLoadingModule
];

@NgModule({
  imports: [
    CommonModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MATERIAL_MODULES,
		COVALENT_MODULES
  ],
  exports: [
    CommonModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MATERIAL_MODULES,
		COVALENT_MODULES
  ],
  declarations: []
})
export class SharedModule { }
