import React from 'react'
import img from '../../images/designer.jpg'
import './AccountSetting.css'

export const AccountSetting = () => {
  return (
    <div>
      <div class="container manage-section">

        <div class="row">

          <div class="col-lg-3">
            <h3 class="my-4">Account Settings</h3>
            <div class="list-group list-group-flush">
              <a href="#" class="list-group-item active">Questionaries</a>
              <a href="#" class="list-group-item">Orders</a>
              <a href="#" class="list-group-item">Inbox</a>
              <a href="#" class="list-group-item">Loved items</a>
              <a href="#" class="list-group-item">My items</a>
              <a href="#" class="list-group-item">Support</a>
            </div>
          </div>


          <div class="col-lg-9 mt-4">

            <h3 className="py-3">Manage Account</h3>

            <div className="row py-4">
              <div className="col-md-4">
                <img className="rounded-circle" src={img} alt="Image" />
              </div>
              <div className="col-md-8">
                <ul className="list-group list-group-flush">
                  <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                    <span class="item-text">Name and Surname</span>
                    <div>
                      <button class="btn btn-secondary btn-sm px-4">Edit</button>
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                    <span class="item-text">Email</span>
                    <div>
                      <button class="btn btn-secondary btn-sm px-4">Edit</button>
                    </div>
                  </li>
                  <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                    <span class="item-text">Password</span>
                    <div>
                      <button class="btn btn-secondary btn-sm px-4">Edit</button>

                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="list-group list-group-flush py-3">
              <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                <span class="item-text">Payment method</span>
                <div>
                  <button class="btn btn-secondary btn-sm px-4">Add</button>
                  <button class="btn btn-secondary btn-sm ml-3 px-4">Edit</button>
                </div>
              </li>
              <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                <span class="item-text">Received method</span>
                <div>
                  <button class="btn btn-secondary btn-sm px-4">Add</button>
                  <button class="btn btn-secondary btn-sm ml-3 px-4">Edit</button>
                </div>
              </li>
              <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                <span class="item-text">Phone number</span>
                <div>
                  <button class="btn btn-secondary btn-sm px-4">Add</button>
                  <button class="btn btn-secondary btn-sm ml-3 px-4">Edit</button>
                </div>
              </li>
              <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                <span class="item-text">Address</span>
                <div>
                  <button class="btn btn-secondary btn-sm px-4">Add</button>
                  <button class="btn btn-secondary btn-sm ml-3 px-4">Edit</button>
                </div>
              </li>
            </ul>

            <button className="btn btn-dark my-5 px-4 py-2">Verify designer <svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd" />
            </svg>
            </button>

          </div>
        </div>
      </div>

      <footer class="bg-dark footer d-flex flex-column justify-content-center">
        <div class="container">
          <p class="text-center text-white">Copyright &copy; Website 2019</p>
        </div>
      </footer>
    </div>
  )
}
