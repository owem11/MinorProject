/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './main_Syllabus.css';
import { Link } from 'react-router-dom';

const Syllabus = () => {
    return (
      <div className="lib-main">
        <div className='lib-left'>
          <div className='button-all'>
          <div className="button"><p>Upload Files</p></div>
          <div className="button"><p>Home</p></div>
          <div className="button2"><p>Subjects</p>
          <div className='sub-element'>
            <div className='sub-el'><p>Internet of Things</p></div>
            <div className='sub-el'><p>Soft Computing Techniques</p></div>
            <div className='sub-el'><p>Machine Learning</p></div>
            <div className='sub-el'><p>Cloud Computing</p></div>
            <div className='sub-el'><p>Simulation and Modeling</p></div>
          </div>
          </div>
          <div className="button2"><p>Library</p>
          <div className='sub-element'>
            <div className='sub-el'><p>Favourites</p></div>
            <div className='sub-el'><p>Recents</p></div>
            <div className='sub-el'><p>Uploads</p></div>
            <div className='sub-el'><p>Read Laters</p></div>
          </div>
          </div>
        </div>
        <div className='main-user'><img src="/user-icon.png" alt="User Icon" className="user-icon" /><p>Username</p></div>
        </div>
        <div className='lib-right'>
        <div className='lib-right-menu'>
        <div className="menu"><p><Link to="/main_notes">Notes</Link></p></div>
        <div className="menu"><p><Link to="/main_assignments">Assignments</Link></p></div>
        <div className="menu"><p><Link to="/main_QnA">Q&As</Link></p></div>
        <div className="menu"><p><Link to="/main_pastyear">Test Papers</Link></p></div>
        <div className="menu2"><p>Syllabus</p></div>
        </div>
        <div className='lib-right-main'>
          <div className='syla'>
            <div className='lib-syl'>
              <div className='syl-photo'><img src="/document1.png" alt="User Icon" className="document" /></div>
              <div className='syl-cont'><p>MA402</p><img src="/download.png" alt="User Icon" className="download-logo" /></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default Syllabus;
  