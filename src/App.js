import React, {Component} from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import resumeDataFile from './resumeData.json'
import Portfolio from './Components/Portfolio';
// import Testimonials from './Components/Testimonials';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resumeData: {}
        };

        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);

    }

    getResumeData() {
        this.setState({resumeData: resumeDataFile})
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div className="App">
                <Header data={this.state.resumeData.main}/>
                <About data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
                <Portfolio data={this.state.resumeData.portfolio}/>
                {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
                <Contact data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main}/>
            </div>
        );
    }
}

export default App;
