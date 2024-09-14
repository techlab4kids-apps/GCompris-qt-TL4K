/* GCompris - clickgame.js
 *
 * SPDX-FileCopyrightText: 2014 Bruno Coudoin <bruno.coudoin@gcompris.net>
 *
 * Authors:
 *   Bruno Coudoin <bruno.coudoin@gcompris.net> (GTK+ version)
 *   Bruno Coudoin <bruno.coudoin@gcompris.net> (Qt Quick port)
 *   Timothée Giet <animtim@gmail.com> (animation refactoring)
 *
 *   SPDX-License-Identifier: GPL-3.0-or-later
 */
.pragma library
.import QtQuick 2.12 as Quick
.import GCompris 1.0 as GCompris
.import "qrc:/gcompris/src/core/core.js" as Core

var fishes = [
            {
              "imgName": "blueking2.webp",
              "nbFrame": 1,
              "width": 169,
              "height": 176
            },

        ]

var levelProperty = [
            {
                "nbFish": 5,
                "minDuration": 2000
            },
            {
                "nbFish": 7,
                "minDuration": 1500
            },
            {
                "nbFish": 10,
                "minDuration": 1000
            },
            {
                "nbFish": 12,
                "minDuration": 800
            },
            {
                "nbFish": 15,
                "minDuration": 600
            },
            {
                "nbFish": 18,
                "minDuration": 400
            }
        ]
var currentImageId = 0
var items
var activity
var background
var bar
var bonus

var isActivityStopped = false

// The array of created fishes object
var createdFishes
var component = Qt.createComponent("qrc:/gcompris/src/activities/ruby_clickgame/Fish.qml");

function start(activity_, background_, bar_, bonus_, items_) {
    activity = activity_
    background = background_
    bar = bar_
    bonus = bonus_
    items = items_
    items.currentLevel = Core.getInitialLevel(levelProperty.length);
    isActivityStopped = false
    initLevel()
    items.killedFishes = 0
}

function stop() {
    isActivityStopped = true
    destroyFishes();
}

function initLevel() {
    if(isActivityStopped)
        return;

    destroyFishes();
    background.source = "qrc:/gcompris/src/activities/ruby_clickgame/resource/sea" +
            (items.currentLevel + 1) + ".webp"
    var nbFish = levelProperty[items.currentLevel].nbFish
    createdFishes = new Array(nbFish)
    for(var i = 0;  i < nbFish; ++i) {
         createdFishes[i] = createFish(levelProperty[items.currentLevel].minDuration)
    }
    items.score.numberOfSubLevels = nbFish
}

function nextLevel() {
    items.currentLevel = Core.getNextLevel(items.currentLevel, levelProperty.length);
    initLevel();
}

function previousLevel() {
    items.currentLevel = Core.getPreviousLevel(items.currentLevel, levelProperty.length);
    initLevel();
}

function createFish(minDuration) {
    var fishSource = fishes[Math.floor(Math.random() * fishes.length)]
    var minY = items.score.y + items.score.height
    var maxY = bar.y - fishSource.height - bar.height
    var maxX = background.width - fishSource.width
    var fish = component.createObject(
                background,
                {
                    "activity": activity,
                    "background": background,
                    "bar": bar,
                    "y": (Math.random() * (maxY - minY + 1)) + minY,
                    "x": (Math.random() * (maxX + 1)),
                    "width": fishSource.width * 1.1 * GCompris.ApplicationInfo.ratio,
                    "height": fishSource.height * 1.1 * GCompris.ApplicationInfo.ratio,
                    "source": "qrc:/gcompris/src/activities/ruby_clickgame/resource/" +
                              fishSource.imgName,
                    "frameCount": fishSource.nbFrame,
                    "xSpeed": (background.width + fishSource.width * 1.1 * GCompris.ApplicationInfo.ratio) / (minDuration + Math.floor(Math.random() * 500)),
                    "ySpeed": (background.height + fishSource.height * 1.1 * GCompris.ApplicationInfo.ratio) / (minDuration * 2 + Math.floor(Math.random() * 500))
                });
    if (fish === null) {
        // Error Handling
        console.log("Error creating object");
    }
    else
        fish.restart()
    return fish;
}

function destroyFishes() {
    if (createdFishes) {
        for(var i = 0;  i < createdFishes.length; ++i) {
            createdFishes[i].destroy()
        }
        createdFishes.length = 0
    }
    items.killedFishes = 0
}

function fishKilled() {
    if(++items.killedFishes === createdFishes.length) {
        bonus.good("ruby")
    }
    items.score.playWinAnimation();
}

