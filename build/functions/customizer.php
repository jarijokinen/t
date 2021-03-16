<?php

namespace t;

function customizer($wp_customize) {
  $wp_customize->add_section(__NAMESPACE__ . '_header_section', [
    'title' => 'Header',
    'priority' => 30
  ]);
  $wp_customize->add_setting(__NAMESPACE__ . '_header_attachment', [
    'default' => 'static'
  ]);
  $wp_customize->add_control(
    new \WP_Customize_Control($wp_customize, 
      __NAMESPACE__ . '_header_attachment', [
      'type'     => 'select',
      'label'    => 'Header Attachment',
      'section'  => __NAMESPACE__ . '_header_section',
      'settings' => __NAMESPACE__ . '_header_attachment',
      'choices'  => [
        'static' => 'Static',
        'fixed'  => 'Fixed'
      ]
    ])
  );
  $wp_customize->add_setting(__NAMESPACE__ . '_header_width', [
    'default' => 'default'
  ]);
  $wp_customize->add_control(
    new \WP_Customize_Control($wp_customize, __NAMESPACE__ . '_header_width', [
      'type'      => 'select',
      'label'     => 'Header Width',
      'section'   => __NAMESPACE__ . '_header_section',
      'settings'  => __NAMESPACE__ . '_header_width',
      'choices'   => [
        'default' => 'Default (1200px)',
        'full'    => 'Full width',
        'narrow'  => 'Narrow (768px)'
      ]
    ])
  );
}

add_action('customize_register', __NAMESPACE__ . '\customizer');

?>
