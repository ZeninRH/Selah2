/* =======================================================
   CONFIGURA AQUÍ TU NEGOCIO
   ======================================================= */

// Tu número de WhatsApp con código de país, SIN + ni espacios.
// Ejemplo México: "5219991234567"
const WHATSAPP_NUMBER = "5219991075392";

/* =======================================================
   APARTADOS (marcas) — el orden de esta lista es el orden en
   que aparecen los productos y los filtros. El "id" debe
   coincidir con el campo "categoria" de cada producto.
   ======================================================= */
const CATEGORIAS = [
  { id: "novedades", nombre: "Novedades" },
  { id: "and",     nombre: "AND" },
  { id: "bissu",   nombre: "Bissú" },
  { id: "dapop",   nombre: "DAPOP" },
  { id: "italia",  nombre: "Italia Deluxe" },
  { id: "prosa",   nombre: "Prosa" },
  { id: "pinkup",  nombre: "Pink Up" },
  { id: "otros",   nombre: "Otros" }
];

/* =======================================================
   INVENTARIO — administra TODOS tus productos aquí
   =======================================================
   id          -> número único
   nombre      -> texto
   imagenes    -> de 1 a 5 fotos, una por línea. Revisa que cada
                  ruta exista tal cual (mayúsculas, espacios y
                  extensión). Las fotos que no carguen se descartan
                  solas; si NINGUNA carga (o la lista está vacía),
                  el producto no aparece.
                  Abre la consola (F12) para ver cuáles fallaron.
   precio      -> número
   descripcion -> texto corto
   categoria   -> uno de los "id" de CATEGORIAS (el apartado)
   colores     -> arreglo de textos, o [] si no aplica
   tipoColor   -> cómo se llama la opción: "Tonos", "Olores",
                  "Colores", "Modelos", "Opciones" o "Color"
                  (si lo omites, dice "Color")
   tallas      -> arreglo de textos, o [] (si hay, es obligatorio elegir)
   etiqueta    -> badge opcional ("Nuevo", "Últimas piezas") o ""
   ======================================================= */
