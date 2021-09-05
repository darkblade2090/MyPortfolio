import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/f/fb/ArkhamKnight.png"
              alt="avatar"
              className="avatar-img"
              />
              <div class="middle">
    <div class="text">I am Yash</div></div>
            
            <div className="banner-text">
              <h1>Hello There!</h1>

            <hr/>

          <p>Keep a look into my profile</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://www.linkedin.com/in/yash-kumar-510446193" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/darkblade2090" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        

         

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
