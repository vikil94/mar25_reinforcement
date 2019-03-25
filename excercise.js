 random_array = ["Totam", "ut", "odit", "quis", "Maiores", "unde", "EX", "EST", "corporis"]


 for (i = 0; i < random_array.length; i++) {
     n = random_array[i]
     if (n.length > 4 && n == n.toLowerCase()) {
         console.log("long and lowercase")
     } else if (n.length > 4) {
         console.log("long")
     } else if (n == n.toLowerCase()) {
         console.log("lowercase")
     } else {
         console.log(n)
     }
 }