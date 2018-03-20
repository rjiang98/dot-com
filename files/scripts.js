function descriptionTimer() {
  var iAmDescriptions = document.getElementsByClassName("descriptions");
  var activeDescription = 0;
  while (iAmDescriptions[activeDescription].style.display != "block") {
    activeDescription++;
  }
  iAmDescriptions[activeDescription].style.display = "none";
  iAmDescriptions[(activeDescription + 1) % iAmDescriptions.length].style.display = "block";
  setTimeout(descriptionTimer, 3500);
}
