import React from 'react'
import Button from '../elements/Button'
import BrandIcon from './IconTest'

export default function Header(props) {

    const getNavLinkClass = path =>{
        return props.location.pathname === path ? "active" : "";
    }

  return (
    <header className = "spacing-sm">
        <div className="container">
        <nav className = "navbar navbar-expand-lg navbar-light">
            <BrandIcon/>

        <div className="collapse navbar-collapse">
                <ul className = "navbar-nav ml-auto">
                    <li className = {`nav-item${getNavLinkClass("/")}`}>
                        <Button className="nav-link" type = "link" href = "">
                            Home
                        </Button>
                    </li>   
                    <li className = {`nav-item${getNavLinkClass("/about-us")}`}>
                        <Button className="nav-link" type = "link" href = "/about-us">
                            About Us
                        </Button>
                    </li>   
                    <li className = {`nav-item${getNavLinkClass("/vision-and-mission")}`}>
                        <Button className="nav-link" type = "link" href = "/vision-and-mission">
                         Vision and Mission
                        </Button>
                    </li>   
                    <li className = {`nav-item${getNavLinkClass("/our-services")}`}>
                        <Button className="nav-link" type = "link" href = "/our-services">
                         Our Services
                        </Button>
                    </li>   
                </ul>
        </div>
        </nav>
        </div>
        

    </header>
  )
}
