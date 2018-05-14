<?php

namespace Drupal\teaminfo\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\taxonomy\Entity\Term;

class TeamInfoController {

  public function content() {
    $term = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->load($tid);
    $name = $term->label();
  }

}

