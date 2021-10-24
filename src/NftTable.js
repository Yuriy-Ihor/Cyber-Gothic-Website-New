const nftPath = process.env.PUBLIC_URL + "/media/";

function importAllImages(path, nameList) {
  let images = {};
  nameList.forEach(element => {
    let fullPath = path + element;
      images[element] = <img 
      class="nft-img" 
      id={"nft-" + nameList.indexOf(element)} 
      src={fullPath} alt=""/>
  });
  return images;
}

const images = importAllImages(
  nftPath,
  ["nft1.png", "nft2.png", "nft3.png", "nft4.png", "nft5.png"]
);

function NftTable() {
  return(
    <div>
      
    </div>
  );
}
export {NftTable};
