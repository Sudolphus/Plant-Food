import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { changeState, stateGenerator } from './plant';

const connectButtons = function(newPlant) {
  $(`#${newPlant().name}-feed`).click(function() {
    newPlant(changeState("soil")(1));
    $(`#${newPlant().name}-food-display`).html(newPlant().soil);
  });

  $(`#${newPlant().name}-water`).click(function() {
    newPlant(changeState("water")(1));
    $(`#${newPlant().name}-water-display`).html(newPlant().water);
  });

  $(`#${newPlant().name}-light`).click(function() {
    newPlant(changeState("light")(1));
    $(`#${newPlant().name}-light-display`).html(newPlant().light);
  });
};

const createDisplay = function(newPlant) {
  const plantValues = $('#plant-values');
  const plantHTML = `<h2>${newPlant().name}</h2><h3>Soil: <span id=${newPlant().name}-food-display>0</span></h3><h3>Water: <span id=${newPlant().name}-water-display>0</span></h3><h3>Light: <span id=${newPlant().name}-light-display>0</span></h3>`;
  const buttonHtml = `<button class='btn btn-success' id=${newPlant().name}-feed>Feed ${newPlant().name}</button><button class='btn btn-success' id=${newPlant().name}-water>Water ${newPlant().name}</button><button class='btn btn-success' id=${newPlant().name}-light>Light ${newPlant().name}</button>`;
  plantValues.append(plantHTML);
  plantValues.append(buttonHtml);
  connectButtons(newPlant);
};

$(document).ready(function() {
  const plantCreater = stateGenerator();

  $('#add-plant').click(function() {
    const newPlant = plantCreater();
    createDisplay(newPlant);
  });

  // const plant = storeState(); //plant = {soil: 0, water: 0}
  // const plantTwo = storeState();
  // const plantThree = storeState();
  
  // $('#feed-plant').click(function() {
  //   plant(changeState("soil")(1));
  //   $('#plant-soil-value').html(plant().soil);
  // });

  // $('#water-plant').click(function() {
  //   plant(changeState("water")(1));
  //   $('#plant-water-value').html(plant().water);
  // });

  // $('#light-plant').click(function() { 
  //   plant(changeState("light")(5));
  //   $('#plant-light-value').html(plant().light);
  // });

  // $('#feed-plant-two').click(function() {
  //   plantTwo(changeState("soil")(1));
  //   $('#plant-soil-value-two').html(plantTwo().soil);
  // });

  // $('#water-plant-two').click(function() {
  //   plantTwo(changeState("water")(1));
  //   $('#plant-water-value-two').html(plantTwo().water);
  // });

  // $('#light-plant-two').click(function() { 
  //   plantTwo(changeState("light")(5));
  //   $('#plant-light-value-two').html(plantTwo().light);
  // });
  
  // $('#feed-plant-three').click(function() {
  //   plantThree(changeState("soil")(1));
  //   $('#plant-soil-value-three').html(plantThree().soil);
  // });

  // $('#water-plant-three').click(function() {
  //   plantThree(changeState("water")(1));
  //   $('#plant-water-value-three').html(plantThree().water);
  // });

  // $('#light-plant-three').click(function() { 
  //   plantThree(changeState("light")(5));
  //   $('#plant-light-value-three').html(plantThree().light);
  // });
});