/* eslint-disable */

import React, { Component } from 'react';
import { DeviceType } from './DeviceType';

function importAllImages(path, nameList, mobileImageSize=150, desktopImageSize=250) {
  let index = 0;
  let imageStyle = {
    width: DeviceType() === "mobile" ? mobileImageSize : desktopImageSize
  };
  let images = nameList.map(
    (name) => {
      return <img key={index++} src={path + name} style={imageStyle} className="nft-image" alt=""/>;
    }
  );
  return images;
}

function splitIntoRows(images, columns) {
  let rows = [];
  for (let index = 0; index < images.length; index++) {
    if (index % columns == 0) {
      rows.push([]);
    }
    rows[rows.length - 1].push(images[index]);
  }

  return rows;
}

function GenerateNftTable(images, columns) {
  const rows = splitIntoRows(images, columns);
  let rowIndex = 0;
  let cellIndex = 0;
  return class extends Component {
    render() {
      return(
        <table className="nft-table">
          <tbody>{
            rows.map(
              (row) =>
                <tr key={rowIndex++}>{
                  row.map(
                    (image) => <td key={cellIndex++ - (rowIndex - 1) * columns}>{image}</td>
                  )
                }</tr>
            )
          }</tbody>
        </table>
      );
    }
  }
}

function GenerateNftShadowTable(images, columns) {
  const rows = splitIntoRows(images, columns);
  let rowIndex = 0;
  let cellIndex = 0;
  return class extends Component {
    render() {
      return(
        <table className="nft-table">
          <tbody>{
            rows.map(
              (row) =>
                <tr key={rowIndex++}>{
                  row.map(
                    (image) => 
                    <td key={cellIndex++ - (rowIndex - 1) * columns}>
                      <div className="shadow" style={{
                        width: image.props.style.width,
                        height: image.props.style.width
                      }}></div>
                    </td>
                  )
                }</tr>
            )
          }</tbody>
        </table>
      );
    }
  }
}

export { importAllImages, GenerateNftTable, GenerateNftShadowTable };
