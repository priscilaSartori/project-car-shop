import Car from '../../src/Domains/Car';

const uno = 'Uno da Escada';

export const validCarWithStatus = {
  model: uno,
  year: 1960,
  color: 'Red',
  status: true,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const newCar = {
  id: '63319d80feb9f483ee823ac5',
  model: uno,
  year: 1960,
  color: 'Red',
  status: true,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const carsArray = [
  {
    id: '58962d80feb9f483ee823ac5',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '78412d80feb9f483ee823ac5',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const allCars = carsArray.map((car) => new Car(
  {
    id: car.id,
    model: car.model,
    year: car.year,
    color: car.color,
    status: car.status,
    buyValue: car.buyValue,
    doorsQty: car.doorsQty,
    seatsQty: car.seatsQty,
  },
));

export const carOutput: Car = new Car(newCar);

export const updatedCar = {
  id: '63319d80feb9f483ee823ac5',
  model: uno,
  year: 1979,
  color: 'Red',
  status: true,
  buyValue: 3500,
  doorsQty: 2,
  seatsQty: 4,
};
