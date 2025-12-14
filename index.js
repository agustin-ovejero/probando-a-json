const user = {
  nombre: "braiam",
  apellido: "nova",
  edad: 20,
  pasatiempos: ["programar", "fulvo"],
  direcion: {
    ciudada: "Buenos Aires",
    calle: "Alberto williams"
  },
  estudiando: true,
  saludo() {
    return "hola"
  },
  musica() {
    return "no se"
  }
}

const amigos = [
  {"nombre": "agustin", "pronombre": "lechuga"},
  {"nombre": "celina", "pronombre": "vacelina"},
  {"nombre": "daro", "pronombre": "daria"}
]

console.log(JSON.stringify(amigos))
//console.log(user.saludo())
//console.log(user.musica())
console.log(JSON.stringify(user))