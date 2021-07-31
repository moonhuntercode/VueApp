var app = new Vue({
    el: '#App0',
    data: {
      message: 'Hello Vue!',
      titulo:'TAREAS PENDIENTES',
            
            
            fondo:'bg-success',
            tareas:[],
            nuevaTarea:'',
            
            },
            methods:{
                agregarTarea:function(){
            this.tareas.push({
                nombre:this.nuevaTarea,
                estado:false,
            })
            console.log(this.tareas);
            this.nuevaTarea='';
            localStorage.setItem('gymVue',JSON.stringify(this.tareas) )
                },
                editarTarea:function(index){
            // console.log("edits",index);
            this.tareas[index].estado=true;
            localStorage.setItem('gymVue',JSON.stringify(this.tareas) )
                },
                eliminar:function(index){
                    console.log('eliminar',index);
                    this.tareas.splice(index,1);
                    localStorage.setItem('gymVue',JSON.stringify(this.tareas) )
                },
                
                
            },
            created:function(){
            let datosDB=JSON.parse(localStorage.getItem('gymVue'));
            if (datosDB===null) {
                this.tareas=[];
            }else{
                this.tareas=datosDB;
            }
            console.log(datosDB);
            },
           
    }
    )
