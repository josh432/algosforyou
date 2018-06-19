const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Townhall",
    "Daria's House-Ernie's house", "Daria's House-Townhall",
    "Ernie's House-Grete's House",  "Grete's House-Farm",
    "Grete's House-Shop",           "Marketplace-Farm", 
    "Marketplace-Post Office",      "Marketplace-Shop",
     "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",        "Shop-Townhall",
    "Seth's House-Cabin"    
];
//going to build graphical representation of this object:
// {
//     "Alice's House":["Bob's House", "Cabin", "Post Office"],
//     "Bob's House":["Alice's House"]
//     "Cabin": ["Alice's House"]
// }
//manual route created to run the mailman robot

const mailRoute = [

    "Alice's House", "Cabin", "Seth's House", "Cabin", "Alice's House", "Bob's House",
  
    "Town Hall", "Daria's House", "Ernie's House",
  
    "Grete's House", "Shop", "Grete's House", "Farm",
  
    "Marketplace", "Post Office"
  
  ];
  
  
  
  function buildGraph(roads) {
  
    let graph = Object.create(null);
  
    function addPath(from, to) {
  
      if (graph[from] == null) {
  
        graph[from] = [to];
  
      } else {
  
        graph[from].push(to);
  
      }
  
    }
  
    for (let [from, to] of roads.map(road => road.split("-"))) {
  
      addPath(from, to);
  
      addPath(to, from);
  
    }
  
    return graph;
  
  }
  
  
  
  const roadGraph = buildGraph(roads);
  console.log(roadGraph);
