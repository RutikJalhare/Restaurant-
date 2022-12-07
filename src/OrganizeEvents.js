import React from 'react'
import Orgparty from './images/About-img.jpeg'
const OrganizeEvents = () => {
      return (
            <>

                  <section id="oevents" className="about"><div className="container aos-init aos-animate" data-aos="fade-up">

                        <div class="section-title p-4 text-center">
                              <h2 className='why-us-h'>   <span>Organize Your</span><span className='text-danger mx-2'>Events </span>  <span>in our Restaurant</span></h2>




                        </div>






                        <div className="row content">
                              <div className="col-lg-6">
                                    <div className="gallery-item h-100">
                                          <img src={Orgparty} className="img-fluid" alt="" />
                                          <div className="gallery-links d-flex align-items-center justify-content-center">

                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 pt-4 text-secondary pt-lg-0">
                                    <div className='m-5'>
                                          <h1 className='abouth'>
                                                <span className='text-danger'>Custome Parties</span>
                                          </h1>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                          <h4 className='lead'>Lorem ipsum dolor sit amet  consectetur .</h4>


                                          <h4 className='lead'>Tempor incididunt ut labore et dolore magna aliqua..</h4>

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

export default OrganizeEvents;