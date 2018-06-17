--
-- PostgreSQL database dump
--

-- Dumped from database version 9.3.23
-- Dumped by pg_dump version 9.3.23
-- Started on 2018-05-13 10:10:26

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 2051 (class 1262 OID 16393)
-- Name: sernanp; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE sernanp WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Peru.1252' LC_CTYPE = 'Spanish_Peru.1252';


ALTER DATABASE sernanp OWNER TO postgres;

\connect sernanp

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 1 (class 3079 OID 11750)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2054 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 179 (class 1259 OID 16434)
-- Name: t_categoria; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_categoria (
    srl_cod_categoria integer NOT NULL,
    var_nombre character varying(50) NOT NULL
);


ALTER TABLE public.t_categoria OWNER TO postgres;

--
-- TOC entry 2055 (class 0 OID 0)
-- Dependencies: 179
-- Name: COLUMN t_categoria.srl_cod_categoria; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.t_categoria.srl_cod_categoria IS 'Codigo identificador de la categoria';


--
-- TOC entry 178 (class 1259 OID 16432)
-- Name: t_categoria_srl_cod_categoria_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_categoria_srl_cod_categoria_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_categoria_srl_cod_categoria_seq OWNER TO postgres;

--
-- TOC entry 2056 (class 0 OID 0)
-- Dependencies: 178
-- Name: t_categoria_srl_cod_categoria_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_categoria_srl_cod_categoria_seq OWNED BY public.t_categoria.srl_cod_categoria;


--
-- TOC entry 189 (class 1259 OID 16498)
-- Name: t_grupo; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_grupo (
    srl_cod_grupo integer NOT NULL,
    var_cod_grupo character varying(32),
    var_cod_operador character varying(20) NOT NULL,
    srl_cod_ruta integer NOT NULL,
    dte_fec_programada date,
    dte_fec_visita date,
    int_nro_visitante integer NOT NULL,
    int_nro_inasistente integer,
    num_costo integer,
    int_estado integer,
    var_documento character varying(200),
    txt_motivoobservado text,
    dte_fec_observado date,
    var_usuario character varying(30),
    var_usuariomodificacion character varying(30),
    dte_fec_modificacion date
);


ALTER TABLE public.t_grupo OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 16496)
-- Name: t_grupo_srl_cod_grupo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_grupo_srl_cod_grupo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_grupo_srl_cod_grupo_seq OWNER TO postgres;

--
-- TOC entry 2057 (class 0 OID 0)
-- Dependencies: 188
-- Name: t_grupo_srl_cod_grupo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_grupo_srl_cod_grupo_seq OWNED BY public.t_grupo.srl_cod_grupo;


--
-- TOC entry 190 (class 1259 OID 16517)
-- Name: t_grupo_visitante; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_grupo_visitante (
    srl_cod_grupo integer,
    srl_cod_visitante integer,
    bol_ingreso boolean
);


ALTER TABLE public.t_grupo_visitante OWNER TO postgres;

--
-- TOC entry 174 (class 1259 OID 16410)
-- Name: t_noticia; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_noticia (
    srl_cod_noticia integer NOT NULL,
    var_titulo character varying(100) NOT NULL,
    txt_contenido text,
    tsp_fec_publicacion date NOT NULL,
    bol_activo boolean,
    var_usuario character varying(30)
);


ALTER TABLE public.t_noticia OWNER TO postgres;

--
-- TOC entry 173 (class 1259 OID 16408)
-- Name: t_noticia_srl_cod_noticia_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_noticia_srl_cod_noticia_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_noticia_srl_cod_noticia_seq OWNER TO postgres;

--
-- TOC entry 2058 (class 0 OID 0)
-- Dependencies: 173
-- Name: t_noticia_srl_cod_noticia_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_noticia_srl_cod_noticia_seq OWNED BY public.t_noticia.srl_cod_noticia;


--
-- TOC entry 177 (class 1259 OID 16427)
-- Name: t_operador; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_operador (
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


ALTER TABLE public.t_operador OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 16458)
-- Name: t_pago; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_pago (
    srl_cod_pago integer NOT NULL,
    var_cod_operador character varying(30) NOT NULL,
    var_operacion character varying(30) NOT NULL,
    num_monto integer NOT NULL,
    dte_fec_abono date,
    var_comprobante character varying(200) NOT NULL,
    int_estado integer,
    txt_motivorechazo text
);


ALTER TABLE public.t_pago OWNER TO postgres;

--
-- TOC entry 2059 (class 0 OID 0)
-- Dependencies: 185
-- Name: COLUMN t_pago.var_comprobante; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.t_pago.var_comprobante IS 'Ruta donde se almacena el voucher de pago';


--
-- TOC entry 2060 (class 0 OID 0)
-- Dependencies: 185
-- Name: COLUMN t_pago.int_estado; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.t_pago.int_estado IS 'Estado del comprobante';


--
-- TOC entry 2061 (class 0 OID 0)
-- Dependencies: 185
-- Name: COLUMN t_pago.txt_motivorechazo; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.t_pago.txt_motivorechazo IS 'Motivo del rechazo en caso se de.';


