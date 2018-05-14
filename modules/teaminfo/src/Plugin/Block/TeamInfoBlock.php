<?php

namespace Drupal\teaminfo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a block with a simple text.
 *
 * @Block(
 *   id = "block_teaminfo",
 *   admin_label = @Translation("Team Info"),
 * )
 */
class TeamInfoBlock extends BlockBase {
    // *
    //  * @param $taxonomyTermArr
    //  * @return array
  
    public function build() {
      // return $term_name;
    }
    // function _taxonomy_tid_and_taxonomy_terms_parents_on_entity($taxonomyFieldArr) {
    // //-- Get tid number and parent tid number
    //   $arrayResult = array();
    //   foreach ($taxonomyTermArr as $taxonomyTid) {
    //     $term = \Drupal\taxonomy\Entity\Term::load($taxonomyTid);
    //     $storage = \Drupal::service('entity_type.manager')
    //       ->getStorage('taxonomy_term');
    //     $parents = $storage->loadParents($term->id());
    //     $termName = $term->id();
    //     $arrayResult[$termName]['parent_tid'] = array_keys($parents);
    //     $arrayResult[$termName]['tid'] = $term->id();
    //     $arrayResult[$termName]['name'] = $term->getName();
    //   }
    //   return $arrayResult;
    // }
    // public function taxonomy_term_load($tid) {
    //   if (!is_numeric($tid)) {
    //     return NULL;
    //   }
    //   return Term::load($tid);
    // }
}