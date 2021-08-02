Vue.component('componente1',
{
    template://html
    `
    <div>
    <H1> {{titulo}} </H1>
<p :class="[fondo]">
    aquí abajo tendremos la lista
    que se almacena en localstorage
</p>
<p>cambie el fondo de arriba escribiendo una clase de bootstrap,
    ahí abajo
</p>
<input type="text" class="form control m-3" v-model="fondo">
<div class="zonadelista">
    <p>escribe algo ahí abajo y luego enter o add</p>
    <input type="text"
    class="form-control my-3"
     v-model="nuevaTarea"
     v-on:keyup.enter="agregarTarea"
     />
    <button class="btn btn-primary"
    @click="agregarTarea">ADD</button>
    <ol>
        <div  role="alert"
        
        :class="['alert',item.estado ? 'alert-success' : 'alert-danger']"
         v-for="(item,index) of tareas">
    <div class="d-flex justify-content-between">
    <div>{{index}} - {{item.nombre}} - {{item.estado}}</div>
    <div>
        <button class="btn btn-success bt-sm" 
        @click="editarTarea(index)">ok</button>
        <button class="btn btn-success bt-sm"
        @click="estado= item.estado=false, eliminar(index)">
            delete</button>
    </div>
    </div>
        </div>
    
    </ol>


<p>
    AQUÍ TEMINA LA APLICACION,
    LISTA DE TAREAS QUE
SE GUARDA EN LOCALSTORAGE
</p>
<a href="./pag2.html">siguiente página</a>
<hr>

  
</div>
    </div>
    `,
    data() {
      return{
        titulo:'TAREAS PENDIENTES',
        fondo:'bg-success',
        tareas:[],
        nuevaTarea:'',
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
           
    })
