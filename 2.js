var app2=new Vue({
    el:'#App2',
    data:{
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