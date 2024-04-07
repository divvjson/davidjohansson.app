import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _isDark: boolean = false;
  public get isDark(): boolean {
    return this._isDark;
  }
  private set isDark(value: boolean) {
    this._isDark = value;
  }

  public toggle() {
    if (this.isDark) {
      document.body.classList.remove('dark-theme');
      this.isDark = false;
    } else {
      document.body.classList.add('dark-theme');
      this.isDark = true;
    }
  }
}