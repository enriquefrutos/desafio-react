let is_ok = true;

let desafio = (task) => {
    return new Promise ((resolve,reject) =>{
        if (is_ok){
            setTimeout(() =>{
                resolve(task)
            }, 1000);
        } else {
            reject('error')
        }
    });
}

export default desafio;