--
-- TOC entry 184 (class 1259 OID 16456)
-- Name: t_pago_srl_cod_pago_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_pago_srl_cod_pago_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_pago_srl_cod_pago_seq OWNER TO postgres;

--
-- TOC entry 2062 (class 0 OID 0)
-- Dependencies: 184
-- Name: t_pago_srl_cod_pago_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_pago_srl_cod_pago_seq OWNED BY public.t_pago.srl_cod_pago;


--
-- TOC entry 183 (class 1259 OID 16450)
-- Name: t_pais; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_pais (
    srl_cod_pais integer NOT NULL,
    var_nombre character varying(30)
);


ALTER TABLE public.t_pais OWNER TO postgres;

--
-- TOC entry 182 (class 1259 OID 16448)
-- Name: t_pais_srl_cod_pais_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_pais_srl_cod_pais_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_pais_srl_cod_pais_seq OWNER TO postgres;

--
-- TOC entry 2063 (class 0 OID 0)
-- Dependencies: 182
-- Name: t_pais_srl_cod_pais_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_pais_srl_cod_pais_seq OWNED BY public.t_pais.srl_cod_pais;


--
-- TOC entry 172 (class 1259 OID 16402)
-- Name: t_ruta; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_ruta (
    srl_cod_ruta integer NOT NULL,
    var_nombre character varying(50) NOT NULL,
    bol_estado boolean NOT NULL
);


ALTER TABLE public.t_ruta OWNER TO postgres;

--
-- TOC entry 171 (class 1259 OID 16400)
-- Name: t_ruta_srl_cod_ruta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_ruta_srl_cod_ruta_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_ruta_srl_cod_ruta_seq OWNER TO postgres;

--
-- TOC entry 2064 (class 0 OID 0)
-- Dependencies: 171
-- Name: t_ruta_srl_cod_ruta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_ruta_srl_cod_ruta_seq OWNED BY public.t_ruta.srl_cod_ruta;


--
-- TOC entry 181 (class 1259 OID 16442)
-- Name: t_tip_documento; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_tip_documento (
    srl_cod_documento integer NOT NULL,
    var_nombre character varying(20) NOT NULL
);


ALTER TABLE public.t_tip_documento OWNER TO postgres;

--
-- TOC entry 180 (class 1259 OID 16440)
-- Name: t_tip_documento_srl_cod_documento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_tip_documento_srl_cod_documento_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_tip_documento_srl_cod_documento_seq OWNER TO postgres;

--
-- TOC entry 2065 (class 0 OID 0)
-- Dependencies: 180
-- Name: t_tip_documento_srl_cod_documento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_tip_documento_srl_cod_documento_seq OWNED BY public.t_tip_documento.srl_cod_documento;


--
-- TOC entry 176 (class 1259 OID 16421)
-- Name: t_usuario; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_usuario (
    srl_cod_usuario integer NOT NULL,
    var_usuario character varying(30) NOT NULL,
    var_clave character varying(100),
    bol_estado boolean,
    var_email character varying(50),
    var_rol character varying(16)
);


ALTER TABLE public.t_usuario OWNER TO postgres;

--
-- TOC entry 175 (class 1259 OID 16419)
-- Name: t_usuario_srl_cod_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_usuario_srl_cod_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_usuario_srl_cod_usuario_seq OWNER TO postgres;

--
-- TOC entry 2066 (class 0 OID 0)
-- Dependencies: 175
-- Name: t_usuario_srl_cod_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_usuario_srl_cod_usuario_seq OWNED BY public.t_usuario.srl_cod_usuario;


--
-- TOC entry 187 (class 1259 OID 16474)
-- Name: t_visitante; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE public.t_visitante (
    srl_cod_visitante integer NOT NULL,
    srl_cod_documento integer NOT NULL,
    srl_cod_categoria integer,
    srl_cod_pais integer,
    var_nombre character varying(50) NOT NULL,
    var_apellido character varying(50) NOT NULL,
    var_nro_documento character varying(20),
    dte_fec_nacimiento date,
    bol_sexo integer
);


ALTER TABLE public.t_visitante OWNER TO postgres;

--
-- TOC entry 2067 (class 0 OID 0)
-- Dependencies: 187
-- Name: COLUMN t_visitante.srl_cod_visitante; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.t_visitante.srl_cod_visitante IS 'Codigo del visitante';


--
-- TOC entry 2068 (class 0 OID 0)
-- Dependencies: 187
-- Name: COLUMN t_visitante.srl_cod_documento; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.t_visitante.srl_cod_documento IS 'Codigo de documento';


--
-- TOC entry 2069 (class 0 OID 0)
-- Dependencies: 187
-- Name: COLUMN t_visitante.srl_cod_categoria; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.t_visitante.srl_cod_categoria IS 'Codigo de categoria';


--
-- TOC entry 2070 (class 0 OID 0)
-- Dependencies: 187
-- Name: COLUMN t_visitante.srl_cod_pais; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.t_visitante.srl_cod_pais IS 'Codigo del pais';


--
-- TOC entry 186 (class 1259 OID 16472)
-- Name: t_visitante_srl_cod_visitante_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_visitante_srl_cod_visitante_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_visitante_srl_cod_visitante_seq OWNER TO postgres;

