/* eslint-disable */

import './styles/App.css';
import './styles/parallax.css';
import './styles/menu.css';
import './styles/nft-table.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'


import { spawnText, despawnAll } from './components/TextAnimation';
import { DeviceType } from './components/DeviceType';
import { importAllImages, GenerateNftTable, GenerateNftShadowTable } from './components/NftTable';
import { GenerateDynamicBackground } from './components/DynamicBackground';
import { GenerateBackgroundAimationOverlay } from './components/BackgroundAnimationOverlay';


let menuIsOpen = false;

window.onload = function() {
  despawnAll();
  spawnText(
    'text-block-1',
    'text',
    500
  );
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  const textBlocks = document.getElementsByClassName('text');

  const documentHeight = window.innerHeight;
  const headerHeight = header.offsetHeight;
  const headerIgnorableCoefficient = 0.15;
  const footerHeight = footer.offsetHeight;

  // for (let index = 0; index < textBlocks.length; index++) {
  //   let blockHeight = textBlocks[index].offsetHeight;
  //   textBlocks[index].style.marginTop = `${
  //     headerHeight * (1 - headerIgnorableCoefficient) + 
  //     (
  //       documentHeight - 
  //       headerHeight * (1 - headerIgnorableCoefficient) - 
  //       footerHeight - blockHeight
  //     ) / 2
  //   }px`; 
  // }

  try {
    document.getElementById("menu-button").addEventListener(
      'click',
      () => {
        if (menuIsOpen) {
          document.activeElement.blur();
        }
        menuIsOpen = !menuIsOpen;
      }
    );
  } catch (TypeError) {}  

  document.addEventListener(
    'click',
    (e) => {
      if (!e.target.classList.contains("non-disabling")) {
        menuIsOpen = false
      }
    }
  );
}

