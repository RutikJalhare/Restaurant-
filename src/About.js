import React from 'react'
import Aboutimg from './images/About-img.jpeg'
const About = () => {
      return (
            <>

                  <section id="about" className="about"><div className="container aos-init aos-animate" data-aos="fade-up">
                        
                        <div className="row content">
                              <div className="col-lg-6">
                                    <div className="gallery-item h-100">
                                          <img src={Aboutimg} className="img-fluid" alt="" />
                                          <div className="gallery-links d-flex align-items-center justify-content-center">

                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 pt-4 text-secondary pt-lg-0">
                              <div className='m-5'>
                                    <h1 className='abouth'>
                                        <span className=' text-secondary'>Eum ipsam laborum deleniti</span>  <span className='text-danger'>velit pariatur architecto aut nihil</span> 
                                    </h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit

                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                                          <div class="check"></div>


                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit

                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                          </div>
                              </div>
                        </div>
                  </div>
                  </section>







            </>
      )
}

export default About;