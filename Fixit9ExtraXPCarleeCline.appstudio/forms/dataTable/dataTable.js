
// an array of arrays. One array for each row.
alert("I changed the table to hold information about Omaha restaurants. I also had to change the column labels to the different categories like price, location, and type. In order to show, click the update entire table button.")
 var data1 = [
    ["Kitchen Table", "American", "$$-$$$", "1400-1498 Farnam St, Omaha, NE 68102"],
    ["Plank Seafood Provisions", "Seafood", "$$-$$$", "1205 Howard St, Omaha, NE 68102"],
    ["Upstream Brewing Company", "Brew Pub", "$$-$$$", "514 S 11th st, Omaha, NE 68102-2808"],
    ["Twisted Fork", "American", "$$-$$$", "1014 Howard St, Omaha, NE 68102-2815"],
    ["Stokes Grill and Bar", "Mexican", "$$-$$$", "1122 Howard St, Omaha, NE 68102"],
    ["Pitch Pizzeria", "American", "$$-$$$", "5021 Underwood Ave, Omaha, NE 68132-2235"],
    ["Spencer's for Steaks and Chops", "Steakhouse", "$$$$", "102 S 10th St, Omaha, NE 68102"],
    ["Modern Love", "Vegetarian", "$$-$$$", "1319 S 50th St 3157 Farnam st, Omaha, NE 68106-2470"],
    ["The Grey Plume", "American", "$$$$", "220 S 31st Ave, Omaha, NE 68131-3556"],
    ["Lisa's Radial Cafe", "American", "$", "817 N 40th St, Omaha, NE 68131-1828"],
    ["Zio's Pizzeria", "Italian", "$", "1109 Howard St, Omaha, NE 68102-2890"],
    ["Spaghetti Works", "Italian", "$$-$$$", "1105 Howard St, Omaha, NE 68102-2840"],
    ["Blue Sushi Sake Grill", "Japanese", "$$-$$$", "416 S 12th St, Omaha, NE 68102-2810"],
    ["Wave Bistro", "Chinese", "$$-$$$", "4002 N 144th St, Omaha, NE 68116-4206"],
    ["Salween", "Thai", "$$-$$$", "1102 NW Radial Hwy, Omaha, NE 68132-1730"],
];

var dataJson = JSON.stringify(data1);

// class values are here:
// http://getbootstrap.com/css/#type-alignment
var columns1 = [
            {title: "Name"},
            {title: "Type"},
            {title: "Price Range"},
            {title: "Address"},
        ];
        
function Main() {
  updateTable();
}

DataTable1.onclick = function(event) {
  if(typeof(event.target._DT_CellIndex) != "object" ) { return; }
 var row,col;
  row = event.target._DT_CellIndex.row;
  col = event.target._DT_CellIndex.column;
  NSB.MsgBox("Click on "  +  row  +  ", "  +  col  +  ". Value is '"  +  data1[row][col]  +  "'.");
};

function updateTable() {
  DataTable1.settings.columns = columns1;
  DataTable1.settings.data = data1;
  DataTable1.build();
}

Button1.onclick = function() {
  data1[0][0] += "+"; //Just to make a change to the table
  updateTable();
};

Button2.onclick = function() {
  var table = $("#DataTable1").DataTable();
  table.clear();

  DataTable1.settings.data = JSON.parse(dataJson);
  DataTable1.settings.data[0][0] = "Omaha";
  setTimeout(loadTable, 50);
};

function loadTable() {
  var table = $("#DataTable1").DataTable();
  table.rows.add(DataTable1.settings.data).draw();
}

Button3.onclick = function() {
  var table;
   table = $("#DataTable1").DataTable();
   $(table.rows().nodes()).removeClass("highlight");
   $(table.cells().nodes()).removeClass("highlight");
   $(table.column(2).nodes()).addClass("highlight");
};

Button4.onclick = function() {
 var table;
   table = $("#DataTable1").DataTable();
   $(table.rows().nodes()).removeClass("highlight");
   $(table.cells().nodes()).removeClass("highlight");
   $(table.row(2).nodes()).addClass("highlight");
};

Fliptoggle1.onchange = function() {
  DataTable1.settings.ordering = Fliptoggle1.value;
  updateTable();
};

Fliptoggle4.onchange = function() {
  DataTable1.settings.paging = Fliptoggle4.value;
  updateTable();
};

Fliptoggle5.onchange = function() {
  DataTable1.settings.searching = Fliptoggle5.value;
  updateTable();
};

