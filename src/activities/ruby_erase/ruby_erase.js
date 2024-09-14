/* GCompris - ruby_erase.js
 *
 * SPDX-FileCopyrightText: 2024 Giancarlo Orru' <info@techlab4kids.it>
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 */
.pragma library
.import QtQuick 2.12 as Quick
.import GCompris 1.0 as GCompris //for ApplicationInfo
.import "qrc:/gcompris/src/core/core.js" as Core

var url = "qrc:/gcompris/src/activities/ruby_erase/resource/"

//array of array, each with filename, horizontalAlignment and verticalAlignment
var backgroundImages = [
    ["ruby-cap-01-600x337.png", "center", "center"],
    ["ruby-cap-02-600x337.png", "center", "center"],
    ["ruby-cap-03-600x338.png", "center", "center"],
    ["ruby-cap-04-600x338.png", "center", "center"],
    ["ruby-cap-05-600x338.png", "center", "center"],
    ["ruby-cap-06-600x338.png", "center", "center"],
    ["ruby-cap-07-600x337.png", "center", "center"],
    ["ruby-cap-08-600x337.png", "center", "center"],
    ["ruby-cap-09-600x338.png", "center", "center"],
    ["ruby-cap-10-600x337.png", "center", "center"]
]

var blockImages = [
    url + "transparent_square.svg",
    url + "transparent_square_yellow.svg",
    url + "transparent_square_green.svg"
]

var currentImage
var main
var items
var type

// The counter of created blocks object
var createdBlocks
var killedBlocks

var numberOfLevel = 6
var imgIndex

function start(main_, items_, type_) {
    main = main_
    items = items_
    type = type_
    items.currentLevel = Core.getInitialLevel(numberOfLevel)
    items_.currentSubLevel = 0
    currentImage = 0
    imgIndex = 0
    initLevel()
}

function stop() {
}

function initLevel() {
    items.blocks.clear()
    imgIndex++
    currentImage++
    if(currentImage >= backgroundImages.length) {
        currentImage = 0
    }
    items.background.source = url + backgroundImages[currentImage][0]
    items.background.alignBackground()
    createdBlocks = 0
    killedBlocks = 0
    var nbx = Math.min((items.currentLevel % 2 * 3) + 5, main.width / (10 * GCompris.ApplicationInfo.ratio));
    var nby = Math.min((items.currentLevel % 2 * 3) + 5, main.height / (10 * GCompris.ApplicationInfo.ratio));
    var data

        for(var x = 0;  x < nbx; ++x) {
            for(var y = 0;  y < nby; ++y) {
                data = {
                    'nx': nbx, 'ny': nby, 'a': x, 'b': y,
                    'op': 1.0, 'MAIN': main, 'BAR': items.bar,
                    'img': blockImages[imgIndex % blockImages.length]
                }
                items.blocks.append(data)
                createdBlocks++
            }
        }
}

function nextLevel() {
    items.score.stopWinAnimation();
    items.currentLevel = Core.getNextLevel(items.currentLevel, numberOfLevel);
    items.currentSubLevel = 0;
    initLevel();
}

function nextSubLevel() {
    if( items.currentSubLevel >= items.nbSubLevel) {
        items.bonus.good("flower")
        return;
    }
    initLevel();
}

function previousLevel() {
    items.score.stopWinAnimation();
    items.currentLevel = Core.getPreviousLevel(items.currentLevel, numberOfLevel);
    items.currentSubLevel = 0;
    initLevel();
}

function blockKilled() {
    if(++killedBlocks === createdBlocks) {
        items.currentSubLevel += 1
        items.winSound.play()
        items.score.playWinAnimation()
        if(items.mode === 2) {
            items.okButton.levelFinished = true
        }
    }
}

function getFirstImage() {
    backgroundImages = Core.shuffle(backgroundImages)
    return backgroundImages[0][0]
}
