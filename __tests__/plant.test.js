/* eslint-disable no-undef */
import {storeState, changeState} from './../src/plant.js';

describe("Plant", ()=>{
  const plant = storeState();

  test("should create a plant object", ()=>{
    expect(plant().soil).toBe(0);
    expect(plant().water).toBe(0);
  });

  test("should be able to use change state function", ()=>{
    const blueFood = changeState("soil")(5);
    plant(blueFood);
    expect(plant().soil).toBe(5);
  });
});