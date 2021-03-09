<?php

namespace <%= slug %>;

function site_title_separator() {
  return '|';
}

function site_title_parts($title) {
  return (is_home() || is_front_page()) ? array_reverse($title) : $title;
}

add_theme_support('title-tag');
add_filter('document_title_separator', __NAMESPACE__ . '\site_title_separator');
add_filter('document_title_parts', __NAMESPACE__ . '\site_title_parts');

?>
