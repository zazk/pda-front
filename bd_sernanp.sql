
CREATE SCHEMA pda;

SET statement_timeout
= 0;
SET lock_timeout
= 0;
SET client_encoding
= 'UTF8';
SET standard_conforming_strings
= on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies
= false;
SET client_min_messages
= warning;

--
-- TOC entry 1 (class 3079 OID 11750)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION
IF NOT EXISTS plpgsql
WITH SCHEMA pg_catalog;


--
-- TOC entry 2054 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace
= '';

SET default_with_oids
= false;

--
-- TOC entry 179 (class 1259 OID 16434)
-- Name: t_categoria; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_categoria
(
  srl_cod_categoria integer NOT NULL,
  var_nombre character varying(50) NOT NULL
);


ALTER TABLE pda.t_categoria OWNER TO postgres;

--
-- TOC entry 2055 (class 0 OID 0)
-- Dependencies: 179
-- Name: COLUMN t_categoria.srl_cod_categoria; Type: COMMENT; Schema: pda; Owner: postgres
--

COMMENT ON COLUMN pda.t_categoria.srl_cod_categoria IS 'Codigo identificador de la categoria';


--
-- TOC entry 178 (class 1259 OID 16432)
-- Name: t_categoria_srl_cod_categoria_seq; Type: SEQUENCE; Schema: pda; Owner: postgres
--

CREATE SEQUENCE pda.t_categoria_srl_cod_categoria_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pda.t_categoria_srl_cod_categoria_seq OWNER TO postgres;

--
-- TOC entry 2056 (class 0 OID 0)
-- Dependencies: 178
-- Name: t_categoria_srl_cod_categoria_seq; Type: SEQUENCE OWNED BY; Schema: pda; Owner: postgres
--

ALTER SEQUENCE pda.t_categoria_srl_cod_categoria_seq
OWNED BY pda.t_categoria.srl_cod_categoria;


--
-- TOC entry 189 (class 1259 OID 16498)
-- Name: t_grupo; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_grupo
(
  srl_cod_grupo integer NOT NULL,
  var_cod_grupo character varying(32),
  var_cod_operador character varying(20) NOT NULL,
  srl_cod_ruta integer NOT NULL,
  dte_fec_programada date,
  dte_fec_visita date,
  int_nro_visitante integer NOT NULL,
  int_nro_inasistente integer,
  num_costo double precision,
  int_estado integer,
  var_documento character varying(200),
  txt_motivoobservado text,
  dte_fec_observado date,
  var_usuario character varying(30),
  var_usuariomodificacion character varying(30),
  dte_fec_modificacion date
);


ALTER TABLE pda.t_grupo OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 16496)
-- Name: t_grupo_srl_cod_grupo_seq; Type: SEQUENCE; Schema: pda; Owner: postgres
--

CREATE SEQUENCE pda.t_grupo_srl_cod_grupo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pda.t_grupo_srl_cod_grupo_seq OWNER TO postgres;

--
-- TOC entry 2057 (class 0 OID 0)
-- Dependencies: 188
-- Name: t_grupo_srl_cod_grupo_seq; Type: SEQUENCE OWNED BY; Schema: pda; Owner: postgres
--

ALTER SEQUENCE pda.t_grupo_srl_cod_grupo_seq
OWNED BY pda.t_grupo.srl_cod_grupo;


--
-- TOC entry 190 (class 1259 OID 16517)
-- Name: t_grupo_visitante; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_grupo_visitante
(
  srl_cod_grupo integer,
  srl_cod_visitante integer,
  bol_ingreso boolean
);


ALTER TABLE pda.t_grupo_visitante OWNER TO postgres;

--
-- TOC entry 174 (class 1259 OID 16410)
-- Name: t_noticia; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_noticia
(
  srl_cod_noticia integer NOT NULL,
  var_titulo character varying(100) NOT NULL,
  txt_contenido text,
  tsp_fec_publicacion date NOT NULL,
  bol_activo boolean,
  var_usuario character varying(30)
);


ALTER TABLE pda.t_noticia OWNER TO postgres;

--
-- TOC entry 173 (class 1259 OID 16408)
-- Name: t_noticia_srl_cod_noticia_seq; Type: SEQUENCE; Schema: pda; Owner: postgres
--

CREATE SEQUENCE pda.t_noticia_srl_cod_noticia_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pda.t_noticia_srl_cod_noticia_seq OWNER TO postgres;

--
-- TOC entry 2058 (class 0 OID 0)
-- Dependencies: 173
-- Name: t_noticia_srl_cod_noticia_seq; Type: SEQUENCE OWNED BY; Schema: pda; Owner: postgres
--

ALTER SEQUENCE pda.t_noticia_srl_cod_noticia_seq
OWNED BY pda.t_noticia.srl_cod_noticia;


--
-- TOC entry 177 (class 1259 OID 16427)
-- Name: t_operador; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_operador
(
  var_cod_operador character varying(20) NOT NULL,
  var_ruc character varying(11) NOT NULL,
  var_razonsocial character varying(50) NOT NULL,
  var_direccion character varying(150),
  var_telefono character varying(20),
  var_email character varying(50),
  var_web character varying(100),
  num_saldo double precision,
  bol_estado boolean
);


ALTER TABLE pda.t_operador OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 16458)
-- Name: t_pago; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_pago
(
  srl_cod_pago integer NOT NULL,
  var_cod_operador character varying(30) NOT NULL,
  var_operacion character varying(30) NOT NULL,
  num_monto integer NOT NULL,
  dte_fec_abono timestamp,
  dte_fec_validacion timestamp,
  var_comprobante character varying(200) NOT NULL,
  int_estado integer,
  txt_motivorechazo text
);


ALTER TABLE pda.t_pago OWNER TO postgres;

--
-- TOC entry 2059 (class 0 OID 0)
-- Dependencies: 185
-- Name: COLUMN t_pago.var_comprobante; Type: COMMENT; Schema: pda; Owner: postgres
--

COMMENT ON COLUMN pda.t_pago.var_comprobante IS 'Ruta donde se almacena el voucher de pago';


--
-- TOC entry 2060 (class 0 OID 0)
-- Dependencies: 185
-- Name: COLUMN t_pago.int_estado; Type: COMMENT; Schema: pda; Owner: postgres
--

COMMENT ON COLUMN pda.t_pago.int_estado IS 'Estado del comprobante';


