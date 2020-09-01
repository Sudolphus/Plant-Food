import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { storeState, changeState } from './plant';

$(document).ready(function() {
  const plant = storeState(); //plant = {soil: 0, water: 0}

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
});