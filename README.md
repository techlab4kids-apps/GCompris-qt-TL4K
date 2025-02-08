# [GCompris](https://gcompris.net)

<img src="src/core/resource/gcompris-logo-full.svg"  width="320" height="114" alt="GCompris logo">

## Presentation
[GCompris](https://gcompris.net) is a high quality educational software suite,
including a large number of activities for children aged 2 to 10.
Some of the activities are game orientated, but still educational.

Currently GCompris offers more than 100 activities, and more are being
developed. GCompris is free software, it means that you can use it as you
wish, adapt it to your own needs, improve it, and, most importantly, share it
with everyone.

This version is a full rewrite of GCompris using the QtQuick technology. It is
developed within the [KDE community](https://www.kde.org) and is part of the
[GNU Project](https://www.gnu.org/education/edu-software-gcompris.en.html).

## Goal

There are many simple activities dedicated to children on any platforms,
desktops, web and tablets. When they exist, they are hard to find and request
the teacher or parent to manage a lot of independant small tools.

GCompris is an educational suite of activities, all accessible from a
single unified user interface.

## How

GCompris is designed in a way that it is easy to add new activities to it. The
activity is free to implement the game scheme it wants. The status bar is a
common facility provided to the activities.

GCompris provides some tools for teachers/educators to easily add activities.

## About You

You can help by:

* [Creating new activities](https://invent.kde.org/education/gcompris/-/wikis/Developers-corner/Development-process).
* [Translating GCompris](https://invent.kde.org/education/gcompris/-/wikis/Developers-corner/How-to-translate).
* [Recording voices](https://invent.kde.org/education/gcompris/-/wikis/Developers-corner/How-to-translate/Voice-translation).
* [Just giving your ideas](https://invent.kde.org/education/gcompris/-/wikis/Developers-corner/Ideas-for-activities).

Get more information on our [developer's wiki](https://invent.kde.org/education/gcompris/-/wikis/Developers-corner/).

Bug reports should be created in the [KDE bug tracker](https://bugs.kde.org/enter_bug.cgi?product=gcompris).

## Licence

GCompris is free software released under the [AGPL v3](https://www.gnu.org/licenses/agpl-3.0.html). All the internal code is under [GPL V3+](https://www.gnu.org/licenses/gpl-3.0.html) but we use a library for [analog electricity activity](https://github.com/edx/edx-platform/blob/master/common/lib/xmodule/xmodule/js/src/capa/schematic.js) under AGPL 3.0 causing the whole software to be licenced under it.


# TL4K

## Build

export PATH=/home/kubuntu/Qt/Tools/CMake/bin/:$PATH
make clean && cmake -DBUILD_STANDALONE=ON ../GCompris-qt && make

cmake ..  -DQt6_DIR=/home/kubuntu/Qt/6.7.2/gcc_64 -DCMAKE_PREFIX_PATH=/home/kubuntu/Qt/6.7.2/gcc_64/lib/cmake -DCMAKE_MODULE_PATH=/home/kubuntu/Qt/6.7.2/gcc_64/lib/cmake -DQML_BOX2D_MODULE=disabled

### QT


### Command Line
https://gcompris.net/wiki/Qt_Quick_development_process

cmake -DBUILD_STANDALONE=ON ../GCompris-qt && make

## Deploy

mkdir -p AppDir/usr/bin
cp bin/gcompris-qt AppDir/usr/bin/

cd /home/kubuntu/Develop/GCompris-qt-build/

LD_LIBRARY_PATH=/home/kubuntu/Qt/6.7.2/gcc_64/lib QMAKE=/home/kubuntu/Qt/6.7.2/gcc_64/bin/qmake QML_SOURCES_PATHS=/home/kubuntu/Develop/GCompris-qt/src/ ./linuxdeploy-x86_64.AppImage --appdir AppDir --output appimage --plugin qt
