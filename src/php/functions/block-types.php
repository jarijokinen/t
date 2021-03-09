<?php

namespace <%= slug %>;

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

add_action('init', __NAMESPACE__ . '\block_types');

?>
