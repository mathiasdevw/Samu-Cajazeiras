
CREATE TABLE usuarios (
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_completo TEXT NOT NULL,
    login TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    cargo TEXT CHECK (cargo IN ('TARM', 'Médico', 'RO', 'Admin')) NOT NULL,
    ativo INTEGER DEFAULT 1,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: ambulancias
CREATE TABLE ambulancias (
    id_ambulancia INTEGER PRIMARY KEY AUTOINCREMENT,
    automovel TEXT NOT NULL,
    cidade_cadastrada TEXT NOT NULL,
    tipo TEXT CHECK (tipo IN ('Básica', 'Avançada')) NOT NULL,
    ativa INTEGER DEFAULT 1,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: tabela_listagem
CREATE TABLE tabela_listagem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria TEXT NOT NULL,
    descricao TEXT NOT NULL,
    ativo INTEGER DEFAULT 1,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: ficha_tharm
CREATE TABLE ficha_tharm (
    id_ficha INTEGER PRIMARY KEY AUTOINCREMENT,
    solicitante TEXT,
    paciente TEXT,
    sexo TEXT CHECK (sexo IN ('F', 'M')),
    idade INTEGER CHECK (idade BETWEEN 0 AND 125),
    telefone TEXT,
    cidade TEXT,
    bairro TEXT,
    endereco TEXT,
    origem TEXT,
    motivo TEXT,
    referencia TEXT,
    obs TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario_criador INTEGER REFERENCES usuarios(id_usuario)
);

-- TABELA: ficha_operacional
CREATE TABLE ficha_operacional (
    id_ficha INTEGER PRIMARY KEY REFERENCES ficha_tharm(id_ficha) ON DELETE CASCADE,

    -- VTR / Ambulância
    horario_acionado TIMESTAMP,
    saida_base TIMESTAMP,
    chegada_local TIMESTAMP,
    saida_local TIMESTAMP,
    chegada_destino TIMESTAMP,
    saida_destino TIMESTAMP,
    chegada_base TIMESTAMP,

    -- Avaliação Médica
    classificacao INTEGER REFERENCES tabela_listagem(id),
    tipo INTEGER REFERENCES tabela_listagem(id),
    avaliacao_medica TEXT,
    estado INTEGER REFERENCES tabela_listagem(id),
    pulso INTEGER REFERENCES tabela_listagem(id),
    coloracao_pele INTEGER REFERENCES tabela_listagem(id),
    respiracao INTEGER REFERENCES tabela_listagem(id),
    pa TEXT,
    sato2 TEXT,
    fr TEXT,
    glasgow TEXT,
    temperatura TEXT,
    glicemia TEXT,
    escore_trauma TEXT,

    -- Conduta
    conduta_realizada TEXT,
    diagnostico_cid INTEGER REFERENCES tabela_listagem(id),
    destino INTEGER REFERENCES tabela_listagem(id),

    -- Controle de atendimento
    id_usuario_medico INTEGER REFERENCES usuarios(id_usuario),
    id_usuario_ro INTEGER REFERENCES usuarios(id_usuario),
    status_ficha TEXT DEFAULT 'Em preenchimento',
    pode_ser_excluida INTEGER DEFAULT 0
);
