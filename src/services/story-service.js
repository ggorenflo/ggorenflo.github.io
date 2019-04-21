import stories from '../assets/stories.csv';
import podcasts from '../assets/podcasts.csv';
import Papa from 'papaparse';

export const getStories = function(callback) { 
  const inputFile = `${window.location.protocol}//${window.location.host}${stories}`;
  Papa.parse(inputFile, {
    download: true,
    complete: callback,
    header: true
  });
}

export const getPodcasts = function(callback) {
  const inputFile = `${window.location.protocol}//${window.location.host}${podcasts}`;
  Papa.parse(inputFile, {
    download: true,
    complete: callback,
    header: true
  });
}