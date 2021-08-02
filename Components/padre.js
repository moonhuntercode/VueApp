Vue.component('padre',{
    template://html
    `
    <div class="bg-dark text-white">
    <h3> {{numero}} </h3>
    <h3>componente padremaster: {{numeroced}} </h3>
    toca para aumentar valor dinámico <button @click="numeroced++">+</button>
    <a href="../pag4.html">pag4Vuex</a>
    <hijo :numeros="numeroced"></hijo>
    
    
    </div>
    `,
    data(){
        return{
            numeroced:20
        }
    }
    
    
})