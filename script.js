let n=10;
let str="Happy Independence Day"
let heading=document.createElement('div')
heading.setAttribute('class','border')

setTimeout(()=>{heading.innerHTML=`<h4>${n}</h4>`;
    document.body.append(heading)
    n-=1;
    
    setTimeout(()=>{
        heading.innerHTML=`<h4>${n}</h4>`;
        document.body.append(heading)
        n-=1;

        setTimeout(()=>{
            heading.innerHTML=`<h4>${n}</h4>`;
            document.body.append(heading)
            n-=1;

            setTimeout(()=>{
                heading.innerHTML=`<h4>${n}</h4>`;
                document.body.append(heading)
                n-=1;

                setTimeout(()=>{
                    heading.innerHTML=`<h4>${n}</h4>`;
                    document.body.append(heading)
                    n-=1;

                    setTimeout(()=>{
                        heading.innerHTML=`<h4>${n}</h4>`;
                        document.body.append(heading)
                        n-=1;

                        setTimeout(()=>{
                            heading.innerHTML=`<h4>${n}</h4>`;
                            document.body.append(heading)
                            n-=1;

                            setTimeout(()=>{
                                heading.innerHTML=`<h4>${n}</h4>`;
                                document.body.append(heading)
                                n-=1;

                                setTimeout(()=>{
                                    heading.innerHTML=`<h4>${n}</h4>`;
                                    document.body.append(heading)
                                    n-=1;

                                    setTimeout(()=>{
                                        heading.innerHTML=`<h4>${n}</h4>`;
                                        document.body.append(heading)
                                        n-=1;

                                        setTimeout(()=>{
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