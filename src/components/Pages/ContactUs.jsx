import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import GoogleMapReact from 'google-map-react';
import ContactBanner from '../Elements/ContactBanner';
import { useTranslation } from 'react-i18next';

var bnrimg = require('./../../images/banner/4.jpg');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
    render() {
        const defaultProps = {
            center: {
              lat: 34.073280,
              lng: -118.251410
            },
            zoom: 12
        };
        return (
            

<TranslationWrapper>
{({leftside1,leftside2,rightside1,rightside2,phone,email,Adresse,btn,emailfill,names}) => (
    
            <>
                <Header />
                <div className="page-content">
                <ContactBanner />
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="row">
                                    <div className="col-md-8 col-sm-6">
                                        <form className="contact-form cons-contact-form" method="post" action="form-handler.php">
                                            <div className="contact-one m-b30">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="mt-separator-outer separator-left">
                                                        <div className="mt-separator">
                                                            <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">{leftside1}</span> {leftside2}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder={names} />
                                                </div>
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder={emailfill} />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} className="form-control " required placeholder="Message" defaultValue={""} />
                                                </div>
                                                <div className="text-right">
                                                    <button name="submit" type="submit" value="Submit" className="site-button btn-effect">{btn}
                  </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="contact-info m-b30">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Contact</span> Info</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="bg-dark p-a20 text-white">
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">{phone}</h5>
                                            <p><a href='tel:+225 27 23 407 006'  style={{color:'white'}}>++225 27 23 407 006</a> </p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">{email}</h5>
                                                        <p><a href='mailto:ali@taurusivoire.com' style={{color:'white'}}>ali@taurusivoire.com</a></p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">{Adresse}o</h5>
                                                        <p>Abidjan, Cóte d’Ivoire </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="gmap-outline">
                                <div style={{ height: '400px', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0" }}
                                        defaultCenter={defaultProps.center}
                                        defaultZoom={defaultProps.zoom}
                                    >
                                        <AnyReactComponent
                                        lat={34.073280}
                                        lng={-118.251410}
                                        text={<i className="fa fa-map-marker" />}
                                        />
                                    </GoogleMapReact>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>


                <Footer />

            </>
                  )}
            </TranslationWrapper>
        );
    };
};

     
const TranslationWrapper = ({ children }) => {
  const {t}=useTranslation()
    const { leftside1,leftside2,rightside1,rightside2,phone,email,Adresse,btn,emailfill,names } = t("Contactpage", { returnObjects: true });
    return children({leftside1,leftside2,rightside1,rightside2,phone,email,Adresse,btn,emailfill,names});
};


export default ContactUs;