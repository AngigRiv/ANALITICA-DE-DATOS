

let generarGaleria=()=>{
    const arrGaleria=[
        {
            imagen:"gallery-10.jpg"
        },
        {
            imagen:"gallery-11.jpg"
        },
        {
            imagen:"gallery-12.jpg"
        },
        {
            imagen:"gallery-13.jpg"
        },
        {
            imagen:"gallery-14.jpg"
        },
        {
            imagen:"gallery-15.jpg"
        },
        {
            imagen:"gallery-16.jpg"
        },
        {
            imagen:"gallery-17.jpg"
        },
        {
            imagen:"gallery-18.jpg"
        },
        {
            imagen:"gallery-19.jpg"
        },
        {
            imagen:"gallery-20.jpg"
        },
        {
            imagen:"gallery-21.jpg"
        }
    ];
    const n=arrGaleria.length;
    let arrDom=[];
    let textoInn="";
    for(let x=0;x<n;x++){
        textoInn="";
        textoInn=`  <div class="col-md-4">
        <div class="imagenGaleria mb-4 img d-flex align-items-end" style="background-image: url(images/galeria/${arrGaleria[x].imagen});">
            <a href="images/galeria/${arrGaleria[x].imagen}" class="icon image-popup d-flex justify-content-center align-items-center">
                        <span class="fa fa-expand"></span>
                    </a>
        </div>
      </div>`;
    arrDom.push(textoInn);
    }

    let divImagenes=document.getElementById("divImagenes");
    divImagenes.innerHTML=arrDom.join("");
}

window.onload=()=>{
    generarGaleria();
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
         gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          verticalFit: true
        }
      });
}