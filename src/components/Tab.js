import React from 'react'
import Foodmenu from './Foodmenu'
import Foodmenu1 from './Foodmenu1'
import Foodmenu2 from './Foodmenu2'
import './styles/Tab.css'


function Tab() {
    return (
      <div>
  <center>
  <h1 class="MenuHead">Our Delights</h1>
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item active" id="NavItem">
    <a class="nav-link" href="#Foodmenu" role="tab" data-toggle="tab">Main Course</a>
  </li>
  <li class="nav-item" id="NavItem">
    <a class="nav-link" href="#Foodmenu1" role="tab" data-toggle="tab">Street Foods</a>
  </li>
  <li class="nav-item" id="NavItem">
    <a class="nav-link" href="#Foodmenu2" role="tab" data-toggle="tab">Indian Sweets & Snacks</a>
  </li>
</ul>
</center>
{/* <!-- Tab panes --> */}
<div class="tab-content">
  <div role="tabpanel" class="tab-pane fade" id="Foodmenu"><Foodmenu /></div>
  <div role="tabpanel" class="tab-pane fade" id="Foodmenu1"><Foodmenu1 /></div>
  <div role="tabpanel" class="tab-pane fade" id="Foodmenu2"><Foodmenu2 /></div>
</div>
      </div>
    )
}

export default Tab
