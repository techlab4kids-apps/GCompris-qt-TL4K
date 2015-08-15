/* GCompris - chess_2players.qml
 *
 * Copyright (C) 2015 Bruno Coudoin <bruno.coudoin@gcompris.net>
 *
 * Authors:
 *   Bruno Coudoin <bruno.coudoin@gcompris.net> (GTK+ version)
 *   Bruno Coudoin <bruno.coudoin@gcompris.net> (Qt Quick port)
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program; if not, see <http://www.gnu.org/licenses/>.
 */
import QtQuick 2.1

import "../../core"
import "../chess"

Chess {
    twoPlayers: false
    fen: [
        ["checkmate in 1", "8/8/8/8/8/6K1/4Q3/6k1 w - - 21 61"],
        ["mate in 1", "5k2/8/5K2/4Q3/5P2/8/8/8 w - - 3 61"],
        ["zugzwang", "8/8/p1p5/1p5p/1P5p/8/PPP2K1p/4R1rk w - - 0 1"],
        ["earlyish", "rnq1nrk1/pp3pbp/6p1/3p4/3P4/5N2/PP2BPPP/R1BQK2R w KQ -"],
        ["checkmate in 2", "4kb2/3r1p2/2R3p1/6B1/p6P/P3p1P1/P7/5K2 w - - 0 36"],
        ["“leonid's position”", "q2k2q1/2nqn2b/1n1P1n1b/2rnr2Q/1NQ1QN1Q/3Q3B/2RQR2B/Q2K2Q1 w - -"],
        ["sufficient material - knight", "8/7K/8/5n2/8/8/N7/7k w - - 40 40"],
        ["sufficient material - opposing bishops", "8/6BK/7B/6b1/7B/8/B7/7k w - - 40 40"],
        ["sufficient material", "8/7K/8/8/7B/8/N7/7k w - - 40 40"]
    ]
}