--
-- TOC entry 2071 (class 0 OID 0)
-- Dependencies: 186
-- Name: t_visitante_srl_cod_visitante_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_visitante_srl_cod_visitante_seq OWNED BY public.t_visitante.srl_cod_visitante;


--
-- TOC entry 1885 (class 2604 OID 16437)
-- Name: srl_cod_categoria; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_categoria ALTER COLUMN srl_cod_categoria SET DEFAULT nextval('public.t_categoria_srl_cod_categoria_seq'::regclass);


--
-- TOC entry 1890 (class 2604 OID 16501)
-- Name: srl_cod_grupo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_grupo ALTER COLUMN srl_cod_grupo SET DEFAULT nextval('public.t_grupo_srl_cod_grupo_seq'::regclass);


--
-- TOC entry 1883 (class 2604 OID 16413)
-- Name: srl_cod_noticia; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_noticia ALTER COLUMN srl_cod_noticia SET DEFAULT nextval('public.t_noticia_srl_cod_noticia_seq'::regclass);


--
-- TOC entry 1888 (class 2604 OID 16461)
-- Name: srl_cod_pago; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_pago ALTER COLUMN srl_cod_pago SET DEFAULT nextval('public.t_pago_srl_cod_pago_seq'::regclass);


--
-- TOC entry 1887 (class 2604 OID 16453)
-- Name: srl_cod_pais; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_pais ALTER COLUMN srl_cod_pais SET DEFAULT nextval('public.t_pais_srl_cod_pais_seq'::regclass);


--
-- TOC entry 1882 (class 2604 OID 16405)
-- Name: srl_cod_ruta; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_ruta ALTER COLUMN srl_cod_ruta SET DEFAULT nextval('public.t_ruta_srl_cod_ruta_seq'::regclass);


--
-- TOC entry 1886 (class 2604 OID 16445)
-- Name: srl_cod_documento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_tip_documento ALTER COLUMN srl_cod_documento SET DEFAULT nextval('public.t_tip_documento_srl_cod_documento_seq'::regclass);


--
-- TOC entry 1884 (class 2604 OID 16424)
-- Name: srl_cod_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_usuario ALTER COLUMN srl_cod_usuario SET DEFAULT nextval('public.t_usuario_srl_cod_usuario_seq'::regclass);


--
-- TOC entry 1889 (class 2604 OID 16477)
-- Name: srl_cod_visitante; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_visitante ALTER COLUMN srl_cod_visitante SET DEFAULT nextval('public.t_visitante_srl_cod_visitante_seq'::regclass);


--
-- TOC entry 2034 (class 0 OID 16434)
-- Dependencies: 179
-- Data for Name: t_categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.t_categoria VALUES (1, 'Adulto');
INSERT INTO public.t_categoria VALUES (2, 'Estudiante');


--
-- TOC entry 2072 (class 0 OID 0)
-- Dependencies: 178
-- Name: t_categoria_srl_cod_categoria_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_categoria_srl_cod_categoria_seq', 2, true);


--
-- TOC entry 2044 (class 0 OID 16498)
-- Dependencies: 189
-- Data for Name: t_grupo; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2073 (class 0 OID 0)
-- Dependencies: 188
-- Name: t_grupo_srl_cod_grupo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_grupo_srl_cod_grupo_seq', 1, false);


--
-- TOC entry 2045 (class 0 OID 16517)
-- Dependencies: 190
-- Data for Name: t_grupo_visitante; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2029 (class 0 OID 16410)
-- Dependencies: 174
-- Data for Name: t_noticia; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.t_noticia VALUES (1, 'NOTICIA 1', 'Texto de prueba de noticia', '2018-04-09', true, 'ADMIN');
INSERT INTO public.t_noticia VALUES (2, 'NOTICIA 2', 'Texto de prueba de noticia 2', '2018-04-14', false, 'ADMIN');


--
-- TOC entry 2074 (class 0 OID 0)
-- Dependencies: 173
-- Name: t_noticia_srl_cod_noticia_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_noticia_srl_cod_noticia_seq', 2, true);


--
-- TOC entry 2032 (class 0 OID 16427)
-- Dependencies: 177
-- Data for Name: t_operador; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2040 (class 0 OID 16458)
-- Dependencies: 185
-- Data for Name: t_pago; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2075 (class 0 OID 0)
-- Dependencies: 184
-- Name: t_pago_srl_cod_pago_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_pago_srl_cod_pago_seq', 1, false);


