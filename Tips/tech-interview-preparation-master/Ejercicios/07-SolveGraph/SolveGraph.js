function SolveGraph (graph, start, end, register = {}) {
  // Your code here:
  console.log("------->", register)
  if(register[start]) return false;
  register[start] = true;

  for (let i = 0; i < graph[start].length; i++) {
    if(graph[start][i]===end) return true;
    else if (SolveGraph(graph, graph[start][i], end, register)){
      return true;
    }  
  }
  return false;
}

const graph = { // "a" -> "b"
  a: ["c"], 
  b: ["c"],
  c: ["s","r"],
  d: ["a"],
  s: ["a","c"],
  r: ["d"],
  z: ["z"]
};

console.log(SolveGraph(graph, "a", "r"));
console.log(SolveGraph(graph, "s", "b"));
console.log(SolveGraph(graph, "r", "b"));

module.exports = SolveGraph
