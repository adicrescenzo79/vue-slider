var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    images: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ],
  },

  methods: {
    next: function (){
      if (this.index === this.images.length - 1) {
        this.index = 0;
      } else {
        this.index++
      }
    },
    prev: function (){
      if (this.index === 0) {
        this.index = this.images.length - 1;
      } else {
        this.index--;
      }
    },
    change: function(index){
      this.index = index;
    },
    auto: function(){
      let nuovo = this;
      setInterval (function(){
        if (nuovo.index === nuovo.images.length - 1) {
          nuovo.index = 0;
        } else {
          nuovo.index++
        }
      }, 3000);
    }
  },
  mounted () {
    this.auto()
  }

})
