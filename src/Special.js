import React from 'react'
import Aboutimg from './images/special.jpeg'
const Special = () => {
      return (
            <>
                  <section id="Specials" class="why-us section-bg">
                        <div class="container  text-center aos-init aos-animate" data-aos="fade-up">

                              <div class="section-title p-4">
                                    <h2 className='why-us-h'><span>Check our</span><span className='text-danger mx-2'>Specials</span> </h2>
                                    <p className='mt-4'>
                                          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
                                    </p>



                              </div>



                              <div class="row py-3">
                                    <div class="col-lg-6 offset-lg-3 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">

                                          <div className='text-start'>
                                                <h4><span className='fw-bold text-danger why-us-h'>Architecto ut aperiam autem id</span>
                                                </h4>
                                                <p className='text-secondary fst-italic'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>


                                                <p className='text-secondary'>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui.
                                                      Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>





                                          </div>



                                    </div>

                                    <div class="col-lg-3 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
                                          <div className="gallery-item h-100">
                                                <img src={Aboutimg} className="img-fluid rounded-circle" alt="" />
                                                <div className="gallery-links d-flex align-items-center justify-content-center">

                                                </div>
                                          </div>




                                    </div>





                              </div>
                        </div></section>







            </>
      )
}

export default Special