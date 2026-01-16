import React, { useEffect } from "react"

import "./Navbar.scss"
import { Link } from "react-router-dom"
const Navbar = () => {
  const [active, setActive] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const { pathname } = window.location

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //   )

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)

    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, [])

  const currentUser = {
    id: 1,
    userName: " johnDoe",
    isSeller: true,
  }

  return (
    <div className={active || pathname !== "/" ? "navbar active " : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="Link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}

          {!currentUser && <button>Join</button>}

          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://www.dreamstime.com/illustration/s-letter-linked.html"
                alt="image"
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="Link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="Link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="Link" to="/orders">
                    Orders
                  </Link>
                  <Link className="Link" to="/messages">
                    Messages
                  </Link>
                  <Link className="Link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="Link" to="/">
              Graphics & Design
            </Link>
            <Link className="Link" to="/">
              Video & Animation
            </Link>
            <Link className="Link" to="/">
              Writing & Translation
            </Link>
            <Link className="Link" to="/">
              AI Services
            </Link>
            <Link className="Link" to="/">
              Digital Marketing
            </Link>
            <Link className="Link" to="/">
              Music & Audio
            </Link>
            <Link className="Link" to="/">
              Programming & Tech
            </Link>
            <Link className="Link" to="/">
              Business
            </Link>
            <Link className="Link" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar
