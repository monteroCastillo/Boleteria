 <template>
  <div class="container">
    <div class="notification">
      Feel the power of the future
      <strong>{{ counter }}</strong>
      <br />Some tools!!
      <a
        class="button is-primary"
        @click="increment(counter + 1)"
        :class="{'is-loading': loading}"
      ></a>
      <a class="button is-info" @click="increment(counter * 2)" :class="{'is-loading': loading}">
        <i class="fa fa-handshake-o" aria-hidden="true"></i>
      </a>
      <a
        class="button is-success"
        @click="increment(counter + 100)"
        :class="{'is-loading': loading}"
      >
        <i class="fa fa-fighter-jet" aria-hidden="true"></i>
      </a>
      <a
        class="button is-warning"
        @click="increment(counter* counter)"
        :class="{'is-loading': loading}"
      >
        <i class="fa fa-bolt" aria-hidden="true"></i>
      </a>
      <a class="button is-danger" @click="alarm()">Cool!</a>
    </div>
    <!-- <app2></app2> -->
  </div>
</template> 

<script> import { mapGetters, mapActions } from 'vuex' 
    export default 
    {   name: 'counter' , data () { return { loading: false } }, 
        computed: { ...mapGetters({counter: 'counter/value' }) }, 
        props: [ 'loadData' ], 
// this state determine if component has fetch data from the server components: { // you can put here some component, for example import 'import App2 from ' ./App2.vue '' // then just put here 'App2' }, created () { if (this.loadData) { this.loading = true ; // getting data from the server this.get().then(() => { this.loading = false ; }); } }, methods: { ...mapActions( 'counter' , [ 'update' , 'get' ]), alarm () { alert(this.counter); }, increment (value) { this.loading = true ; this.update(value).then(() => { this.loading = false ; }); } } } 
    }
</script>

<style>
a:nth-child(3) {
  color: white;
}
</style> 