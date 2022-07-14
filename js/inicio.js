
window.onload=()=>{
    generarTestimonios();
    initSliderTestimonios();
}

// window.onscroll=()=>{
//     const navbar = document.getElementById('navMenu');
//     if (window.scrollY < 300) {
//         navbar.classList.add('bg-light');
//         navbar.classList.remove('bg-white');
//     } else {
//         navbar.classList.remove('bg-light');
//         navbar.classList.add('bg-white');
//     }
// }

const initSliderTestimonios=()=>{
    $('.carousel-testimony').owlCarousel({
        center: true,
        loop: true,
        items:1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });
}

const generarTestimonios=()=>{
    const arrComentario=[
        {
            nombre:"Angig Rivera Cartagena",
            comentario:"La mejor Veterinaria de la región, excelentes profesionales, tecnología de punta, capacitaciones constantes y muy buen trato, llevo a mis perros hace 4 años y no hay ninguna veterinaria que les iguale 💚",
            imagen:"person_8.jpeg"
        },
        {
            nombre:"Mario Palacios Lopez",
            comentario:"Excelente atención, el personal muy amable y se nota que están capacitados, lleve a mi engreída para su tratamiento y todo salió excelente, se recuperó super rápido gracias a que estuvieron pendientes en todo momento! de verdad recomendado.❤",
            imagen:"person_2.jpg"
        },
        {
            nombre:"Antonio Paz Monteza",
            comentario:"Muy buena atención, excelentes profesionales, estoy muy contento con el apoyo que brindan a nuestras mascotas 😍😍",
            imagen:"person_9.jpeg"
        },
        {
            nombre:"Nancy Zurita Jimenez",
            comentario:"súperfeliz de haber conocido a personas tan dedicadas a su profesión... excelente atención y súperecomendada ... personas muy conscientes en lo económico... gracias por devolverme a mi perrita sanita...💕",
            imagen:"person_7.jpeg"
        },
        {
          nombre:"  Sarahi Gomez Cachay",
          comentario:"Es muy buena clínica hace un tiempo asistieron a mi perrito después de tener un accidente en su cola todo salió muy bien y ahora mi hijo está en perfectas condiciones La recomiendo 100% garantía muy buena atención 🐾",
          imagen:"person_6.jpeg"
      }
    ];
    const n=arrComentario.length;
    let arrDom=[];
    let textoInn="";
    for(let x=0;x<n;x++){
        textoInn="";
        textoInn=`<div class="item">
        <div class="testimony-wrap py-4">
          <div
            class="icon d-flex align-items-center justify-content-center"
          >
            <span class="fa fa-quote-left"></span>
          </div>
          <div class="text">
            <p class="mb-4">${arrComentario[x].comentario}</p>
            <div class="d-flex align-items-center">
              <div
                class="user-img"
                style="background-image: url(images/testimonios/${arrComentario[x].imagen})"
              ></div>
              <div class="pl-3">
                <p class="name">${arrComentario[x].nombre}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    arrDom.push(textoInn);
    }

    let divTestimonios=document.getElementById("divTestimonios");
    divTestimonios.innerHTML=arrDom.join("");
    // $("#divTestimonios").html(arrDom.join(""));
}



