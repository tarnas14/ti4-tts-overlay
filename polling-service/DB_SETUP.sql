create table if not exists auth (
  token varchar not null,
  clientId varchar not null,
  constraint pk_auth_token primary key (token)
);
