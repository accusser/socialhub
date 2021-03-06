<?php
/**
 * Update From Grid an Item
 *
 * @package socialhub
 * @subpackage processors
 */
require_once(dirname(__FILE__) . '/update.class.php');

class SocialHubItemUpdateFromGridProcessor extends SocialHubItemUpdateProcessor
{
    public function initialize()
    {
        $data = $this->getProperty('data');
        if (empty($data)) {
            return $this->modx->lexicon('invalid_data');
        }

        $data = $this->modx->fromJSON($data);
        if (empty($data)) {
            return $this->modx->lexicon('invalid_data');
        }

        $this->setProperties($data);
        $this->unsetProperty('data');

        return parent::initialize();
    }
}

return 'SocialHubItemUpdateFromGridProcessor';
