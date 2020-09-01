import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { storeState, changeState } from './plant';

$(document).ready(function() {
  const plant = storeState(); //plant = {soil: 0, water: 0}
  const plantTwo = storeState();
  const plantThree = storeState();
  
  $('#feed-plant').click(function() {
    plant(changeState("soil")(1));
    $('#plant-soil-value').html(plant().soil);
  });

  $('#water-plant').click(function() {
    plant(changeState("water")(1));
    $('#plant-water-value').html(plant().water);
  });

  $('#light-plant').click(function() { 
    plant(changeState("light")(5));
    $('#plant-light-value').html(plant().light);
  });

  $('#feed-plant-two').click(function() {
    plantTwo(changeState("soil")(1));
    $('#plant-soil-value-two').html(plantTwo().soil);
  });

  $('#water-plant-two').click(function() {
    plantTwo(changeState("water")(1));
    $('#plant-water-value-two').html(plantTwo().water);
  });

  $('#light-plant-two').click(function() { 
    plantTwo(changeState("light")(5));
    $('#plant-light-value-two').html(plantTwo().light);
  });
  
  $('#feed-plant-three').click(function() {
    plantThree(changeState("soil")(1));
    $('#plant-soil-value-three').html(plantThree().soil);
  });

  $('#water-plant-three').click(function() {
    plantThree(changeState("water")(1));
    $('#plant-water-value-three').html(plantThree().water);
  });

  $('#light-plant-three').click(function() { 
    plantThree(changeState("light")(5));
    $('#plant-light-value-three').html(plantThree().light);
  });
});