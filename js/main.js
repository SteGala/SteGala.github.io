function hideDisplayAbstract(pID) {
    var collapsed = document.getElementById('collapsed-'.concat(pID));
    var extended = document.getElementById('extended-'.concat(pID));
  
    if (collapsed.style.display === "none") {
      collapsed.style.display = "contents";
      extended.style.display = "none";
    } else {
      collapsed.style.display = "none";
      extended.style.display = "contents";
    }
  }