--
-- TOC entry 2061 (class 0 OID 0)
-- Dependencies: 185
-- Name: COLUMN t_pago.txt_motivorechazo; Type: COMMENT; Schema: pda; Owner: postgres
--

COMMENT ON COLUMN pda.t_pago.txt_motivorechazo IS 'Motivo del rechazo en caso se de.';


--
-- TOC entry 184 (class 1259 OID 16456)
-- Name: t_pago_srl_cod_pago_seq; Type: SEQUENCE; Schema: pda; Owner: postgres
--

CREATE SEQUENCE pda.t_pago_srl_cod_pago_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pda.t_pago_srl_cod_pago_seq OWNER TO postgres;

--
-- TOC entry 2062 (class 0 OID 0)
-- Dependencies: 184
-- Name: t_pago_srl_cod_pago_seq; Type: SEQUENCE OWNED BY; Schema: pda; Owner: postgres
--

ALTER SEQUENCE pda.t_pago_srl_cod_pago_seq
OWNED BY pda.t_pago.srl_cod_pago;


--
-- TOC entry 183 (class 1259 OID 16450)
-- Name: t_pais; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_pais
(
  srl_cod_pais integer NOT NULL,
  var_nombre character varying(64)
);


ALTER TABLE pda.t_pais OWNER TO postgres;

--
-- TOC entry 182 (class 1259 OID 16448)
-- Name: t_pais_srl_cod_pais_seq; Type: SEQUENCE; Schema: pda; Owner: postgres
--

CREATE SEQUENCE pda.t_pais_srl_cod_pais_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pda.t_pais_srl_cod_pais_seq OWNER TO postgres;

--
-- TOC entry 2063 (class 0 OID 0)
-- Dependencies: 182
-- Name: t_pais_srl_cod_pais_seq; Type: SEQUENCE OWNED BY; Schema: pda; Owner: postgres
--

ALTER SEQUENCE pda.t_pais_srl_cod_pais_seq
OWNED BY pda.t_pais.srl_cod_pais;


--
-- TOC entry 172 (class 1259 OID 16402)
-- Name: t_ruta; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_ruta
(
  srl_cod_ruta integer NOT NULL,
  var_nombre character varying(50) NOT NULL,
  bol_estado boolean NOT NULL,
  num_costo_visitante double precision
);


ALTER TABLE pda.t_ruta OWNER TO postgres;

--
-- TOC entry 171 (class 1259 OID 16400)
-- Name: t_ruta_srl_cod_ruta_seq; Type: SEQUENCE; Schema: pda; Owner: postgres
--

CREATE SEQUENCE pda.t_ruta_srl_cod_ruta_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pda.t_ruta_srl_cod_ruta_seq OWNER TO postgres;

--
-- TOC entry 2064 (class 0 OID 0)
-- Dependencies: 171
-- Name: t_ruta_srl_cod_ruta_seq; Type: SEQUENCE OWNED BY; Schema: pda; Owner: postgres
--

ALTER SEQUENCE pda.t_ruta_srl_cod_ruta_seq
OWNED BY pda.t_ruta.srl_cod_ruta;


--
-- TOC entry 181 (class 1259 OID 16442)
-- Name: t_tip_documento; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_tip_documento
(
  srl_cod_documento integer NOT NULL,
  var_nombre character varying(20) NOT NULL
);


ALTER TABLE pda.t_tip_documento OWNER TO postgres;

--
-- TOC entry 180 (class 1259 OID 16440)
-- Name: t_tip_documento_srl_cod_documento_seq; Type: SEQUENCE; Schema: pda; Owner: postgres
--

CREATE SEQUENCE pda.t_tip_documento_srl_cod_documento_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pda.t_tip_documento_srl_cod_documento_seq OWNER TO postgres;

--
-- TOC entry 2065 (class 0 OID 0)
-- Dependencies: 180
-- Name: t_tip_documento_srl_cod_documento_seq; Type: SEQUENCE OWNED BY; Schema: pda; Owner: postgres
--

ALTER SEQUENCE pda.t_tip_documento_srl_cod_documento_seq
OWNED BY pda.t_tip_documento.srl_cod_documento;


--
-- TOC entry 176 (class 1259 OID 16421)
-- Name: t_usuario; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_usuario
(
  srl_cod_usuario integer NOT NULL,
  var_usuario character varying(30) NOT NULL,
  var_clave character varying(100),
  bol_estado boolean,
  var_email character varying(50),
  var_rol character varying(16)
);


ALTER TABLE pda.t_usuario OWNER TO postgres;

--
-- TOC entry 175 (class 1259 OID 16419)
-- Name: t_usuario_srl_cod_usuario_seq; Type: SEQUENCE; Schema: pda; Owner: postgres
--

CREATE SEQUENCE pda.t_usuario_srl_cod_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pda.t_usuario_srl_cod_usuario_seq OWNER TO postgres;

--
-- TOC entry 2066 (class 0 OID 0)
-- Dependencies: 175
-- Name: t_usuario_srl_cod_usuario_seq; Type: SEQUENCE OWNED BY; Schema: pda; Owner: postgres
--

ALTER SEQUENCE pda.t_usuario_srl_cod_usuario_seq
OWNED BY pda.t_usuario.srl_cod_usuario;


--
-- TOC entry 187 (class 1259 OID 16474)
-- Name: t_visitante; Type: TABLE; Schema: pda; Owner: postgres; Tablespace:
--

CREATE TABLE pda.t_visitante
(
  srl_cod_visitante integer NOT NULL,
  srl_cod_documento integer NOT NULL,
  srl_cod_categoria integer,
  srl_cod_pais integer,
  var_nombre character varying(50) NOT NULL,
  var_apellido character varying(50) NOT NULL,
  var_nro_documento character varying(20),
  dte_fec_nacimiento date,
  var_sexo character varying(1)
);


ALTER TABLE pda.t_visitante OWNER TO postgres;

--
-- TOC entry 2067 (class 0 OID 0)
-- Dependencies: 187
-- Name: COLUMN t_visitante.srl_cod_visitante; Type: COMMENT; Schema: pda; Owner: postgres
--

COMMENT ON COLUMN pda.t_visitante.srl_cod_visitante IS 'Codigo del visitante';


--
-- TOC entry 2068 (class 0 OID 0)
-- Dependencies: 187
-- Name: COLUMN t_visitante.srl_cod_documento; Type: COMMENT; Schema: pda; Owner: postgres
--

COMMENT ON COLUMN pda.t_visitante.srl_cod_documento IS 'Codigo de documento';