--
-- TOC entry 2038 (class 0 OID 16450)
-- Dependencies: 183
-- Data for Name: t_pais; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.t_pais VALUES (1, 'AFGANISTAN');
INSERT INTO public.t_pais VALUES (2, 'ISLAS ALAND');
INSERT INTO public.t_pais VALUES (3, 'ALBANIA');
INSERT INTO public.t_pais VALUES (4, 'ARGELIA');
INSERT INTO public.t_pais VALUES (5, 'SAMOA ESTADOUNIDENSE');
INSERT INTO public.t_pais VALUES (6, 'ANDORRA');
INSERT INTO public.t_pais VALUES (7, 'ANGOLA');
INSERT INTO public.t_pais VALUES (8, 'ANGUILLA');
INSERT INTO public.t_pais VALUES (9, 'ANTARTIDA');
INSERT INTO public.t_pais VALUES (10, 'ANTIGUA Y BARBUDA');
INSERT INTO public.t_pais VALUES (11, 'ARGENTINA');
INSERT INTO public.t_pais VALUES (12, 'ARMENIA');
INSERT INTO public.t_pais VALUES (13, 'ARUBA');
INSERT INTO public.t_pais VALUES (14, 'AUSTRALIA');
INSERT INTO public.t_pais VALUES (15, 'AUSTRIA');
INSERT INTO public.t_pais VALUES (16, 'AZERBAIYAN');
INSERT INTO public.t_pais VALUES (17, 'BAHAMAS');
INSERT INTO public.t_pais VALUES (18, 'BAHREIN');
INSERT INTO public.t_pais VALUES (19, 'BANGLADESH');
INSERT INTO public.t_pais VALUES (20, 'BARBADOS');
INSERT INTO public.t_pais VALUES (21, 'BIELORRUSIA');
INSERT INTO public.t_pais VALUES (22, 'BELGICA');
INSERT INTO public.t_pais VALUES (23, 'BELICE');
INSERT INTO public.t_pais VALUES (24, 'BENIN');
INSERT INTO public.t_pais VALUES (25, 'BERMUDAS');
INSERT INTO public.t_pais VALUES (26, 'BHUTAN');
INSERT INTO public.t_pais VALUES (27, 'BOLIVIA');
INSERT INTO public.t_pais VALUES (28, 'BOSNIA Y HERZEGOVINA');
INSERT INTO public.t_pais VALUES (29, 'BOTSWANA');
INSERT INTO public.t_pais VALUES (30, 'ISLA BOUVET');
INSERT INTO public.t_pais VALUES (31, 'BRASIL');
INSERT INTO public.t_pais VALUES (32, 'TERRITORIO BRITANICO');
INSERT INTO public.t_pais VALUES (33, 'BRUNEI');
INSERT INTO public.t_pais VALUES (34, 'BULGARIA');
INSERT INTO public.t_pais VALUES (35, 'BURKINA FASO');
INSERT INTO public.t_pais VALUES (36, 'BURUNDI');
INSERT INTO public.t_pais VALUES (37, 'CAMBOYA');
INSERT INTO public.t_pais VALUES (38, 'CAMERUN');
INSERT INTO public.t_pais VALUES (39, 'CANADA');
INSERT INTO public.t_pais VALUES (40, 'CABO VERDE');
INSERT INTO public.t_pais VALUES (41, 'ISLAS CAIMAN');
INSERT INTO public.t_pais VALUES (42, 'REPUBLICA');
INSERT INTO public.t_pais VALUES (43, 'CHAD');
INSERT INTO public.t_pais VALUES (44, 'CHILE');
INSERT INTO public.t_pais VALUES (45, 'CHINA');
INSERT INTO public.t_pais VALUES (46, 'ISLA DE NAVIDAD');
INSERT INTO public.t_pais VALUES (47, 'ISLAS COCOS');
INSERT INTO public.t_pais VALUES (48, 'COLOMBIA');
INSERT INTO public.t_pais VALUES (49, 'COMORAS');
INSERT INTO public.t_pais VALUES (50, 'CONGO');
INSERT INTO public.t_pais VALUES (51, 'CONGO REPUBLICA');
INSERT INTO public.t_pais VALUES (52, 'ISLAS DE COOK');
INSERT INTO public.t_pais VALUES (53, 'COSTA RICA');
INSERT INTO public.t_pais VALUES (54, 'COSTA DE MARFIL');
INSERT INTO public.t_pais VALUES (55, 'CROACIA');
INSERT INTO public.t_pais VALUES (56, 'CUBA');
INSERT INTO public.t_pais VALUES (57, 'CHIPRE');
INSERT INTO public.t_pais VALUES (58, 'REPUBLICA CHECA');
INSERT INTO public.t_pais VALUES (59, 'DINAMARCA');
INSERT INTO public.t_pais VALUES (60, 'DJIBOUTI');
INSERT INTO public.t_pais VALUES (61, 'DOMINICA');
INSERT INTO public.t_pais VALUES (62, 'REPUBLICA DOMINICANA');
INSERT INTO public.t_pais VALUES (63, 'ECUADOR');
INSERT INTO public.t_pais VALUES (64, 'EGIPTO');
INSERT INTO public.t_pais VALUES (65, 'EL SALVADOR');
INSERT INTO public.t_pais VALUES (66, 'GUINEA ECUATORIAL');
INSERT INTO public.t_pais VALUES (67, 'ERITREA');
INSERT INTO public.t_pais VALUES (68, 'ESTONIA');
INSERT INTO public.t_pais VALUES (69, 'ETIOPIA');
INSERT INTO public.t_pais VALUES (70, 'ISLAS MALVINAS');
INSERT INTO public.t_pais VALUES (71, 'ISLAS FERCE');
INSERT INTO public.t_pais VALUES (72, 'FIJI');
INSERT INTO public.t_pais VALUES (73, 'FINLANDIA');
INSERT INTO public.t_pais VALUES (74, 'FRANCIA');
INSERT INTO public.t_pais VALUES (75, 'GUINEA FRANCESA');
INSERT INTO public.t_pais VALUES (76, 'POLINESIA');
INSERT INTO public.t_pais VALUES (77, 'TERRITORIO AUSTRALES');
INSERT INTO public.t_pais VALUES (78, 'GABON');
INSERT INTO public.t_pais VALUES (79, 'GAMBIA');
INSERT INTO public.t_pais VALUES (80, 'GEORGIA');
INSERT INTO public.t_pais VALUES (81, 'ALEMANIA');
INSERT INTO public.t_pais VALUES (82, 'GHANA');
INSERT INTO public.t_pais VALUES (83, 'GIBRALTAR');
INSERT INTO public.t_pais VALUES (84, 'GRECIA');
INSERT INTO public.t_pais VALUES (85, 'GROENLANDIA');
INSERT INTO public.t_pais VALUES (86, 'GRANADA');
INSERT INTO public.t_pais VALUES (87, 'GUADALUPE');
INSERT INTO public.t_pais VALUES (88, 'GUAM');
INSERT INTO public.t_pais VALUES (89, 'GUATEMALA');
INSERT INTO public.t_pais VALUES (90, 'GUERSNEY');
INSERT INTO public.t_pais VALUES (91, 'GUINEA');
INSERT INTO public.t_pais VALUES (92, 'GUINEA BISSAU');
INSERT INTO public.t_pais VALUES (93, 'GUYANA');
INSERT INTO public.t_pais VALUES (94, 'HAITI');
INSERT INTO public.t_pais VALUES (95, 'ISLAS HEARD Y MCDONALD');
INSERT INTO public.t_pais VALUES (96, 'HONDURAS');
INSERT INTO public.t_pais VALUES (97, 'HONG KONG');
INSERT INTO public.t_pais VALUES (98, 'HUNGRIA');
INSERT INTO public.t_pais VALUES (99, 'ISLANDIA');
INSERT INTO public.t_pais VALUES (100, 'INDIA');
INSERT INTO public.t_pais VALUES (101, 'INDONESIA');
INSERT INTO public.t_pais VALUES (102, 'IRAN');
INSERT INTO public.t_pais VALUES (103, 'IRAQ');
INSERT INTO public.t_pais VALUES (104, 'IRLANDA');
INSERT INTO public.t_pais VALUES (105, 'ISLA DE MAN');
INSERT INTO public.t_pais VALUES (106, 'ISRAEL');
INSERT INTO public.t_pais VALUES (107, 'ITALIA');
INSERT INTO public.t_pais VALUES (108, 'JAMAICA');
INSERT INTO public.t_pais VALUES (109, 'JAPON');
INSERT INTO public.t_pais VALUES (110, 'JERSEY');
INSERT INTO public.t_pais VALUES (111, 'JORDANIA');
INSERT INTO public.t_pais VALUES (112, 'KAZAJSTAN');
INSERT INTO public.t_pais VALUES (113, 'KENYA');
INSERT INTO public.t_pais VALUES (114, 'KIRIBATI');
INSERT INTO public.t_pais VALUES (115, 'COREA');
INSERT INTO public.t_pais VALUES (116, 'COREA');
INSERT INTO public.t_pais VALUES (117, 'KUWAIT');
INSERT INTO public.t_pais VALUES (118, 'KIRGUISTAN');
INSERT INTO public.t_pais VALUES (119, 'LAO');
INSERT INTO public.t_pais VALUES (120, 'LETONIA');
INSERT INTO public.t_pais VALUES (121, 'LIBANO');
INSERT INTO public.t_pais VALUES (122, 'LESOTHO');
INSERT INTO public.t_pais VALUES (123, 'LIBERIA');
INSERT INTO public.t_pais VALUES (124, 'LIBIA');
INSERT INTO public.t_pais VALUES (125, 'LIECHTENSTEIN');
INSERT INTO public.t_pais VALUES (126, 'LITUANIA');
INSERT INTO public.t_pais VALUES (127, 'LUXEMBURGO');
INSERT INTO public.t_pais VALUES (128, 'MACAO');
INSERT INTO public.t_pais VALUES (129, 'MACEDONIA');
INSERT INTO public.t_pais VALUES (130, 'MADAGASCAR');
INSERT INTO public.t_pais VALUES (131, 'MALAWI');
INSERT INTO public.t_pais VALUES (132, 'MALASIA');
INSERT INTO public.t_pais VALUES (133, 'MALDIVAS');
INSERT INTO public.t_pais VALUES (134, 'MALI');
INSERT INTO public.t_pais VALUES (135, 'MALTA');
INSERT INTO public.t_pais VALUES (136, 'ISLAS MARSHALL');
INSERT INTO public.t_pais VALUES (137, 'MARTINICA');
INSERT INTO public.t_pais VALUES (138, 'MAURITANIA');
INSERT INTO public.t_pais VALUES (139, 'MAURICIO');
INSERT INTO public.t_pais VALUES (140, 'MAYOTTE');
INSERT INTO public.t_pais VALUES (141, 'MEXICO');
INSERT INTO public.t_pais VALUES (142, 'MICRONESIA');
INSERT INTO public.t_pais VALUES (143, 'MOLDOVIA');
INSERT INTO public.t_pais VALUES (144, 'MONACO');
INSERT INTO public.t_pais VALUES (145, 'MONGOLIA');
INSERT INTO public.t_pais VALUES (146, 'MONTENEGRO');
INSERT INTO public.t_pais VALUES (147, 'MONTSERRAT');
INSERT INTO public.t_pais VALUES (148, 'MARRUECOS');
INSERT INTO public.t_pais VALUES (149, 'MOZAMBIQUE');
INSERT INTO public.t_pais VALUES (150, 'MYANMAR');
INSERT INTO public.t_pais VALUES (151, 'NAMIBIA');
INSERT INTO public.t_pais VALUES (152, 'NAURU');
INSERT INTO public.t_pais VALUES (153, 'NEPAL');
INSERT INTO public.t_pais VALUES (154, 'HOLANDA');
INSERT INTO public.t_pais VALUES (155, 'ANTILLAS HOLANDESAS');
INSERT INTO public.t_pais VALUES (156, 'NUEVA CALEDONIA');
INSERT INTO public.t_pais VALUES (157, 'NUEVA ZELANDA');
INSERT INTO public.t_pais VALUES (158, 'NICARAGUA');
INSERT INTO public.t_pais VALUES (159, 'NIGER');
INSERT INTO public.t_pais VALUES (160, 'NIGERIA');
INSERT INTO public.t_pais VALUES (161, 'ISLA NIUE');
INSERT INTO public.t_pais VALUES (162, 'ISLA NORFOLK');
INSERT INTO public.t_pais VALUES (163, 'ISLAS MARIANAS DEL NORTE');
INSERT INTO public.t_pais VALUES (164, 'NORUEGA');
INSERT INTO public.t_pais VALUES (165, 'OMAN');
INSERT INTO public.t_pais VALUES (166, 'PAKISTAN');
INSERT INTO public.t_pais VALUES (167, 'PALAU');
INSERT INTO public.t_pais VALUES (168, 'TERRITORIO OCUPADO');
INSERT INTO public.t_pais VALUES (169, 'PANAMA');
INSERT INTO public.t_pais VALUES (170, 'PAPUA');
INSERT INTO public.t_pais VALUES (171, 'PARAGUAY');
INSERT INTO public.t_pais VALUES (172, 'PERU');
INSERT INTO public.t_pais VALUES (173, 'FILIPINAS');
INSERT INTO public.t_pais VALUES (174, 'SLA PITCAIRN');
INSERT INTO public.t_pais VALUES (175, 'POLONIA');
INSERT INTO public.t_pais VALUES (176, 'PORTUGAL');
INSERT INTO public.t_pais VALUES (177, 'PUERTO RICO');
INSERT INTO public.t_pais VALUES (178, 'QATAR');
INSERT INTO public.t_pais VALUES (179, 'REUNION');
INSERT INTO public.t_pais VALUES (180, 'RUMANIA');
INSERT INTO public.t_pais VALUES (181, 'RUSIA');
INSERT INTO public.t_pais VALUES (182, 'RUANDA');
INSERT INTO public.t_pais VALUES (183, 'SAN BARTOLOME');
INSERT INTO public.t_pais VALUES (184, 'SANTA HELENA');
INSERT INTO public.t_pais VALUES (185, 'SAINT KITTS');
INSERT INTO public.t_pais VALUES (186, 'SANTA LUCIA');
INSERT INTO public.t_pais VALUES (187, 'SAN PEDRO');
INSERT INTO public.t_pais VALUES (188, 'SAN VICENTE');
INSERT INTO public.t_pais VALUES (189, 'SAMOA');
INSERT INTO public.t_pais VALUES (190, 'SAN MARINO');
INSERT INTO public.t_pais VALUES (191, 'SAO TOME');
INSERT INTO public.t_pais VALUES (192, 'ARABIA SAUDITA');
INSERT INTO public.t_pais VALUES (193, 'SENEGAL');
INSERT INTO public.t_pais VALUES (194, 'SERBIA');
INSERT INTO public.t_pais VALUES (195, 'SEYCHELLES');
INSERT INTO public.t_pais VALUES (196, 'SIERRA LEONA');
INSERT INTO public.t_pais VALUES (197, 'SINGAPUR');
INSERT INTO public.t_pais VALUES (198, 'REPUBLICA ESLOVACA');
INSERT INTO public.t_pais VALUES (199, 'ESLOVENIA');
INSERT INTO public.t_pais VALUES (200, 'ISLAS SALOMON');
INSERT INTO public.t_pais VALUES (201, 'SOMALIA');
INSERT INTO public.t_pais VALUES (202, 'SUDAFRICA');
INSERT INTO public.t_pais VALUES (203, 'GEORGIA DEL SUR');
INSERT INTO public.t_pais VALUES (204, 'ESPANA');
INSERT INTO public.t_pais VALUES (205, 'SRI LANKA');
INSERT INTO public.t_pais VALUES (206, 'SUDAN');
INSERT INTO public.t_pais VALUES (207, 'SURINAM');
INSERT INTO public.t_pais VALUES (208, 'ISLAS SVALBARD Y JAN MAYEN');
INSERT INTO public.t_pais VALUES (209, 'SWAZILANDIA');
INSERT INTO public.t_pais VALUES (210, 'SUECIA');
INSERT INTO public.t_pais VALUES (211, 'SUIZA');
INSERT INTO public.t_pais VALUES (212, 'SIRIA');
INSERT INTO public.t_pais VALUES (213, 'TAIWAN');
INSERT INTO public.t_pais VALUES (214, 'TAYIKISTAN');
INSERT INTO public.t_pais VALUES (215, 'TANZANIA');
INSERT INTO public.t_pais VALUES (216, 'TAILANDIA');
INSERT INTO public.t_pais VALUES (217, 'TIMORLESTE');
INSERT INTO public.t_pais VALUES (218, 'TOGO');
INSERT INTO public.t_pais VALUES (219, 'TOKELAU');
INSERT INTO public.t_pais VALUES (220, 'TONGA');
INSERT INTO public.t_pais VALUES (221, 'TRINIDAD Y TOBAGO');
INSERT INTO public.t_pais VALUES (222, 'TUNEZ');
INSERT INTO public.t_pais VALUES (223, 'TURQUIA');
INSERT INTO public.t_pais VALUES (224, 'TURKMENISTAN');
INSERT INTO public.t_pais VALUES (225, 'ISLAS TURCAS Y CAICOS');
INSERT INTO public.t_pais VALUES (226, 'TUVALU');
INSERT INTO public.t_pais VALUES (227, 'UGANDA');
INSERT INTO public.t_pais VALUES (228, 'UCRANIA');
INSERT INTO public.t_pais VALUES (229, 'EMIRATOS ARABES UNIDOS');
INSERT INTO public.t_pais VALUES (230, 'INGLATERRA');
INSERT INTO public.t_pais VALUES (231, 'ESTADOS UNIDOS');
INSERT INTO public.t_pais VALUES (232, 'ISLAS PERIFERICAS MENORES DE LOS EEUU');
INSERT INTO public.t_pais VALUES (233, 'URUGUAY');
INSERT INTO public.t_pais VALUES (234, 'UZBEKISTAN');
INSERT INTO public.t_pais VALUES (235, 'VANUATU');
INSERT INTO public.t_pais VALUES (236, 'VENEZUELA');
INSERT INTO public.t_pais VALUES (237, 'VIETNAM');
INSERT INTO public.t_pais VALUES (238, 'ISLAS VIRGENES BRITANICAS');
INSERT INTO public.t_pais VALUES (239, 'ISLAS VIRGENES DE LOS EEUU');
INSERT INTO public.t_pais VALUES (240, 'ISLAS WALLIS Y FUTUNA');
INSERT INTO public.t_pais VALUES (241, 'SAHARA');
INSERT INTO public.t_pais VALUES (242, 'YEMEN');
INSERT INTO public.t_pais VALUES (243, 'ZAMBIA');
INSERT INTO public.t_pais VALUES (244, 'ZIMBABWE');


