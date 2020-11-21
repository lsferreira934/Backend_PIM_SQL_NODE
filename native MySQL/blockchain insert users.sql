-- inserting user in blockchain_user for tests
insert into blockchain_user
VALUES
    (default, 'Sabrina Monteiro', '102030', '1988/04/12', 'monteiro@azure.com', '11-9781-3232', 'pass', 'Rua Monteiro Lobato', 'Clear', '11721', default, now(), now());

-- Others tests
insert into blockchain_user
VALUES
    (default, 'Tavares', '505050', '1995/09/26', 'tavares@azure.com', '11-9883-3231', 'pass', 'Av. Mendes', 'RICO', '105171', 951.00, now(), now());

insert into blockchain_user
VALUES
    (default, 'Juliana Paes', '10200300', '1997-10-13', 'paes@gcp.com', '(13)9881-8888', 'pass', 'Wall Street, n 81, USA', 'RICO', '118180', default, now(), now());