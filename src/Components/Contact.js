import React, {Component} from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            message: "",
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var city = this.props.data.address.city;
            var country = this.props.data.address.country;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var message = this.props.data.contactmessage;
        }

        return (
            <section id="contact">

                <div className="row section-head">

                    <div className="two columns header-col">

                        <h1><span>Get In Touch.</span></h1>

                    </div>

                    <div className="ten columns">

                        <p className="lead">{message}</p>

                    </div>

                </div>

                <div className="row">
                    <div className="eight columns">

                        <form id="contactForm"
                              name="contactForm">
                            <fieldset>
                                <div>
                                    <label
                                        htmlFor="contactSubject">Subject <span
                                        className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35"
                                           id="subject"
                                           name="contactSubject"
                                           onChange={this.handleChange.bind(this)}/>
                                </div>

                                <div>
                                    <label
                                        htmlFor="contactMessage">Message <span
                                        className="required">*</span></label>
                                    <textarea cols="50" rows="15"
                                              id="message"
                                              name="contactMessage"
                                              onChange={this.handleChange.bind(this)}/>
                                </div>

                                <div>
                                    <button className='submit-email'>
                                        {this.state.subject && this.state.message ? (
                                            <a className="submit"
                                               href={`mailto:omar.al.ashi@outlook.com?Subject=${this.state.subject}&Body=${this.state.message}`}
                                               target="_top">Send
                                                Mail</a>) : 'Send Mail'}

                                    </button>
                                    <span id="image-loader">
                        <img alt="" src="images/loader.gif"/>
                     </span>
                                </div>
                            </fieldset>
                        </form>

                        <div id="message-warning"> Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check"/>Your message was
                            sent, thank you!<br/>
                        </div>
                    </div>


                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">

                            <h4>Address and Phone</h4>
                            <p className="address">
                                {name}<br/>
                                <span>{email}</span><br/>
                                <span>{phone}</span>
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}

export default Contact;