--
-- TOC entry 2076 (class 0 OID 0)
-- Dependencies: 182
-- Name: t_pais_srl_cod_pais_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_pais_srl_cod_pais_seq', 31, true);


--
-- TOC entry 2027 (class 0 OID 16402)
-- Dependencies: 172
-- Data for Name: t_ruta; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.t_ruta VALUES (1, 'Ruta 1', true);
INSERT INTO public.t_ruta VALUES (2, 'Ruta 2', true);
INSERT INTO public.t_ruta VALUES (3, 'Ruta 3', true);
INSERT INTO public.t_ruta VALUES (4, 'Ruta 4', true);


--
-- TOC entry 2077 (class 0 OID 0)
-- Dependencies: 171
-- Name: t_ruta_srl_cod_ruta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_ruta_srl_cod_ruta_seq', 4, true);


--
-- TOC entry 2036 (class 0 OID 16442)
-- Dependencies: 181
-- Data for Name: t_tip_documento; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.t_tip_documento VALUES (1, 'PSAPORTE');
INSERT INTO public.t_tip_documento VALUES (2, 'DNI');
INSERT INTO public.t_tip_documento VALUES (3, 'CN');
INSERT INTO public.t_tip_documento VALUES (4, 'CE');
INSERT INTO public.t_tip_documento VALUES (5, 'TI');
INSERT INTO public.t_tip_documento VALUES (6, 'CES');
INSERT INTO public.t_tip_documento VALUES (7, 'RUC');


