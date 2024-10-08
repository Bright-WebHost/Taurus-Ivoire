import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');
var img4 = require('./../../images/All Teakwood/homeproduct.webp');

class OurMission extends React.Component {
    render() {
        return (
            <TranslationWrapper>
{({ mainheading, mainheadingsapn, productheading,productheadingsapn ,subtext,li1,li2,li3,li4,btn,botttomtext,contactinfo1,contactinfo2,names,email,Phone,Textarea,contactinfobtn}) => (
    

            <>
                <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" >
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">{mainheading} </span> {mainheadingsapn}</h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" >
                                        <h3 className="m-t0"><span className="font-weight-100">{productheading}</span><br /> {productheadingsapn}</h3>
                                        <p>{subtext}</p>
                                        <ul className="list-angle-right anchor-line">
                                            <li><NavLink to={"/services"}>{li1}</NavLink></li>
                                            <li><NavLink to={"/services"}>{li2}</NavLink></li>
                                            <li><NavLink to={"/services"}>{li3}</NavLink></li>
                                            <li><NavLink to={"/services"}>{li4}</NavLink></li>
                                            {/* <li><NavLink to={"/services"}>Leed consultation</NavLink></li> */}
                                        </ul>
                                        <div className="text-right">
                                            <NavLink to="/services" className="site-button-link" data-hover="Read More">{btn} <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{ backgroundImage: 'url(' + img4 + ')' }} />
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="contact-home1-left bg-dark p-a30 m-b0">
                                        <h3 className="text-white m-t0"><span className="font-weight-100">{contactinfo1} </span> {contactinfo2}</h3>
                                        <form className="cons-contact-form2 form-transparent" method="post" action="">
                                            <div className="input input-animate">
                                                <label htmlFor="name">{names}</label>
                                                <input type="text" name="username" id="name" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="email">{email}</label>
                                                <input type="email" name="email" id="email" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="Phone">{Phone}</label>
                                                <input type="text" name="phone" id="Phone" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="message">{Textarea}</label>
                                                <textarea name="message" id="message" required defaultValue={""} />
                                                <span className="spin" />
                                            </div>
                                            <div className="text-center p-t10">
                                                <button type="submit" className="site-button btn-effect ">
                                               {contactinfobtn}
                    </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>{botttomtext}</strong>
                    </div>
                </div>
                </>

)}
</TranslationWrapper>
        );
    }
};

const TranslationWrapper = ({ children }) => {
    const {t}=useTranslation()
    const { mainheading, mainheadingsapn, productheading,productheadingsapn ,subtext,li1,li2,li3,li4,btn,botttomtext,contactinfo1,contactinfo2,names,email,Phone,Textarea,contactinfobtn } = t("ourproduct", { returnObjects: true });
    return children({ mainheading, mainheadingsapn, productheading,productheadingsapn ,subtext,li1,li2,li3,li4,btn,botttomtext,contactinfo1,contactinfo2,names,email,Phone,Textarea,contactinfobtn});
};

export default OurMission;