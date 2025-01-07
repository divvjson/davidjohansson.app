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
    this.isDark ? this.setLightTheme() : this.setDarkTheme();
  }

  private setLightTheme() {
    document.body.classList.remove('dark-theme');
    // Gray scales
    this.setCSSVariable('--white', '#FFFFFF');
    this.setCSSVariable('--gray-50', '#FBFBFB');
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
    this.setCSSVariable('--primary-50', '#4CC7B0');
    this.setCSSVariable('--primary-50-contrast', 'black');
    this.setCSSVariable('--primary-100', '#3ABBAA');
    this.setCSSVariable('--primary-100-contrast', 'black');
    this.setCSSVariable('--primary-200', '#43706E');
    this.setCSSVariable('--primary-200-contrast', 'white');
    this.setCSSVariable('--primary-300', '#334E4D');
    this.setCSSVariable('--primary-300-contrast', 'white');
    this.setCSSVariable('--primary-400', '#214646');
    this.setCSSVariable('--primary-400-contrast', 'white');
    this.setCSSVariable('--primary-500', '#183A3B');
    this.setCSSVariable('--primary-500-contrast', 'white');
    this.setCSSVariable('--primary-600', '#182C2B');
    this.setCSSVariable('--primary-600-contrast', 'white');
    this.setCSSVariable('--primary-700', '#121919');
    this.setCSSVariable('--primary-700-contrast', 'white');
    this.setCSSVariable('--primary-800', '#090E0E');
    this.setCSSVariable('--primary-800-contrast', 'white');
    this.setCSSVariable('--primary-900', '#000000');
    this.setCSSVariable('--primary-900-contrast', 'white');
    this.setCSSVariable('--primary-A100', '#287D80');
    this.setCSSVariable('--primary-A100-contrast', 'white');
    this.setCSSVariable('--primary-A200', '#1D5D5B');
    this.setCSSVariable('--primary-A200-contrast', 'white');
    this.setCSSVariable('--primary-A400', '#0F3029');
    this.setCSSVariable('--primary-A400-contrast', 'white');
    this.setCSSVariable('--primary-A700', '#000000');
    this.setCSSVariable('--primary-A700-contrast', 'white');
    // Accent
    this.setCSSVariable('--accent-50', '#FFFFFF');
    this.setCSSVariable('--accent-50-contrast', 'black');
    this.setCSSVariable('--accent-100', '#FFFFFF');
    this.setCSSVariable('--accent-100-contrast', 'black');
    this.setCSSVariable('--accent-200', '#FFFFFF');
    this.setCSSVariable('--accent-200-contrast', 'black');
    this.setCSSVariable('--accent-300', '#F9EDE5');
    this.setCSSVariable('--accent-300-contrast', 'black');
    this.setCSSVariable('--accent-400', '#F8DFCC');
    this.setCSSVariable('--accent-400-contrast', 'black');
    this.setCSSVariable('--accent-500', '#F8D7B7');
    this.setCSSVariable('--accent-500-contrast', 'black');
    this.setCSSVariable('--accent-600', '#F1CCAE');
    this.setCSSVariable('--accent-600-contrast', 'black');
    this.setCSSVariable('--accent-700', '#E6BEA1');
    this.setCSSVariable('--accent-700-contrast', 'black');
    this.setCSSVariable('--accent-800', '#E3B491');
    this.setCSSVariable('--accent-800-contrast', 'black');
    this.setCSSVariable('--accent-900', '#E3A475');
    this.setCSSVariable('--accent-900-contrast', 'black');
    this.setCSSVariable('--accent-A100', '#FFFFFF');
    this.setCSSVariable('--accent-A100-contrast', 'black');
    this.setCSSVariable('--accent-A200', '#FEE8D9');
    this.setCSSVariable('--accent-A200-contrast', 'black');
    this.setCSSVariable('--accent-A400', '#FBB5A0');
    this.setCSSVariable('--accent-A400-contrast', 'black');
    this.setCSSVariable('--accent-A700', '#F9A261');
    this.setCSSVariable('--accent-A700-contrast', 'black');

    this.isDark = false;
  }

  private setDarkTheme() {
    document.body.classList.add('dark-theme');
    // Gray scales
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
    // Primary
    this.setCSSVariable('--primary-50', '#FFF8E1');
    this.setCSSVariable('--primary-50-contrast', 'black');
    this.setCSSVariable('--primary-100', '#FFECB3');
    this.setCSSVariable('--primary-100-contrast', 'black');
    this.setCSSVariable('--primary-200', '#FFE082');
    this.setCSSVariable('--primary-200-contrast', 'black');
    this.setCSSVariable('--primary-300', '#FFD54F');
    this.setCSSVariable('--primary-300-contrast', 'black');
    this.setCSSVariable('--primary-400', '#FFCA28');
    this.setCSSVariable('--primary-400-contrast', 'black');
    this.setCSSVariable('--primary-500', '#FFC107');
    this.setCSSVariable('--primary-500-contrast', 'black');
    this.setCSSVariable('--primary-600', '#FFB300');
    this.setCSSVariable('--primary-600-contrast', 'black');
    this.setCSSVariable('--primary-700', '#FFA000');
    this.setCSSVariable('--primary-700-contrast', 'black');
    this.setCSSVariable('--primary-800', '#FF8F00');
    this.setCSSVariable('--primary-800-contrast', 'black');
    this.setCSSVariable('--primary-900', '#FF6F00');
    this.setCSSVariable('--primary-900-contrast', 'black');
    this.setCSSVariable('--primary-A100', '#FFE57F');
    this.setCSSVariable('--primary-A100-contrast', 'black');
    this.setCSSVariable('--primary-A200', '#FFD740');
    this.setCSSVariable('--primary-A200-contrast', 'black');
    this.setCSSVariable('--primary-A400', '#FFC400');
    this.setCSSVariable('--primary-A400-contrast', 'black');
    this.setCSSVariable('--primary-A700', '#FFAB00');
    this.setCSSVariable('--primary-A700-contrast', 'black');
    // Accent
    this.setCSSVariable('--accent-50', '#30A8D1');
    this.setCSSVariable('--accent-50-contrast', 'black');
    this.setCSSVariable('--accent-100', '#298CB9');
    this.setCSSVariable('--accent-100-contrast', 'white');
    this.setCSSVariable('--accent-200', '#33556C');
    this.setCSSVariable('--accent-200-contrast', 'white');
    this.setCSSVariable('--accent-300', '#253B49');
    this.setCSSVariable('--accent-300-contrast', 'white');
    this.setCSSVariable('--accent-400', '#172E3E');
    this.setCSSVariable('--accent-400-contrast', 'white');
    this.setCSSVariable('--accent-500', '#0F2131');
    this.setCSSVariable('--accent-500-contrast', 'white');
    this.setCSSVariable('--accent-600', '#0E1A22');
    this.setCSSVariable('--accent-600-contrast', 'white');
    this.setCSSVariable('--accent-700', '#090D10');
    this.setCSSVariable('--accent-700-contrast', 'white');
    this.setCSSVariable('--accent-800', '#020203');
    this.setCSSVariable('--accent-800-contrast', 'white');
    this.setCSSVariable('--accent-900', '#000000');
    this.setCSSVariable('--accent-900-contrast', 'white');
    this.setCSSVariable('--accent-A100', '#1B4C7A');
    this.setCSSVariable('--accent-A100-contrast', 'white');
    this.setCSSVariable('--accent-A200', '#133A54');
    this.setCSSVariable('--accent-A200-contrast', 'white');
    this.setCSSVariable('--accent-A400', '#081E24');
    this.setCSSVariable('--accent-A400-contrast', 'white');
    this.setCSSVariable('--accent-A700', '#000000');
    this.setCSSVariable('--accent-A700-contrast', 'white');

    this.isDark = true;
  }

  public getCSSVariable(propertyName: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(propertyName);
  }

  private setCSSVariable(propertyName: string, value: string) {
    document.documentElement.style.setProperty(propertyName, value);
  }
}