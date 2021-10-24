import './styles/App.css';
import './styles/parallax.css';
import './styles/lens-flare.css';
// import LensBlinkJSX from './components/lens-blink';
import {spawnText, despawnAll} from './components/text-animation';
import {deviceType} from './components/device-type';

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

  for (let index = 0; index < textBlocks.length; index++) {
    let blockHeight = textBlocks[index].offsetHeight;
    textBlocks[index].style.marginTop = `${
      headerHeight * (1 - headerIgnorableCoefficient) + 
      (
        documentHeight - 
        headerHeight * (1 - headerIgnorableCoefficient) - 
        footerHeight - blockHeight
      ) / 2
    }px`; 
  }
}

function App() {

  // const device = deviceType();
  const device = "mobile";

  const groupStyle = {
    height: device === "mobile" ? window.innerHeight : "100vh"
  };

	return (

  <div className="main">

    <div className="parallax">
      <div className="parallax-group" style={groupStyle}>

        <div className="parallax-layer parallax-layer--back">
          <img className="background" src="./media/background3.png" alt="" />
        </div>

        <div className="parallax-layer parallax-layer--back">
          <header className="header" id="header">
            {
                device === "mobile" ? 

                <div className="mobile-header">
                  <ul>
                    <li><img className="mobile-img" href="#" src="./media/logo.png" alt="" /></li>
                  </ul>
                  <ul>
                    <li><a href="#" onClick={() => {
                      spawnText('text-block-1');
                    }}>NFT</a></li>
                    <li><a href="#" onClick={() => {
                      spawnText('text-block-2');
                    }}>Merge</a></li>
                    <li><a href="#" onClick={() => {
                      spawnText('text-block-3');
                    }}>Generations</a></li>
                    <li><a href="#" onClick={() => {
                      spawnText('text-block-4');
                    }}>Game</a></li>
                    <li><a href="#" onClick={() => {
                      spawnText('text-block-5');
                    }}>Demo</a></li>
                    <li><a href="#" onClick={() => {
                      spawnText('text-block-6');
                    }}>Vision</a></li>
                  </ul>
                </div>
                :
                <ul>
                  <li><img href="#" src="./media/logo.png" alt="" /></li>
                  <li><a href="#" onClick={() => {
                    spawnText('text-block-1');
                  }}>NFT</a></li>
                  <li><a href="#" onClick={() => {
                    spawnText('text-block-2');
                  }}>Merge</a></li>
                  <li><a href="#" onClick={() => {
                    spawnText('text-block-3');
                  }}>Generations</a></li>
                  <li><a href="#" onClick={() => {
                    spawnText('text-block-4');
                  }}>Game</a></li>
                  <li><a href="#" onClick={() => {
                    spawnText('text-block-5');
                  }}>Demo</a></li>
                  <li><a href="#" onClick={() => {
                    spawnText('text-block-6');
                  }}>Vision</a></li>
                </ul>
            }
          </header>
        </div>

        <div className={`${device}-body-text`}>
          <div className="parallax-layer parallax-layer--back">
            <div className="text" id="text-block-1">
              <p>
                We are developing an NFT-based game where your NFT
                represents a lost Soul of a Warrior. At the initial stage of game
                development, there will be 8192 Warrior-NFTs. However,
                8192 players for an MMORPG is too few, therefore we plan to
                extend the game for future players. But our initial holders will
                have the most valued assets in the game and special privileges in
                the game and abilities unavailable to others.
              </p>          
            </div>
          </div>

          <div className="parallax-layer parallax-layer--back">
            <div className="text" id="text-block-2">
              <p>
                We also plan to implement a NFT merging system.
                <ul>
                  <li>
                    If you collect 4 NFTs from 1 collection (Generation) you can
                    merge them into 1 next Level NFT.
                  </li>
                  <li>
                    After the merge, all 4 NFTs are burned, and 1 new is created.
                    This creates a diminiіhing supply and raises the price and
                    rarity for both levels of NFT holders.
                  </li>
                  <li>
                    NFTs can be merged only within the same collection and within same level.
                  </li>
                  <li>
                    Every merge improves your stats, your NFT value 
                    and creates a more complex Art.
                  </li>
                  <li>
                    It is possible to make a maximum of 4 merges within the collection.
                  </li>
                  <li>
                    Merging is possible only after special events in game.
                  </li>
                </ul>

              </p>
            </div>
          </div>

          <div className="parallax-layer parallax-layer--back">
            <div className="text" id="text-block-3">
              <p>
                After initial release, there will be 2 more generations of souls.
                The value of previous generations will be
                preserved since to get to the initial level
                of Gen 1 Soul, it requires 4 merges (256
                Gen 2 Souls) and for Gen 3 it is impossible
                to get to the initial level of Gen 1.
              </p>
              <p>
                When the game is fully developed there will be an Infinite supply
                of NFTs that cannot be merged and will be sold for the equivalent
                of 5-10$. That would be the entry point as a price to play the
                game. They will have special classes and abilities that will be
                introduced in the future.
              </p>
            </div>
          </div>

          <div className="parallax-layer parallax-layer--back">
            <div className="text" id="text-block-4">
              <p>
                Some warriors go to Valhalla, others go to Hell, while some are 
                stuck in the Purgatory, where there's no way to truly die. 
                Everyone has his own reasons to come to Purgatory, but none 
                knows how to get out of there. 
                At launch we are planning to release next features:
                <ul>
                  <li>
                    PvP matches, each won battle in PvP is counted and
                    displayed on the leaderboard. This way the more you win,
                    the higher your NFT is ranked.
                  </li>
                  <li>
                    Arena — where you can fight Demons of the Purgatory.
                  </li>
                  <li>
                    Tournament — where you will fight other players.
                  </li>
                  <li>
                    Story Campaign — where you can get familiar with the ore
                    of the Game and our system will be tested for the future
                    Turn-Based MMORPG game. You can participate in Lore's creation in our Discord. 
                    Best stories will be added to our story campaigns.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="parallax-layer parallax-layer--back">
            <div className="text" id="text-block-5">
              <p>
                We are pleased to present you our current game demo.
                Do note that this is only a small tiny fraction of the finished game, 
                and is still work in progress. Everything you see here is a subject to change. 
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
            <div className="text" id="text-block-6">
              <p>
                Eventually, we plan to create a platform, where people will be
                able to create their adventures, tournaments, guilds, story
                campaigns, and even sell tickets to their worlds and mini-games.
              </p>
            </div>
          </div>

        <div className="parallax-layer parallax-layer--back">
          <footer className="footer" id="footer">
            <ul>
              <li><a href="https://twitter.com/Cyber_Gothica" target="_blank">Twitter</a></li>
              <li><a href="https://discord.com/invite/qxreNz7WMZ" target="_blank">Discord</a></li>
              <li><a href="mailto:cyber.gothica.nft@gmail.com" target="_blank">Email</a></li>
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
