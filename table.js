
Vue.component('padre',{
    template: //html
    `
    <div class="container">
        <table style="width:40%">
            
                <ol >
                    
                    <li v-for="product of products" >
                        <tr>
                            <th>PRODUCTO</th>
                <th>CANTIDAD</th>
                <th>PEDIDOS</th>
                        </tr>
                        <tr>
                            <td>{{product.name}}</td>
                            
                            <td>
                            {{product.cantidad-numero1}} 
                            <span v-if="product.cantidad-numero1===0">en el inventario</span>
                            </td>
                            <td>
                            {{numero1}} pedidos
                            <span v-if="numero1===3 ">sin stock</span>
                            </td>
                        </tr>
                         
                    </li>
                </ol>
           
            
        </table>
    <h4>total vendido:{{sumarPedidos}} </h4>
        <h1>padre:numero1 dinámico: {{numero1}} </h1>
        <hijo></hijo>
    </div>
    `,
    data(){
        return {
            
            products:[
            {name:"CHURRASCO",cantidad:10},
            {name:"YUCA FRITA",cantidad:10},
            {name:"MAJADITO",cantidad:10}
            ]
        }
    },
    computed:{
        sumarPedidos(){
            this.totalPedidos=0;
            for(product of this.products){
                this.totalPedidos=this.totalPedidos+store.state.numero1;
            }
            return this.totalPedidos;
        },
        ...Vuex.mapState(['numero1'])
    }
    });