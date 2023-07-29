import React from 'react';
import './App.css';

function App() {

  let audio = new Audio("./public/moo.wav")

  const start = () => {
    audio.play()
  }


	return (
		<div>
			<nav class="navbar background">
				<div class ="elmoo">
          <button class="btn btn-sm" onClick={start}>El Moo</button>
        </div>

				
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							Dena's Wedding
						</h1>
						<p class="text-small">
							Hi I'm Dena.  In my spare time I pretend to sing and dance.
              				I like cows very much.
              				Also, I am getting married.  And I am a Ppinalien.
						</p>
					</div>
				</div>
			</section>			
			<footer className="footer">
				<p className="text-footer">
					Copyright © Her family
				</p>
			</footer>
		</div>
	)
}

export default App
