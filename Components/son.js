Vue.component('hijo',{
template://html
`
<div class="bg-success text-white">
<h2>componente hijopro</h2>
<h5>{{numeros}}</h5>
<button @click="numeros++">+</button>

</div>
`,
props: ['numeros']

})