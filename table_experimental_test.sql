CREATE SEQUENCE public.experimental_table_id_seq;

CREATE TABLE public.experimental_table
(
    id bigint NOT NULL DEFAULT nextval('experimental_table_id_seq'),
    firtsname character varying(50) COLLATE pg_catalog."default",
    middlename character varying(50) COLLATE pg_catalog."default",
    lastname character varying(50) COLLATE pg_catalog."default",
    phonenumber character varying(50) COLLATE pg_catalog."default",
    birthday timestamp with time zone,
    email character varying COLLATE pg_catalog."default",
    CONSTRAINT experimental_table_pkey PRIMARY KEY (id)
);

TABLESPACE pg_default;

ALTER TABLE public.experimental_table
    OWNER to postgres;

docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres --user postgres -d postgres:13.2
docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres