import * as fs from 'fs';
import * as path from 'path';


class DynamicPayload {
  private _data: Record<string, any>;

  constructor() {
    this._data = {
      "Test":
      [
         
      ],
    };
  }

  public set(key: string, value: any) {
    this._data[key] = value;
  }

  public get(key: string) {
    return this._data[key];
  }

  public toJSON() {
    return JSON.stringify(this._data, null, 2);
  }

  public saveToFile(fileName: string) {
    const filePath = path.resolve(__dirname, fileName);
    fs.writeFileSync(filePath, this.toJSON());
    console.log('File saved successfully at:', filePath);
  }
}

const payload = new DynamicPayload();
payload.set('name', 'Sohan');
payload.set('Occupation', 'Tester');
// Add more key-value pairs as needed
console.log(payload.get('name'));
console.log(payload.get('Occupation'));

payload.saveToFile('./payload.json');


export default new DynamicPayload();

  /**
   *  
   * JS Code 
   * class DynamicPayload {
    constructor() {
        this._data = {};
    }

    set(key, value) {
        this._data[key] = value;
    }

    get(key) {
        return this._data[key];
    }

    toJSON() {
        return JSON.stringify(this._data, null, 2);
    }

    saveToFile(filePath) {
        const fs = require('fs');
        fs.writeFileSync(filePath, this.toJSON());
    }
}

const payload = new DynamicPayload();
payload.set('name', 'Sohan');
payload.set('Occupation', 'Tester');
// Add more key-value pairs as needed
console.log(payload.get('name'));
console.log(payload.get('Occupation'));

payload.saveToFile('./payload.json');
   * 
   * 
   * 
   */


/*

const faker = require('faker');

class DynamicPayload {
    // ... (other methods remain the same)

    public set(key: string, value: any) {
        this._data[key] = value;
    }

    public setRandomData(key: string) {
        this._data[key] = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            age: faker.random.number({ min: 18, max: 80 })
        };
    }

    // ... (other methods remain the same)
}

const payload = new DynamicPayload();
payload.setRandomData('accounting');
payload.setRandomData('sales');

payload.saveToFile('./payload.json');


*/

