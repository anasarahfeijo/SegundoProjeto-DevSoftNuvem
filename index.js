const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

// rotas PERSONALIZADAS

//criando a rota inicial
app.get("/", function (req, res) {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Bem-vindo ao Meu Site</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .card {
          background: #ffff00;
          padding: 30px 40px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-width: 550px;
          width: 100%;
        }
        h1 {
          color: #0b84fe;
          margin-top: 0;
          font-size: 1.6rem;
          text-align: center;
        }
        .info-box {
          background: #f8f9fa;
          border-left: 4px solid #3498db;
          padding: 12px 15px;
          margin: 20px 0;
          border-radius: 0 8px 8px 0;
        }
        .info-box p {
          margin: 4px 0;
          color: #555;
          font-size: 0.9rem;
        }
        .routes-section {
          margin-top: 20px;
        }
        .routes-section h3 {
          font-size: 1rem;
          color: #333;
          margin-bottom: 10px;
          border-bottom: 1px solid #eee;
          padding-bottom: 5px;
        }
        ul.routes-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        ul.routes-list li {
          margin-bottom: 8px;
        }
        ul.routes-list a {
          display: block;
          padding: 8px 12px;
          background: #f1f5f9;
          color: #0284c7;
          text-decoration: none;
          border-radius: 6px;
          font-family: monospace;
          font-size: 0.9rem;
          transition: background 0.2s, color 0.2s;
        }
        ul.routes-list a:hover {
          background: #e0f2fe;
          color: #0369a1;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Bem-vindo ao meu site! 🚀</h1>
        
        <div class="info-box">
          <p><strong>Aluno:</strong> Nicholas Marques</p>
          <p><strong>Aluno:</strong> Ana Sarah</p>
          <p><strong>Curso:</strong> ADS Unifor</p>
          <p><strong>Disciplina:</strong> DESENVOLVIMENTO DE SOFTWARE EM NUVEM</p>
        </div>

        <div class="routes-section">
          <h3>📌 Rotas Disponíveis no Sistema:</h3>
          <ul class="routes-list">
            <li><a href="/">/ (Início)</a></li>
            <li><a href="/ajuda">/ajuda</a></li>
            <li><a href="/pagar">/pagar</a></li>
            <li><a href="/produtos">/produtos</a></li>
            <li><a href="/consulta/exemplo-param">/consulta/:parametro</a></li>
            <li><a href="/cadastro/Nicholas">/cadastro/{:nome}</a></li>
            <li><a href="/alteracao">/alteracao</a></li>
          </ul>
        </div>
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

//rota de Ajuda ao usuário | NOVA ROTA
app.get("/ajuda", function (req, res) {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Ajuda - Suporte</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          height: 100vh;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card {
          background: #ffffff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 480px;
          width: 90%;
        }
        .icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }
        h1 {
          color: #2c3e50;
          margin-bottom: 15px;
          font-size: 1.5rem;
        }
        p {
          color: #555;
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 25px;
        }
        .email-link {
          color: #ffffff;
          background-color: #3b82f6;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 20px;
          transition: background 0.2s;
        }
        .email-link:hover {
          background-color: #2563eb;
        }
        .back-link {
          display: block;
          color: #64748b;
          text-decoration: none;
          font-size: 0.9rem;
        }
        .back-link:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="icon">🔰</div>
        <h1>Central de Ajuda</h1>
        <p>Precisa de suporte ou quer solicitar informações? Entre em contato conosco através do e-mail abaixo:</p>
        
        <a class="email-link" href="mailto:emaildosite@gmail.com">emaildosite@gmail.com</a>
        
        <a class="back-link" href="/">&larr; Voltar para a página inicial</a>
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

//rota para o usuário Pagar | NOVA ROTA
app.get("/pagar", function (req, res) {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Área de Pagamento</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .card {
          background: #ffffff;
          padding: 30px 40px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
        }
        h1 {
          color: #2c3e50;
          text-align: center;
          font-size: 1.5rem;
          margin-top: 0;
          margin-bottom: 20px;
        }
        .tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .tab {
          flex: 1;
          padding: 10px;
          text-align: center;
          background: #f1f5f9;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          color: #64748b;
          transition: all 0.2s;
        }
        .tab.active {
          background: #0284c7;
          color: #ffffff;
        }
        .tab-content {
          display: none;
        }
        .tab-content.active {
          display: block;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-size: 0.9rem;
          color: #333;
          font-weight: 600;
        }
        input {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 0.95rem;
        }
        .pix-box {
          text-align: center;
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          border: 1px dashed #cbd5e1;
        }
        .pix-qr {
          font-size: 3rem;
          margin-bottom: 10px;
        }
        .btn {
          display: block;
          width: 100%;
          background: #22c55e;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
          transition: background 0.2s;
        }
        .btn:hover {
          background: #16a34a;
        }
        .back-link {
          display: block;
          text-align: center;
          margin-top: 20px;
          color: #64748b;
          text-decoration: none;
          font-size: 0.9rem;
        }
        .back-link:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>💳 Escolha a Forma de Pagamento</h1>
        
        <div class="tabs">
          <button class="tab active" onclick="switchTab('pix')">Pix ⚡</button>
          <button class="tab" onclick="switchTab('cartao')">Cartão 💳</button>
        </div>
        
        <!-- Conteúdo Pix -->
        <div id="pix" class="tab-content active">
          <div class="pix-box">
            <div class="pix-qr">📱</div>
            <p style="font-size: 0.9rem; color: #555;">Escaneie o QR Code ou copie a chave Pix abaixo:</p>
            <input type="text" value="00020126580014br.gov.bcb.pix0136unifor-cloud-dev-2026..." readonly style="text-align: center; background: #fff; font-family: monospace; font-size: 0.75rem;" />
            <button class="btn" style="background: #0ea5e9; margin-top: 15px;" onclick="alert('Chave Pix copiada com sucesso!')">Copiar Chave Pix</button>
          </div>
        </div>

        <!-- Conteúdo Cartão -->
        <div id="cartao" class="tab-content">
          <form onsubmit="event.preventDefault(); alert('Pagamento via cartão processado com sucesso!');">
            <div class="form-group">
              <label>Nome no Cartão</label>
              <input type="text" placeholder="NICHOLAS MARQUES" required />
            </div>
            <div class="form-group">
              <label>Número do Cartão</label>
              <input type="text" placeholder="0000 0000 0000 0000" required />
            </div>
            <div style="display: flex; gap: 10px;">
              <div class="form-group" style="flex: 1;">
                <label>Validade</label>
                <input type="text" placeholder="MM/AA" required />
              </div>
              <div class="form-group" style="flex: 1;">
                <label>CVV</label>
                <input type="text" placeholder="123" required />
              </div>
            </div>
            <button type="submit" class="btn">Finalizar Pagamento</button>
          </form>
        </div>

        <a class="back-link" href="/">&larr; Voltar para a página inicial</a>
      </div>

      <script>
        function switchTab(tabId) {
          document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
          if(tabId === 'pix') {
            document.querySelectorAll('.tab')[0].classList.add('active');
            document.getElementById('pix').classList.add('active');
          } else {
            document.querySelectorAll('.tab')[1].classList.add('active');
            document.getElementById('cartao').classList.add('active');
          }
        }
      </script>
    </body>
    </html>
  `;

  res.send(html);
});

//rota para Alterar | NOVA ROTA
app.get("/alteracao", function (req, res) {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Painel de Alterações e Nuvem</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          margin: 0;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          background: #ffffff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
        }
        h1 {
          color: #2c3e50;
          font-size: 1.4rem;
          margin-top: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cloud-badge {
          background: #e0f2fe;
          color: #0284c7;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: bold;
        }
        .status-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 20px 0;
        }
        .status-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 10px;
          border-radius: 8px;
          text-align: center;
        }
        .status-card h4 {
          margin: 0 0 4px 0;
          font-size: 0.8rem;
          color: #64748b;
        }
        .status-val {
          font-weight: bold;
          font-size: 0.9rem;
          color: #10b981;
        }
        .changelog {
          margin-top: 20px;
        }
        .changelog h3 {
          font-size: 0.95rem;
          color: #333;
          margin-bottom: 12px;
          border-bottom: 1px solid #eee;
          padding-bottom: 6px;
        }
        .log-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px dashed #f1f5f9;
        }
        .log-dot {
          width: 9px;
          height: 9px;
          background: #3b82f6;
          border-radius: 50%;
          margin-top: 5px;
          flex-shrink: 0;
        }
        .log-content p {
          margin: 0;
          font-size: 0.88rem;
          color: #334155;
        }
        .log-time {
          font-size: 0.72rem;
          color: #94a3b8;
          margin-top: 2px;
          display: block;
        }
        .back-link {
          display: block;
          text-align: center;
          margin-top: 20px;
          color: #64748b;
          text-decoration: none;
          font-size: 0.9rem;
        }
        .back-link:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>
          <span>☁️ Pipeline & Alterações</span>
          <span class="cloud-badge">Cloud Ready</span>
        </h1>
        
        <div class="status-grid">
          <div class="status-card">
            <h4>Ambiente</h4>
            <span class="status-val">AWS Production</span>
          </div>
          <div class="status-card">
            <h4>Versão Ativa</h4>
            <span class="status-val" style="color: #3b82f6;">v1.5.0</span>
          </div>
          <div class="status-card">
            <h4>Uptime</h4>
            <span class="status-val">99.9%</span>
          </div>
        </div>

        <div class="changelog">
          <h3>🔄 Histórico Recente de Modificações</h3>
          
          <div class="log-item">
            <div class="log-dot" style="background: #10b981;"></div>
            <div class="log-content">
              <p><strong>feat:</strong> Adicionada rota de pagamentos (/pagar) com Pix e Cartão interativos.</p>
              <span class="log-time">Atualizado hoje - Commit #f91a</span>
            </div>
          </div>

          <div class="log-item">
            <div class="log-dot" style="background: #3b82f6;"></div>
            <div class="log-content">
              <p><strong>ui:</strong> Inclusão da lista de rotas dinâmicas e rota de ajuda estilizada na home.</p>
              <span class="log-time">Atualizado hoje - Commit #7b2e</span>
            </div>
          </div>

          <div class="log-item">
            <div class="log-dot" style="background: #f59e0b;"></div>
            <div class="log-content">
              <p><strong>cloud:</strong> Configuração inicial do Express para ADS Unifor (Desenvolvimento em Nuvem).</p>
              <span class="log-time">Ontem - Commit #1a4f</span>
            </div>
          </div>
        </div>

        <a class="back-link" href="/">&larr; Voltar para a página inicial</a>
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

//rota do cadastro de produtos
app.get("/produtos", function (req, res) {
  const produtos = [
    { nome: "Arroz Tio João 5kg", preco: "R$ 28,90", categoria: "Grãos" },
    { nome: "Feijão Preto 1kg", preco: "R$ 8,50", categoria: "Grãos" },
    { nome: "Azeite de Oliva 500ml", preco: "R$ 34,00", categoria: "Temperos" },
    { nome: "Café em Pó 500g", preco: "R$ 18,20", categoria: "Bebidas" },
  ];

  let html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Lista de Compras</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 40px; }
        .container { max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        h1 { color: #333; text-align: center; }
        ul { list-style: none; padding: 0; }
        li { display: flex; justify-content: space-between; padding: 12px 15px; border-bottom: 1px solid #eee; align-items: center; }
        li:last-child { border-bottom: none; }
        .info { display: flex; flex-direction: column; }
        .nome { font-weight: bold; color: #2c3e50; }
        .categoria { font-size: 0.85rem; color: #7f8c8d; }
        .preco { background: #e1f5fe; color: #0288d1; padding: 6px 12px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🛒 Minha Lista de Compras</h1>
        <ul>
  `;

  produtos.forEach((p) => {
    html += `
      <li>
        <div class="info">
          <span class="nome">${p.nome}</span>
          <span class="categoria">${p.categoria}</span>
        </div>
        <span class="preco">${p.preco}</span>
      </li>
    `;
  });

  html += `
        </ul>
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

//rota com parametro
app.get("/consulta/:parametro", function (req, res) {
  //req --> dados enviados pelo cliente
  //res --> resposta enviada pelo servidor de volta ao cliente
  res.send("retorno consulta:" + req.params.parametro);
});

//rota com parametro opcional
app.get("/cadastro/{:nome}", function (req, res) {
  //req --> dados enviados pelo cliente
  var nome = req.params.nome;
  if (nome) {
    res.send("<h1>produto " + nome + " criado!</h1>");
  } else {
    res.send("produto criado!");
  }
});

app.listen(process.env.PORT ?? 3000, function (erro) {
  // cria a aplicação na porta 4000
  if (erro) {
    console.log("Erro ao Iniciar.");
  } else {
    console.log("Servidor Iniciado.");
  }
});

// // CÓDIGO ORIGINAL ABAIXO ARQUIVO DO AMÉRICO:
//criando a rota inicial
/*
app.get("/", function (req, res) {
  res.send("<h1>Bem vindo ao meu site!</h1>");
});

//rota de Ajuda ao usuário
app.get("/ajuda", function (req, res) {
  res.send(
    "🔰Contate o nosso email emaildosite@gmail.com para obter ajuda e/ou solicitar informações!",
  );
});
//rota do cadastro de produtos
app.get("/produtos", function (req, res) {
  res.send("<h1>Lista de Produtos!</h1>");
});

//rota com parametro
app.get("/consulta/:parametro", function (req, res) {
  //req --> dados enviados pelo cliente
  //res --> resposta enviada pelo servidor de volta ao cliente
  res.send("retorno consulta:" + req.params.parametro);
});

//rota com parametro opcional
app.get("/cadastro/{:nome}", function (req, res) {
  //req --> dados enviados pelo cliente
  var nome = req.params.nome;
  if (nome) {
    res.send("<h1>produto " + nome + " criado!</h1>");
  } else {
    res.send("produto criado!");
  }
});

app.listen(process.env.PORT ?? 3000, function (erro) {
  // cria a aplicação na porta 4000
  if (erro) {
    console.log("Erro ao Iniciar.");
  } else {
    console.log("Servidor Iniciado.");
  }
});
*/
