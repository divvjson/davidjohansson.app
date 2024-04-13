import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AvatarDialogComponent } from '../avatar-dialog/avatar-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private dialog = inject(MatDialog);
  public coverUrl = 'assets/images/cover.jpg';
  public avatarUrl = 'assets/images/me.jpg';

  public openAvatarDialog() {
    this.dialog.open(AvatarDialogComponent, {
      data: {
        avatarUrl: this.avatarUrl
      }
    });
  }
}
