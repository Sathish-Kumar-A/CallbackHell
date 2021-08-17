let n=10;
let str="Happy Independence Day"
function reduction(){
    let heading=document.createElement('div')
    heading.setAttribute('class','border')
    heading.innerHTML=`<h4>${n}</h4>`;
    document.body.append(heading)
        n-=1;
}
function hid(){
    let heading=document.createElement('div')
    heading.setAttribute('class','bordertext')
    heading.innerHTML=`<h4>${str}</h4>`;
    document.body.append(heading)
}
setTimeout(function ten(){
    reduction()
    setTimeout(function nine(){
        reduction()
        setTimeout(function eight(){
            reduction()
            setTimeout(function seven(){
                reduction()
                setTimeout(function six(){
                    reduction()
                    setTimeout(function five(){
                        reduction()
                        setTimeout(function four(){
                            reduction()
                            setTimeout(function three(){
                                reduction()
                                setTimeout(function two(){
                                    reduction()
                                    setTimeout(function one(){
                                        reduction()
                                        setTimeout(function content(){
                                            hid()
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)