--
-- TOC entry 2069 (class 0 OID 0)
-- Dependencies: 187
-- Name: COLUMN t_visitante.srl_cod_categoria; Type: COMMENT; Schema: pda; Owner: postgres
--

COMMENT ON COLUMN pda.t_visitante.srl_cod_categoria IS 'Codigo de categoria';


--
-- TOC entry 2070 (class 0 OID 0)
-- Dependencies: 187
-- Name: COLUMN t_visitante.srl_cod_pais; Type: COMMENT; Schema: pda; Owner: postgres
--

COMMENT ON COLUMN pda.t_visitante.srl_cod_pais IS 'Codigo del pais';


--
-- TOC entry 186 (class 1259 OID 16472)
-- Name: t_visitante_srl_cod_visitante_seq; Type: SEQUENCE; Schema: pda; Owner: postgres
--

CREATE SEQUENCE pda.t_visitante_srl_cod_visitante_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pda.t_visitante_srl_cod_visitante_seq OWNER TO postgres;

--
-- TOC entry 2071 (class 0 OID 0)
-- Dependencies: 186
-- Name: t_visitante_srl_cod_visitante_seq; Type: SEQUENCE OWNED BY; Schema: pda; Owner: postgres
--

ALTER SEQUENCE pda.t_visitante_srl_cod_visitante_seq
OWNED BY pda.t_visitante.srl_cod_visitante;


--
-- TOC entry 1885 (class 2604 OID 16437)
-- Name: srl_cod_categoria; Type: DEFAULT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_categoria
ALTER COLUMN srl_cod_categoria
SET
DEFAULT nextval
('pda.t_categoria_srl_cod_categoria_seq'::regclass);


--
-- TOC entry 1890 (class 2604 OID 16501)
-- Name: srl_cod_grupo; Type: DEFAULT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_grupo
ALTER COLUMN srl_cod_grupo
SET
DEFAULT nextval
('pda.t_grupo_srl_cod_grupo_seq'::regclass);


--
-- TOC entry 1883 (class 2604 OID 16413)
-- Name: srl_cod_noticia; Type: DEFAULT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_noticia
ALTER COLUMN srl_cod_noticia
SET
DEFAULT nextval
('pda.t_noticia_srl_cod_noticia_seq'::regclass);


--
-- TOC entry 1888 (class 2604 OID 16461)
-- Name: srl_cod_pago; Type: DEFAULT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_pago
ALTER COLUMN srl_cod_pago
SET
DEFAULT nextval
('pda.t_pago_srl_cod_pago_seq'::regclass);


--
-- TOC entry 1887 (class 2604 OID 16453)
-- Name: srl_cod_pais; Type: DEFAULT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_pais
ALTER COLUMN srl_cod_pais
SET
DEFAULT nextval
('pda.t_pais_srl_cod_pais_seq'::regclass);


--
-- TOC entry 1882 (class 2604 OID 16405)
-- Name: srl_cod_ruta; Type: DEFAULT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_ruta
ALTER COLUMN srl_cod_ruta
SET
DEFAULT nextval
('pda.t_ruta_srl_cod_ruta_seq'::regclass);


--
-- TOC entry 1886 (class 2604 OID 16445)
-- Name: srl_cod_documento; Type: DEFAULT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_tip_documento
ALTER COLUMN srl_cod_documento
SET
DEFAULT nextval
('pda.t_tip_documento_srl_cod_documento_seq'::regclass);


--
-- TOC entry 1884 (class 2604 OID 16424)
-- Name: srl_cod_usuario; Type: DEFAULT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_usuario
ALTER COLUMN srl_cod_usuario
SET
DEFAULT nextval
('pda.t_usuario_srl_cod_usuario_seq'::regclass);


--
-- TOC entry 1889 (class 2604 OID 16477)
-- Name: srl_cod_visitante; Type: DEFAULT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_visitante
ALTER COLUMN srl_cod_visitante
SET
DEFAULT nextval
('pda.t_visitante_srl_cod_visitante_seq'::regclass);


--
-- TOC entry 2034 (class 0 OID 16434)
-- Dependencies: 179
-- Data for Name: t_categoria; Type: TABLE DATA; Schema: pda; Owner: postgres
--

INSERT INTO pda.t_categoria
VALUES
  (1, 'Adulto');
INSERT INTO pda.t_categoria
VALUES
  (2, 'Estudiante');


--
-- TOC entry 2072 (class 0 OID 0)
-- Dependencies: 178
-- Name: t_categoria_srl_cod_categoria_seq; Type: SEQUENCE SET; Schema: pda; Owner: postgres
--

SELECT pg_catalog.setval('pda.t_categoria_srl_cod_categoria_seq', 2, true);


--
-- TOC entry 2044 (class 0 OID 16498)
-- Dependencies: 189
-- Data for Name: t_grupo; Type: TABLE DATA; Schema: pda; Owner: postgres
--



--
-- TOC entry 2073 (class 0 OID 0)
-- Dependencies: 188
-- Name: t_grupo_srl_cod_grupo_seq; Type: SEQUENCE SET; Schema: pda; Owner: postgres
--

SELECT pg_catalog.setval('pda.t_grupo_srl_cod_grupo_seq', 1, false);


--
-- TOC entry 2045 (class 0 OID 16517)
-- Dependencies: 190
-- Data for Name: t_grupo_visitante; Type: TABLE DATA; Schema: pda; Owner: postgres
--



--
-- TOC entry 2029 (class 0 OID 16410)
-- Dependencies: 174
-- Data for Name: t_noticia; Type: TABLE DATA; Schema: pda; Owner: postgres
--

INSERT INTO pda.t_noticia
VALUES
  (1, 'NOTICIA 1', 'Texto de prueba de noticia', '2018-04-09', true, 'ADMIN');
INSERT INTO pda.t_noticia
VALUES
  (2, 'NOTICIA 2', 'Texto de prueba de noticia 2', '2018-04-14', false, 'ADMIN');


--
-- TOC entry 2074 (class 0 OID 0)
-- Dependencies: 173
-- Name: t_noticia_srl_cod_noticia_seq; Type: SEQUENCE SET; Schema: pda; Owner: postgres
--

SELECT pg_catalog.setval('pda.t_noticia_srl_cod_noticia_seq', 2, true);


--
-- TOC entry 2032 (class 0 OID 16427)
-- Dependencies: 177
-- Data for Name: t_operador; Type: TABLE DATA; Schema: pda; Owner: postgres
--



