<?php

get_header();

if (is_home() || is_front_page()) {
  get_template_part('template-parts/home');
}
else {
  get_template_part('template-parts/page');
}

get_footer();

?>
