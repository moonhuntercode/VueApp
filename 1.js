const App0={
    data(){
        return{
            titulo:'TAREAS PENDIENTES',
            message:'Hello Vue World',
            message2:'putoskys',
            fondo:'bg-warning',
            tareas:[],
            nuevaTarea:'',
            verduras:[
                {nombre:'Manzana',cantidad:4},
                {nombre:'Banana',cantidad:3},
                {nombre:'Zandia',cantidad:0},
                {nombre:'repollo',cantidad:0},
            ],
            seen:true,
            nuevaFruta:'',
            total:0

    }
    
},
methods:{
    agregarTarea:function(){
this.tareas.push({
    nombre:this.nuevaTarea,
    estado:false,
})
console.log(this.tareas);
this.nuevaTarea='';
    },
    editarTarea:function(index){
// console.log("edits",index);
this.tareas[index].estado=true;
    },
    reverseMessage:function(){
        this.message2=this.message2.split('').reverse().join('')

    },
    agregarVerdura(){
        this.verduras.push({
            nombre:this.nuevaFruta,cantidad:3,
        })
        this.nuevaFruta='';
    }
},
computed:{
    sumarVerduras(){
        this.total=0;
        for(verdura of this.verduras){
            this.total=this.total+verdura.cantidad;
        }
        return this.total;
    }
}
}
Vue.createApp(App0).mount('#App0')