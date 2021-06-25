// Counting the number of items returned after the filter function
function countItems() {
  const ul = document.getElementById("company-list");
  var i = 0,
    itemCount = 0;
  while (ul.getElementsByClassName("company-card")[i++]) itemCount++;
  document.getElementById("item-count").innerHTML = itemCount;
}
