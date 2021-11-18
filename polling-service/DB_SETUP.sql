create table if not exists auth (
  token varchar not null,
  "clientId" varchar not null,
  constraint pk_auth_token primary key (token)
);

insert into auth(token, "clientId") values ('testToken', 'testClient');

create table if not exists sessions (
  id varchar not null,
  "clientId" varchar not null,
  "type" varchar not null,
  "ttsKey" varchar not null,
  config jsonb not null default '{}'::jsonb,
  "createdOn" timestamp not null default now(),
  "active" boolean not null default TRUE,
  "pollingInterval" int not null default 10,
  constraint pk_sessions_id primary key (id)
);
--  alter table pipelines
--  add column if not exists config jsonb not null default '{}'::jsonb;
