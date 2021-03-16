<?php namespace <%= slug %>; ?>

<header class="header">
  <div class="container <?php 
    switch (get_theme_mod(__NAMESPACE__ . '_header_width')) {
      case 'full':
        echo 'container-full';
        break;
      case 'narrow':
        echo 'container-narrow';
        break;
    }
  ?>">
    <?php get_template_part('template-parts/header/brand'); ?>
    <?php get_template_part('template-parts/header/nav'); ?>
  </div>
</header>
