<?php

namespace t;

function default_menu() {
  echo '<li><a href="/">' . __('Home', 't') . '</a></li>';
}

function main_menu() {
  wp_nav_menu([
    'container' => '',
    'fallback_cb' => __NAMESPACE__ . '\default_menu',
    'items_wrap' => '%3$s',
    'theme_location' => 'main-menu'
  ]);
}

function menu_classes($classes, $item, $args) {
  $new_classes = [];
  if (in_array('current_page_item', $classes)) {
    $new_classes[] = 'active';
  }
  if (in_array('header-nav-cta', $classes)) {
    $new_classes[] = 'header-nav-cta';
  }
  return $new_classes;
}
add_filter('nav_menu_css_class', __NAMESPACE__ . '\menu_classes', 1, 3);
add_filter('nav_menu_item_id', '__return_false');
register_nav_menus(['main-menu' => __('Main Menu', 't')]);

?>
