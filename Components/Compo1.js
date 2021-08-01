Vue.component('contador',{
    template://html
    `
    <div class="bg-dark text-white">
    <h3> {{numero}} </h3>
    <button @click="numero++">+</button>
    <hijo></hijo>
    <h3>componente padremaster</h3>
    
    </div>
    `,
    data(){
        return{
            numero:0
        }
    }
    
    
})