# Documentação da API - Nome da API

---

## 1. Propósito e Funcionalidade
**Descrição Geral:**
- **Propósito:** A API serve para conectar nosso frontend com nosso backend e enviar/receber as informações necessárias.

- **Funcionalidade:** Nossa API será voltada a 3 frentes: usuários, entradas/saidas e tags/metodos de pagamento.

## 2. Especificação Técnica

**Endpoints e Métodos:**
- **URL Base:** `/user`
- **Endpoint:** `/get-users`
- **Método Suportado:** `GET`

**Formato de Dados:**
- **Saída:** JSONArray

**Exemplo de Requisição:**
```http
GET /user/get-users/ HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
{
    {
  "name": "String",
  "email": "String",
  "birthday": "Date",
    },
    {
  "name": "String",
  "email": "String",
  "birthday": "Date",
    }
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** Detalhe a causa comum deste erro e como corrigi-lo.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/user`
- **Endpoint:** `/get-user/{id}`
- **Método Suportado:** `GET`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
  - `param1` (Tipo: Integer, Obrigatório): Id do usuário

**Formato de Dados:**
- **Entrada:** PathParam.
- **Saída:** JSON.

**Exemplo de Requisição:**
```http
GET /user/get-users/?param1=valor1 HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
{
    "name": "String",
    "email": "String",
    "birthday": "Date",
    "lastModified": "Date"
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** O parametro passado não é um valor inteiro, passe um valor inteiro para que a requisição seja completada com sucesso.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/user`
- **Endpoint:** `/save-user/`
- **Método Suportado:** `POST`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
  - `param1` (Tipo: JSON, Obrigatório): Id do usuário

**Formato de Dados:**
- **Entrada:** JSON.
- **Saída:** String.

