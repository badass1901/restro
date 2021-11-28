import React from "react";
import "./styles/Foodmenu.css";

const MENU = [
  { food: "SHAHI PANEER", priceBox: "$12", pricetray:"$35" },
  { food: "PANEER BUTTER MASALA", priceBox: "$12", pricetray:"$35" },
  { food: "KADHAI PANEER", priceBox: "$12", pricetray:"$35" },
  { food: "MUTTER PANEER", priceBox: "$12", pricetray:"$35" },
  { food: "PALAK PANEER", priceBox: "$12", pricetray:"$35" },
  { food: "PANEER BHURJI", priceBox: "$12", pricetray:"$35" },
  { food: "KAJU MASALA", priceBox: "$14", pricetray:"$40" },
  { food: "MALAI KOFTA", priceBox: "$12", pricetray:"$35" },
  { food: "DAL MAKHANI", priceBox: "$12", pricetray:"$35" },
  { food: "SOYA CHAP MASALA", priceBox: "$12", pricetray:"$35" },
  { food: "BHINDI MASALA", priceBox: "$12", pricetray:"$35" },
  { food: "KOFTA (LAUKI / CABBAGE / VEG)", priceBox: "$10", pricetray:"$28" },
  { food: "CHHOLA MASALA", priceBox: "$10", pricetray:"$30" },
  { food: "RAJMA MASALA", priceBox: "$10", pricetray:"$30" },
  { food: "SOYA NUGGET CURRY", priceBox: "$10", pricetray:"$30" },
  { food: "CHANA MASALA DRY/WET", priceBox: "$9", pricetray:"$25" },
  { food: "ALLO TAMATAR (BHANDARA STYLE)", priceBox: "$9", pricetray:"$25" },
  { food: "ALOO MUTTER (CURRY)", priceBox: "$9", pricetray:"$25" },
  { food: "SPECIAL PAPAD KI SABZI", priceBox: "$9", pricetray:"$25" },
  { food: "ALOO GOBHI DRY", priceBox: "$9", pricetray:"$25" },
  { food: "DAL FRY", priceBox: "$9", pricetray:"$25" }
  
];
const SUBMENU = [
  { food: "JEERA RICE", priceBox: "$3", pricetray:"$10" },
  { food: "KAJU PULAV", priceBox: "$6", pricetray:"$20" },
  { food: "VEG PULAV", priceBox: "$6", pricetray:"$20" },
  { food: "VEG BIRYANI", priceBox: "$8", pricetray:"$26" },
];

const SUBMENU2 = [
  { food: "PLAIN ROTI (PHULKA)", priceBox: "25 FOR $12" },
  { food: "CHAPATI", priceBox: "25 FOR $12" },
  { food: "AJWAIN ROTI", priceBox: "25 FOR $12" },
  { food: "PURI", priceBox: "25 FOR $15" },
  { food: "THEPLA", priceBox: "25 FOR $15" },
  { food: "STUFFED PARATHA (ALOO /MULI /GOBHI)", priceBox: "25 FOR $30" },
  { food: "PANEER PARATHA", priceBox: "25 FOR $35" },
];

function Foodmenu() {
  return (
    <div className="foodmenu">
      <center>
        <h5 className="SubHeadingMid">Kadhai Ki Karamat</h5>
        {MENU.map((item) => (
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
         <h5 className="SubHeadingMid">Basmati Ki Khusbu</h5>
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
          <h5 className="SubHeadingMid">Tawe Ka Kamaal</h5>
        {SUBMENU2.map((item) => (
          <div class="row1 row row-cols-2">
            <div class="col" key={item.food}>
              <font color="#ffc400">{item.food}</font>
            </div> 
            <div class="col" key={item.food}>
              <font color="#fff">{item.pricetray}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.priceBox}</font>
            </div>
           
          </div>
        ))}
      </center>
    </div>
  );
}

export default Foodmenu;
