let n=10;
let str="Happy Independence Day"
let heading=document.createElement('div')
heading.setAttribute('class','border')
function change(){
    heading.innerHTML=`<h4>${n}</h4>`;
    document.body.append(heading)
    n-=1; 
}
function hid(){
    heading.innerHTML=`<h4 class="bordertext">${str}</h4>`;
    document.body.append(heading)
}
setTimeout(function ten(){
        change()
    setTimeout(function nine(){
        change()
        setTimeout(function eight(){
            change()
            setTimeout(function seven(){
                change()
                setTimeout(function six(){
                    change()
                    setTimeout(function five(){
                        change()
                        setTimeout(function four(){
                            change()
                            setTimeout(function three(){
                                change()
                                setTimeout(function two(){
                                    change()
                                    setTimeout(function one(){
                                        change()
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
