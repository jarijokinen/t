<?php if (is_home() || is_front_page()): ?>
  <h1 class="header-brand"><?php bloginfo('name'); ?></h1>
<?php else: ?>
  <a href="/" class="header-brand"><?php bloginfo('name'); ?></a>
<?php endif; ?>
