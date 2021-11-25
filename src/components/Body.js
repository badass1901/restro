import React from 'react'
import './styles/Body.css'
import bg1 from './images/leaves.png'

function Body() {
    return (
        <div className="main">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div class="area-title text-center">
                        <font class="heading">Our Story</font>
                        <p class="para">Quisque sit amet turpis et ipsum elementum facilisis. Quisque sed placerat libero. Pellentesque nec tellus sollicitudin, sollicitudin ligula non, tristique nibh Donec vitae turpis sagittis, cursus nunc ac, aliquet nunc. Donec viverra vel massa at posuere. Aliquam et fringilla augue consequat posuere sem, eu ornares viverra veleso massa at posuere. Aliquam et fringilla augue</p>
                        <p class="para">Quisque sit amet turpis et ipsum elementum facilisis. Quisque sed placerat libero. Pellentesque nec tellus sollicitudin, sollicitudin ligula non, tristique nibh Donec vitae turpis sagittis, cursus nunc ac, aliquet nunc. Donec viverra vel massa at posuere. Aliquam et fringilla augue consequat posuere sem, eu ornares viverra veleso massa at posuere. Aliquam et fringilla augue</p>
                        
                        <img src={bg1} class="img" alt="" />
                    </div>
                </div>
           
        </div>
    )
}

export default Body
