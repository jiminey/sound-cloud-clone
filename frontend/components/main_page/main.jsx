import React from 'react' 
import {Link} from 'react-router-dom'


class Main extends React.Component {

    constructor(props){

        super(props)
        this.state = {

        };
    }

   
    render() {
        return (
            <div> 
                <header className='main-navbar'>

                    <div className='main-left'>
                        <div className='header-logo'>
                            <Link to='/'>HOMEPAGE</Link>
                        </div>
                        <button className='home'>
                            <Link to='/main'>Home</Link>
                        </button>
                        <button className='stream'>Stream</button>
                        <button className='library'>
                            <Link to='/library'>Library</Link>
                        </button>
                    </div>

                    <div className='main-middle'>
                        <input className='search' type="text" placeholder="Search"/>
                    </div>
                <div>
                    
                </div>
                    <div className='main-right'>
                        <div className='upgrade' >Upgrade</div>
                        <div className='upload'>
                            <Link className='upload'to='/upload'>Upload</Link>
                        </div>
                        <div className='username'>Jimmy Nguyen</div>
                        <div className='bell'> </div>
                        <div className='mail'> </div>
                        <div className='dropdown'> . . .</div>

                    </div>
                </header>
    
<div className='main-page-content'>
    
                <div className='music-content'>
                    <div className='section'>
                        <div className='section-content'>
                            <h1 className='section-title'>New Music Now</h1>
                            <h3 className='section-body'>The latest hits, updated all the time</h3>
                        </div>
                        <div className='row'>

                            <div className='pic-area'> 
                                <div className='pic-main'>
                                </div>
                                    <p>SunFlower - Po..</p>
                                    <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className='section'>
                        <div className='section-content'>
                            <h1 className='section-title'>New Music Now</h1>
                            <h3 className='section-body'>The latest hits, updated all the time</h3>
                        </div>
                        <div className='row'>
                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - Po..</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>
                        </div>
                    </div>

                    <div className='section'>
                        <div className='section-content'> 
                            <h1 className='section-title'>New Music Now</h1>
                            <h3 className='section-body'>The latest hits, updated all the time</h3>
                        </div>
                        <div className='row'>
                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - Po..</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>
                        </div>
                    </div>
                </div>
</div>
            </div>
        ) 
    };
};



export default Main
