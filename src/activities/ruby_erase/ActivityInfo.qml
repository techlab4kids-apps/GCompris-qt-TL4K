/* GCompris - ActivityInfo.qml
 *
 * SPDX-FileCopyrightText: 2024 Giancarlo Orru' <info@techlab4kids.it>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import GCompris 1.0
import "qrc:/gcompris/src/activities/erase"

ActivityInfo {
  name: "ruby_erase/Ruby_erase.qml"
  difficulty: 1
  icon: "ruby_erase/ruby_erase.svg"
  author: "Giancarlo Orru' &lt;info@techlab4kids.it&gt;"
  //: Activity title
  title: qsTr("Il mondo di Ruby")
  //: Help title
  description: qsTr("")
  //intro: "put here in comment the text for the intro voice"
  //: Help goal
  goal: qsTr("Muovi il mouse per scoprire l'immagine")
  //: Help prerequisite
  prerequisite: qsTr("Mouse-manipulation.")
  //: Help manual
  manual: qsTr("")
  credit: ""
  section: "computer mouse TL4K"
  createdInVersion: 40100
}
