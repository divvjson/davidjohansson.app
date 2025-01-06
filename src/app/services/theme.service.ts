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
    this.setCSSVariable('--primary-50', '#83E4E9');
    this.setCSSVariable('--primary-50-contrast', 'black');
    this.setCSSVariable('--primary-100', '#6AD7E4');
    this.setCSSVariable('--primary-100-contrast', 'black');
    this.setCSSVariable('--primary-200', '#52A4B9');
    this.setCSSVariable('--primary-200-contrast', 'black');
    this.setCSSVariable('--primary-300', '#438797');
    this.setCSSVariable('--primary-300-contrast', 'white');
    this.setCSSVariable('--primary-400', '#2E7D93');
    this.setCSSVariable('--primary-400-contrast', 'white');
    this.setCSSVariable('--primary-500', '#236E89');
    this.setCSSVariable('--primary-500-contrast', 'white');
    this.setCSSVariable('--primary-600', '#296373');
    this.setCSSVariable('--primary-600-contrast', 'white');
    this.setCSSVariable('--primary-700', '#2B5059');
    this.setCSSVariable('--primary-700-contrast', 'white');
    this.setCSSVariable('--primary-800', '#24444C');
    this.setCSSVariable('--primary-800-contrast', 'white');
    this.setCSSVariable('--primary-900', '#18363D');
    this.setCSSVariable('--primary-900-contrast', 'white');
    this.setCSSVariable('--primary-A100', '#28A8D9');
    this.setCSSVariable('--primary-A100-contrast', 'black');
    this.setCSSVariable('--primary-A200', '#2096B3');
    this.setCSSVariable('--primary-A200-contrast', 'white');
    this.setCSSVariable('--primary-A400', '#178081');
    this.setCSSVariable('--primary-A400-contrast', 'white');
    this.setCSSVariable('--primary-A700', '#0D3E4A');
    this.setCSSVariable('--primary-A700-contrast', 'white');
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