var app = new Vue({
  el:"#app",
  template :
  `
  <div>
    <nav-bar-mobile></nav-bar-mobile>
    <div class="kt-grid kt-grid--hor kt-grid--root">
      <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
        <side-bar></side-bar>
        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
          <nav-bar></nav-bar>
          <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
            <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
              <!--Begin::content-->
              <slot></slot>
              <!--End::content-->
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  `
});
