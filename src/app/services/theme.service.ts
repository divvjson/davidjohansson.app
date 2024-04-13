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