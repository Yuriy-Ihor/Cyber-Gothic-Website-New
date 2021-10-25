/* eslint-disable */

import React, { Component } from 'react';

function importAllImages(path, nameList) {
  let images = nameList.map(
    (x) => {
      return <img src={path + x} className="nft-image" alt=""/>;
    }
  );
  return images;
}

function splitIntoRows(images, columns) {
  let jsxRows = [];
  for (let index = 0; index < images.length; index++) {
    
  }
}

function GenerateNftTable(images, columns) {
  const rows = splitIntoRows(images, columns);
  return class extends Component {
    render() {
      return(
        <table className="nft-table">
          
        </table>
      );
    }
  }
}


export { importAllImages, GenerateNftTable };
