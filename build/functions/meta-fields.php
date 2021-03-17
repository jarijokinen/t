<?php

namespace t;

function meta_fields() {
  register_post_meta('page', __NAMESPACE__ . '_integrated_header', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'boolean'
  ]);
}

add_action('init', __NAMESPACE__ . '\meta_fields');

?>
