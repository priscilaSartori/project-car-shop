class CarsDomains {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean | false;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(
    id: string | undefined,
    model: string,
    year: number,
    color: string,
    status: boolean | false,
    buyValue: number,
    doorsQty: number, 
    seatsQty: number,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
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
  
  public getStatus(): boolean | false {
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

export default CarsDomains;  