const productos = [

  /* ---------- NOVEDADES ---------- */
  {
    id: 29,
    nombre: "Esponjas de Frutas tipo Quesitos",
    imagenes: ["img/EDFTQ.jpeg", "img/EDFTQ1.jpeg"], // <-- pon aquí las rutas de las fotos
    precio: 23,
    descripcion: "Con su estructura firme pero elástica, distribuye uniformemente con cada una de sus esponjas el maquillaje.",
    categoria: "novedades",
    tipoColor: "Opciones",
    colores: ["Sandía", "Pitahaya", "Aguacate"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 30,
    nombre: "Tinta para Labios",
    imagenes: ["img/TPL.jpeg", "img/TPL1.jpeg"],
    precio: 13,
    descripcion: "Dale color a tus labios de forma rápida y sencilla.",
    categoria: "novedades",
    colores: [],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 31,
    nombre: "Labial Matte tipo Dior",
    imagenes: ["img/LMTD.jpeg"],
    precio: 18,
    descripcion: "Acabado matte que dura por horas.",
    categoria: "novedades",
    colores: [],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 32,
    nombre: "Bálsamo para Labios",
    imagenes: ["img/BPL.jpeg"],
    precio: 8,
    descripcion: "Hidrata y mejora la textura de los labios.",
    categoria: "novedades",
    colores: [],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 33,
    nombre: "Pinza Depilatoria de Cejas",
    imagenes: ["img/PDDC.jpeg", "img/PDDC1.jpeg"],
    precio: 10,
    descripcion: "Define tus cejas a tu gusto.",
    categoria: "novedades",
    colores: [],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 34,
    nombre: "Lápiz de Cejas 2 en 1",
    imagenes: ["img/LDC2EN1.jpeg", "img/LDC2EN11.jpeg", "img/LDC2EN12.jpeg", "img/LDC2EN13.jpeg"],
    precio: 21,
    descripcion: "Lápiz con cepillo que permite la perfecta distribución. Con una fórmula a prueba de agua.",
    categoria: "novedades",
    tipoColor: "Tonos",
    colores: ["105 Light Brown", "110 Bronze", "115 Coffee", "120 Chocolate", "125 Flaxen", "130 Dark Brown", "Natural Duo Light Brown"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 35,
    nombre: "Acetona con Aloe Vera",
    imagenes: ["img/ACAV.jpeg"],
    precio: 12,
    descripcion: "Gracias al aloe vera que contiene, protege y nutre tus uñas.",
    categoria: "novedades",
    tipoColor: "Colores",
    colores: ["Verde", "Rosa", "Blanco"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 36,
    nombre: "Esponja y Brocha 2 en 1",
    imagenes: ["img/EYB2NE1.jpeg", "img/EYB2NE11.jpeg", "img/EYB2NE12.jpeg", "img/EYB2NE13.jpeg"],
    precio: 20,
    descripcion: "Ideal para aplicar maquillaje líquido y en polvo.",
    categoria: "novedades",
    tipoColor: "Colores",
    colores: ["Rosa fucsia", "Azul", "Rosa"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 37,
    nombre: "Brochas Grandes para Base",
    imagenes: ["img/BGPB.jpeg", "img/BGPB1.jpeg", "img/BGPB2.jpeg", "img/BGPB3.jpeg"],
    precio: 18,
    descripcion: "Densas y flexibles para distribuir tu base sin acartonar.",
    categoria: "novedades",
    tipoColor: "Colores",
    colores: ["Rosa", "Amarillo", "Blanco", "Turquesa"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 38,
    nombre: "Perfume de Hombre (35 ml)",
    imagenes: ["img/PDH35ML.jpeg", "img/PDH35ML1.jpeg", "img/PDH35ML2.jpeg", "img/PDH35ML3.jpeg"],
    precio: 25,
    descripcion: "Perfumes de bolsillo.",
    categoria: "novedades",
    tipoColor: "Olores",
    colores: ["Ok One (fresco)", "Missing Dream (fresco)"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 39,
    nombre: "Perfume de Mujer (20 ml)",
    imagenes: ["img/PDM20ML.jpeg"],
    precio: 20,
    descripcion: "Perfumes de bolsillo con olores frescos y dulces al mismo tiempo.",
    categoria: "novedades",
    tipoColor: "Opciones",
    colores: ["Miss Chic", "Very Special"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 40,
    nombre: "Perfume de Mujer Snoopy (20 ml)",
    imagenes: ["img/PDMS20ML.jpeg"],
    precio: 20,
    descripcion: "Perfumes de bolsillo con olor dulce.",
    categoria: "novedades",
    tipoColor: "Opciones",
    colores: ["Bañera", "Corazón", "Fútbol", "Músico"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 41,
    nombre: "Esmalte y Brillos para Esmalte",
    imagenes: ["img/EYBPE.jpeg"],
    precio: 10,
    descripcion: "Dale un toque brillante a tu diseño.",
    categoria: "novedades",
    tipoColor: "Opciones",
    colores: ["Esmalte Blanco", "Brillo Morado", "Brillo Verde", "Brillo Dorado"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 42,
    nombre: "Enchinador de Pestañas",
    imagenes: ["img/EDP.jpeg"],
    precio: 22,
    descripcion: "Realza tus pestañas para tener un acabado duradero.",
    categoria: "novedades",
    tipoColor: "Colores",
    colores: ["Azul", "Rosa", "Morado", "Verde"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 43,
    nombre: "Pestañas Postizas 8D Princesas",
    imagenes: ["img/PP8DP.jpeg", "img/PP8DP1.jpeg", "img/PP8DP2.jpeg", "img/PP8DP3.jpeg", "img/PP8DP4.jpeg", "img/PP8DP5.jpeg"],
    precio: 18,
    descripcion: "Impulsa tu maquillaje con estas pestañas de larga duración en conjunto de pegamento para pestañas.",
    categoria: "novedades",
    tipoColor: "Modelos",
    colores: ["02 Blanca Nieves", "03 Blanca Nieves", "04 Ariel", "05 Ariel", "06 Ariel", "07 Jazmín", "08 Jazmín", "09 Jazmín", "10 Cenicienta", "11 Cenicienta"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 44,
    nombre: "Pestañas Postizas Animales",
    imagenes: ["img/PPA.jpeg"],
    precio: 18,
    descripcion: "Impulsa tu maquillaje con estas pestañas de larga duración en conjunto de pegamento para pestañas.",
    categoria: "novedades",
    tipoColor: "Modelos",
    colores: ["001 Pug", "004 Perrito", "009 Gato", "013 Chihuahua"],
    tallas: [],
    etiqueta: "Nuevo"
  },
  {
    id: 45,
    nombre: "Paleta de Sombras",
    imagenes: ["img/PDS.jpeg"],
    precio: 80,
    descripcion: "Variedad de colores para combinar y usar.",
    categoria: "novedades",
    colores: [],
    tallas: [],
    etiqueta: "Nuevo"
  },

  /* ---------- AND ---------- */
  {
    id: 11,
    nombre: "5 Mini Esponjas para Maquillaje",
    imagenes: ["img/E.M.jpeg", "img/E.M1.jpeg", "img/E.M2.jpeg", "img/E.M3.jpeg"],
    precio: 43,
    descripcion: "Ideales para difuminar precisa y uniformemente en ojos, nariz, etc.",
    categoria: "and",
    colores: [],
    tallas: [],
    etiqueta: ""
  },

  /* ---------- BISSÚ ---------- */
  {
    id: 12,
    nombre: "Brillo Labial",
    imagenes: ["img/B.L6.jpeg", "img/B.L7.jpeg"],
    precio: 63,
    descripcion: "Acabado brillante tipo espejo sin sensación pegajosa para labios voluminosos.",
    categoria: "bissu",
    tipoColor: "Tonos",
    colores: ["#10 Incandescente"],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 13,
    nombre: "Brillo Labial con Glitter",
    imagenes: ["img/B.L.jpeg", "img/B.L1.jpeg", "img/B.L2.jpeg", "img/B.L3.jpeg", "img/B.L4.jpeg", "img/B.L5.jpeg"],
    precio: 65,
    descripcion: "Acabado brillante con un toque de destello. Se aplica directamente sobre los labios, solo o encima de un labial, con el aplicador incluido.",
    categoria: "bissu",
    tipoColor: "Tonos",
    colores: ["02 Polvo Estelar", "04 Orión"],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 14,
    nombre: "Rubor Líquido",
    imagenes: ["img/R.L.jpeg", "img/R.L1.jpeg", "img/R.L2.jpeg", "img/R.L3.jpeg", "img/R.L4.jpeg", "img/R.L5.jpeg"],
    precio: 85,
    descripcion: "Fórmula ligera, alta pigmentación construible y fácil difuminado.",
    categoria: "bissu",
    tipoColor: "Tonos",
    colores: ["06 Comadre", "08 Netas"],
    tallas: [],
    etiqueta: ""
  },

  /* ---------- DAPOP ---------- */
  {
    id: 15,
    nombre: "Corrector Líquido Hide",
    imagenes: ["img/CLH.jpeg", "img/CLH1.jpeg", "img/CLH2.jpeg"],
    precio: 56,
    descripcion: "Corrige y unifica el tono. Cobertura media-alta, aplicador grueso para una mejor aplicación y fórmula ligera que no se acumula en líneas finas.",
    categoria: "dapop",
    tipoColor: "Tonos",
    colores: ["03 Tan", "06 Nude Beige"],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 16,
    nombre: "Desmaquillante Bifásico para Ojos y Labios (30 ml)",
    imagenes: ["img/DBPOYL.jpeg"],
    precio: 65,
    descripcion: "Su fórmula de doble fase ayuda a disolver maquillaje, incluso de larga duración, resistente al agua y las impurezas acumuladas durante el día, dejando la piel fresca, suave y sin sensación grasosa.",
    categoria: "dapop",
    colores: [],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 17,
    nombre: "Gel Fijador de Cejas Quick Brow con Aplicador",
    imagenes: ["img/GFDC.jpeg", "img/GFDC1.jpeg"],
    precio: 62,
    descripcion: "Gel transparente que fija, peina y define sin dejar residuos blancos ni sensación pegajosa.",
    categoria: "dapop",
    colores: [],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 18,
    nombre: "Fijador de Maquillaje Sundae (30 ml)",
    imagenes: ["img/FDMS.jpeg", "img/FDMS1.jpeg"],
    precio: 65,
    descripcion: "Su ligera fórmula con extracto de pepino y aloe brinda una agradable sensación de frescura, mientras ayuda a mantener un acabado uniforme durante el día.",
    categoria: "dapop",
    tipoColor: "Olores",
    colores: ["Cereza"],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 19,
    nombre: "Gel Limpiador Facial Bubble Burst",
    imagenes: ["img/GLFBB.jpeg", "img/GLFBB1.jpeg"],
    precio: 70,
    descripcion: "Elimina impurezas, exceso de grasa y restos de maquillaje sin resecar tu piel. Su textura en gel crea una espuma suave que limpia profundamente, dejando tu rostro limpio, suave y con un glow natural.",
    categoria: "dapop",
    colores: [],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 20,
    nombre: "Maquillaje Líquido Milky Cushion",
    imagenes: ["img/MLMC.jpeg", "img/MLMC1.jpeg", "img/MLMC2.jpeg", "img/MLMC3.jpeg"],
    precio: 95,
    descripcion: "Base cushion que unifica, perfecciona e hidrata tu piel con un acabado fresco, luminoso y natural. Su fórmula ligera se difumina fácilmente para brindar cobertura construible, mientras deja una sensación suave y cómoda como una segunda piel.",
    categoria: "dapop",
    tipoColor: "Tonos",
    colores: ["03 Tan"],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 21,
    nombre: "Parches para Acné Estrellas Amarillas",
    imagenes: ["img/PAEA.jpeg", "img/PAEA1.jpeg"],
    precio: 52,
    descripcion: "18 parches auxiliares para imperfecciones que alivian la inflamación y aceleran el proceso de curación, protegiendo tu piel de bacterias y gérmenes.",
    categoria: "dapop",
    colores: [],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 22,
    nombre: "Estuche con 100 Papelitos Absorbentes + Aplicador Soak Up!",
    imagenes: ["img/ES100.jpeg", "img/ES1001.jpeg"],
    precio: 68,
    descripcion: "El accesorio perfecto para pieles grasas o mixtas que necesitan matificar sin borrar el maquillaje. ¡Dile adiós al efecto \"piel aceitosa\" en cualquier momento y lugar!",
    categoria: "dapop",
    colores: [],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 23,
    nombre: "Polvo Traslúcido Matte Blotting Powder",
    imagenes: ["img/PTMBP.jpeg", "img/PTMBP1.jpeg"],
    precio: 47,
    descripcion: "Ideal para sellar tu base de maquillaje o matificar el rostro, dejando un acabado mate, uniforme, natural y sin color.",
    categoria: "dapop",
    colores: [],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 24,
    nombre: "Toallas Desmaquillantes con Agua Micelar y Colágeno",
    imagenes: ["img/TDM.jpeg", "img/TDM1.jpeg"],
    precio: 55,
    descripcion: "Eliminan impurezas, exceso de grasa y hasta el maquillaje a prueba de agua, dejando tu rostro fresco, suave y perfectamente limpio. Su fórmula ayuda a limpiar, tonificar e hidratar en un solo paso.",
    categoria: "dapop",
    colores: [],
    tallas: [],
    etiqueta: ""
  },

  /* ---------- ITALIA DELUXE ---------- */
  {
    id: 25,
    nombre: "Delineador de Labios",
    imagenes: ["img/DL.jpeg", "img/DL1.jpeg"],
    precio: 28,
    descripcion: "Ideal para definir y resaltar el contorno de tus labios con precisión.",
    categoria: "italia",
    tipoColor: "Tonos",
    colores: ["Brown"],
    tallas: [],
    etiqueta: ""
  },

  /* ---------- PROSA ---------- */
  {
    id: 26,
    nombre: "Aceite Desmaquillante 4 en 1 (15 ml)",
    imagenes: ["img/AD4.jpeg"],
    precio: 55,
    descripcion: "Funciona como tratamiento alargador de pestañas. Con aceites naturales como hueso de mamey, sábila, germen de trigo, jojoba y vitamina E.",
    categoria: "prosa",
    colores: [],
    tallas: [],
    etiqueta: ""
  },
  {
    id: 27,
    nombre: "Crema para Contorno de Ojos 4 en 1 (15 g)",
    imagenes: ["img/CPC.jpeg"],
    precio: 60,
    descripcion: "Ayuda a disminuir la inflamación matutina de los párpados. Proporciona suavidad, hidratación y firmeza a la piel.",
    categoria: "prosa",
    colores: [],
    tallas: [],
    etiqueta: ""
  },

  /* ---------- PINK UP ---------- */
  {
    id: 28,
    nombre: "Lip Oil Mágico",
    imagenes: ["img/LOM.jpeg", "img/LOM1.jpeg", "img/LOM2.jpeg"],
    precio: 70,
    descripcion: "Brillo de labios enriquecido con ácido hialurónico, hidrata y realza tus labios con un cambio de color activado por el pH natural de tu piel.",
    categoria: "pinkup",
    tipoColor: "Olores",
    colores: ["Fresa"],
    tallas: [],
    etiqueta: ""
  },
];

// Límite de piezas por línea del carrito.
const CANTIDAD_MAXIMA_POR_LINEA = 20;

/* =======================================================
   NO NECESITAS TOCAR NADA DE AQUÍ HACIA ABAJO
   ======================================================= */

const STORAGE_KEY = "selah-carrito-v1";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const money = (n) => "$" + Math.round(n).toLocaleString("es-MX");
const ruta = (s) => encodeURI(s);

// Normaliza el inventario y lo ordena según CATEGORIAS.
productos.forEach((p) => {
  p.list = (p.imagenes || []).filter((s) => s && s.trim() !== "");
  p.ci = 0; // índice de la foto de portada que sí cargó
  p.colores = p.colores || [];
  p.tallas = p.tallas || [];
  p.tipoColor = p.tipoColor || "Color";
});
const ordenCat = (p) => CATEGORIAS.findIndex((c) => c.id === p.categoria);
const catalogo = productos
  .filter((p) => p.list.length && ordenCat(p) !== -1)
  .sort((a, b) => ordenCat(a) - ordenCat(b) || a.id - b.id);
const porId = new Map(productos.map((p) => [p.id, p]));

const gridEl = $("grid");
const chipsEl = $("chips");
const catTitleEl = $("catTitle");
const catCountEl = $("catCount");
const vacioEl = $("vacio");
const overlay = $("overlay");

let filtroActual = "todo";

/* =======================================================
   ANIMACIÓN DE ENTRADA AL HACER SCROLL
   ======================================================= */
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entradas) => {
      let n = 0;
      entradas.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.style.setProperty("--d", Math.min(n++, 6) * 70 + "ms");
        en.target.classList.add("in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" })
  : null;

function revelar(el) {
  if (!io) return el.classList.add("in");
  el.classList.remove("in");
  io.unobserve(el);
  io.observe(el);
}
document.querySelectorAll(".rv").forEach(revelar);

/* =======================================================
   CATÁLOGO + FILTROS
   ======================================================= */
function cardHTML(p) {
  const conOpciones = p.colores.length > 0 || p.tallas.length > 0;
  return `
    <article class="card rv" data-id="${p.id}" data-cat="${p.categoria}">
      <button type="button" class="card-img" data-open aria-label="Ver ${esc(p.nombre)}">
        <img src="${ruta(p.list[0])}" alt="${esc(p.nombre)}" width="400" height="400" loading="lazy" decoding="async" data-role="cover" data-pid="${p.id}">
        ${p.list[1] ? `<img class="alt" src="${ruta(p.list[1])}" alt="" width="400" height="400" loading="lazy" decoding="async" data-role="alt" data-pid="${p.id}">` : ""}
        ${p.etiqueta ? `<span class="badge">${esc(p.etiqueta)}</span>` : ""}
      </button>
      <div class="card-body">
        <button type="button" class="card-name" data-open>${esc(p.nombre)}</button>
        <p class="card-price">${money(p.precio)}</p>
        <button type="button" class="card-btn" data-add>${conOpciones ? "Elegir opciones" : "Agregar"}</button>
      </div>
    </article>`;
}

function renderCatalogo() {
  if (catalogo.length === 0) {
    $("catalogo").querySelector(".chips-bar").hidden = true;
    catCountEl.textContent = "";
    vacioEl.hidden = false;
    return;
  }
  const usadas = CATEGORIAS.filter((c) => catalogo.some((p) => p.categoria === c.id));
  chipsEl.innerHTML =
    `<button type="button" class="chip active" data-cat="todo" aria-pressed="true">Todo</button>` +
    usadas.map((c) => `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="false">${esc(c.nombre)}</button>`).join("");
  chipsEl.insertAdjacentHTML("beforeend", `<span class="chip-ind" aria-hidden="true"></span>`);
  gridEl.innerHTML = catalogo.map(cardHTML).join("");
  filtrar("todo");
}

function moverIndicador(chip) {
  const ind = chipsEl.querySelector(".chip-ind");
  if (!ind || !chip) return;
  ind.style.width = chip.offsetWidth + "px";
  ind.style.transform = `translateX(${chip.offsetLeft}px)`;
}

function filtrar(cat) {
  filtroActual = cat;
  let activo = null;
  chipsEl.querySelectorAll(".chip").forEach((c) => {
    const on = c.dataset.cat === cat;
    c.classList.toggle("active", on);
    c.setAttribute("aria-pressed", on ? "true" : "false");
    if (on) activo = c;
  });

  let visibles = 0;
  gridEl.querySelectorAll(".card").forEach((card) => {
    const mostrar = cat === "todo" || card.dataset.cat === cat;
    card.hidden = !mostrar;
    if (mostrar) { visibles++; revelar(card); }
  });

  const nombre = cat === "todo" ? "A New Obsession" : (CATEGORIAS.find((c) => c.id === cat) || {}).nombre;
  catTitleEl.textContent = nombre || "Productos";
  catCountEl.textContent = visibles === 1 ? "1 producto" : `${visibles} productos`;
  vacioEl.hidden = visibles > 0;

  moverIndicador(activo);
  if (activo) {
    const izq = activo.offsetLeft - (chipsEl.clientWidth - activo.offsetWidth) / 2;
    chipsEl.scrollTo({ left: izq, behavior: reduceMotion ? "auto" : "smooth" });
  }
}

chipsEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  filtrar(chip.dataset.cat);
  // Si el catálogo quedó arriba de la pantalla, regresa al inicio de la lista.
  const top = $("catalogo").getBoundingClientRect().top;
  if (top < 0) window.scrollTo({ top: window.scrollY + top, behavior: "auto" });
});

// Fotos que cargan: se muestran con fade-in.
document.addEventListener("load", (e) => {
  const img = e.target;
  if (img instanceof HTMLImageElement && img.dataset.role && img.dataset.role !== "slide") img.classList.add("ld");
}, true);

// Fotos que no cargan: se prueba la siguiente; si ninguna carga, se quita el producto.
document.addEventListener("error", (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || !img.dataset.role) return;
  const p = porId.get(Number(img.dataset.pid));
  if (!p) return;
  console.warn(`Selah: no se pudo cargar la imagen "${decodeURI(img.getAttribute("src") || "")}". Revisa que el archivo exista en esa ruta exacta (mayúsculas, espacios y extensión).`);

  if (img.dataset.role === "slide") {
    img.remove();
    actualizarGaleria();
    return;
  }
  if (img.dataset.role === "alt") {
    img.remove();
    return;
  }

  p.ci += 1;
  if (p.ci < p.list.length) {
    img.src = ruta(p.list[p.ci]);
    return;
  }
  const card = img.closest(".card");
  if (card) card.remove();
  if (!gridEl.querySelector(`.card[data-cat="${p.categoria}"]`)) {
    const chip = chipsEl.querySelector(`.chip[data-cat="${p.categoria}"]`);
    if (chip) chip.remove();
    if (filtroActual === p.categoria) filtroActual = "todo";
  }
  filtrar(filtroActual);
}, true);

gridEl.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const p = porId.get(Number(card.dataset.id));
  if (!p) return;

  const abrir = e.target.closest("[data-open]");
  if (abrir) return abrirSheet(p, abrir);

  const btn = e.target.closest("[data-add]");
  if (!btn) return;
  if (p.colores.length || p.tallas.length) return abrirSheet(p, btn);

  agregar(p, "", "", 1, card.querySelector('img[data-role="cover"]'));
  btn.textContent = "Agregado ✓";
  btn.classList.add("ok");
  clearTimeout(btn._t);
  btn._t = setTimeout(() => { btn.textContent = "Agregar"; btn.classList.remove("ok"); }, 1200);
});

/* =======================================================
   FICHA DE PRODUCTO (galería + color/talla/cantidad)
   ======================================================= */
const sheet = $("sheet");
const galTrack = $("galTrack");
const galCount = $("galCount");
const galPrev = $("galPrev");
const galNext = $("galNext");
const sheetWarn = $("sheetWarn");
const qtyVal = $("qtyVal");

let sel = null;
let focoPrevio = null;

function opcionesHTML(titulo, lista, tipo, activo) {
  if (!lista.length) return "";
  return `
    <div class="field" data-tipo="${tipo}">
      <span class="field-label">${esc(titulo)}</span>
      <div class="opts">
        ${lista.map((v) => `<button type="button" class="opt${v === activo ? " active" : ""}" data-valor="${esc(v)}" aria-pressed="${v === activo}">${esc(v)}</button>`).join("")}
      </div>
    </div>`;
}

function abrirSheet(p, disparador) {
  focoPrevio = disparador || document.activeElement;
  sel = { p, color: p.colores[0] || "", talla: "", qty: 1 };

  galTrack.innerHTML = p.list
    .map((s, i) => `<img src="${ruta(s)}" alt="${esc(p.nombre)}" ${i ? 'loading="lazy"' : ""} decoding="async" data-role="slide" data-pid="${p.id}">`)
    .join("");
  galTrack.scrollLeft = 0;

  $("sheetTitle").textContent = p.nombre;
  $("sheetPrice").textContent = money(p.precio);
  $("sheetDesc").textContent = p.descripcion || "";
  $("sheetOpts").innerHTML = opcionesHTML(p.tipoColor, p.colores, "color", sel.color) + opcionesHTML("Talla", p.tallas, "talla", "");
  sheetWarn.classList.remove("show");
  qtyVal.textContent = "1";

  sheet.classList.add("open");
  sheet.setAttribute("aria-hidden", "false");
  overlay.classList.add("on");
  bloquearScroll();
  actualizarGaleria();
  $("sheetClose").focus({ preventScroll: true });
}

function cerrarSheet() {
  if (!sheet.classList.contains("open")) return;
  sheet.classList.remove("open");
  sheet.setAttribute("aria-hidden", "true");
  if (!$("cartPanel").classList.contains("open")) overlay.classList.remove("on");
  bloquearScroll();
  if (focoPrevio && document.contains(focoPrevio)) focoPrevio.focus({ preventScroll: true });
}

function actualizarGaleria() {
  const n = galTrack.children.length;
  const idx = Math.min(n - 1, Math.max(0, Math.round(galTrack.scrollLeft / (galTrack.clientWidth || 1))));
  galCount.textContent = n > 1 ? `${idx + 1}/${n}` : "";
  galPrev.hidden = galNext.hidden = n <= 1;
}

let galTick = false;
galTrack.addEventListener("scroll", () => {
  if (galTick) return;
  galTick = true;
  requestAnimationFrame(() => { actualizarGaleria(); galTick = false; });
}, { passive: true });

const pasoGaleria = (dir) => galTrack.scrollBy({ left: dir * galTrack.clientWidth, behavior: reduceMotion ? "auto" : "smooth" });
galPrev.addEventListener("click", () => pasoGaleria(-1));
galNext.addEventListener("click", () => pasoGaleria(1));

// Arrastrar la barrita hacia abajo cierra la ficha (celular).
(function () {
  const handle = $("sheetHandle");
  let y0 = null, dy = 0;
  handle.addEventListener("touchstart", (e) => {
    y0 = e.touches[0].clientY;
    dy = 0;
    sheet.style.transition = "none";
  }, { passive: true });
  handle.addEventListener("touchmove", (e) => {
    if (y0 === null) return;
    dy = Math.max(0, e.touches[0].clientY - y0);
    sheet.style.transform = `translateY(${dy}px)`;
  }, { passive: true });
  const fin = () => {
    if (y0 === null) return;
    y0 = null;
    sheet.style.transition = "";
    sheet.style.transform = "";
    if (dy > 90) cerrarSheet();
    dy = 0;
  };
  handle.addEventListener("touchend", fin);
  handle.addEventListener("touchcancel", fin);
})();

$("sheetOpts").addEventListener("click", (e) => {
  const btn = e.target.closest(".opt");
  if (!btn || !sel) return;
  const campo = btn.closest(".field");
  const tipo = campo.dataset.tipo;
  campo.querySelectorAll(".opt").forEach((b) => {
    b.classList.remove("active");
    b.setAttribute("aria-pressed", "false");
  });
  btn.classList.add("active");
  btn.setAttribute("aria-pressed", "true");
  sel[tipo] = btn.dataset.valor;
  if (tipo === "talla") sheetWarn.classList.remove("show");
});

function cambiarQty(delta) {
  if (!sel) return;
  const n = sel.qty + delta;
  if (n >= 1 && n <= CANTIDAD_MAXIMA_POR_LINEA) {
    sel.qty = n;
    qtyVal.textContent = n;
    qtyVal.classList.remove("pop");
    void qtyVal.offsetWidth;
    qtyVal.classList.add("pop");
  }
}
$("qtyMinus").addEventListener("click", () => cambiarQty(-1));
$("qtyPlus").addEventListener("click", () => cambiarQty(1));

$("sheetAdd").addEventListener("click", () => {
  if (!sel) return;
  const { p, color, talla, qty } = sel;
  if (p.tallas.length && !talla) {
    sheetWarn.classList.remove("show");
    void sheetWarn.offsetWidth;
    sheetWarn.classList.add("show");
    sheetWarn.scrollIntoView({ block: "nearest" });
    return;
  }
  // Foto que se ve ahora en la galería, para animarla hacia el carrito.
  const n = galTrack.children.length;
  const idx = Math.min(n - 1, Math.max(0, Math.round(galTrack.scrollLeft / (galTrack.clientWidth || 1))));
  const origen = galTrack.children[idx] || null;
  agregar(p, color, talla, qty, origen);
  cerrarSheet();
});

$("sheetClose").addEventListener("click", cerrarSheet);

/* =======================================================
   CARRITO (se guarda en el navegador)
   ======================================================= */
function cargarCarrito() {
  try {
    const datos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(datos)) return [];
    return datos
      .map((i) => {
        const p = i && porId.get(i.id);
        if (!p || typeof i.clave !== "string" || !(i.cantidad > 0)) return null;
        return { ...i, nombre: p.nombre, precio: p.precio, cantidad: Math.min(i.cantidad, CANTIDAD_MAXIMA_POR_LINEA) };
      })
      .filter(Boolean);
  } catch (_) {
    return [];
  }
}
function guardarCarrito() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito)); } catch (_) {}
}

