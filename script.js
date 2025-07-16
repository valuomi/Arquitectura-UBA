// Aquí va solo un resumen de la parte clave del código
// Si ya tienes tu lista completa de ramos y requisitos como antes, usa esa

const ramos = [
  { id: "ICSE", nombre: "ICSE", requisitos: [] },
  { id: "IPC", nombre: "IPC", requisitos: [] },
  { id: "FIL", nombre: "FIL", requisitos: [] },
  { id: "PROY1", nombre: "PROY 1", requisitos: [] },
  { id: "PROY2", nombre: "PROY 2", requisitos: [] },
  { id: "DIB", nombre: "DIB", requisitos: [] },
  { id: "MAT", nombre: "MAT", requisitos: [] },
  { id: "A1", nombre: "A1", requisitos: ["ICSE", "IPC", "FIL", "PROY1", "PROY2", "DIB", "MAT"] },
  // Continúa con todos los ramos como los tienes
];

const mallaDiv = document.getElementById("malla");

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.classList.add("ramo", "bloqueado");
  div.id = ramo.id;
  div.innerText = ramo.nombre;
  mallaDiv.appendChild(div);
});

function actualizarEstado() {
  ramos.forEach(ramo => {
    const requisitosAprobados = ramo.requisitos.every(id => {
      const elem = document.getElementById(id);
      return elem && elem.classList.contains("aprobado");
    });
    const div = document.getElementById(ramo.id);
    if (ramo.requisitos.length === 0 || requisitosAprobados) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }
  });
}

mallaDiv.addEventListener("click", e => {
  if (e.target.classList.contains("ramo") && !e.target.classList.contains("bloqueado")) {
    e.target.classList.toggle("aprobado");
    actualizarEstado();
  }
});

actualizarEstado();

