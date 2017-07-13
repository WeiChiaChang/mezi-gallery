var vm = new Vue({
  el: "#app",
  data: {
    // 動態載入會有點小延遲，善用此特性
    meziData: "載入中．．．．"
  },
  created() {
    this.meziFetch()
  },
  methods: {
    meziFetch() {
      $.ajax({
        url: 'https://gank.io/api/data/%E7%A6%8F%E5%88%A9/100/1',
        success: function(res){
          vm.meziData = res.results
          // console.log(res)
        }
      })
    }
  }
})
