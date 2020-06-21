<?php

/*
 * sm2 is a Flarum extension created by Billy Wilcosky.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * For instructions, please view the README file.
 */

use Flarum\Extend;
use Flarum\Frontend\Document;

return [
    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
            $document->head[] = '<script src="../assets/extensions/zerosonesfun-sm2/soundmanager2.js"></script><script src="../assets/extensions/zerosonesfun-sm2/inlineplayer.js"></script><link rel="stylesheet" type="text/css" href="../assets/extensions/zerosonesfun-sm2/inlineplayer.css"><script src="../assets/extensions/zerosonesfun-sm2/reboot.js"></script>';
        })
];
