Vue.component('icon',
  {
    props :
      {
        name:
          {
            default:"exclamation-triangle"
          },
        size:
          {
            default:1
          }
      },
    methods:
      {
        getClass: function()
          {
            return "fa fa-"+this.name;
          }
      },
    template : `<i :class="getClass()"></i>`
  });
