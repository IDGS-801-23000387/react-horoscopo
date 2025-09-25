import { useState } from "react";

const HoroscopoApp = () => {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [signoEncontrado, setSignoEncontrado] = useState(null);
  const [horoscopoTexto, setHoroscopoTexto] = useState("");
  const signos = [
    { nombre: "Aries", img: "/img/aries.png" },
    { nombre: "Tauro", img: "/img/taurus.png" },
    { nombre: "Géminis", img: "/img/gemini.png" },
    { nombre: "Cáncer", img: "/img/cancer.png" },
    { nombre: "Leo", img: "/img/leo.png" },
    { nombre: "Virgo", img: "/img/virgo.png" },
    { nombre: "Libra", img: "/img/libra.png" },
    { nombre: "Escorpion", img: "/img/escorpion.png" },
    { nombre: "Sagitario", img: "/img/sagitario.png" },
    { nombre: "Capricornio", img: "/img/capricornio.png" },
    { nombre: "Acuario", img: "/img/aquario.png" },
    { nombre: "Piscis", img: "/img/picis.png" },
  ];
  const calcularSigno = (fecha) => {
    const fechaObj = new Date(fecha);
    const mes = fechaObj.getMonth() + 1;
    const dia = fechaObj.getDate();

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return signos[0];
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return signos[1];
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return signos[2];
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return signos[3];
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return signos[4];
    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return signos[5];
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return signos[6];
    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return signos[7];
    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return signos[8];
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return signos[9];
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return signos[10];
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return signos[11];
    return null;
  };

 const generarHoroscopo = (signo) => {
  const mensajes = {
    Aries: "La fuerza que llevas dentro es imparable. Confía en ti, porque hoy puedes iniciar algo grande.",
    Tauro: "Tu constancia es tu mayor tesoro. Cada paso firme que das te acerca a tus sueños.",
    Géminis: "Tu mente brillante abre puertas. Usa tu creatividad para inspirar a los que te rodean.",
    Cáncer: "Tu sensibilidad es poder, no debilidad. Hoy, tu empatía transformará el mundo a tu alrededor.",
    Leo: "Brillas con una luz única. No temas mostrar tu grandeza, porque inspiras a los demás con tu energía.",
    Virgo: "Tu disciplina y detalle son tus armas secretas. Hoy, tu organización puede convertir caos en éxito.",
    Libra: "Tu capacidad de ver ambos lados trae paz. Sé ese equilibrio que otros buscan y todo fluirá mejor.",
    Escorpio: "Tu intensidad es fuego que transforma. No tengas miedo de los retos, porque eres capaz de superarlos todos.",
    Sagitario: "El mundo está esperando tu espíritu aventurero. Atrévete a ir más allá y descubrirás nuevas oportunidades.",
    Capricornio: "Tu esfuerzo nunca es en vano. Hoy, cada meta que te traces será un paso firme hacia el éxito.",
    Acuario: "Tu visión es única y revolucionaria. Atrévete a ser diferente, porque en tu autenticidad está tu poder.",
    Piscis: "Tu corazón lleno de sueños es inspiración. Hoy, tu imaginación puede convertir lo imposible en posible.",
  };
  return mensajes[signo] || "El universo confía en ti: hoy es un día para creer en tus sueños.";
};
  const manejarEnvio = () => {
    if (!nombre || !fechaNacimiento) {
      alert("Por favor completa todos los campos");
      return;
    }
    const signo = calcularSigno(fechaNacimiento);
    if (signo) {
      setSignoEncontrado(signo);
      setHoroscopoTexto(generarHoroscopo(signo.nombre));
    }
  };
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-5xl font-extrabold text-center text-yellow-500 tracking-wide mb-10">
           Horóscopos Villafaña  Infante
        </h1>       
        <div className="grid md:grid-cols-2 gap-8">      
          <div className="bg-zinc-900 border border-yellow-600 rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
              Descubre tu Signo
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-2 py-2 bg-transparent border-b border-yellow-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />

           <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} className="w-full px-2 py-2 bg-transparent border-b border-yellow-600 text-white focus:outline-none focus:border-yellow-400"/>
              <button
                onClick={manejarEnvio}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold py-3 rounded-lg shadow-md hover:from-yellow-400 hover:to-yellow-600 transition-all"
              >
                Consultar Signo
              </button>
            </div>

            {signoEncontrado && (
              <div className="mt-8 text-center">
                <h3 className="text-2xl text-yellow-400 font-semibold mb-4">
                  {nombre}, tu signo es {signoEncontrado.nombre}
                </h3>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 border-4 border-yellow-600 rounded-full flex items-center justify-center bg-zinc-800">
                    <img
                      src={signoEncontrado.img}
                      alt={signoEncontrado.nombre}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="mt-4 text-gray-200 max-w-md">{horoscopoTexto}</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-zinc-900 border border-yellow-600 rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-yellow-400 mb-6 text-center">
              Los 12 Signos del Zodíaco
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {signos.map((signo, index) => (
                <div key={index} className="flex items-center gap-4 bg-zinc-800 border border-yellow-700 rounded-lg p-3">
                  <img src={signo.img} alt={signo.nombre} className="w-12 h-12 object-contain" />
                  <p className="text-yellow-300 font-medium">{signo.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoroscopoApp;
