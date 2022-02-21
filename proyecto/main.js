var app = new Vue({
    el: '#appSistema',
    data: {
       forms:{
           'estudiantes':{ mostrar: false },
           'materias':{ mostrar: false },
           'inscripciones':{ mostrar: false }

       }
    },
    methods: {
        
    },
    created(){
       
    }
});
document.addEventListener('DOMContentLoaded', event=>{
    let $element = document.querySelectorAll('.mostrar').forEach( (element,index)=>{
        element.addEventListener('click', e=>{
            app.forms[e.target.dataset.form].mostrar = true;
            //app.forms[e.target.dataset.form].obtenerDatos();
        });
    });
});