--
-- TOC entry 2078 (class 0 OID 0)
-- Dependencies: 180
-- Name: t_tip_documento_srl_cod_documento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_tip_documento_srl_cod_documento_seq', 7, true);


--
-- TOC entry 2031 (class 0 OID 16421)
-- Dependencies: 176
-- Data for Name: t_usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2079 (class 0 OID 0)
-- Dependencies: 175
-- Name: t_usuario_srl_cod_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_usuario_srl_cod_usuario_seq', 1, false);


--
-- TOC entry 2042 (class 0 OID 16474)
-- Dependencies: 187
-- Data for Name: t_visitante; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2080 (class 0 OID 0)
-- Dependencies: 186
-- Name: t_visitante_srl_cod_visitante_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_visitante_srl_cod_visitante_seq', 1, false);


--
-- TOC entry 1900 (class 2606 OID 16439)
-- Name: t_categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY public.t_categoria
    ADD CONSTRAINT t_categoria_pkey PRIMARY KEY (srl_cod_categoria);


--
-- TOC entry 1910 (class 2606 OID 16503)
-- Name: t_grupo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY public.t_grupo
    ADD CONSTRAINT t_grupo_pkey PRIMARY KEY (srl_cod_grupo);


--
-- TOC entry 1894 (class 2606 OID 16418)
-- Name: t_noticia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY public.t_noticia
    ADD CONSTRAINT t_noticia_pkey PRIMARY KEY (srl_cod_noticia);


