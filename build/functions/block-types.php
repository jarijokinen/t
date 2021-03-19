<?php

namespace t;

function register_block_type($name) {
  $block_path = get_theme_file_path('blocks/' . $name);
  $asset_file = require get_theme_file_path('blocks/asset.php');
  $script_asset = $asset_file["$name.js"];
  $editor_script_handle = __NAMESPACE__ . '-' . $name . '-editor';
  $style_handle = __NAMESPACE__ . '-' . $name;

  wp_register_script(
    $editor_script_handle,
    get_theme_file_uri('blocks/' . $name . '/index.js'),
    $script_asset['dependencies'],
    $script_asset['version']
  );

  wp_register_style($style_handle, get_theme_file_uri('css/' . $name . '.css'));

  register_block_type_from_metadata($block_path, [
    'editor_script' => $editor_script_handle,
    'style' => $style_handle
  ]);
}

function block_types() {
  register_block_type('section');
}

function default_block_type() {
  $post_type_object = get_post_type_object('page');
  $post_type_object->template = [
    [__NAMESPACE__ . '/section']
  ];
}

function allowed_block_types($allowed_block_types, $post) {
  switch ($post->post_type) {
    case 'page':
      $allowed_block_types = [
        __NAMESPACE__ . '/section',
        'core/paragraph'
      ];
  }

  return $allowed_block_types;
}

add_action('init', __NAMESPACE__ . '\block_types');
add_action('init', __NAMESPACE__ . '\default_block_type');
add_action('allowed_block_types', __NAMESPACE__ . '\allowed_block_types', 10, 2);

?>
