Vue.component('pagina2',{
template://html
`
<div>
<br><br><br>
<a href="./index.html">ATRAS</a>
<br>
<a href="./pag3.html">siguiente página</a>   
  <hr>
  <br><br>
  
  <h1>más prácticas</h1>
  

  <h6>{{message}} </h6>
  <ol>

  
  <li v-for="verdura of verduras">
      <input type="number" v-model.number="verdura.cantidad">
       {{verdura}} 
       <span v-if=" verdura.cantidad === 0" >- Sin Stock</span>
       <button @click="verdura.cantidad++" >+</button>
       <button @click="verdura.cantidad--">-</button>
      </li>
  </ol>
  <h4>TOTAL: {{sumarVerduras}} </h4>
  <p>agrege nueva fruta</p>
  <input  v-model="nuevaFruta" v-on:keyup.enter="agregarVerdura" >
  <button @click='agregarVerdura'>enviar</button>
  <hr>
  
  <h5>practica de title</h5>
  <br>
  <span v-if="seen">Now you see me.</span>
  <span v-bind:title="message" >
      Hover your mouse over me for <br>
      a few seconds to see my dynamically
      bound tittle!
  </span>
  <br><hr>
  <h5>mensaje a poner en reversa:aquí abajo</h5>
  <p>editalo</p>
  <input type="text"
  v-model="message2"
  >
  <p> {{message2}} </p>
  <p>invertido: {{invertido}} </p>
  <button v-on:click="reverseMessage" >revolver mensaje</button>
  <hr>
  <div class="progress">    
      <div class="progress-bar bg-success"
      :style=" {'width':contador+'%'} "
      role="progressbar" style="width: 25%"
       aria-valuenow="25" aria-valuemin="0"
       aria-valuemax="100"
       :class="color"
       >
          {{contador}}%
      </div>
    </div>
    <button class="btn btn-danger" @click="contador++">+</button>
      <button class="btn btn-primary" @click="contador--" >-</button>
      <br>
      {{contador}}
      <br>
</div>
`
,
    data(){
        return{
            message:'Hello Vue World',
            message2:'putoskys',
           
            verduras:[
                {nombre:'Manzana',cantidad:4},
                {nombre:'Banana',cantidad:3},
                {nombre:'Zandia',cantidad:0},
                {nombre:'repollo',cantidad:0},
            ],
            seen:true,
            nuevaFruta:'',
            total:0,
            contador:0,
        }
        
    },
    methods:{
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
        },
        invertido(){
            return this.message2.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success' : this.contador <=10,
                'bg-danger':this.contador >10 && this.contador <20,
                'bg-warning':this.contador >=20
            }
            
        }
    },
    
    



    // AQUÍ TERMINA LA APP
})