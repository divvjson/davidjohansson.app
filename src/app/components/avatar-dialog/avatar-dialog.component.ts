import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-avatar-dialog',
  standalone: true,
  imports: [],
  templateUrl: './avatar-dialog.component.html',
  styleUrl: './avatar-dialog.component.scss'
})
export class AvatarDialogComponent {
  private dialogRef = inject(MatDialogRef<AvatarDialogComponent>);
  constructor(@Inject(MAT_DIALOG_DATA) public data: { avatarUrl: string }) { }

  public close() {
    this.dialogRef.close();
  }
}
