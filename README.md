# Trabalho_Final_PFS

Trabalho inspirado no site - https://www.adotepetz.com.br/quero-adotar

Site de adoção de Pets.

Para acessar como usuario de admin, é necessario ir no swagger em POST/usuarios/adm e definir os campos em request body para:

{

  "nome": "admin",
  "login": "admin",
  "hashSenha": "admin",
  "role": "adm"
}

executar em seguida, assim será possivel logar no com o usuario admin e a senha admin