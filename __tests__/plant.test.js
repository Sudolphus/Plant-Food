/* eslint-disable no-undef */
import {storeState, changeState, stateGenerator} from './../src/plant.js';

describe("Plant", ()=>{
  const plant = storeState();

  test("should create a plant object", ()=>{
    expect(plant().soil).toBe(0);
    expect(plant().water).toBe(0);
    expect(plant().light).toBe(0);
  });

  test("should be able to use change state function", ()=>{
    const blueFood = changeState("soil")(5);
    plant(blueFood);
    expect(plant().soil).toBe(5);
  });

  test("plant should be waterable", ()=>{
    plant(changeState("water")(10));
    expect(plant().water).toBe(10);
  });

  test("should be sunlit", ()=>{
    const yellowFood = changeState("light")(8);
    plant(yellowFood);
    expect(plant().light).toBe(8);
  });

  test("should be able to generate plants with stateGenerator", ()=>{
    const plantCreator = stateGenerator();
    const newPlant = plantCreator();
    expect(newPlant().soil).toBe(0);
    expect(newPlant().water).toBe(0);
    expect(newPlant().light).toBe(0);
    expect(newPlant().name).toBe("plant1");
  });

  test("should be able to generate multiple plants", ()=>{
    const plantCreator = stateGenerator();
    const plant1 = plantCreator();
    const plant2 = plantCreator();
    expect(plant1().name).toBe("plant1");
    expect(plant2().name).toBe("plant2");
  });
});