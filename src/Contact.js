import React from 'react'

const Contact = () => {
      return (
            <>
                  <section id="contact" className="services section-bg">
                        <div className="container">

                              <div className="row">


                                    <div className="col-md-4 col-lg-3 m-4">
                                          <div className="">
                                                <h5 className="card-header">Location:</h5>
                                                <div className="card-body">

                                                      <p className="card-text">

                                                            A108 Adam Street
                                                            New York, NY 535022
                                                      </p>

                                                </div>
                                          </div>


                                    </div>



                                    <div className="col-md-4 col-lg-2 m-4">
                                          <div className="">
                                                <h5 className="card-header">Open Hours:</h5>
                                                <div className="card-body">

                                                      <p className="card-text">
                                                            Monday-Saturday:
                                                            11:00 AM - 2300 PM
                                                      </p>

                                                </div>
                                          </div>


                                    </div>


                                    <div className="col-md-4 col-lg-2 m-4">
                                          <div className="">
                                                <h5 className="card-header">Email:</h5>
                                                <div className="card-body">
                                                      <h5 className="card-title">Special title treatment</h5>
                                                      <p className="card-text">info@example.com
                                                            contact@example.com
                                                      </p>

                                                </div>
                                          </div>


                                    </div>


                                    <div className="col-md-4 col-lg-2 m-4">
                                          <div className="">
                                                <h5 className="card-header">Call:</h5>
                                                <div className="card-body">
                                                      <h5 className="card-title">Special title treatment</h5>
                                                      <p className="card-text">
                                                            +1 5589 55488 51 <br />
                                                            +1 5589 22475 14
                                                      </p>

                                                </div>
                                          </div>


                                    </div>

                              </div>







                              <div className="container-fluid px-1 py-2 mx-auto">
                                    <div className="row d-flex justify-content-center">
                                          <div className="col-xl-col-12 text-center">

                                                <div className="card border border-white">

                                                      <form className="form-card">
                                                            <div className="row justify-content-between text-left">
                                                                  <div className="form-group col-sm-6 flex-column d-flex">
                                                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Your Name' aria-describedby="emailHelp" />

                                                                  </div>
                                                                  <div className="form-group col-sm-6 flex-column d-flex">
                                                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Your Email' aria-describedby="emailHelp" />

                                                                  </div>
                                                            </div>


                                                            <div className="row justify-content-between text-left mt-3">
                                                                  <div className="form-group col-12 flex-column d-flex"> <input type="text" id="ans" className="form-control" name="ans" placeholder="Subject" onblur="validate(6)" /> </div>
                                                            </div>



                                                            <div className="row justify-content-between text-left mt-3">
                                                                  <div className="form-outline">
                                                                        <textarea className="form-control" placeholder='Message' id="textAreaExample1" rows="4"></textarea>

                                                                  </div>
                                                            </div>

                                                            <div className="form-btn">
                                                                  <button className="contact3-form-btn button-17 m-3">
                                                                        Submit
                                                                  </button>
                                                            </div>


                                                      </form>
                                                </div>
                                          </div>
                                    </div>
                              </div>


















                        </div>










                  </section>

            </>
      )
}

export default Contact