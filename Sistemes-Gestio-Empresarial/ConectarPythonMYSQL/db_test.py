import mysql.connector
from mysql.connector import Error

DB_CONFIG = {
    "host": "localhost",
    "user": "alumne",         # o 'root' si no has creat usuari específic
    "password": "alumne123",  # canvia-ho!
    "database": "erp_demo",
    "port": 3306,
}

try:
    conn = mysql.connector.connect(**DB_CONFIG)
    cur = conn.cursor()
    cur.execute("SELECT id, nom, email, telefon, ciutat FROM client ORDER BY id;")
    for fila in cur.fetchall():
        print(fila)
    cur.close()
    conn.close()
except Error as e:
    print("[ERROR MySQL]", e)