--
-- TOC entry 2040 (class 0 OID 16458)
-- Dependencies: 185
-- Data for Name: t_pago; Type: TABLE DATA; Schema: pda; Owner: postgres
--



--
-- TOC entry 2075 (class 0 OID 0)
-- Dependencies: 184
-- Name: t_pago_srl_cod_pago_seq; Type: SEQUENCE SET; Schema: pda; Owner: postgres
--

SELECT pg_catalog.setval('pda.t_pago_srl_cod_pago_seq', 1, false);


--
-- TOC entry 2038 (class 0 OID 16450)
-- Dependencies: 183
-- Data for Name: t_pais; Type: TABLE DATA; Schema: pda; Owner: postgres
--

INSERT INTO pda.t_pais
VALUES
  (1, 'AFGANISTAN');
INSERT INTO pda.t_pais
VALUES
  (2, 'ISLAS ALAND');
INSERT INTO pda.t_pais
VALUES
  (3, 'ALBANIA');
INSERT INTO pda.t_pais
VALUES
  (4, 'ARGELIA');
INSERT INTO pda.t_pais
VALUES
  (5, 'SAMOA ESTADOUNIDENSE');
INSERT INTO pda.t_pais
VALUES
  (6, 'ANDORRA');
INSERT INTO pda.t_pais
VALUES
  (7, 'ANGOLA');
INSERT INTO pda.t_pais
VALUES
  (8, 'ANGUILLA');
INSERT INTO pda.t_pais
VALUES
  (9, 'ANTARTIDA');
INSERT INTO pda.t_pais
VALUES
  (10, 'ANTIGUA Y BARBUDA');
INSERT INTO pda.t_pais
VALUES
  (11, 'ARGENTINA');
INSERT INTO pda.t_pais
VALUES
  (12, 'ARMENIA');
INSERT INTO pda.t_pais
VALUES
  (13, 'ARUBA');
INSERT INTO pda.t_pais
VALUES
  (14, 'AUSTRALIA');
INSERT INTO pda.t_pais
VALUES
  (15, 'AUSTRIA');
INSERT INTO pda.t_pais
VALUES
  (16, 'AZERBAIYAN');
INSERT INTO pda.t_pais
VALUES
  (17, 'BAHAMAS');
INSERT INTO pda.t_pais
VALUES
  (18, 'BAHREIN');
INSERT INTO pda.t_pais
VALUES
  (19, 'BANGLADESH');
INSERT INTO pda.t_pais
VALUES
  (20, 'BARBADOS');
INSERT INTO pda.t_pais
VALUES
  (21, 'BIELORRUSIA');
INSERT INTO pda.t_pais
VALUES
  (22, 'BELGICA');
INSERT INTO pda.t_pais
VALUES
  (23, 'BELICE');
INSERT INTO pda.t_pais
VALUES
  (24, 'BENIN');
INSERT INTO pda.t_pais
VALUES
  (25, 'BERMUDAS');
INSERT INTO pda.t_pais
VALUES
  (26, 'BHUTAN');
INSERT INTO pda.t_pais
VALUES
  (27, 'BOLIVIA');
INSERT INTO pda.t_pais
VALUES
  (28, 'BOSNIA Y HERZEGOVINA');
INSERT INTO pda.t_pais
VALUES
  (29, 'BOTSWANA');
INSERT INTO pda.t_pais
VALUES
  (30, 'ISLA BOUVET');
INSERT INTO pda.t_pais
VALUES
  (31, 'BRASIL');
INSERT INTO pda.t_pais
VALUES
  (32, 'TERRITORIO BRITANICO');
INSERT INTO pda.t_pais
VALUES
  (33, 'BRUNEI');
INSERT INTO pda.t_pais
VALUES
  (34, 'BULGARIA');
INSERT INTO pda.t_pais
VALUES
  (35, 'BURKINA FASO');
INSERT INTO pda.t_pais
VALUES
  (36, 'BURUNDI');
INSERT INTO pda.t_pais
VALUES
  (37, 'CAMBOYA');
INSERT INTO pda.t_pais
VALUES
  (38, 'CAMERUN');
INSERT INTO pda.t_pais
VALUES
  (39, 'CANADA');
INSERT INTO pda.t_pais
VALUES
  (40, 'CABO VERDE');
INSERT INTO pda.t_pais
VALUES
  (41, 'ISLAS CAIMAN');
INSERT INTO pda.t_pais
VALUES
  (42, 'REPUBLICA');
INSERT INTO pda.t_pais
VALUES
  (43, 'CHAD');
INSERT INTO pda.t_pais
VALUES
  (44, 'CHILE');
INSERT INTO pda.t_pais
VALUES
  (45, 'CHINA');
INSERT INTO pda.t_pais
VALUES
  (46, 'ISLA DE NAVIDAD');
INSERT INTO pda.t_pais
VALUES
  (47, 'ISLAS COCOS');
INSERT INTO pda.t_pais
VALUES
  (48, 'COLOMBIA');
INSERT INTO pda.t_pais
VALUES
  (49, 'COMORAS');
INSERT INTO pda.t_pais
VALUES
  (50, 'CONGO');
INSERT INTO pda.t_pais
VALUES
  (51, 'CONGO REPUBLICA');
INSERT INTO pda.t_pais
VALUES
  (52, 'ISLAS DE COOK');
INSERT INTO pda.t_pais
VALUES
  (53, 'COSTA RICA');
INSERT INTO pda.t_pais
VALUES
  (54, 'COSTA DE MARFIL');
INSERT INTO pda.t_pais
VALUES
  (55, 'CROACIA');
INSERT INTO pda.t_pais
VALUES
  (56, 'CUBA');
INSERT INTO pda.t_pais
VALUES
  (57, 'CHIPRE');
INSERT INTO pda.t_pais
VALUES
  (58, 'REPUBLICA CHECA');
INSERT INTO pda.t_pais
VALUES
  (59, 'DINAMARCA');
INSERT INTO pda.t_pais
VALUES
  (60, 'DJIBOUTI');
INSERT INTO pda.t_pais
VALUES
  (61, 'DOMINICA');
INSERT INTO pda.t_pais
VALUES
  (62, 'REPUBLICA DOMINICANA');
INSERT INTO pda.t_pais
VALUES
  (63, 'ECUADOR');
INSERT INTO pda.t_pais
VALUES
  (64, 'EGIPTO');
INSERT INTO pda.t_pais
VALUES
  (65, 'EL SALVADOR');
INSERT INTO pda.t_pais
VALUES
  (66, 'GUINEA ECUATORIAL');
