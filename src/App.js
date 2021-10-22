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
}

function App() {

  const groupStyle = {
    height: deviceType() == "mobile" ? window.innerHeight : "100vh"
  };

	return (

  <div className="main">

    <div className="parallax">
      <div className="parallax-group" style={groupStyle}>

        <div className="parallax-layer parallax-layer--back">
          <img className="background" src="./media/background3.png" alt="" />
        </div>

        <div className="parallax-layer parallax-layer--back">
          <div className="text" id="text-block-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Etiam orci est, dictum consectetur libero vel, blandit aliquet magna. 
              Mauris eget consectetur ipsum. Etiam bibendum imperdiet tempor. 
              Cras efficitur lacinia laoreet. 
              Suspendisse a felis in libero vulputate varius non eget risus. 
              Mauris congue lorem eu tortor vulputate, nec semper est ultricies. 
              Curabitur ultricies purus enim, ut facilisis lectus ornare ac. 
              Phasellus eget finibus lacus. 
              Praesent commodo dictum urna, a blandit dui dignissim vel. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Etiam orci est, dictum consectetur libero vel, blandit aliquet magna. 
              Mauris eget consectetur ipsum. Etiam bibendum imperdiet tempor. 
              Cras efficitur lacinia laoreet. 
              Suspendisse a felis in libero vulputate varius non eget risus. 
              Mauris congue lorem eu tortor vulputate, nec semper est ultricies. 
              Curabitur ultricies purus enim, ut facilisis lectus ornare ac. 
              Phasellus eget finibus lacus. 
              Praesent commodo dictum urna, a blandit dui dignissim vel. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p> */}
          </div>
        </div>

        <div className="parallax-layer parallax-layer--back">
          <div className="text" id="text-block-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Etiam orci est, dictum consectetur libero vel, blandit aliquet magna. 
              Mauris eget consectetur ipsum. Etiam bibendum imperdiet tempor. 
              Cras efficitur lacinia laoreet. 
              Suspendisse a felis in libero vulputate varius non eget risus. 
              Mauris congue lorem eu tortor vulputate, nec semper est ultricies. 
              Curabitur ultricies purus enim, ut facilisis lectus ornare ac. 
              Phasellus eget finibus lacus. 
              Praesent commodo dictum urna, a blandit dui dignissim vel. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Etiam orci est, dictum consectetur libero vel, blandit aliquet magna. 
              Mauris eget consectetur ipsum. Etiam bibendum imperdiet tempor. 
              Cras efficitur lacinia laoreet. 
              Suspendisse a felis in libero vulputate varius non eget risus. 
              Mauris congue lorem eu tortor vulputate, nec semper est ultricies. 
              Curabitur ultricies purus enim, ut facilisis lectus ornare ac. 
              Phasellus eget finibus lacus. 
              Praesent commodo dictum urna, a blandit dui dignissim vel. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p> */}
          </div>
        </div>

        <div className="parallax-layer parallax-layer--back">
          <div className="text" id="text-block-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Etiam orci est, dictum consectetur libero vel, blandit aliquet magna. 
              Mauris eget consectetur ipsum. Etiam bibendum imperdiet tempor. 
              Cras efficitur lacinia laoreet. 
              Suspendisse a felis in libero vulputate varius non eget risus. 
              Mauris congue lorem eu tortor vulputate, nec semper est ultricies. 
              Curabitur ultricies purus enim, ut facilisis lectus ornare ac. 
              Phasellus eget finibus lacus. 
              Praesent commodo dictum urna, a blandit dui dignissim vel. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Etiam orci est, dictum consectetur libero vel, blandit aliquet magna. 
              Mauris eget consectetur ipsum. Etiam bibendum imperdiet tempor. 
              Cras efficitur lacinia laoreet. 
              Suspendisse a felis in libero vulputate varius non eget risus. 
              Mauris congue lorem eu tortor vulputate, nec semper est ultricies. 
              Curabitur ultricies purus enim, ut facilisis lectus ornare ac. 
              Phasellus eget finibus lacus. 
              Praesent commodo dictum urna, a blandit dui dignissim vel. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p> */}
            <a className="play-button">Play Demo</a>
          </div>
        </div>

        <div className="parallax-layer parallax-layer--back">
          <header className="header">
            {
                deviceType() == "mobile" ? 

                <ul>
                  <li><img href="#" src="./media/logo.png" alt="" /></li>
                </ul> 

                :

                <ul>
                  <li><img href="#" src="./media/logo.png" alt="" /></li>
                  <li><a className="desktop" href="#" onClick={() => {
                    spawnText('text-block-1');
                  }}>NFT</a></li>
                  <li><a className="desktop" href="#" onClick={() => {
                    spawnText('text-block-2');
                  }}>About The Game</a></li>
                  <li><a className="mobile" href="#" onClick={() => {
                    spawnText('text-block-3');
                  }}>Play Demo</a></li>
                </ul>
            }
          </header>
        </div>

        <div className="parallax-layer parallax-layer--back">
          <footer className="footer">
          <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </footer>
        </div>

      </div>
    </div>

  </div>
	);
}

export default App;