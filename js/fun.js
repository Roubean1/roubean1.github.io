var toggleBtn = document.getElementById("toggleBtn");
var sidebar = document.getElementById("sidebar");
var content = document.getElementById("content");

var isSidebarOpen = false;

toggleBtn.addEventListener("click", function() {
    if (!isSidebarOpen) {
        sidebar.style.display = "block";
        setTimeout(function() {
            sidebar.style.opacity = "1";
            content.style.marginLeft = "310px"; // Posunutí obsahu
            content.style.paddingLeft = "20px";
        }, 10);
        isSidebarOpen = true;
    } else {
        sidebar.style.opacity = "0";
        setTimeout(function() {
            sidebar.style.display = "none";
            content.style.marginLeft = "0"; // Nulování marginu pro vrácení obsahu zpět
        }, 300);
        isSidebarOpen = false;
    }
});