INSERT INTO pda.t_pais
VALUES
  (67, 'ERITREA');
INSERT INTO pda.t_pais
VALUES
  (68, 'ESTONIA');
INSERT INTO pda.t_pais
VALUES
  (69, 'ETIOPIA');
INSERT INTO pda.t_pais
VALUES
  (70, 'ISLAS MALVINAS');
INSERT INTO pda.t_pais
VALUES
  (71, 'ISLAS FERCE');
INSERT INTO pda.t_pais
VALUES
  (72, 'FIJI');
INSERT INTO pda.t_pais
VALUES
  (73, 'FINLANDIA');
INSERT INTO pda.t_pais
VALUES
  (74, 'FRANCIA');
INSERT INTO pda.t_pais
VALUES
  (75, 'GUINEA FRANCESA');
INSERT INTO pda.t_pais
VALUES
  (76, 'POLINESIA');
INSERT INTO pda.t_pais
VALUES
  (77, 'TERRITORIO AUSTRALES');
INSERT INTO pda.t_pais
VALUES
  (78, 'GABON');
INSERT INTO pda.t_pais
VALUES
  (79, 'GAMBIA');
INSERT INTO pda.t_pais
VALUES
  (80, 'GEORGIA');
INSERT INTO pda.t_pais
VALUES
  (81, 'ALEMANIA');
INSERT INTO pda.t_pais
VALUES
  (82, 'GHANA');
INSERT INTO pda.t_pais
VALUES
  (83, 'GIBRALTAR');
INSERT INTO pda.t_pais
VALUES
  (84, 'GRECIA');
INSERT INTO pda.t_pais
VALUES
  (85, 'GROENLANDIA');
INSERT INTO pda.t_pais
VALUES
  (86, 'GRANADA');
INSERT INTO pda.t_pais
VALUES
  (87, 'GUADALUPE');
INSERT INTO pda.t_pais
VALUES
  (88, 'GUAM');
INSERT INTO pda.t_pais
VALUES
  (89, 'GUATEMALA');
INSERT INTO pda.t_pais
VALUES
  (90, 'GUERSNEY');
INSERT INTO pda.t_pais
VALUES
  (91, 'GUINEA');
INSERT INTO pda.t_pais
VALUES
  (92, 'GUINEA BISSAU');
INSERT INTO pda.t_pais
VALUES
  (93, 'GUYANA');
INSERT INTO pda.t_pais
VALUES
  (94, 'HAITI');
INSERT INTO pda.t_pais
VALUES
  (95, 'ISLAS HEARD Y MCDONALD');
INSERT INTO pda.t_pais
VALUES
  (96, 'HONDURAS');
INSERT INTO pda.t_pais
VALUES
  (97, 'HONG KONG');
INSERT INTO pda.t_pais
VALUES
  (98, 'HUNGRIA');
INSERT INTO pda.t_pais
VALUES
  (99, 'ISLANDIA');
INSERT INTO pda.t_pais
VALUES
  (100, 'INDIA');
INSERT INTO pda.t_pais
VALUES
  (101, 'INDONESIA');
INSERT INTO pda.t_pais
VALUES
  (102, 'IRAN');
INSERT INTO pda.t_pais
VALUES
  (103, 'IRAQ');
INSERT INTO pda.t_pais
VALUES
  (104, 'IRLANDA');
INSERT INTO pda.t_pais
VALUES
  (105, 'ISLA DE MAN');
INSERT INTO pda.t_pais
VALUES
  (106, 'ISRAEL');
INSERT INTO pda.t_pais
VALUES
  (107, 'ITALIA');
INSERT INTO pda.t_pais
VALUES
  (108, 'JAMAICA');
INSERT INTO pda.t_pais
VALUES
  (109, 'JAPON');
INSERT INTO pda.t_pais
VALUES
  (110, 'JERSEY');
INSERT INTO pda.t_pais
VALUES
  (111, 'JORDANIA');
INSERT INTO pda.t_pais
VALUES
  (112, 'KAZAJSTAN');
INSERT INTO pda.t_pais
VALUES
  (113, 'KENYA');
INSERT INTO pda.t_pais
VALUES
  (114, 'KIRIBATI');
INSERT INTO pda.t_pais
VALUES
  (115, 'COREA');
INSERT INTO pda.t_pais
VALUES
  (116, 'COREA');
INSERT INTO pda.t_pais
VALUES
  (117, 'KUWAIT');
INSERT INTO pda.t_pais
VALUES
  (118, 'KIRGUISTAN');
INSERT INTO pda.t_pais
VALUES
  (119, 'LAO');
INSERT INTO pda.t_pais
VALUES
  (120, 'LETONIA');
INSERT INTO pda.t_pais
VALUES
  (121, 'LIBANO');
INSERT INTO pda.t_pais
VALUES
  (122, 'LESOTHO');
INSERT INTO pda.t_pais
VALUES
  (123, 'LIBERIA');
INSERT INTO pda.t_pais
VALUES
  (124, 'LIBIA');
INSERT INTO pda.t_pais
VALUES
  (125, 'LIECHTENSTEIN');
INSERT INTO pda.t_pais
VALUES
  (126, 'LITUANIA');
INSERT INTO pda.t_pais
VALUES
  (127, 'LUXEMBURGO');
INSERT INTO pda.t_pais
VALUES
  (128, 'MACAO');
INSERT INTO pda.t_pais
VALUES
  (129, 'MACEDONIA');
INSERT INTO pda.t_pais
VALUES
  (130, 'MADAGASCAR');
INSERT INTO pda.t_pais
VALUES
  (131, 'MALAWI');
INSERT INTO pda.t_pais
VALUES
  (132, 'MALASIA');
INSERT INTO pda.t_pais
VALUES
  (133, 'MALDIVAS');
INSERT INTO pda.t_pais
VALUES
  (134, 'MALI');
INSERT INTO pda.t_pais
VALUES
  (135, 'MALTA');
INSERT INTO pda.t_pais
VALUES
  (136, 'ISLAS MARSHALL');
INSERT INTO pda.t_pais
VALUES
  (137, 'MARTINICA');
INSERT INTO pda.t_pais
VALUES
  (138, 'MAURITANIA');
INSERT INTO pda.t_pais
VALUES
  (139, 'MAURICIO');
INSERT INTO pda.t_pais
VALUES
  (140, 'MAYOTTE');
INSERT INTO pda.t_pais
VALUES
  (141, 'MEXICO');