--
-- TOC entry 1898 (class 2606 OID 16431)
-- Name: t_operador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY public.t_operador
    ADD CONSTRAINT t_operador_pkey PRIMARY KEY (var_cod_operador);


--
-- TOC entry 1906 (class 2606 OID 16466)
-- Name: t_pago_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY public.t_pago
    ADD CONSTRAINT t_pago_pkey PRIMARY KEY (srl_cod_pago);


--
-- TOC entry 1904 (class 2606 OID 16455)
-- Name: t_pais_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY public.t_pais
    ADD CONSTRAINT t_pais_pkey PRIMARY KEY (srl_cod_pais);


--
-- TOC entry 1892 (class 2606 OID 16407)
-- Name: t_ruta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY public.t_ruta
    ADD CONSTRAINT t_ruta_pkey PRIMARY KEY (srl_cod_ruta);


--
-- TOC entry 1902 (class 2606 OID 16447)
-- Name: t_tip_documento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY public.t_tip_documento
    ADD CONSTRAINT t_tip_documento_pkey PRIMARY KEY (srl_cod_documento);


--
-- TOC entry 1896 (class 2606 OID 16426)
-- Name: t_usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY public.t_usuario
    ADD CONSTRAINT t_usuario_pkey PRIMARY KEY (srl_cod_usuario);


