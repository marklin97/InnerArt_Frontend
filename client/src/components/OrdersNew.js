import React from 'react'
import img from '../../images/designer.jpg'
import './AccountSetting.css'

export const OrdersNew = () => {
  // Designer account setting page
  return (
    <div>
      <div class="container manage-section">
        <div class="row">
          {/* Account Setting Section */}
          <div class="col-lg-3">
            <h3 class="my-4">Account Settings</h3>
            <div class="list-group list-group-flush">
              <a href="#" class="list-group-item">Questionaries</a>
              <a href="#" class="list-group-item active">Orders</a>
              <a href="#" class="list-group-item">Inbox</a>
              <a href="#" class="list-group-item">Loved items</a>
              <a href="#" class="list-group-item">My items</a>
              <a href="#" class="list-group-item">Support</a>
            </div>
          </div>

          {/* Order Section */}
          <div class="col-lg-9 mt-4">
            <div className='row'>
              <h4 className='col-lg-8'>Order</h4>
              {/* Dropdown button for organize */}
              <div className='col-lg-2 py-0'>
                <div className="dropdown">
                  <button className="btn btn-sm btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Organized by
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Time</a>
                    <a className="dropdown-item" href="#">Job type</a>
                  </div>
                </div>
              </div>
              {/* filter button & grid button */}
              <div className="col-lg-2 py-0">
                <a href="#"><svg className="bi bi-filter" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 10.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd" />
                </svg></a>
                <a href="#"><svg className="bi bi-grid-fill ml-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z" clip-rule="evenodd" />
                </svg></a>
              </div>
            </div>

            {/* New & Active & Completed */}

            <div class="btn-group btn-group-toggle my-4" data-toggle="buttons">
              <label class="btn btn-danger active">
                <input type="radio" name="options" id="option1" checked /> New
              </label>
              <label class="btn btn-danger">
                <input type="radio" name="options" id="option2" /> Active
              </label>
              <label class="btn btn-danger">
                <input type="radio" name="options" id="option3" /> Completed
              </label>
            </div>

            {/* Project #1 section */}

            <div className='mt-5 mb-3'>
              <div class="d-flex align-item-center">
                <p className="flex-grow-1 text-left m-0 p-0">Project #1 Order date 23/02/2020</p>
                <div>
                  <button className="btn btn-danger">Refuse</button>
                  <button className="btn btn-success ml-2">Accept</button>
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-md-4 d-flex flex-column">
                <img className="rounded-circle mb-3 align-self-center" src={img} alt="Image" />
                <p>Client name</p>
                <div><button className="btn btn-danger mb-2">Contact</button></div>
                <div><button className="btn btn-danger">View Questionaire</button></div>
              </div>

              <div className="col-md-4">
                <img style={{ minWidth: "13rem" }} src="https://s3-alpha-sig.figma.com/img/9671/eae2/ad61a80e3ab3eb9dc7c783fdb625757e?Expires=1589155200&Signature=KsDptAif6mIoqbTEMyCcT15NEdsWzHAFak4byl9TmGtrDZkHCyWYMuj21YiFeL4igMsfTq7gvwVmQ6FrtyjAoBn20bFdeAkdfjhCoaVaaFERUfEmPLrLWQ2npzmMWQpep1OCrtMy4PNwwxSGoIH6YEmoYotYW~D~kR2tAKLvwros1Dayg1sgvEuywZjwUNVCS4O3z-t4Vdqdz81b07Ay~XiuNSUWuArWtryO~2BMP8dqEkkW7LkM2n6OlxbmarukT2JdcnuLwIfHUKkzmDnAbPKxHjUOC5NwsnoGQPz20NLpofN2qikZrv6jk-9ozi9uzqja3YCc8deGwTBPp8R7Yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=".." />
              </div>
              <div className="col-md-4">
                <img style={{ minWidth: "13rem" }} src="https://s3-alpha-sig.figma.com/img/dce1/006d/c4bf1febc1b5f3e6a321fd685cebdcb1?Expires=1589155200&Signature=N4JtBArZ1QL1VWzMAovGjjRBWJw1LlIAepTyzW3f58MK51wAmTe4spJFwCUEUEDN2vTao8kzZJtVGTXCzyJLxc6yeZJb0~8pCv9E1r7nnSmvUH~3gtzskDPc124-wwkPiw0TXZkP3iOmbbCNGNlr6gMYPIa2y6ZeNyvrx5DI9Tcx2ap6ykGe9ZCpAR4rRSX3sdHZKpIMzh2iKXANMOJm0x6TWnmHLfSARcgZRKKmPB0ShH7c2DrnPeRyACCH8grJfFAZqzrGVTiU5lzo5xX9AGYM1LzJomaDLJed0IAxRUFQg7MUJXCjv5VRWmYgYswL~UV4cDwuNRRqz6NFP0A62w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=".." />
              </div>
            </div>

            <a className="btn btn-danger" href="#">View Order detials</a>

            <div className='mt-4 mb-3'>
              <div class="d-flex align-item-center">
                <p className="flex-grow-1 text-left m-0 p-0">Project #2 Order date 01/03/2020</p>
                <div>
                  <button className="btn btn-danger">Refuse</button>
                  <button className="btn btn-success ml-2">Accept</button>
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-md-4 d-flex flex-column">
                <img className="rounded-circle mb-3 align-self-center" src={img} alt="Image" />
                <p>Client name</p>
                <div><button className="btn btn-danger mb-2">Contact</button></div>
                <div><button className="btn btn-danger">View Questionaire</button></div>
              </div>

              <div className="col-md-4">
                <img style={{ minWidth: "13rem" }} src="https://s3-alpha-sig.figma.com/img/f8d5/9480/bd479f76b0a8042f7a34bfa2cb188cd7?Expires=1589155200&Signature=UK-cxDAeSoythPgFI2iMHzV1b4150xF~FJbV4FqbIucb~mPivAxnAurKeVvxxynVNyRERhrSJGHuSgX9tMJNymBbS2DLz1W2NlgRxJD50hgi8OekDLrfwWbI4jGmQUHshhAgrycZn8~46M~eLRxCtNybzihpYBCaWzLu2JVHn4cBrPzi8PE2U9OgcF7599BNrUM3Cnk5jK6dhKmDx-XeCYbI-1DHqM39zvkkWneEamDICwbatYWH3RS5lxlAeHjr3u5oZFML6vHVBh5ooJG10-x835bGnmOLD9mmmcxiS126aRll6Z1xuHNhOJIHl-kAWE1DVIcJrzmosLPO3TDEqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=".." />
              </div>
              <div className="col-md-4">
                <img style={{ minWidth: "13rem" }} src="https://s3-alpha-sig.figma.com/img/3a91/5e14/d3ad2869f83eec723d687e80337387c6?Expires=1589155200&Signature=TZljAxPGrHBpeGh2Flc8tXoYtctOUZx7B4WqbEowAYd3XWVGRB2LyC2YmcuzlzqaoGxOQ0nVSyHNecpZltgYbiLQQrwcMTZgL2VDdxvMCtfPvQ5iVlWsmdAe0fI~kpGEm0vmPu8Ys0T9XlauoWFZnHLncTChUJaBlsqGIz-yNma3yO8hB0ByXhj9sQR-Tq~jOaf8l6UrCiYzQhySZQsW5Yw4CsKGTmnDRN41vYsJ3QFXKyt4Q9D9hT5dDOlZ5nt895eIXJ91YQdBr4h3JvZ~NRoGtAyPMmi7AW19bXcYUKAbuCl9psfp-j5kAc~w8NdWJbJaiB-fZnWZewumYqXEEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=".." />
              </div>
            </div>

            <a className="btn btn-danger" href="#">View Order detials</a>

          </div>
        </div>
      </div>

      <footer class="bg-dark footer d-flex flex-column justify-content-center mt-5">
        <div class="container">
          <p class="text-center text-white">Copyright &copy; Website 2019</p>
        </div>
      </footer>
    </div>
  )
}
