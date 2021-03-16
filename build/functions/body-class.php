<?php

namespace t;

function body_class($classes) {
  $classes = ['at-top'];
  if (get_theme_mod(__NAMESPACE__ . '_header_attachment') == 'fixed') {
    $classes[] = 'has-fixed-header';
  }
  return $classes;
}

add_filter('body_class', __NAMESPACE__ . '\body_class');

?>
