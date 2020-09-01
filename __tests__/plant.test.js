/* eslint-disable no-undef */
import {storeState, blueFood} from './../src/plant.js';

describe("Plant", ()=>{
  test("should create a plant object", ()=>{
    const plant = storeState();
    expect(plant().soil).toBe(0);
    expect(plant().water).toBe(0);
  });

  test("should be able to use change state function", ()=>{
    const plant = storeState();
    plant(blueFood);
    expect(plant().soil).toBe(5);
  });
});