import React from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
      <div>
            <div class="container-fluid mx-auto">
    <div class="row justify-content-center top-part">
        <div class="col-md-6 text-center center-content">
            <div class="d-flex-inline">
                <h3 class="footer-heading">Start a Project with itCraft</h3>
            </div>
            <div class="d-flex-inline">
                <p>We are based in Warsaw, Bydgoszcz & Torun in Poland but we are Google Cloud Partner we can arrange a meeting at Google Campus in Warsaw or in London. We are also present in Norway. Below you will find all the contact details you need.</p>
            </div>
            <div class="d-flex-inline pt-2"> <Link to="/contact"><button class="btn-pink btn">BOOK NOW</button></Link> </div>
        </div>
    </div>
    <div class="row">
        <div class="line mb-3 mx-auto"></div>
        <div class="d-md-flex px-5 justify-content-around bd-highlight col-md-12 pt-5 pb-5 mb-3">
            <div class="p-2 flex-fill bd-highlight mb-5 mb-md-0">
                <h3><font color="#FF4081">My</font>Restro</h3> <small>All right reserved</small>
            </div>
            <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                <h5 class="places"><font color="#FF4081">R</font>EACH <font color="#FF4081">U</font>S</h5>
                <p class="mb-0">Bydgoszcz Centrum Burnesa</p>
                <p class="mb-0">ul Pzzenmdcwa 25, ibsura 24,</p>
                <p class="mb-0">B5-7GB Bydgosrdz, Poland</p>
            </div>
           
        </div>
        <div class="line mb-3 mx-auto"></div>
    </div>
    <div class="row bottom-part">
        <div class="d-lg-flex justify-content-between bd-highlight col-md-12 mb-5 px-5">
            <div class="p-2 align-self-center flex-fill bd-highlight">
                <a href="/" class="socialIcon"><i class="fa fa-facebook px-2"></i></a>
                <a href="/" class="socialIcon"><i class="fa fa-linkedin px-2"></i></a>
                <a href="/" class="socialIcon"><i class="fa fa-twitter px-2"></i></a>
                <a href="/" class="socialIcon"><i class="fa fa-instagram px-2"></i></a>
            </div>
            <div class="p-2 row flex-fill bd-highlight justify-content-left">
                <div class="p-2 d-lg-flex">
                    
                    <div class="p-2 flex-fill d-flex bd-highlight">Made with love By <a href="https://shashwatsagar.netlify.app/" class="developer"> <font color="#FF4081">S</font>hashwat <font color="#FF4081">S</font>agar</a></div>
                </div>
            </div>
            <div class="p-2 align-self-center flex-fill bd-highlight">
                <div class="fa fa-mobile px-2 grey-text">&nbsp;&nbsp;<span id="contact">888-777-666</span></div>
                <div class="fa fa-envelope-o px-2 grey-text">&nbsp;&nbsp;info@itcraft.in</div>
            </div>
        </div>
    </div>
</div>
      </div>
    )
}

export default Footer