let carrito = cargarCarrito();

const claveCarrito = (id, color, talla) => [id, color || "", talla || ""].join("|");

// Rebote del botón del carrito.
function rebote() {
  const b = $("cartBtn");
  b.classList.remove("bump");
  void b.offsetWidth;
  b.classList.add("bump");
}

// La foto "vuela" hacia el carrito.
function volar(origen) {
  if (!origen || reduceMotion || !origen.getBoundingClientRect || !origen.animate) return rebote();
  const r = origen.getBoundingClientRect();
  const t = $("cartBtn").getBoundingClientRect();
  if (!r.width || !r.height || !t.width) return rebote();

  const vuela = document.createElement("img");
  vuela.className = "fly";
  vuela.src = origen.currentSrc || origen.src;
  vuela.alt = "";
  const lado = Math.min(r.width, r.height, 180);
  const x0 = r.left + (r.width - lado) / 2;
  const y0 = r.top + (r.height - lado) / 2;
  vuela.style.cssText = `left:${x0}px;top:${y0}px;width:${lado}px;height:${lado}px;`;
  document.body.appendChild(vuela);

  const dx = t.left + t.width / 2 - (x0 + lado / 2);
  const dy = t.top + t.height / 2 - (y0 + lado / 2);
  const anim = vuela.animate([
    { transform: "translate(0,0) scale(1)", opacity: 1 },
    { transform: `translate(${dx * 0.55}px, ${dy * 0.25 - 50}px) scale(0.55)`, opacity: 1, offset: 0.55 },
    { transform: `translate(${dx}px, ${dy}px) scale(0.08)`, opacity: 0.3 }
  ], { duration: 720, easing: "cubic-bezier(.5,0,.3,1)" });
  anim.onfinish = anim.oncancel = () => { vuela.remove(); rebote(); };
}

