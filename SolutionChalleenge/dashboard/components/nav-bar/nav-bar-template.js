Vue.component('nav-bar-mobile',
  {
    template:
    `<div id="kt_header_mobile" class="kt-header-mobile  kt-header-mobile--fixed ">
      <div class="kt-header-mobile__logo">
        <a href="index.html">
          <img alt="Logo" src="assets/media/logos/logo-light.png" />
        </a>
      </div>
      <div class="kt-header-mobile__toolbar">
        <button class="kt-header-mobile__toggler kt-header-mobile__toggler--left" id="kt_aside_mobile_toggler"><span></span></button>
        <button class="kt-header-mobile__toggler" id="kt_header_mobile_toggler"><span></span></button>
        <button class="kt-header-mobile__topbar-toggler" id="kt_header_mobile_topbar_toggler"><i class="flaticon-more"></i></button>
      </div>
    </div>
    `
  });

Vue.component('nav-bar',
  {
    template:
      `
      <div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed ">
        <!-- begin:: Header Menu -->
        <div class="kt-header-menu-wrapper" id="kt_header_menu_wrapper">

        </div>
        <!-- end:: Header Menu -->

        <!-- begin:: Header Topbar -->
        <div class="kt-header__topbar">
          <!--begin: User Bar -->
          <div class="kt-header__topbar-item kt-header__topbar-item--user">
            <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
              <div class="kt-header__topbar-user">
                <span class="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
                <span class="kt-header__topbar-username kt-hidden-mobile">Sean</span>
                <img class="kt-hidden" alt="Pic" src="assets/media/users/300_25.jpg" />

                <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) -->
                <span class="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">S</span>
              </div>
            </div>
            <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">

              <!--begin: Head -->
              <div class="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x" style="background-image: url(assets/media/misc/bg-1.jpg)">
                <div class="kt-user-card__avatar">
                  <img class="kt-hidden" alt="Pic" src="assets/media/users/300_25.jpg" />

                  <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) -->
                  <span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">S</span>
                </div>
                <div class="kt-user-card__name">
                  Sean Stone
                </div>
                <div class="kt-user-card__badge">
                  <span class="btn btn-success btn-sm btn-bold btn-font-md">23 messages</span>
                </div>
              </div>

              <!--end: Head -->

              <!--begin: Navigation -->
              <div class="kt-notification">
                <a href="#" class="kt-notification__item">
                  <div class="kt-notification__item-icon">
                    <i class="flaticon2-calendar-3 kt-font-success"></i>
                  </div>
                  <div class="kt-notification__item-details">
                    <div class="kt-notification__item-title kt-font-bold">
                      My Profile
                    </div>
                    <div class="kt-notification__item-time">
                      Account settings and more
                    </div>
                  </div>
                </a>
                <a href="#" class="kt-notification__item">
                  <div class="kt-notification__item-icon">
                    <i class="flaticon2-mail kt-font-warning"></i>
                  </div>
                  <div class="kt-notification__item-details">
                    <div class="kt-notification__item-title kt-font-bold">
                      Requests
                    </div>
                    <div class="kt-notification__item-time">
                      Your access requests
                    </div>
                  </div>
                </a>


                <div class="kt-notification__custom kt-space-between">
                  <a href="#" target="_blank" class="btn btn-label btn-label-brand btn-sm btn-bold">Sign Out</a>
                  <a href="#" target="_blank" class="btn btn-clean btn-sm btn-bold">Upgrade Plan</a>
                </div>
              </div>

              <!--end: Navigation -->
            </div>
          </div>

          <!--end: User Bar -->
        </div>

        <!-- end:: Header Topbar -->
      </div>

      `
  });
