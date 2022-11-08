import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer mt-auto pb-4">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                        <div className="copyright text-center text-sm text-muted text-lg-start">
                            © {new Date().getFullYear()} Namibia University of Science and Technology 
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                            <li className="nav-item">
                            <a href="https://www.facebook.com/NUSTNamibia/" className="nav-link text-muted" target="_blank">
                                <i className="fa fa-facebook" />
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="https://twitter.com/NUST_Namibia" className="nav-link text-muted" target="_blank">
                                <i className="fa fa-twitter" />
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="https://www.linkedin.com/company/nust-namibia/" className="nav-link text-muted" target="_blank">
                                <i className="fa fa-linkedin" />
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="https://www.youtube.com/channel/UCw8L0Axttdo8AhezcONlRfw" className="nav-link pe-0 text-muted" target="_blank">
                                <i className="fa fa-youtube" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