function agregar(p, color, talla, cantidad, origen) {
  const clave = claveCarrito(p.id, color, talla);
  const linea = carrito.find((i) => i.clave === clave);
  if (linea) {
    linea.cantidad = Math.min(linea.cantidad + cantidad, CANTIDAD_MAXIMA_POR_LINEA);
  } else {
    carrito.push({
      clave,
      id: p.id,
      nombre: p.nombre,
      precio: p.precio,
      imagen: p.list[p.ci] || p.list[0] || "",
      color: color || "",
      talla: talla || "",
      cantidad: Math.min(cantidad, CANTIDAD_MAXIMA_POR_LINEA)
    });
  }
  renderCart();
  volar(origen);
  toast(`${p.nombre} agregado al carrito`);
}

function cambiarCantidad(clave, delta) {
  const linea = carrito.find((i) => i.clave === clave);
  if (!linea) return;
  linea.cantidad = Math.min(linea.cantidad + delta, CANTIDAD_MAXIMA_POR_LINEA);
  if (linea.cantidad <= 0) carrito = carrito.filter((i) => i.clave !== clave);
  renderCart();
}

// Números que suben o bajan suavemente en vez de saltar.
function contar(el, hasta, fmt) {
  const desde = el._v === undefined ? hasta : el._v;
  el._v = hasta;
  const id = (el._id = (el._id || 0) + 1);
  if (reduceMotion || desde === hasta) { el.textContent = fmt(hasta); return; }
  const t0 = performance.now();
  (function paso(t) {
    if (el._id !== id) return;
    const k = Math.min(1, (t - t0) / 450);
    el.textContent = fmt(desde + (hasta - desde) * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(paso);
  })(t0);
}

const cartPanel = $("cartPanel");
const cartItemsEl = $("cartItems");
const cartCountEl = $("cartCount");
const cartTotalEl = $("cartTotal");
const cartBar = $("cartBar");
const sendBtn = $("sendWhatsapp");

const CARRITO_VACIO = `
  <div class="cart-empty">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    <p>Tu carrito está vacío.<br>Selah espera.</p>
  </div>`;

function renderCart() {
  const piezas = carrito.reduce((s, i) => s + i.cantidad, 0);
  const total = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);

  cartCountEl.textContent = piezas;
  cartCountEl.hidden = piezas === 0;
  contar(cartTotalEl, total, money);
  sendBtn.disabled = carrito.length === 0;

  // Barra inferior (solo se ve en celular)
  contar($("cbCount"), piezas, (n) => Math.round(n));
  contar($("cbTotal"), total, money);
  cartBar.hidden = piezas === 0;
  document.body.classList.toggle("has-cart", piezas > 0);

  cartItemsEl.innerHTML = carrito.length === 0 ? CARRITO_VACIO : carrito.map((i) => `
    <div class="cart-item">
      <div class="cart-item-image">${i.imagen ? `<img src="${ruta(i.imagen)}" alt="" width="60" height="60" loading="lazy" decoding="async">` : ""}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${esc(i.nombre)}</div>
        ${i.color || i.talla ? `<div class="cart-item-variant">${esc([i.color, i.talla].filter(Boolean).join(" · "))}</div>` : ""}
        <div class="cart-item-price">${money(i.precio)} c/u</div>
      </div>
      <div class="qty-controls">
        <button type="button" data-action="minus" data-clave="${esc(i.clave)}" aria-label="Quitar uno">−</button>
        <span>${i.cantidad}</span>
        <button type="button" data-action="plus" data-clave="${esc(i.clave)}" aria-label="Agregar uno">+</button>
      </div>
    </div>`).join("");

  guardarCarrito();
}

cartItemsEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  cambiarCantidad(btn.dataset.clave, btn.dataset.action === "plus" ? 1 : -1);
});

function abrirCarrito() {
  focoPrevio = document.activeElement;
  cerrarSheet();
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  overlay.classList.add("on");
  bloquearScroll();
  $("closeCart").focus({ preventScroll: true });
}
function cerrarCarrito() {
  if (!cartPanel.classList.contains("open")) return;
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  if (!sheet.classList.contains("open")) overlay.classList.remove("on");
  bloquearScroll();
  if (focoPrevio && document.contains(focoPrevio)) focoPrevio.focus({ preventScroll: true });
}

$("cartBtn").addEventListener("click", abrirCarrito);
$("cartBar").addEventListener("click", abrirCarrito);
$("ctaCart").addEventListener("click", abrirCarrito);
$("closeCart").addEventListener("click", cerrarCarrito);

overlay.addEventListener("click", () => { cerrarSheet(); cerrarCarrito(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { cerrarSheet(); cerrarCarrito(); }
  if (sheet.classList.contains("open")) {
    if (e.key === "ArrowLeft") pasoGaleria(-1);
    if (e.key === "ArrowRight") pasoGaleria(1);
  }
});

function bloquearScroll() {
  const abierto = sheet.classList.contains("open") || cartPanel.classList.contains("open");
  document.body.style.overflow = abierto ? "hidden" : "";
  document.documentElement.style.overflow = abierto ? "hidden" : "";
}

/* ===== Pedido por WhatsApp =====
   El mensaje se arma como texto normal (con saltos de línea reales)
   y se codifica completo con encodeURIComponent, así llegan bien
   los acentos, "#", "&", "%" y varios productos a la vez. */
const SINGULAR = { Tonos: "Tono", Olores: "Olor", Colores: "Color", Modelos: "Modelo", Opciones: "Opción", Color: "Tono" };

sendBtn.addEventListener("click", () => {
  if (carrito.length === 0) return;

  const lineas = ["Hola, quiero realizar un pedido.", ""];
  carrito.forEach((i, n) => {
    const prod = porId.get(i.id);
    if (carrito.length > 1) lineas.push(`Producto ${n + 1} de ${carrito.length}`);
    lineas.push(`Producto: ${i.nombre}`);
    lineas.push(`Precio: ${money(i.precio)}`);
    if (i.talla) lineas.push(`Talla: ${i.talla}`);
    if (i.color) lineas.push(`${(prod && SINGULAR[prod.tipoColor]) || "Opción"}: ${i.color}`);
    lineas.push(`Cantidad: ${i.cantidad}`);
    lineas.push(`Subtotal: ${money(i.precio * i.cantidad)}`);
    lineas.push("");
  });
  lineas.push(`Total: ${money(carrito.reduce((s, i) => s + i.precio * i.cantidad, 0))}`);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lineas.join("\n"))}`;
  window.open(url, "_blank", "noopener");
});

/* ===== Aviso breve ===== */
const toastEl = $("toast");
let toastT;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("on");
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove("on"), 1800);
}

/* ===== Scroll: sombra del encabezado, barra de progreso y parallax suave ===== */
const headerEl = $("siteHeader");
const progresoEl = $("progress");
const paralaje = [...document.querySelectorAll("[data-par], [data-parx]")];

function alScroll() {
  headerEl.classList.toggle("scrolled", window.scrollY > 8);
  const alto = document.documentElement.scrollHeight - window.innerHeight;
  progresoEl.style.transform = `scaleX(${alto > 0 ? Math.min(1, window.scrollY / alto) : 0})`;

  if (reduceMotion) return;
  const vh = window.innerHeight;
  paralaje.forEach((el) => {
    const seccion = el.closest("section") || el.parentElement;
    const r = seccion.getBoundingClientRect();
    if (r.bottom < -80 || r.top > vh + 80) return;
    const medio = r.top + r.height / 2 - vh / 2;
    if (el.dataset.par) el.style.setProperty("--py", (-medio * parseFloat(el.dataset.par)).toFixed(1) + "px");
    if (el.dataset.parx) el.style.setProperty("--px", (medio * parseFloat(el.dataset.parx)).toFixed(1) + "px");
  });
}
let scrollTick = false;
window.addEventListener("scroll", () => {
  if (scrollTick) return;
  scrollTick = true;
  requestAnimationFrame(() => { alScroll(); scrollTick = false; });
}, { passive: true });
window.addEventListener("resize", () => { alScroll(); moverIndicador(chipsEl.querySelector(".chip.active")); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => moverIndicador(chipsEl.querySelector(".chip.active")));

/* ===== Solo con mouse: tarjetas que se inclinan y botones "magnéticos" ===== */
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
  const limpiar = (card) => {
    card.classList.remove("tilting");
    ["--rx", "--ry", "--mx", "--my"].forEach((v) => card.style.removeProperty(v));
  };
  gridEl.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty("--ry", ((x - 0.5) * 7).toFixed(2) + "deg");
    card.style.setProperty("--rx", ((0.5 - y) * 7).toFixed(2) + "deg");
    card.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
    card.style.setProperty("--my", (y * 100).toFixed(1) + "%");
    card.classList.add("tilting");
  });
  gridEl.addEventListener("pointerout", (e) => {
    const card = e.target.closest(".card");
    if (card && !card.contains(e.relatedTarget)) limpiar(card);
  });

  document.querySelectorAll(".btn, .cart-btn").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.translate = `${((e.clientX - (r.left + r.width / 2)) * 0.18).toFixed(1)}px ${((e.clientY - (r.top + r.height / 2)) * 0.28).toFixed(1)}px`;
    });
    b.addEventListener("pointerleave", () => { b.style.translate = ""; });
  });
}

/* ===== Enlaces de WhatsApp y año ===== */
$("footerWhatsapp").href = `https://wa.me/${WHATSAPP_NUMBER}`;
$("floatWhatsapp").href = `https://wa.me/${WHATSAPP_NUMBER}`;
$("year").textContent = new Date().getFullYear();

/* ===== Arranque ===== */
renderCatalogo();
renderCart();
alScroll();