const bandsData = {
  nodes: [
    { data: { id: "band1", label: "Queens of the Stone Age", image: "images/logo1.png", members: ["Josh Homme", "Dave Grohl", "Nick Oliveri", "Mark Lanegan", "Troy Van Leeuwen", "Joey Castillo",
            "Michael Shuman", "Dean Fertita", "Alain Johannes", "Dave Catching", "Jon Theodore", "Alfredo Hernández", "Gene Trautmann", "Natasha Shneider"], projects: ["Songs for the Deaf", "Era Vulgaris"] }},
    { data: { id: "band2", label: "Band 2", image: "images/logo2.png", members: ["Person 3"], projects: ["Album C"] }},
    { data: { id: "band3", label: "Band 3", image: "images/logo3.png", members: ["Person 1"], projects: ["Album D"] }},
    { data: { id: "band4", label: "Band 4", image: "images/logo4.png", members: ["Person 4", "Person 5"], projects: ["Album E"] }},
    { data: { id: "band5", label: "Band 5", image: "images/logo5.png", members: ["Person 6"], projects: ["Album F", "Album G"] }},
    { data: { id: "band6", label: "Band 6", image: "images/logo6.png", members: ["Person 7"], projects: ["Album H"] }},
    { data: { id: "band7", label: "Band 7", image: "images/logo7.png", members: ["Person 8", "Person 9"], projects: ["Album I"] }},
    { data: { id: "band8", label: "Band 8", image: "images/logo8.png", members: ["Person 2", "Person 10"], projects: ["Album J"] }}
  ],
  edges: [
    { data: { source: "band1", target: "band3" }},
    { data: { source: "band1", target: "band8" }},
    { data: { source: "band2", target: "band4" }},
    { data: { source: "band5", target: "band6" }},
    { data: { source: "band7", target: "band8" }},
  ]
};