**Exemplo de Requisição:**
```http
POST /user/save-user HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```
Usuário salvo com sucesso!
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** Objeto inválido, por favor revise o objeto.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/user`
- **Endpoint:** `/update-user/{id}`
- **Método Suportado:** `PUT`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
  - `param1` (Tipo: Integer, Obrigatório): Id do usuário
  - `param1` (Tipo: JSON, Obrigatório): JSON com informações do usuário


**Formato de Dados:**
- **Entrada:** PathParam e JSON.
- **Saída:** JSON.

**Exemplo de Requisição:**
```http
PUT /user/update-user/?param1=valor1 HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
Usuário atualizado com sucesso!
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** O parametro passado não é um valor inteiro, passe um valor inteiro para que a requisição seja completada com sucesso.
- **Erro 400 - Parâmetro Inválido:** Informações do usuário no formato errado, corrigir formato.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/user`
- **Endpoint:** `/delete-user/{id}`
- **Método Suportado:** `DELETE`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
  - `param1` (Tipo: Integer, Obrigatório): Id do usuário


**Formato de Dados:**
- **Entrada:** PathParam(Integer)
- **Saída:** String

**Exemplo de Requisição:**
```http
DELETE /user/delete-user/?param1=valor1 HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
Usuário deletado com sucesso!
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** O parametro passado não é um valor inteiro, passe um valor inteiro para que a requisição seja completada com sucesso.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/tags`
- **Endpoint:** `/get-tags`
- **Método Suportado:** `GET`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**

**Formato de Dados:**
- **Entrada:**
- **Saída:** JSONArray

**Exemplo de Requisição:**
```http
GET /tags/get-tags/ HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
{
    {
  "id": "Integer",
  "name": "String",
  "type": "String"
    },
    {
  "id": "Integer",
  "name": "String",
  "type": "String"
    }
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/tags`
- **Endpoint:** `/get-tag/{Id}`
- **Método Suportado:** `GET`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
  - `param1` (Tipo: Integer, Obrigatório): Id do usuário

**Formato de Dados:**
- **Entrada:** PathParam(Integer)
- **Saída:** JSON

**Exemplo de Requisição:**
```http
GET /tags/get-tag/?param1=valor1 HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
{
    {
  "id": "Integer",
  "name": "String",
  "type": "String"
    }
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** O parametro passado não é um valor inteiro, passe um valor inteiro para que a requisição seja completada com sucesso.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/tags`
- **Endpoint:** `/save-tag`
- **Método Suportado:** `POST`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
  - `param1` (Tipo: JSON, Obrigatório): JSON com as informações: nome e tipo.

**Formato de Dados:**
- **Entrada:** JSON
- **Saída:** String

**Exemplo de Requisição:**
```http
POST /tags/get-tags/ HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
Usuário salvo com sucesso!
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** RequestBody fora do formato correto, utilizar um JSON.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/tags`
- **Endpoint:** `/update-tag/{Id}`
- **Método Suportado:** `PUT`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
  - `param1` (Tipo: Integer, Obrigatório): Id do usuário.
  - `param2` (Tipo: JSON, Obrigatório): JSON com as informações: nome(String) e tipo(String).

**Formato de Dados:**
- **Entrada:** PathParam(Integer) e RequestBody(JSON)
- **Saída:** String

**Exemplo de Requisição:**
```http
PUT /tags/get-tags/?param1=valor1 HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
Usuário atualizado com sucesso!
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** Parametro passado não é um valor inteiro, passar um valor inteiro.
- **Erro 400 - Parâmetro Inválido:** RequestBody fora do formato correto, utilizar um JSON.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/tags`
- **Endpoint:** `/delete-tag/{Id}`
- **Método Suportado:** `DELETE`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
  - `param1` (Tipo: Integer, Obrigatório): Id do usuário.

**Formato de Dados:**
- **Entrada:** PathParam(Integer)
- **Saída:** String

**Exemplo de Requisição:**
```http
DELETE /tags/dalete-tag/?param1=valor1 HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
Usuário deletado com sucesso!
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** Parametro passado não é um valor inteiro, passar um valor inteiro.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/entry`
- **Endpoint:** `/get-entries/`
- **Método Suportado:** `GET`

**Parâmetros de Requisição:**

**Formato de Dados:**
- **Entrada:** 
- **Saída:** JSON

**Exemplo de Requisição:**
```http
GET /tags/get-tags HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
{
    {
        "itemName": "String",
        "Id": "Integer",
        "userId": "Integer",
        "tagId": "Integer",
        "value": "float",
        "purchaseDate": "Date",
        "paymentMethodId": "Integer"
    }, 
    {
        "itemName": "String",
        "Id": "Integer",
        "userId": "Integer",
        "tagId": "Integer",
        "value": "float",
        "purchaseDate": "Date",
        "paymentMethodId": "Integer"
    }
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/entry`
- **Endpoint:** `/get-entry/{Id}`
- **Método Suportado:** `GET`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
  - `param1` (Tipo: Integer, Obrigatório): Id do usuário.

**Formato de Dados:**
- **Entrada:** PathParam(Integer)
- **Saída:** JSON

**Exemplo de Requisição:**
```http
GET /entry/get-entry/?param1=valor1 HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
{
    "itemName": "String",
    "Id": "Integer",
    "userId": "Integer",
    "tagId": "Integer",
    "value": "float",
    "purchaseDate": "Date",
    "paymentMethodId": "Integer"
 
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** Parametro passado não é um valor inteiro, passar um valor inteiro.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/entry`
- **Endpoint:** `/save-entry`
- **Método Suportado:** `POST`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
  - `param1` (Tipo: JSON, Obrigatório): JSON com as informações: itemName(String), userId(Integer), tagId(Integer), value(Float), purchaseDate(Date), paymentMethodId(Integer)

**Formato de Dados:**
- **Entrada:** JSON
- **Saída:** String

**Exemplo de Requisição:**
```http
POST /entry/save-entry HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
Usuário adicionado com sucesso!
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** Parametro passado não é um JSON, passar um JSON como BodyRequest.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/entry`
- **Endpoint:** `/update-entry/{Id}`
- **Método Suportado:** `PUT`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
    - `param1` (Tipo: Integer, Obrigatório): Id da entrada.
  - `param2` (Tipo: JSON, Obrigatório): JSON com as informações: itemName(String), userId(Integer), tagId(Integer), value(Float), purchaseDate(Date), paymentMethodId(Integer)

**Formato de Dados:**
- **Entrada:** Integer e JSON
- **Saída:** String

**Exemplo de Requisição:**
```http
PUT /entry/update-entry/?param1=valor1 HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
Usuário atualizado com sucesso!
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** Parametro passado não é um valor inteiro, passar um valor inteiro.  Parametro passado não é um JSON, passar um JSON como BodyRequest.
- **Erro 400 - Parâmetro Inválido:** Parametro passado não é um JSON, passar um JSON como BodyRequest.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

**Endpoints e Métodos:**
- **URL Base:** `/entry`
- **Endpoint:** `/delete-entry/{Id}`
- **Método Suportado:** `DELETE`

**Parâmetros de Requisição:**
- **Parâmetros na URL ou Corpo da Requisição:**
    - `param1` (Tipo: Integer, Obrigatório): Id da entrada.

**Formato de Dados:**
- **Entrada:** Integer
- **Saída:** String

**Exemplo de Requisição:**
```http
DELETE /entry/delete-entry/?param1=valor1 HTTP/1.1
Host: budgetbuddy.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
Usuário deletado com sucesso!
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Descrição do erro e possíveis causas.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Parâmetro Inválido:** Parametro passado não é um valor inteiro, passar um valor inteiro.  Parametro passado não é um JSON, passar um JSON como BodyRequest.
- **Erro 401 - Token Inválido:** Explicação sobre o erro de autenticação e como resolvê-lo.

## 3. Segurança e Autorização

**Autenticação:**
- **Método:** O metódo usado para autenticação o JWT
- **Exemplo de Cabeçalho de Autenticação:**
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

**Autorização:**
- Para todos os endpoints, excluindo os de login, será necessário estar autenticado como usuário.

**Medidas de Proteção de Dados:**
- **Transmissão Segura:** Usaremos HTTPS para garantir uma maior segurança
- **Criptografia:** Além de utilizar JWT para autenticação, a senha dos usuários será salva como um hash no banco.

## 4. Monitoramento e Performance

**Monitoramento:**
- **Ferramentas Utilizadas:** Prometheus
- **Métricas Monitoradas:** Tempo de resposta da requisição.

**Desempenho:**
- **Limites de Taxa (Rate Limits):** Defina os limites de requisições por minuto/hora.
- **Otimização:**

**Escalabilidade:**
- Descreva como a API lida com aumentos de carga e quais estratégias são utilizadas para manter a estabilidade e performance.

## 5. Versionamento e Compatibilidade

**Política de Versionamento:**
- Faremos um versionamento via URL
- **Exemplo:** `/v1/user/get-users`

**Compatibilidade:**
- Em novas versões da API, iremos apenas adicionar novos endpoints, não alterar ou excluir endpoints existentes.

## 6. Recursos Adicionais
