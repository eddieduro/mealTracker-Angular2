export class Meal {
  public name: String;
  public details: String;
  public calories: number;
  constructor(public info: any[], public id: number ) {
    this.name = info[0];
    this.details = info[1];
  }
}
