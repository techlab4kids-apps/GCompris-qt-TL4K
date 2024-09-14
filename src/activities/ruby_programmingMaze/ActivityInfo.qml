/* GCompris - ActivityInfo.qml
 *
 * SPDX-FileCopyrightText: 2024 Giancarlo Orru' <info@techlab4kids.it>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import GCompris 1.0

ActivityInfo {
  name: "ruby_programmingMaze/Ruby_programmingMaze.qml"
  difficulty: 1
  icon: "ruby_programmingMaze/programmingMaze.svg"
  author: "Giancarlo Orru' &lt;info@techlab4kids.it&gt;"
  //: Activity title
  title: qsTr("Prendi il pesciolino!")
  //: Help title
 description: qsTr("Program the path to help Tux catch the fish.")
  // intro: "Arrange the instructions and traverse the correct path to reach the fish."
  //: Help goal
  goal: qsTr("Learn how to program instructions for moving along a path.")
  //: Help prerequisite
  prerequisite: qsTr("Can read instructions, and think logically to find a path.")
  //: Help manual
  manual: qsTr("Choose the instructions from the menu, and arrange them in order to lead Tux to his goal.") + ("<br><br>") +
          qsTr("<b>Keyboard controls:</b>") + ("<ul><li>") +
          qsTr("Left and Right arrows: navigate inside selected area") + ("</li><li>") +
          qsTr("Up and Down arrows: increase or decrease the loop counter if the loop area is selected") + ("</li><li>") +
          qsTr("Space: select an instruction or append selected instruction in main/procedure/loop area") + ("</li><li>") +
          qsTr("Tab: switch between instructions area and main/procedure/loop area") + ("</li><li>") +
          qsTr("Delete: remove selected instruction from main/procedure/loop area") + ("</li><li>") +
          qsTr("Enter: run the code or reset Tux when it fails to reach the fish") + ("</li></ul><br>") +
          qsTr("To add an instruction in main/procedure/loop area, select it from instructions area, then switch to the main/procedure/loop area and press Space.") + ("<br><br>") +
          qsTr("To modify an instruction in main/procedure/loop area, select it from main/procedure/loop area, then switch to instructions area, choose the new instruction and press Space.")

  credit: ""
  section: "computer coding TL4K"
  createdInVersion: 40100
  levels: "1"
}
