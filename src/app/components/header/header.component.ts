import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AvatarDialogComponent } from '../avatar-dialog/avatar-dialog.component';
import { faBurger, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
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
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private dialog = inject(MatDialog);
  private scrollContainer: HTMLElement | null = null;
  public hasScrolledPastCover = false;
  public themeService = inject(ThemeService);
  public faBurger = faBurger;
  public faSun = faSun;
  public faMoon = faMoon;
  public dayUrl = 'assets/images/day_50.webp';
  public nightUrl = 'assets/images/night2_50.webp';
  public smallAvatarUrl = 'assets/images/me_10.jpg';
  public largeAvatarUrl = 'assets/images/me_30.jpg';

  ngAfterViewInit(): void {
    this.scrollContainer = document.getElementById('scroll-container');
    if (this.scrollContainer) {
      this.scrollContainer.addEventListener('scroll', this.handleScroll)
    }
  }

  private handleScroll = () => {
    if (this.scrollContainer) {
      this.hasScrolledPastCover = this.scrollContainer.scrollTop > 128;
    }
  };

  public openAvatarDialog() {
    this.dialog.open(AvatarDialogComponent, {
      data: {
        avatarUrl: this.largeAvatarUrl
      }
    });
  }

  ngOnDestroy(): void {
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('scroll', this.handleScroll);
    }
  }
}
