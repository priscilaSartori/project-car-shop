import Motorcycle from '../../src/Domains/Motorcycle';
import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const honda = 'Honda CG Titan 125';

export const validMotorcycleWithStatus: IMotorcycle = {
  model: honda,
  year: 1983,
  color: 'Red',
  status: true,
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
};

export const newMotorcycle: IMotorcycle = {
  id: '365874563b35b59438fbea2f',
  model: honda,
  year: 1983,
  color: 'Red',
  status: true,
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
};

export const motorcyclesArray = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

// export const allMotorcycles = motorcyclesArray.map((motorcycles) => new Motorcycle(
//   {
//     id: motorcycles.id,
//     model: motorcycles.model,
//     year: motorcycles.year,
//     color: motorcycles.color,
//     status: motorcycles.status,
//     buyValue: motorcycles.buyValue,
//     category: motorcycles.category,
//     engineCapacity: motorcycles.engineCapacity,
//   },
// ));

export const motorcyclesOutput: Motorcycle = new Motorcycle(newMotorcycle);

export const updatedMotorcycle: IMotorcycle = {
  id: '365874563b35b59438fbea2f',
  model: honda,
  year: 1980,
  color: 'Green',
  status: true,
  buyValue: 1500,
  category: 'Street',
  engineCapacity: 100,
};