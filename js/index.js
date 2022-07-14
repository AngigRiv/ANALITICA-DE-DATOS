

window.onload=()=>{
    let menu=document.getElementById("menu");
    let links=menu.getElementsByTagName("LI");
    let n=links.length;
    for(let x=0;x<n;x++){
        links[x].onclick=()=>{           
            let dataPos=links[x].getAttribute("data-pos");
            let src=links[dataPos].getAttribute("data-href");

            go(src);     
            let menu=document.getElementById("menu");
            let linksChild=menu.getElementsByTagName("LI");   
            let nChild=linksChild.length;
            for(let y=0;y<nChild;y++)
            {
                if(y==dataPos){
                    linksChild[y].className="nav-item active";
                }else{
                    linksChild[y].className="nav-item";
                }
            }
        }
    }
}

let go=(loc)=> {
    document.getElementById('iframeCon').src = loc;
  }
