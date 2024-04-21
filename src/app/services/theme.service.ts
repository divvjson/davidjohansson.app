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

  constructor() {
    this.setLightTheme();
  }

  public toggle() {
    if (this.isDark) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  private setLightTheme() {
    document.body.classList.remove('dark-theme');
    // Gray scales
    this.setCSSVariable('--white', '#FFFFFF');
    this.setCSSVariable('--gray-50', '#FAFAFA');
    this.setCSSVariable('--gray-100', '#F5F5F5');
    this.setCSSVariable('--gray-200', '#EEEEEE');
    this.setCSSVariable('--gray-300', '#E0E0E0');
    this.setCSSVariable('--gray-400', '#BDBDBD');
    this.setCSSVariable('--gray-500', '#9E9E9E');
    this.setCSSVariable('--gray-600', '#757575');
    this.setCSSVariable('--gray-700', '#616161');
    this.setCSSVariable('--gray-800', '#424242');
    this.setCSSVariable('--gray-900', '#212121');
    this.setCSSVariable('--black', '#000000');
    // Primary
    this.setCSSVariable('--primary-50', '#53E8D5');
    this.setCSSVariable('--primary-50-contrast', 'black');
    this.setCSSVariable('--primary-100', '#39E4D8');
    this.setCSSVariable('--primary-100-contrast', 'black');
    this.setCSSVariable('--primary-200', '#38A0A2');
    this.setCSSVariable('--primary-200-contrast', 'black');
    this.setCSSVariable('--primary-300', '#2F797B');
    this.setCSSVariable('--primary-300-contrast', 'white');
    this.setCSSVariable('--primary-400', '#1D6F73');
    this.setCSSVariable('--primary-400-contrast', 'white');
    this.setCSSVariable('--primary-500', '#155F66');
    this.setCSSVariable('--primary-500-contrast', 'white');
    this.setCSSVariable('--primary-600', '#195052');
    this.setCSSVariable('--primary-600-contrast', 'white');
    this.setCSSVariable('--primary-700', '#183A3B');
    this.setCSSVariable('--primary-700-contrast', 'white');
    this.setCSSVariable('--primary-800', '#122D2D');
    this.setCSSVariable('--primary-800-contrast', 'white');
    this.setCSSVariable('--primary-900', '#091B1B');
    this.setCSSVariable('--primary-900-contrast', 'white');
    this.setCSSVariable('--primary-A100', '#19A8B7');
    this.setCSSVariable('--primary-A100-contrast', 'white');
    this.setCSSVariable('--primary-A200', '#138D8F');
    this.setCSSVariable('--primary-A200-contrast', 'white');
    this.setCSSVariable('--primary-A400', '#0C5B4D');
    this.setCSSVariable('--primary-A400-contrast', 'white');
    this.setCSSVariable('--primary-A700', '#052122');
    this.setCSSVariable('--primary-A700-contrast', 'white');
    // Accent

    this.isDark = false;
  }

  private setDarkTheme() {
    document.body.classList.add('dark-theme');
    this.setCSSVariable('--white', '#000000');
    this.setCSSVariable('--gray-50', '#212121');
    this.setCSSVariable('--gray-100', '#424242');
    this.setCSSVariable('--gray-200', '#616161');
    this.setCSSVariable('--gray-300', '#757575');
    this.setCSSVariable('--gray-400', '#9E9E9E');
    this.setCSSVariable('--gray-500', '#BDBDBD');
    this.setCSSVariable('--gray-600', '#E0E0E0');
    this.setCSSVariable('--gray-700', '#EEEEEE');
    this.setCSSVariable('--gray-800', '#F5F5F5');
    this.setCSSVariable('--gray-900', '#FAFAFA');
    this.setCSSVariable('--black', '#FFFFFF');
    this.isDark = true;
  }

  public getCSSVariable(propertyName: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(propertyName);
  }

  private setCSSVariable(propertyName: string, value: string) {
    document.documentElement.style.setProperty(propertyName, value);
  }
}