import React from 'react'

const DesignerVerify = () => {
  // Designer verify page
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-9 col-lg-7 mx-auto">
            <div class="card my-5">
              <div class="card-body">
                <h5 class="card-title text-center">A few steps to verify your designer identity...</h5>
                <form class="form-signin">
                  <div class="form-label-group my-4">
                    <input type="text" id="inputName" class="form-control" placeholder="Email address" required autofocus />
                  </div>
                  <div class="form-label-group my-4">
                    <input type="text" id="inputLocation" class="form-control" placeholder="Location" required />
                  </div>
                  <div class="form-label-group my-4">
                    <input type="text" id="portfolio" class="form-control" placeholder="portfolio" required />
                  </div>
                  <h5>Or</h5>
                  <h5>Drag and drop to upload here</h5>
                  <p>*support file: pdf(under 10mb)</p>
                  <button class="btn btn-primary mb-4" type="submit">Submit</button>
                  <p><small className="text-muted">Your application has been submitted, We will approve your application in 48 hrs.</small></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignerVerify
