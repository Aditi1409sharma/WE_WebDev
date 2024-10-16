document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
    var tocList = document.getElementById("toc-list");
    var sections = document.querySelectorAll("section");

    sections.forEach(section => {
        var listItem = document.createElement("li");
        var anchor = document.createElement("a");
        anchor.href = "#" + section.id;
        anchor.textContent = section.querySelector(".collapsible").textContent;
        listItem.appendChild(anchor);
        tocList.appendChild(listItem);
    });
});
