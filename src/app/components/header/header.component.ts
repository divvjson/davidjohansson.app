import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AvatarDialogComponent } from '../avatar-dialog/avatar-dialog.component';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';
import { ThemeService } from '../../services/theme.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatDialogModule,
    MatRippleModule,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private dialog = inject(MatDialog);
  public themeService = inject(ThemeService);
  public faSun = faSun;
  public faMoon = faMoon;
  public dayUrl = 'assets/images/day_50.webp';
  public nightUrl = 'assets/images/night_50.webp';
  public smallAvatarUrl = 'assets/images/me_10.jpg';
  public largeAvatarUrl = 'assets/images/me_50.jpg';

  public openAvatarDialog() {
    this.dialog.open(AvatarDialogComponent, {
      data: {
        avatarUrl: this.largeAvatarUrl
      }
    });
  }
}