INSERT INTO pda.t_pais
VALUES
  (142, 'MICRONESIA');
INSERT INTO pda.t_pais
VALUES
  (143, 'MOLDOVIA');
INSERT INTO pda.t_pais
VALUES
  (144, 'MONACO');
INSERT INTO pda.t_pais
VALUES
  (145, 'MONGOLIA');
INSERT INTO pda.t_pais
VALUES
  (146, 'MONTENEGRO');
INSERT INTO pda.t_pais
VALUES
  (147, 'MONTSERRAT');
INSERT INTO pda.t_pais
VALUES
  (148, 'MARRUECOS');
INSERT INTO pda.t_pais
VALUES
  (149, 'MOZAMBIQUE');
INSERT INTO pda.t_pais
VALUES
  (150, 'MYANMAR');
INSERT INTO pda.t_pais
VALUES
  (151, 'NAMIBIA');
INSERT INTO pda.t_pais
VALUES
  (152, 'NAURU');
INSERT INTO pda.t_pais
VALUES
  (153, 'NEPAL');
INSERT INTO pda.t_pais
VALUES
  (154, 'HOLANDA');
INSERT INTO pda.t_pais
VALUES
  (155, 'ANTILLAS HOLANDESAS');
INSERT INTO pda.t_pais
VALUES
  (156, 'NUEVA CALEDONIA');
INSERT INTO pda.t_pais
VALUES
  (157, 'NUEVA ZELANDA');
INSERT INTO pda.t_pais
VALUES
  (158, 'NICARAGUA');
INSERT INTO pda.t_pais
VALUES
  (159, 'NIGER');
INSERT INTO pda.t_pais
VALUES
  (160, 'NIGERIA');
INSERT INTO pda.t_pais
VALUES
  (161, 'ISLA NIUE');
INSERT INTO pda.t_pais
VALUES
  (162, 'ISLA NORFOLK');
INSERT INTO pda.t_pais
VALUES
  (163, 'ISLAS MARIANAS DEL NORTE');
INSERT INTO pda.t_pais
VALUES
  (164, 'NORUEGA');
INSERT INTO pda.t_pais
VALUES
  (165, 'OMAN');
INSERT INTO pda.t_pais
VALUES
  (166, 'PAKISTAN');
INSERT INTO pda.t_pais
VALUES
  (167, 'PALAU');
INSERT INTO pda.t_pais
VALUES
  (168, 'TERRITORIO OCUPADO');
INSERT INTO pda.t_pais
VALUES
  (169, 'PANAMA');
INSERT INTO pda.t_pais
VALUES
  (170, 'PAPUA');
INSERT INTO pda.t_pais
VALUES
  (171, 'PARAGUAY');
INSERT INTO pda.t_pais
VALUES
  (172, 'PERU');
INSERT INTO pda.t_pais
VALUES
  (173, 'FILIPINAS');
INSERT INTO pda.t_pais
VALUES
  (174, 'SLA PITCAIRN');
INSERT INTO pda.t_pais
VALUES
  (175, 'POLONIA');
INSERT INTO pda.t_pais
VALUES
  (176, 'PORTUGAL');
INSERT INTO pda.t_pais
VALUES
  (177, 'PUERTO RICO');
INSERT INTO pda.t_pais
VALUES
  (178, 'QATAR');
INSERT INTO pda.t_pais
VALUES
  (179, 'REUNION');
INSERT INTO pda.t_pais
VALUES
  (180, 'RUMANIA');
INSERT INTO pda.t_pais
VALUES
  (181, 'RUSIA');
INSERT INTO pda.t_pais
VALUES
  (182, 'RUANDA');
INSERT INTO pda.t_pais
VALUES
  (183, 'SAN BARTOLOME');
INSERT INTO pda.t_pais
VALUES
  (184, 'SANTA HELENA');
INSERT INTO pda.t_pais
VALUES
  (185, 'SAINT KITTS');
INSERT INTO pda.t_pais
VALUES
  (186, 'SANTA LUCIA');
INSERT INTO pda.t_pais
VALUES
  (187, 'SAN PEDRO');
INSERT INTO pda.t_pais
VALUES
  (188, 'SAN VICENTE');
INSERT INTO pda.t_pais
VALUES
  (189, 'SAMOA');
INSERT INTO pda.t_pais
VALUES
  (190, 'SAN MARINO');
INSERT INTO pda.t_pais
VALUES
  (191, 'SAO TOME');
INSERT INTO pda.t_pais
VALUES
  (192, 'ARABIA SAUDITA');
INSERT INTO pda.t_pais
VALUES
  (193, 'SENEGAL');
INSERT INTO pda.t_pais
VALUES
  (194, 'SERBIA');
INSERT INTO pda.t_pais
VALUES
  (195, 'SEYCHELLES');
INSERT INTO pda.t_pais
VALUES
  (196, 'SIERRA LEONA');
INSERT INTO pda.t_pais
VALUES
  (197, 'SINGAPUR');
INSERT INTO pda.t_pais
VALUES
  (198, 'REPUBLICA ESLOVACA');
INSERT INTO pda.t_pais
VALUES
  (199, 'ESLOVENIA');
INSERT INTO pda.t_pais
VALUES
  (200, 'ISLAS SALOMON');
INSERT INTO pda.t_pais
VALUES
  (201, 'SOMALIA');
INSERT INTO pda.t_pais
VALUES
  (202, 'SUDAFRICA');
INSERT INTO pda.t_pais
VALUES
  (203, 'GEORGIA DEL SUR');
INSERT INTO pda.t_pais
VALUES
  (204, 'ESPANA');
INSERT INTO pda.t_pais
VALUES
  (205, 'SRI LANKA');
INSERT INTO pda.t_pais
VALUES
  (206, 'SUDAN');
INSERT INTO pda.t_pais
VALUES
  (207, 'SURINAM');
INSERT INTO pda.t_pais
VALUES
  (208, 'ISLAS SVALBARD Y JAN MAYEN');
INSERT INTO pda.t_pais
VALUES
  (209, 'SWAZILANDIA');
INSERT INTO pda.t_pais
VALUES
  (210, 'SUECIA');
INSERT INTO pda.t_pais
VALUES
  (211, 'SUIZA');
INSERT INTO pda.t_pais
VALUES
  (212, 'SIRIA');
INSERT INTO pda.t_pais
VALUES
  (213, 'TAIWAN');
INSERT INTO pda.t_pais
VALUES
  (214, 'TAYIKISTAN');
