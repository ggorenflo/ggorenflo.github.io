import data from '../assets/stories.csv';
import Papa from 'papaparse';

export const getStories = function(callback) {
  const inputFile = `${window.location.protocol}//${window.location.host}${data}`;
  console.log(Papa.parse(inputFile, {
    download: true,
    complete: callback,
    header: true
  }));
}