import React from "react";
import "./styles/Foodmenu.css";

const MENU = [
  { food: "SEWAIYAN", priceBox: "$9", pricetray: "$25" },
  { food: "KHEER", priceBox: "$9", pricetray: "$25" },
  { food: "SUJI HALWA (POOJA STYLE)", priceBox: "$9", pricetray: "$30" },
  { food: "ATTA HALWA (GURUDWARA STYLE)", priceBox: "$9", pricetray: "$30" },
  { food: "BESAN HALWA", priceBox: "$10", pricetray: "$35" },
  // any more items can be added here
];
const SUBMENU = [
  { food: "DAHI WADA/DAHI BHALLE", priceBox: "25PC", pricetray: "$30" },
  { food: "KACHORI DAL/ONION/ALOO",variety: "", priceBox: "25PC", pricetray: "$20" },
  { food: "SAMOSA PATTIES", priceBox: "25PC", pricetray: "$25" },
  { food: "SAMOSA", priceBox: "25PC", pricetray:"$35" },
  { food: "MUMBAI PAV BHAJI(BHAJI ONLY)", priceBox: "$25", pricetray: "Served with (Onion&Lemon)" },
  { food: "CHAMCHAMIT USUAL PAV", priceBox: "$25", pricetray:"Served with (Onion,Lemon&Farsan)" },
  { food: "SPICY VADA PAV (VADA ONLY)", priceBox: "$25", pricetray:"20 Vadas with (Chutney&Fried Chillies)" },
  { food: "DABELI PAV (DABELI MASALA)", priceBox: "$30", pricetray:"(20 Dabeli-Pav)" },

]; 

function Foodmenu1() {
  return (
    <div className="foodmenu">
      <center>
        <h5 className="SubHeadingMid">Kuch Meetha</h5>
        {MENU.map((item) => (
          <div class="row1 row row-cols-2">
            <div class="col" key={item.food}>
              <font color="#ffc400">{item.food}<br />{item.variety}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.priceBox}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.pricetray}</font>
            </div>
          </div>
        ))}

        <h5 className="SubHeadingMid">Street Food Ka Maza</h5>
        {SUBMENU.map((item) => (
          <div class="row1 row row-cols-2">
            <div class="col" key={item.food}>
              <font color="#ffc400">{item.food}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.priceBox}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.pricetray}</font>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
}

export default Foodmenu1;
