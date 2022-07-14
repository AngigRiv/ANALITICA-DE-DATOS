

let generarServicios=()=>{
    const arrServicios=[
        {
            titulo:"CONSULTAS Y TRATAMIENTOS",
            descripcion:"La consulta para tu engreído está orientada al abordaje integral del paciente que acude por cualquier motivo de consulta, durante la misma se realizará la evaluación específica del problema que aqueja al paciente, una vez completada esa revisión se procederá a la detección e identificación de factores de riesgo para enfermedades latentes o potenciales en el corto, mediano y largo plazo.",
            imagen:"image_1.jpg"
        },
        {
            titulo:"LABORATORIO CLINICO",
            descripcion:"La realización de exámenes de laboratorio como son: análisis de sangre, orina, heces, raspados de piel, cultivos, antibiogramas, evaluación electrónica, etc; son piezas fundamentales para realizar un diagnóstico acertado y establecer un protocolo de tratamiento ideal a fin de lograr la recuperación de nuestras queridas mascotas. En Pets Park, contamos con equipos de laboratorio de última generación que nos permite realizar estos análisis tan preciados para nuestros pacientes y clientes.",
            imagen:"image_2.jpg"
        },
        {
            titulo:"BAÑOS MEDICADOS Y PELUQUERIA",
            descripcion:"Los baños medicados están destinados a brindarle a tu mascota tanto un alivio relajante como una curación ante la existencia de inflamación, dolor o infecciones en su piel. Además, Pets Park cuenta con diferentes herramientas para tratar la estética de tu engreído.",
            imagen:"image_3.jpg"
        },
        {
            titulo:"RX RADIOLOGIA",
            descripcion:"Gracias a los rayos X, los órganos internos se hacen visibles, lo cual ayuda a determinar su grado de alteración o normalidad. Es un importante examen auxiliar que permite al médico veterinario realizar un diagnóstico más preciso sobre el problema que afecta la salud de su mascota.",
            imagen:"image_4.jpg"
        },
        {
            titulo:"CIRUGIA Y ESPECIALIZACION",
            descripcion:"Para la realización de las cirugías contamos con un quirófano completo, equipado con anestesia inhalatoria, que resulta muy segura para la realización de intervenciones quirúrgicas, equipo de oxigenoterapia, pulsímetro, y monitor multiparametro que nos permite el máximo control y evaluación de las constantes fisiológicas vitales del paciente durante la anestesia.",
            imagen:"image_5.jpg"
        },
        {
            titulo:"DIAGNOSTICO POR ULTRASONIDO",
            descripcion:"Utilizamos últimas tecnologías para detectar cambios en el aspecto y función de órganos, tejidos y vasos, a través de nuestro análisis por ultrasonido podemos ayudar a tu engreído a superar una cantidad de problemas que este pueda presentar.",
            imagen:"image_6.jpg"
        }
    ];
    const n=arrServicios.length;
    let arrDom=[];
    let textoInn="";
    for(let x=0;x<n;x++){
        textoInn="";
        textoInn=`<div class="col-md-4 d-flex">
        <div class="servicio align-self-stretch">
        <a class="block-20 rounded" style="background-image: url('images/${arrServicios[x].imagen}');">
        </a>
        <div class="text p-4">
            <div class="meta mb-2">
                <div>${arrServicios[x].titulo}</div>
          </div>
          <h3 class="heading lead">${arrServicios[x].descripcion}</h3>
        </div>
      </div>
    </div>`;
    arrDom.push(textoInn);
    }

    let divServicios=document.getElementById("divServicios");
    divServicios.innerHTML=arrDom.join("");
}

window.onload=()=>{
    generarServicios();
}