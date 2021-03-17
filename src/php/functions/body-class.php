<?php

namespace <%= slug %>;

function body_class($classes) {
  $classes = ['at-top'];
  
  if (get_theme_mod(__NAMESPACE__ . '_header_attachment') == 'fixed') {
    $classes[] = 'has-fixed-header';
  }

  if (get_post_meta(get_the_ID(), __NAMESPACE__ . '_integrated_header', true)) {
    $classes[] = 'has-integrated-header';
  }

  return $classes;
}

add_filter('body_class', __NAMESPACE__ . '\body_class');

?>