--
-- TOC entry 1908 (class 2606 OID 16479)
-- Name: t_visitante_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY public.t_visitante
    ADD CONSTRAINT t_visitante_pkey PRIMARY KEY (srl_cod_visitante);


--
-- TOC entry 1916 (class 2606 OID 16512)
-- Name: t_grupo_srl_cod_ruta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_grupo
    ADD CONSTRAINT t_grupo_srl_cod_ruta_fkey FOREIGN KEY (srl_cod_ruta) REFERENCES public.t_ruta(srl_cod_ruta);


--
-- TOC entry 1915 (class 2606 OID 16507)
-- Name: t_grupo_var_cod_operador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_grupo
    ADD CONSTRAINT t_grupo_var_cod_operador_fkey FOREIGN KEY (var_cod_operador) REFERENCES public.t_operador(var_cod_operador);


--
-- TOC entry 1917 (class 2606 OID 16520)
-- Name: t_grupo_visitante_srl_cod_grupo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_grupo_visitante
    ADD CONSTRAINT t_grupo_visitante_srl_cod_grupo_fkey FOREIGN KEY (srl_cod_grupo) REFERENCES public.t_grupo(srl_cod_grupo);


--
-- TOC entry 1918 (class 2606 OID 16525)
-- Name: t_grupo_visitante_srl_cod_visitante_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_grupo_visitante
    ADD CONSTRAINT t_grupo_visitante_srl_cod_visitante_fkey FOREIGN KEY (srl_cod_visitante) REFERENCES public.t_visitante(srl_cod_visitante);


--
-- TOC entry 1911 (class 2606 OID 16467)
-- Name: t_pago_var_cod_operador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_pago
    ADD CONSTRAINT t_pago_var_cod_operador_fkey FOREIGN KEY (var_cod_operador) REFERENCES public.t_operador(var_cod_operador);


--
-- TOC entry 1912 (class 2606 OID 16480)
-- Name: t_visitante_srl_cod_categoria_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_visitante
    ADD CONSTRAINT t_visitante_srl_cod_categoria_fkey FOREIGN KEY (srl_cod_categoria) REFERENCES public.t_categoria(srl_cod_categoria);


--
-- TOC entry 1914 (class 2606 OID 16490)
-- Name: t_visitante_srl_cod_documento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_visitante
    ADD CONSTRAINT t_visitante_srl_cod_documento_fkey FOREIGN KEY (srl_cod_documento) REFERENCES public.t_tip_documento(srl_cod_documento);


--
-- TOC entry 1913 (class 2606 OID 16485)
-- Name: t_visitante_srl_cod_pais_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_visitante
    ADD CONSTRAINT t_visitante_srl_cod_pais_fkey FOREIGN KEY (srl_cod_pais) REFERENCES public.t_pais(srl_cod_pais);


--
-- TOC entry 2053 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2018-05-13 10:10:27

--
-- PostgreSQL database dump complete
--

