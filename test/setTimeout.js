const pr = new Promise((resolve)=>{
    setTimeout(()=>{
    resolve()
    },2000)
    })
    pr.then(()=>console.log('after 2 sec'))