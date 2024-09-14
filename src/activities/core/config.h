/* GCompris - config.h
 *
 * SPDX-FileCopyrightText: 2015 Bruno Coudoin <bruno.coudoin@gcompris.net>
 *
 * Authors:
 *   Bruno Coudoin <bruno.coudoin@gcompris.net>
 *
 *   SPDX-License-Identifier: GPL-3.0-or-later
 */
#ifndef GCOMPRIS_CONFIG_H
#define GCOMPRIS_CONFIG_H

#include <qglobal.h>
/* Version number of package (string) */
#define VERSION ""
/* Version number of package (integer) */
#define VERSION_CODE 

/* Folder where rccs and translations are installed */
#ifdef  Q_OS_MACX
#define GCOMPRIS_DATA_FOLDER "../Resources"
#elif  Q_OS_IOS
#define GCOMPRIS_DATA_FOLDER "."
#else
#define GCOMPRIS_DATA_FOLDER "../"
#endif
/* GCompris for android, gcompris-qt for others */
#define GCOMPRIS_APPLICATION_NAME ""
/* Compressed audio format */
#define COMPRESSED_AUDIO ""
/* Download Allowed */
#define DOWNLOAD_ALLOWED ""
/* Date at which GCompris has been built */
#define BUILD_DATE ""

/* Defines the renderer backend: Qt software renderer (requires Qt 5.8), openGL or default one */
#define GRAPHICAL_RENDERER ""

/* #undef WITH_RCC */
#endif // GCOMPRIS_CONFIG_H
