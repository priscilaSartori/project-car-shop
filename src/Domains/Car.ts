import ICar from '../Interfaces/ICar';

class Car {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | false;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(cars: ICar) {
    this.id = cars.id;
    this.model = cars.model;
    this.year = cars.year;
    this.color = cars.color;
    this.status = cars.status;
    this.buyValue = cars.buyValue;
    this.doorsQty = cars.doorsQty;
    this.seatsQty = cars.seatsQty;
  }

  public getId(): string | undefined {
    return this.id;
  }
  public setId(value: string | undefined) {
    this.id = value;
  }

  public getModel(): string {
    return this.model;
  }
  public setModel(value: string) {
    this.model = value;
  }
  
  public getYear(): number {
    return this.year;
  }
  public setYear(value: number) {
    this.year = value;
  }
  
  public getColor(): string {
    return this.color;
  }
  public setColor(value: string) {
    this.color = value;
  }
  
  public getStatus() {
    return this.status;
  }
  public setStatus(value: boolean | false) {
    this.status = value;
  }
  
  public getBuyValue(): number {
    return this.buyValue;
  }
  public setBuyValue(value: number) {
    this.buyValue = value;
  }
  
  public getDoorsQty(): number {
    return this.doorsQty;
  }
  public setDoorsQty(value: number) {
    this.doorsQty = value;
  }
  
  public getSeatsQty(): number {
    return this.seatsQty;
  }
  public setSeatsQty(value: number) {
    this.seatsQty = value;
  }
}

export default Car;  