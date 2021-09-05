import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQEZFU-VVQoDrg/profile-displayphoto-shrink_200_200/0/1599484982179?e=1632960000&v=beta&t=CdeaNv3vLrK7c2Nstvyok3PcB1s9gBRWxGq1ia2tUYA"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Yash Kumar</h2>
            <h4 style={{color: 'grey'}}>Student</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am currently pursuing B. Tech from Electrical Engineering branch. I have a good knowledge in C++ and Python Programming Language, little bit in Iot and amateur at web development(HTML, CSS, PHP, JS). Also have good experience with Adobe Photoshop. Interested to learn and explore new things in the world of technology. I am a very self motivated person so don't hesitate to do any work with perfection which gives me satisfaction.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            
            <h5>Email</h5>
            <p>yashk2090@gmai.com</p>
            <h5>GitHub</h5>
            <p>https://github.com/darkblade2090</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2023}
              schoolName="Current"
              schoolDescription="Madan Mohan Malaviya University of Technology"
               />

              
              <h2>Skills</h2>
              <Skills
                skill="IoT"
                progress={40}
                />
                <Skills
                  skill="HTML/CSS/JS"
                  progress={70}
                  />
                  <Skills
                    skill="Python"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
