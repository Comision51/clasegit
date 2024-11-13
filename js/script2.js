const agregarBtn = document.getElementById('agregarBtn');
const numpar = document.getElementById('numpar');
const numimpar = document.getElementById('numimpar');
const nuevonum=document.getElementById('nuevonum').value

agregarBtn.addEventListener('click', function(){
    if(nuevonum%2==0){
        const numtexto = nuevonum
        const nuevonum1 = document.createElement('li');
        nuevonum1.textContent = numtexto;
        numpar.appendChild(nuevonum1);
        nuevonum.value = '';
    }else {
        
        const numtexto = nuevonum
        const nuevonum1 = document.createElement('li');
        nuevonum1.textContent = numtexto;
        numimpar.appendChild(nuevonum1);
        nuevonum.value = '';
}
})