<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Extend;
use Flarum\Frontend\Document;

return [
    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
            $document->head[] = '<script src="assets/soundmanager2.min.js"></script><script src="assets/inlineplayer.js"></script><link rel="stylesheet" type="text/css" href="assets/inlineplayer.css">';
        })
];
