import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AvatarDialogComponent } from '../avatar-dialog/avatar-dialog.component';
import { faBurger, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { MatMenuModule } from '@angular/material/menu';

interface MenuItem {
  id: string;
  title: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatDialogModule,
    MatMenuModule,
    MatRippleModule,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private dialog = inject(MatDialog);
  private scrollContainer: HTMLElement | null = null;
  public coverHeightPx = 128;
  public hasScrolledPastCover = false;
  public themeService = inject(ThemeService);
  public faBurger = faBurger;
  public faSun = faSun;
  public faMoon = faMoon;
  public dayUrl = 'assets/images/day_50.webp';
  public nightUrl = 'assets/images/night2_50.webp';
  public smallAvatarUrl = 'assets/images/me_10.jpg';
  public largeAvatarUrl = 'assets/images/me_30.jpg';
  public menuItems: MenuItem[] = [
    {
      id: 'header',
      title: 'Home'
    },
    {
      id: 'contact',
      title: 'Contact'
    },
    {
      id: 'about-me',
      title: 'About Me'
    },
    {
      id: 'showcase',
      title: 'Showcase'
    },
    {
      id: 'work-experience',
      title: 'Work Experience'
    },
    {
      id: 'education',
      title: 'Education'
    }
  ];

  ngAfterViewInit(): void {
    this.scrollContainer = document.getElementById('scroll-container');
    if (this.scrollContainer) {
      this.scrollContainer.addEventListener('scroll', this.handleScroll)
    }
  }

  private handleScroll = () => {
    if (this.scrollContainer) {
      this.hasScrolledPastCover = this.scrollContainer.scrollTop > this.coverHeightPx;
    }
  };

  public scrollTo(menuItem: MenuItem) {
    const section = document.getElementById(menuItem.id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      throw new Error(`Secion with id ${menuItem.id} not found.`);
    }
  }

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
