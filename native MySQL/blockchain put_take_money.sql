-- PROCEDURE OF EXTRACT ('saldo' and 'depósito') in Blockchain Blockchain_extract
use db_pim;
show tables;
desc blockchain_extract;

START TRANSACTION;

DROP PROCEDURE IF EXISTS sp_put_take_money;
DELIMITER $$
CREATE PROCEDURE sp_put_take_money
(
	IN p_action CHAR(1)
   ,INOUT p_toCPF varchar(15) 
  ,IN p_value DECIMAL(8,2)  
)
BEGIN
	-- getting primarykey
	DECLARE v_user int; 
	SELECT id from BLOCKCHAIN_USER where cpf = p_toCPF into v_user;
    
	IF p_action = UPPER('d')  THEN
		-- efetuar depósito (put)
			UPDATE blockchain_user
				SET balance = balance + p_value
			WHERE cpf = p_toCPF;
            -- creating log
            INSERT INTO blockchain_extract values
				(default,'depósito', p_value, v_user, now(), now() );
            
			-- SELECT CONCAT('Depósito de: R$ ', p_value , ' realizado com sucesso para o CPF: ' , p_toCPF );
             SELECT CONCAT('Depósito para CPF:' , p_toCPF , '  realizado com sucesso' ) as 'Success';

	ELSEIF p_action = UPPER('s') THEN
			-- verificando se a quantidade é maior que o valor atual do saldo
				IF p_value > (select balance from blockchain_user WHERE cpf = p_toCPF) THEN
					SELECT 'O valor solicitado para saque é maior que o valor do saldo atual,
							entre com um  valor menor para efetuar o saque.' as 'WARNING';
				ELSE
					-- efetuar saque
					UPDATE blockchain_user
						SET balance = balance - p_value
					WHERE cpf = p_toCPF;
                    -- creating log
                    INSERT INTO blockchain_extract values
					 	(default,'saque', p_value, v_user, now(), now() );
                
				-- SELECT CONCAT('Saque de: R$ ', p_value , ' realizado com sucesso para o CPF: ' ,  p_toCPF );
                SELECT CONCAT('Saque realizado com sucesso para o CPF: ', p_toCPF );
                END IF;
		
	 ELSE
		 IF p_action NOT IN ( UPPER('D'),UPPER('S') ) THEN
			
				SELECT 'Opção inválida, entre com "D" para DEPÓSITO ou "S" para SAQUE.' as 'WARNING';
			END IF;
    END IF;
		
END ;
END $$
DELIMITER ; 
select * from blockchain_user;
 -- Id 2 'tavares' tem 751 reais, ele vai sacar 200 ficando com 551 - CPF: 505050
 call sp_put_take_money ('s','505050',200);
 -- vamos testar
 select * from blockchain_user where cpf = '505050'; 
 -- diminuiu
 select * from blockchain_extract;
 -- agora vamos fazer a Sabrina, id 1, saldo R$ 0 sacar 10, cpf: 102030
  call sp_put_take_money ('s','102030',10);
   select * from blockchain_user where cpf = '102030'; 
-- continua com o mesmo valor
-- vamos fazer ela depositar 100
  call sp_put_take_money ('d','102030',100);
   select * from blockchain_user where cpf = '102030'; 
    select * from blockchain_extract;
ROLLBACK;
COMMIT;

-- Test this way: call sp_put_take_money ('d' OU 's', 'CPF', valorMoney);