INSERT INTO pda.t_pais
VALUES
  (215, 'TANZANIA');
INSERT INTO pda.t_pais
VALUES
  (216, 'TAILANDIA');
INSERT INTO pda.t_pais
VALUES
  (217, 'TIMORLESTE');
INSERT INTO pda.t_pais
VALUES
  (218, 'TOGO');
INSERT INTO pda.t_pais
VALUES
  (219, 'TOKELAU');
INSERT INTO pda.t_pais
VALUES
  (220, 'TONGA');
INSERT INTO pda.t_pais
VALUES
  (221, 'TRINIDAD Y TOBAGO');
INSERT INTO pda.t_pais
VALUES
  (222, 'TUNEZ');
INSERT INTO pda.t_pais
VALUES
  (223, 'TURQUIA');
INSERT INTO pda.t_pais
VALUES
  (224, 'TURKMENISTAN');
INSERT INTO pda.t_pais
VALUES
  (225, 'ISLAS TURCAS Y CAICOS');
INSERT INTO pda.t_pais
VALUES
  (226, 'TUVALU');
INSERT INTO pda.t_pais
VALUES
  (227, 'UGANDA');
INSERT INTO pda.t_pais
VALUES
  (228, 'UCRANIA');
INSERT INTO pda.t_pais
VALUES
  (229, 'EMIRATOS ARABES UNIDOS');
INSERT INTO pda.t_pais
VALUES
  (230, 'INGLATERRA');
INSERT INTO pda.t_pais
VALUES
  (231, 'ESTADOS UNIDOS');
INSERT INTO pda.t_pais
VALUES
  (232, 'ISLAS PERIFERICAS MENORES DE LOS EEUU');
INSERT INTO pda.t_pais
VALUES
  (233, 'URUGUAY');
INSERT INTO pda.t_pais
VALUES
  (234, 'UZBEKISTAN');
INSERT INTO pda.t_pais
VALUES
  (235, 'VANUATU');
INSERT INTO pda.t_pais
VALUES
  (236, 'VENEZUELA');
INSERT INTO pda.t_pais
VALUES
  (237, 'VIETNAM');
INSERT INTO pda.t_pais
VALUES
  (238, 'ISLAS VIRGENES BRITANICAS');
INSERT INTO pda.t_pais
VALUES
  (239, 'ISLAS VIRGENES DE LOS EEUU');
INSERT INTO pda.t_pais
VALUES
  (240, 'ISLAS WALLIS Y FUTUNA');
INSERT INTO pda.t_pais
VALUES
  (241, 'SAHARA');
INSERT INTO pda.t_pais
VALUES
  (242, 'YEMEN');
INSERT INTO pda.t_pais
VALUES
  (243, 'ZAMBIA');
INSERT INTO pda.t_pais
VALUES
  (244, 'ZIMBABWE');


--
-- TOC entry 2076 (class 0 OID 0)
-- Dependencies: 182
-- Name: t_pais_srl_cod_pais_seq; Type: SEQUENCE SET; Schema: pda; Owner: postgres
--

SELECT pg_catalog.setval('pda.t_pais_srl_cod_pais_seq', 31, true);


--
-- TOC entry 2027 (class 0 OID 16402)
-- Dependencies: 172
-- Data for Name: t_ruta; Type: TABLE DATA; Schema: pda; Owner: postgres
--

INSERT INTO pda.t_ruta
VALUES
  (1, 'Ruta 1 (4/3n) Piscacucho Km82', true, 15);
INSERT INTO pda.t_ruta
VALUES
  (2, 'Ruta 2 (4d/3n) Qorihuayrachina Km 88', true, 15);
INSERT INTO pda.t_ruta
VALUES
  (3, 'Ruta 3 (6d/5n) Salkatay', true, 15);
INSERT INTO pda.t_ruta
VALUES
  (4, 'Ruta 5 (Directo) Chachabamba Km 104', true, 15);


--
-- TOC entry 2077 (class 0 OID 0)
-- Dependencies: 171
-- Name: t_ruta_srl_cod_ruta_seq; Type: SEQUENCE SET; Schema: pda; Owner: postgres
--

SELECT pg_catalog.setval('pda.t_ruta_srl_cod_ruta_seq', 4, true);


--
-- TOC entry 2036 (class 0 OID 16442)
-- Dependencies: 181
-- Data for Name: t_tip_documento; Type: TABLE DATA; Schema: pda; Owner: postgres
--

INSERT INTO pda.t_tip_documento
VALUES
  (1, 'PSAPORTE');
INSERT INTO pda.t_tip_documento
VALUES
  (2, 'DNI');
INSERT INTO pda.t_tip_documento
VALUES
  (3, 'CN');
INSERT INTO pda.t_tip_documento
VALUES
  (4, 'CE');
INSERT INTO pda.t_tip_documento
VALUES
  (5, 'TI');
INSERT INTO pda.t_tip_documento
VALUES
  (6, 'CES');
INSERT INTO pda.t_tip_documento
VALUES
  (7, 'RUC');


--
-- TOC entry 2078 (class 0 OID 0)
-- Dependencies: 180
-- Name: t_tip_documento_srl_cod_documento_seq; Type: SEQUENCE SET; Schema: pda; Owner: postgres
--

SELECT pg_catalog.setval('pda.t_tip_documento_srl_cod_documento_seq', 7, true);


--
-- TOC entry 2031 (class 0 OID 16421)
-- Dependencies: 176
-- Data for Name: t_usuario; Type: TABLE DATA; Schema: pda; Owner: postgres
--



--
-- TOC entry 2079 (class 0 OID 0)
-- Dependencies: 175
-- Name: t_usuario_srl_cod_usuario_seq; Type: SEQUENCE SET; Schema: pda; Owner: postgres
--

SELECT pg_catalog.setval('pda.t_usuario_srl_cod_usuario_seq', 1, false);


--
-- TOC entry 2042 (class 0 OID 16474)
-- Dependencies: 187
-- Data for Name: t_visitante; Type: TABLE DATA; Schema: pda; Owner: postgres
--



--
-- TOC entry 2080 (class 0 OID 0)
-- Dependencies: 186
-- Name: t_visitante_srl_cod_visitante_seq; Type: SEQUENCE SET; Schema: pda; Owner: postgres
--

SELECT pg_catalog.setval('pda.t_visitante_srl_cod_visitante_seq', 1, false);


--
-- TOC entry 1900 (class 2606 OID 16439)
-- Name: t_categoria_pkey; Type: CONSTRAINT; Schema: pda; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY pda.t_categoria
ADD CONSTRAINT t_categoria_pkey PRIMARY KEY
(srl_cod_categoria);


