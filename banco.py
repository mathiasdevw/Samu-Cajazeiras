import sqlite3

# Conecta ao banco
conn = sqlite3.connect("samu.db")
cursor = conn.cursor()

# Lê o arquivo SQL
with open("banco.sql", "r", encoding="utf-8") as f:
    sql_script = f.read()

# Executa o script
cursor.executescript(sql_script)
conn.commit()
conn.close()

print("Banco criado e populado com sucesso!")
