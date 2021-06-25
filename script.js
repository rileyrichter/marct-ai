// Counting the number of items returned after the filter function

function countItems(listID) {
  var ul = document.getElementById(listID);
  var i = 0,
    itemCount = 0;
  while (ul.getElementsByTagName("li")[i++]) itemCount++;
  document.write(itemCount);
}

function myFuntion() {}
