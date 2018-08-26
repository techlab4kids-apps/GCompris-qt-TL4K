/* GCompris - FileTest.cpp
 *
 * Copyright (C) 2018 Himanshu Vishwakarma <himvish997@gmail.com>
 * GCompris  (C) 2018 GCompris Developers  <gcompris-devel@kde.org>
 *
 * Authors:
 *   Himanshu Vishwakarma <himvish997@gmail.com>
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

/* This file is used for the unit tests */

#include <QtTest>
#include <QObject>
#include <QFile>

#include "src/core/File.h"

class CoreFileTest : public QObject
{
    Q_OBJECT
private slots:
    void cleanup();
    void FileExistsTest();
    void ReadWriteErrorsTest();
    void ReadWriteErrorsTest_data();
    void ReadWriteTest();
    void NameTest();
};

static const QString tempFilename = QStringLiteral("./dummy_test_files.txt");
static const QString fakeFilename = QStringLiteral("-_/fezagvvx&V/d;-ùlc");

void CoreFileTest::FileExistsTest()
{
    QFile tempFile(tempFilename);
    // open in write mode to create the file if does not exist
    tempFile.open(QIODevice::ReadWrite);
    tempFile.close();

    QVERIFY(File::exists(tempFilename));
}

void CoreFileTest::ReadWriteErrorsTest_data()
{
    QTest::addColumn<QString>("filename");
    QTest::addColumn<QString>("readError");
    QTest::addColumn<QString>("writeError");
    QTest::newRow("empty file") << QStringLiteral("")
                                << QStringLiteral("source is empty")
                                << QStringLiteral("source is empty");

    QTest::newRow("non existing file") << fakeFilename
                                       << QStringLiteral("Unable to open the file")
                                       << QStringLiteral("could not open file ") + fakeFilename;
}

void CoreFileTest::ReadWriteErrorsTest()
{
    QFETCH(QString, filename);
    QFETCH(QString, readError);
    QFETCH(QString, writeError);

    const QString fileContent = QStringLiteral("this is going to test the class File in the core");

    File file;
    file.setName(filename);
    QSignalSpy spyError(&file, &File::error);
    QVERIFY(spyError.isValid());
    QVERIFY(spyError.count() == 0);
    // we can't read
    QVERIFY(file.read().isEmpty());
    QVERIFY(spyError.count() == 1);
    QString error = qvariant_cast<QString>(spyError.at(0).at(0));
    QCOMPARE(error, readError);
    // we can't write
    QVERIFY(!file.write(fileContent));
    QVERIFY(spyError.count() == 2);
    error = qvariant_cast<QString>(spyError.at(1).at(0));
    QCOMPARE(error, writeError);
}

void CoreFileTest::ReadWriteTest()
{
    QFile tempFile(tempFilename);
    // open in write mode to create the file if does not exist
    tempFile.open(QIODevice::ReadWrite);
    tempFile.close();

    File file;
    const QString fileContent = QStringLiteral("this is going to test the class File in the core");
    // normal use case, file exists
    QVERIFY(file.write(fileContent, tempFilename));
    QCOMPARE(file.read(), fileContent);
}

void CoreFileTest::NameTest()
{
    File file;
    QSignalSpy spyName(&file, &File::nameChanged);
    QVERIFY(spyName.isValid());
    QVERIFY(spyName.count() == 0);
    file.setName(tempFilename);
    QVERIFY(spyName.count() == 1);
    QCOMPARE(file.name(), tempFilename);
    // test sanitizeUrl
    const QString sameNameUnsanitized = QStringLiteral("file://")+tempFilename;
    file.setName(sameNameUnsanitized);
    // no update triggered as same name after sanitization
    QVERIFY(spyName.count() == 1);
    QCOMPARE(file.name(), tempFilename);
}

void CoreFileTest::cleanup()
{
    QFile::remove("./dummy_test_files.txt");
}

QTEST_MAIN(CoreFileTest)
#include "FileTest.moc"
