<?php

namespace t;

function enqueue_assets() {
  $css_uri = get_theme_file_uri('css/main.css') . '?1616196930524';
  wp_enqueue_style(__NAMESPACE__, $css_uri, array(), null);

  $js_uri = get_theme_file_uri('js/main.js');
  wp_enqueue_script(__NAMESPACE__, $js_uri, null, '1616196930524', true);
}

function editor_styles() {
  add_theme_support('editor-styles');
  add_editor_style('css/editor.css');
}

function editor_assets() {
  wp_enqueue_script(
    __NAMESPACE__ . '-editor', 
    get_theme_file_uri('js/editor.js'), 
    null, 
    '1616196930524', 
    true
  );
}

add_action('wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_assets');
add_action('after_setup_theme', __NAMESPACE__ . '\editor_styles');
add_action('enqueue_block_editor_assets', __NAMESPACE__ . '\editor_assets');

?>
