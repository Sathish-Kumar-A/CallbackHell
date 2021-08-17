let n=10;
let str="Happy Independence Day"
let heading=document.createElement('div')
heading.setAttribute('class','border')

setTimeout(function ten(){  heading.innerHTML=`<h4>${n}</h4>`;
    document.body.append(heading)
    n-=1;

    setTimeout(function nine(){
        heading.innerHTML=`<h4>${n}</h4>`;
        document.body.append(heading)
        n-=1;

        setTimeout(function eight(){
            heading.innerHTML=`<h4>${n}</h4>`;
            document.body.append(heading)
            n-=1;

            setTimeout(function seven(){
                heading.innerHTML=`<h4>${n}</h4>`;
                document.body.append(heading)
                n-=1;

                setTimeout(function six(){
                    heading.innerHTML=`<h4>${n}</h4>`;
                    document.body.append(heading)
                    n-=1;

                    setTimeout(function five(){
                        heading.innerHTML=`<h4>${n}</h4>`;
                        document.body.append(heading)
                        n-=1;

                        setTimeout(function four(){
                            heading.innerHTML=`<h4>${n}</h4>`;
                            document.body.append(heading)
                            n-=1;

                            setTimeout(function three(){
                                heading.innerHTML=`<h4>${n}</h4>`;
                                document.body.append(heading)
                                n-=1;

                                setTimeout(function two(){
                                    heading.innerHTML=`<h4>${n}</h4>`;
                                    document.body.append(heading)
                                    n-=1;

                                    setTimeout(function one(){
                                        heading.innerHTML=`<h4>${n}</h4>`;
                                        document.body.append(heading)
                                        n-=1;

                                        setTimeout(function content(){
                                            heading.setAttribute('class','bordertext')
                                            heading.innerHTML=`<h4 >${str}</h4>`;
                                            document.body.append(heading)
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