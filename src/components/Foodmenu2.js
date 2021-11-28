import React from "react";
import "./styles/Foodmenu.css";

const MENU = [

  { food: "Sweets", priceBox: "BOX RATE", pcsBox: "PCS", pricetray:"TRAY RATE",  pcsTray: "PCS" },
  { food: "BOONDI LADDU", priceBox: "$7", pcsBox: "8", pricetray:"$15",  pcsTray: "20" },
  { food: "COCONUT LADDU", priceBox: "$6", pcsBox: "8", pricetray:"$15",  pcsTray: "25" },
  { food: "BESAN LADDU", priceBox: "$6", pcsBox: "8", pricetray:"$15",  pcsTray: "20" },
  { food: "PANJABI PINNI", priceBox: "$8", pcsBox: "8", pricetray:"$36",  pcsTray: "40" },
  { food: "MALAI PEDA", priceBox: "$8", pcsBox: "10", pricetray:"$28",  pcsTray: "40" },
  { food: "KAJU KATALI", priceBox: "$9", pcsBox: "16", pricetray:"$25",  pcsTray: "50" },
  { food: "BADAM BURFI", priceBox: "$7", pcsBox: "8", pricetray:"$32",  pcsTray: "40" },
  { food: "BESAN BURFI", priceBox: "$7", pcsBox: "8", pricetray:"$30",  pcsTray: "40" },
  { food: "COCONUT BURFI", priceBox: "$6", pcsBox: "8", pricetray:"$24",  pcsTray: "40" },
  { food: "KAJU PISTA ROLL", priceBox: "$9", pcsBox: "12", pricetray:"$28",  pcsTray: "40" },
  { food: "BADAM PISTA ROLL", priceBox: "$9", pcsBox: "12", pricetray:"$28",  pcsTray: "40" },
  { food: "KAJU DATES ROLL", priceBox: "$9", pcsBox: "12", pricetray:"$28",  pcsTray: "40" },
  { food: "BADAM DATES ROLL", priceBox: "$9", pcsBox: "12", pricetray:"$28",  pcsTray: "40" },
  { food: "COCONUT ROSE DELIGHT", priceBox: "$7", pcsBox: "12", pricetray:"$25",  pcsTray: "50" },
];

const SUBMENU = [
  { food: "Sweets", priceBox: "BOX-RATE", pricetray:"TRAY-RATE"},
  { food: "MEETA KHURMA", priceBox: "$7", pricetray:"20"},
  { food: "SHAKKAR PARA", priceBox: "$6", pricetray:"18"},
  { food: "NAMAK PARE/NIMKI", priceBox: "$4", pricetray:"12"},
  { food: "JIRA PURI", priceBox: "$4", pricetray:"12"},
];

function Foodmenu1() {
  return (
    <div className="foodmenu">
      <center>
        <h5 className="SubHeadingMid">Homemade Sweets & Snacks</h5>
        
        {MENU.map((item) => (
          <div class="row1 row row-cols-2">
            <div class="col" key={item.food}>
              <font color="#ffc400">{item.food}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.priceBox}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.pcsBox}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.pricetray}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.pcsTray}</font>
            </div>
          </div>
        ))}
        <h5 className="SubHeadingMid">Snacks</h5>
        {SUBMENU.map((item) => (
          <div class="row1 row row-cols-2">
            <div class="col" key={item.food}>
              <font color="#ffc400">{item.food}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.priceBox}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.pcsBox}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.pricetray}</font>
            </div>
            <div class="col" key={item.food}>
              <font color="#fff">{item.pcsTray}</font>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
}

export default Foodmenu1;
