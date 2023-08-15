import * as SQLite from 'expo-sqlite';

db = SQLite.openDatabase('db.db');

function createDatabase() {
    // if table doesn't exist create it
    // students table:
    // id: int - primary key - autoincrement
    // name: string
    // phone: string
    // email: string
    // notes: string

    // classes table:
    // id: int - primary key - autoincrement
    // name: string
    // notes: string

    // students_classes table:
    // id: int - primary key - autoincrement
    // student_id: int - foreign key to students table
    // class_id: int - foreign key to classes table

    // actions table:
    // id: int - primary key - autoincrement
    // student_id: int - foreign key to students table
    // date: string
    // type: int - foreign key to actions_types table
    // notes: string

    // actions_types table:
    // id: int - primary key - autoincrement
    // name: string
    // value: int
    // notes: string

    // settings table:
    // id: int - primary key - autoincrement
    // name: string
    // value: string
    // notes: string

    db.transaction(tx => {
        tx.executeSql(
            'create table if not exists students (id integer primary key not null, name text, phone text, email text, notes text);',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'create table if not exists classes (id integer primary key not null, name text, notes text);',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'create table if not exists students_classes (id integer primary key not null, student_id integer, class_id integer, foreign key (student_id) references students (id), foreign key (class_id) references classes (id));',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'create table if not exists actions_types (id integer primary key not null, name text, value integer, notes text);',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'create table if not exists actions (id integer primary key not null, student_id integer, date text, type integer, notes text, foreign key (student_id) references students (id), foreign key (type) references actions_types (id));',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'create table if not exists settings (id integer primary key not null, name text, value text, notes text);',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
    });    
}

function deleteDatabase(){
    db.transaction(tx => {
        tx.executeSql(
            'drop table students;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'drop table classes;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'drop table students_classes;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'drop table actions;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'drop table actions_types;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'drop table settings;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
    });
}

function resetDatabase(){
    deleteDatabase();
    initDatabase();

    // print action types
    db.transaction(tx => {
        tx.executeSql(
            'select * from actions_types;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
    });
}

function initDatabase(){
    createDatabase();
    // add actions_types "Participated: 1, Absent: 0, Late: -1"
    db.transaction(tx => {
        tx.executeSql(
            'insert into actions_types (name, value) values ("Participated", "1");',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'insert into actions_types (name, value) values ("Absent", "0");',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'insert into actions_types (name, value) values ("Late", "-1");',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
    });
}

function clearDatabase(){
    db.transaction(tx => {
        tx.executeSql(
            'delete from students;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'delete from classes;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'delete from students_classes;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'delete from actions;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'delete from actions_types;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
        tx.executeSql(
            'delete from settings;',
            [],
            (_, { rows }) => console.log(rows),
            (_, error) => console.log(error)
        );
    });
}

export { initDatabase, resetDatabase, deleteDatabase, clearDatabase };