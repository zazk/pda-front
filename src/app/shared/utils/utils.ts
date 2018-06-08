export class Utils {
  constructor() {}
  static pad(number: number, digits: number = 4): string {
    return (
      Array(Math.max(digits - String(number).length + 1, 0)).join("0") + number
    );
  }
  public static sequence(sequence: number, year: string) {
    return this.pad(sequence) + "-" + year;
  }
}
