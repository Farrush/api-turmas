# Api para atividade da faculdade

## Instale as dependências
    `npm install`

## Crie um arquivo .env na raiz do projeto
##### PORT=5040
##### HOST=localhost
##### DATABASE=nome do bd
##### MYSQL_PORT=porta do mysql
##### DB_USER=usuario do bd
##### DB_PWD=senha do usuário

## Crie o banco de dados com este script:

create database facul_db;

use facul_db;


create table tb_turma(

id_turma int auto_increment primary key,

nm_turma varchar(200) not null,

ds_curso varchar(200),

nr_ano_letivo int not null,

qtd_capacidade int not null,

bt_ativo boolean not null,

dt_inclusao datetime not null);

create table tb_login(

	id_login int primary key auto_increment,

    ds_email varchar(100) not null unique,

    ds_senha varchar(100) not null

);

insert into tb_login (ds_email, ds_senha) values ("teste@gmail.com", "1234");

insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo,

qtd_capacidade, bt_ativo, dt_inclusao)

values

("TADS A", "O Curso de Tecnologia em Análise e Desenvolvimento de Sistemas objetiva formar profissionais aptos a produzir sistemas de software de alta qualidade.", 2020, 50, false, "2020-01-22"),

("TADS B", "O Curso de Tecnologia em Análise e Desenvolvimento de Sistemas objetiva formar profissionais aptos a produzir sistemas de software de alta qualidade.", 2020, 50, false, "2020-01-22"),

("TADS C", "O Curso de Tecnologia em Análise e Desenvolvimento de Sistemas objetiva formar profissionais aptos a produzir sistemas de software de alta qualidade.", 2020, 50, false, "2020-01-22"),

("TADS A", "O Curso de Tecnologia em Análise e Desenvolvimento de Sistemas objetiva formar profissionais aptos a produzir sistemas de software de alta qualidade.", 2022, 60, true, "2022-06-22"),

("TADS B", "O Curso de Tecnologia em Análise e Desenvolvimento de Sistemas objetiva formar profissionais aptos a produzir sistemas de software de alta qualidade.", 2022, 60, true, "2022-06-22"),

("TADS C", "O Curso de Tecnologia em Análise e Desenvolvimento de Sistemas objetiva formar profissionais aptos a produzir sistemas de software de alta qualidade.", 2022, 60, true, "2022-06-22"),

("GTI A", "Objetiva a formação de um profissional na área de Tecnologia da Informação com sólida fundamentação em Gestão.", 2023, 40, true, "2023-01-22"),

("GTI B", "Objetiva a formação de um profissional na área de Tecnologia da Informação com sólida fundamentação em Gestão.", 2023, 40, true, "2023-01-22"),

("GTI C", "Objetiva a formação de um profissional na área de Tecnologia da Informação com sólida fundamentação em Gestão.", 2023, 40, true, "2023-01-22"),

("GTI D", "Objetiva a formação de um profissional na área de Tecnologia da Informação com sólida fundamentação em Gestão.", 2023, 40, true, "2023-01-22"),

("TADS A", "O Curso de Tecnologia em Análise e Desenvolvimento de Sistemas objetiva formar profissionais aptos a produzir sistemas de software de alta qualidade.", 2023, 60, true, "2023-06-22"),

("TADS B", "O Curso de Tecnologia em Análise e Desenvolvimento de Sistemas objetiva formar profissionais aptos a produzir sistemas de software de alta qualidade.", 2023, 60, true, "2023-06-22"),

("TADS C", "O Curso de Tecnologia em Análise e Desenvolvimento de Sistemas objetiva formar profissionais aptos a produzir sistemas de software de alta qualidade.", 2023, 60, true, "2023-06-22"),

("MODA A", "Busca formar profissionais criativos, que estejam aptos a identificar tendências e traduzi-las em roupas, acessórios e, até mesmo, textos relacionados à moda.", 2023, 38, true, "2023-06-22"),

("MODA B", "Busca formar profissionais criativos, que estejam aptos a identificar tendências e traduzi-las em roupas, acessórios e, até mesmo, textos relacionados à moda.", 2023, 38, true, "2023-06-22"),

("MODA A", "Busca formar profissionais criativos, que estejam aptos a identificar tendências e traduzi-las em roupas, acessórios e, até mesmo, textos relacionados à moda.", 2024,41, true, "2024-01-22"),
("MODA B", "Busca formar profissionais criativos, que estejam aptos a identificar tendências e traduzi-las em roupas, acessórios e, até mesmo, textos relacionados à moda.", 2024, 41, true, "2024-01-22");

## E agora execute `npm start`

