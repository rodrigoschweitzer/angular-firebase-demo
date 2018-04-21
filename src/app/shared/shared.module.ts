import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CovalentLoadingModule } from '@covalent/core/loading';

const MATERIAL_MODULES = [
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatDialogModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatSnackBarModule,
	MatToolbarModule,
	MatTooltipModule,
];

const COVALENT_MODULES = [
	CovalentLoadingModule,
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
