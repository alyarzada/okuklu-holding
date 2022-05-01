import React from 'react'

const Contact = () => {
  return (
    <section className='contact-section'>
              <div className="contact-header">
                 <h1 className='text-center text-dark mb-4'>Bizimle elaqe qurun</h1>
              </div>
              <div className="container">
                  <form class="row g-3">
                    <div class="col-md-4">
                      <label for="nameinput" class="form-label">Ad, Soyad</label>
                      <input type="text" class="form-control" id="nameinput"/>
                  </div>
                  <div class="col-md-4">
                     <label for="ageinput" class="form-label">Nömrə</label>
                    <input type="text" class="form-control" id="ageinput"/>
                  </div>
                  <div class="col-md-4">
                    <label for="emailinput" class="form-label">Email</label>
                    <input type="email" class="form-control" id="emailinput"/>
                  </div>
                  <div class="col-md-12">
                    <label for="textinput" class="form-label">Mesaj</label>
                    <input type="text" class="form-control text-input" id="textinput" placeholder="Mesaj yaz"/>
                  </div>
                  <div class="col-12 text-center">
                    <button type="submit" class="btn btn-warning" style={{padding: '0.8rem 3rem'}}>Göndər</button>
                  </div>
                </form>
              </div>
    </section>
  )
}

export default Contact