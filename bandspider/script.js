const cy = cytoscape({
  container: document.getElementById("cy"),
  elements: bandsData,
  style: [
    {
      selector: "node",
      style: {
        "background-color": "#666",
        label: "data(label)",
        "background-image": "data(image)",
        "background-fit": "cover",
        "width": "60px",
        "height": "60px",
        "font-size": "10px",
        "text-valign": "bottom",
        "text-halign": "center",
        "text-margin-y": "-10px",
        color: "#000",
      },
    },
    {
      selector: "edge",
      style: {
        width: 2,
        "line-color": "#ccc",
        "target-arrow-color": "#ccc",
      },
    },
  ],
  layout: {
    name: "cose",
  },
});

cy.on("tap", "node", function (evt) {
  const data = evt.target.data();
  document.getElementById("cy").style.display = "none";
  const info = document.getElementById("band-info");
  info.classList.remove("hidden");
  document.getElementById("band-logo").innerHTML = `<img src="${data.image}" style="width:100px" />`;
  const memberList = document.getElementById("member-list");
  memberList.innerHTML = data.members.map(m => `<li>${m}</li>`).join("");
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = data.projects.map(p => `<li>${p}</li>`).join("");
});

document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("band-info").classList.add("hidden");
  document.getElementById("cy").style.display = "block";
});

document.querySelectorAll(".dropdown .title").forEach(el => {
  el.addEventListener("click", () => {
    el.parentElement.classList.toggle("open");
  });
});