function App() {

  const device = DeviceType();
  // const device = "mobile";

  const groupStyle = {
    height: device === "mobile" ? window.innerHeight : "100vh"
  };

  const nftPath = process.env.PUBLIC_URL + "/media/nfts/";
  const toBeUploaded = ["nft1.png", "nft2.png", "nft3.png", "nft4.png", "nft5.png", "nft6.gif"];
  const images = importAllImages(
    nftPath,
    toBeUploaded,
    window.innerWidth / 3, 250
  );

  const nftTableColumns = device === "mobile" ? 2 : 3;
  const NftTable = GenerateNftTable(images, nftTableColumns);
  const NftShadowTable = GenerateNftShadowTable(images, nftTableColumns);

  const DynamicBackground = GenerateDynamicBackground();
  const BackgroundAnimationOverlay = GenerateBackgroundAimationOverlay();

  function enableTabsDesktop() {
    for (let index = 0; index < arguments.length; index++) {
      spawnText(arguments[index]);
    }
  }

  function enableTabsMobile() {
    enableTabsDesktop(...arguments);
    document.activeElement.blur();
    menuIsOpen = false;
  }

	return (

  <div className="main">

    <div className="parallax">
      <div className="parallax-group" style={groupStyle}>

        {/* <div className="parallax-layer parallax-layer--back">
          <img className="background" src={process.env.PUBLIC_URL + "/media/background.png"} alt="" />
        </div> */}

        <div className="parallax-layer parallax-layer--back">
          <DynamicBackground />
        </div>

        <div className="parallax-layer parallax-layer--back">
          <BackgroundAnimationOverlay />
        </div>

        <div className={`${device}-body-text`}>
          <div className="parallax-layer parallax-layer--back">
            <div className="text instant-fade-out" id="text-block-1">
              <h1>NFT-based game, where your NFT represents a lost Spirit of a Warrior</h1>
              <b>All warriors are split into different generations.</b> 
              <br />
              <p>
                First generation has 8192 warriors.
                These warriors will be the most valuable, and their holders will have special privileges in
                the game and abilities unavailable to others.
              </p>      
            </div>
          </div>

          <div className="parallax-layer parallax-layer--back">
            <div className="text instant-fade-out" id="text-block-2">
              <h2>
                All NFTs from the first 3 generations will have their own rank
              </h2>
              <p>And players can even increase it!</p>
              <ul>
                  <li>
                    If you collect 4 NFTs from the same generation with the same rank, you can
                    merge them into 1 NFT with higher rank
                  </li>
                  <li>
                    After the merge, all 4 NFTs are burnt, but 1 new is created.
                    It raises both price and rarity for NFTs and creates a diminiіhing supply
                  </li>
                  <li>
                    Every merge improves your in-game stats, making your warrior more valuable, and creates a more complex Art.
                  </li>
                  <li>
                    Player can perform 4 merges within the collection.
                  </li>
                </ul>
            </div>
          </div>

          <div className="parallax-layer parallax-layer--back">
            <div className="text instant-fade-out" id="text-block-3">
              <b>
                After initial release, there will be 2 more generations of warriors
              </b>
              <p>
                All NFTs from one generation will be more valuable than NFTs from the next.
                But one problem still remain - how to be with new players, how to want to play the game as well and get their unique Warrior?
                Here is why we will create one more generation - it will have unlimited supply, and each NFT will cost a small price - 
                an entrypoint to our game. 
              </p>
            </div>
          </div>

          <div className="parallax-layer parallax-layer--back">
            <div className="text instant-fade-out" id="text-block-4">
              <p>
                Some warriors go to Valhalla, others go to Hell, while some are 
                stuck in the Purgatory, where there's no way to truly die. 
                Everyone has his own reasons to come to Purgatory, but none 
                knows how to get out of there. 
                At launch we plan to release next features:
              </p>
              <ul>
                  <li>
                    PvP Matches — where Warriors fight with each other. Every victory is counted and
                    displayed on the leaderboard. The more you win, the higher your NFT is ranked
                  </li>
                  <li>
                    Arena — where you can fight Demons of the Purgatory
                  </li>
                  <li>
                    Tournament — where you will fight other players
                  </li>
                  <li>
                    Story Campaign — where you can get familiar with the game lore
                  </li>
                </ul>
            </div>
          </div>

          <div className="parallax-layer parallax-layer--back">
            <div className="text instant-fade-out" id="text-block-5">
              <h1>
                We are pleased to present you our current game prototype
              </h1>
              <p>
                
                This is only a small tiny fraction of the final product <br />
                Everything you see here is a subject to change <br />
                <br />
                We appreciate feedback in any form, so please contact us with any suggestions 
                that you might have.
              </p>
              <a href="https://dsyrotynskyy.gitlab.io/cyber-gothica-game-pages/"  target="_blank" className="play-button">
                Play Demo
              </a>
            </div>
          </div>
        </div>

        <div className="parallax-layer parallax-layer--back">
          <div className="text instant-fade-out" id="text-block-6">
            <p>
              Eventually, we plan to create a platform, where people will be
              able to create their adventures, tournaments, guilds, story
              campaigns, and even sell tickets to their worlds and mini-games.
              You can participate in Lore's creation in our Discord. 
              Best stories will be added to our story campaigns, since we want it to be community driven.
            </p>
          </div>
        </div>

        <div className="parallax-layer parallax-layer--back">
          <div className="text nft-text instant-fade-out" id="text-block-7-1">
            <NftShadowTable />
          </div>
        </div>

        <div className="parallax-layer parallax-layer--back">
          <div className="text nft-text instant-fade-out" id="text-block-7-2">
            <NftTable />
          </div>
        </div>


        <div className="parallax-layer parallax-layer--back">
          <header className="header" id="header">
            {
                device === "mobile" ? 

                <div className="mobile-header">
                  <div id="nav-container">
                    <div className="bg"></div>

                    <div id="nav-content" className="non-disabling" tabIndex="0">
                      <ul className="non-disabling">
                        <li className="non-disabling">
                          <a className="non-disabling" href="#" onClick={() => {
                            enableTabsMobile('text-block-1');
                          }}>HOME</a>
                          </li>
                        <li className="non-disabling">
                          <a className="non-disabling" href="#" onClick={() => {
                            enableTabsMobile('text-block-2');
                          }}>Merge</a>
                          </li>
                        <li className="non-disabling">
                          <a className="non-disabling" href="#" onClick={() => {
                            enableTabsMobile('text-block-3');
                          }}>Generations</a>
                          </li>
                        <li className="non-disabling">
                          <a className="non-disabling" href="#" onClick={() => {
                            enableTabsMobile('text-block-4');
                          }}>About</a>
                          </li>
                        <li className="non-disabling">
                          <a className="non-disabling" href="#" onClick={() => {
                            enableTabsMobile('text-block-5');
                          }}>Demo</a>
                        </li>
                        <li className="non-disabling">
                          <a className="non-disabling" href="#" onClick={() => {
                            enableTabsMobile('text-block-6');
                          }}>Vision</a>
                        </li>
                        <li className="non-disabling">
                          <a className="non-disabling" href="#" onClick={() => {
                            enableTabsMobile('text-block-7-1', 'text-block-7-2');
                          }}>Sneak Peak</a>
                        </li>
                      </ul>
                    </div>
                    <div className="button non-disabling" id="menu-button" tabIndex="0">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </div>
                  </div>
                </div>

                :

                <ul className="singular-header">
                  <li><img href="#" src={process.env.PUBLIC_URL + "/media/logo.png"} alt="" 
                  onClick={() => {
                    enableTabsDesktop('text-block-1');
                  }}/></li>
                  <li><a href="#" onClick={() => {
                    enableTabsDesktop('text-block-1');
                  }}>HOME</a></li>
                  <li><a href="#" onClick={() => {
                    enableTabsDesktop('text-block-2');
                  }}>Merge</a></li>
                  <li><a href="#" onClick={() => {
                    enableTabsDesktop('text-block-3');
                  }}>Generations</a></li>
                  <li><a href="#" onClick={() => {
                    enableTabsDesktop('text-block-4');
                  }}>About</a></li>
                  <li><a href="#" onClick={() => {
                    enableTabsDesktop('text-block-5');
                  }}>Demo</a></li>
                  <li><a href="#" onClick={() => {
                    enableTabsDesktop('text-block-6');
                  }}>Vision</a></li>
                  <li><a href="#" onClick={() => {
                    enableTabsDesktop('text-block-7-1', 'text-block-7-2');
                  }}>Sneak Peak</a></li>
                </ul>
            }
          </header>
        </div>

        {
        device === "mobile" ?
        <div className="parallax-layer parallax-layer--back">
          <header className="header no-bg">
            <img href="#" className="mobile-img" src={process.env.PUBLIC_URL + "/media/logo.png"} alt=""
            onClick={() => {
              spawnText('text-block-1');
              document.activeElement.blur();
            }} />
          </header>
        </div>

        :

        <div></div>
        }

        <div className="parallax-layer parallax-layer--back">
          <footer className="footer" id="footer">
            <ul>
              <li>
                <a href="https://twitter.com/Cyber_Gothica" target="_blank" className="footer-wrapper-link">
                  <FontAwesomeIcon icon={faTwitter} className="footer-inner-icon" />
                  <span className="footer-inner-link">Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://discord.com/invite/qxreNz7WMZ" target="_blank" className="footer-wrapper-link">
                  <FontAwesomeIcon icon={faDiscord} className="footer-inner-icon" />
                  <span className="footer-inner-link">Discord</span>
                </a>
              </li>
              <li>
                <a href="mailto:cyber.gothica.nft@gmail.com" target="_blank" className="footer-wrapper-link">
                  <FontAwesomeIcon icon={faEnvelope} className="footer-inner-icon" />
                  <span className="footer-inner-link">Mail</span>
                </a>
              </li>
            </ul>
            <p><span>&#169;</span> Cyber Gothica, Ukraine, {new Date().getFullYear()}. All rights reserved.</p>
          </footer>
        </div>

      </div>
    </div>

  </div>
	);
}

export default App;