--
-- TOC entry 1910 (class 2606 OID 16503)
-- Name: t_grupo_pkey; Type: CONSTRAINT; Schema: pda; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY pda.t_grupo
ADD CONSTRAINT t_grupo_pkey PRIMARY KEY
(srl_cod_grupo);


--
-- TOC entry 1894 (class 2606 OID 16418)
-- Name: t_noticia_pkey; Type: CONSTRAINT; Schema: pda; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY pda.t_noticia
ADD CONSTRAINT t_noticia_pkey PRIMARY KEY
(srl_cod_noticia);


--
-- TOC entry 1898 (class 2606 OID 16431)
-- Name: t_operador_pkey; Type: CONSTRAINT; Schema: pda; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY pda.t_operador
ADD CONSTRAINT t_operador_pkey PRIMARY KEY
(var_cod_operador);


--
-- TOC entry 1906 (class 2606 OID 16466)
-- Name: t_pago_pkey; Type: CONSTRAINT; Schema: pda; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY pda.t_pago
ADD CONSTRAINT t_pago_pkey PRIMARY KEY
(srl_cod_pago);


--
-- TOC entry 1904 (class 2606 OID 16455)
-- Name: t_pais_pkey; Type: CONSTRAINT; Schema: pda; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY pda.t_pais
ADD CONSTRAINT t_pais_pkey PRIMARY KEY
(srl_cod_pais);


--
-- TOC entry 1892 (class 2606 OID 16407)
-- Name: t_ruta_pkey; Type: CONSTRAINT; Schema: pda; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY pda.t_ruta
ADD CONSTRAINT t_ruta_pkey PRIMARY KEY
(srl_cod_ruta);


--
-- TOC entry 1902 (class 2606 OID 16447)
-- Name: t_tip_documento_pkey; Type: CONSTRAINT; Schema: pda; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY pda.t_tip_documento
ADD CONSTRAINT t_tip_documento_pkey PRIMARY KEY
(srl_cod_documento);


--
-- TOC entry 1896 (class 2606 OID 16426)
-- Name: t_usuario_pkey; Type: CONSTRAINT; Schema: pda; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY pda.t_usuario
ADD CONSTRAINT t_usuario_pkey PRIMARY KEY
(srl_cod_usuario);


--
-- TOC entry 1908 (class 2606 OID 16479)
-- Name: t_visitante_pkey; Type: CONSTRAINT; Schema: pda; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY pda.t_visitante
ADD CONSTRAINT t_visitante_pkey PRIMARY KEY
(srl_cod_visitante);


--
-- TOC entry 1916 (class 2606 OID 16512)
-- Name: t_grupo_srl_cod_ruta_fkey; Type: FK CONSTRAINT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_grupo
ADD CONSTRAINT t_grupo_srl_cod_ruta_fkey FOREIGN KEY
(srl_cod_ruta) REFERENCES pda.t_ruta
(srl_cod_ruta);


--
-- TOC entry 1915 (class 2606 OID 16507)
-- Name: t_grupo_var_cod_operador_fkey; Type: FK CONSTRAINT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_grupo
ADD CONSTRAINT t_grupo_var_cod_operador_fkey FOREIGN KEY
(var_cod_operador) REFERENCES pda.t_operador
(var_cod_operador);


--
-- TOC entry 1917 (class 2606 OID 16520)
-- Name: t_grupo_visitante_srl_cod_grupo_fkey; Type: FK CONSTRAINT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_grupo_visitante
ADD CONSTRAINT t_grupo_visitante_srl_cod_grupo_fkey FOREIGN KEY
(srl_cod_grupo) REFERENCES pda.t_grupo
(srl_cod_grupo);


--
-- TOC entry 1918 (class 2606 OID 16525)
-- Name: t_grupo_visitante_srl_cod_visitante_fkey; Type: FK CONSTRAINT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_grupo_visitante
ADD CONSTRAINT t_grupo_visitante_srl_cod_visitante_fkey FOREIGN KEY
(srl_cod_visitante) REFERENCES pda.t_visitante
(srl_cod_visitante);


--
-- TOC entry 1911 (class 2606 OID 16467)
-- Name: t_pago_var_cod_operador_fkey; Type: FK CONSTRAINT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_pago
ADD CONSTRAINT t_pago_var_cod_operador_fkey FOREIGN KEY
(var_cod_operador) REFERENCES pda.t_operador
(var_cod_operador);


--
-- TOC entry 1912 (class 2606 OID 16480)
-- Name: t_visitante_srl_cod_categoria_fkey; Type: FK CONSTRAINT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_visitante
ADD CONSTRAINT t_visitante_srl_cod_categoria_fkey FOREIGN KEY
(srl_cod_categoria) REFERENCES pda.t_categoria
(srl_cod_categoria);


--
-- TOC entry 1914 (class 2606 OID 16490)
-- Name: t_visitante_srl_cod_documento_fkey; Type: FK CONSTRAINT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_visitante
ADD CONSTRAINT t_visitante_srl_cod_documento_fkey FOREIGN KEY
(srl_cod_documento) REFERENCES pda.t_tip_documento
(srl_cod_documento);


--
-- TOC entry 1913 (class 2606 OID 16485)
-- Name: t_visitante_srl_cod_pais_fkey; Type: FK CONSTRAINT; Schema: pda; Owner: postgres
--

ALTER TABLE ONLY pda.t_visitante
ADD CONSTRAINT t_visitante_srl_cod_pais_fkey FOREIGN KEY
(srl_cod_pais) REFERENCES pda.t_pais
(srl_cod_pais);

-- Audit
ALTER TABLE pda.t_grupo ADD COLUMN dte_fec_creacion TIMESTAMP DEFAULT NOW
();
ALTER TABLE pda.t_pago ADD COLUMN dte_fec_creacion TIMESTAMP DEFAULT NOW
();
ALTER TABLE pda.t_visitante ADD COLUMN dte_fec_creacion TIMESTAMP DEFAULT NOW
();


--
-- TOC entry 2053 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA pda; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA pda FROM PUBLIC;
REVOKE ALL ON SCHEMA pda FROM postgres;
GRANT ALL ON SCHEMA pda TO postgres;
GRANT ALL ON SCHEMA pda TO PUBLIC;


-- Completed on 2018-05-13 10:10:27

--
-- PostgreSQL database dump complete
--

