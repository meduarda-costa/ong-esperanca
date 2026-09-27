const projetos = [
  {
    titulo: "Educação",
    descricao:
      "Ações voltadas para o acesso à educação e para o desenvolvimento de crianças e jovens.",
  },
  {
    titulo: "Alimentação",
    descricao:
      "Campanhas para arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.",
  },
  {
    titulo: "Saúde e inclusão",
    descricao:
      "Projetos que buscam promover cuidados, inclusão e oportunidades para diferentes grupos da comunidade.",
  },
];

export function renderizarInicio() {
  return `
    <section>
      <h2>Juntos por um futuro melhor</h2>

      <p>
        A ONG Esperança desenvolve ações sociais para ajudar pessoas da
        comunidade e contribuir para uma sociedade mais justa.
      </p>

      <img
        src="assets/ChatGPT Image 24 de set. de 2026, 21_02_01.png"
        alt="Voluntários realizando uma ação social"
      />
    </section>

    <section>
      <h2>Quem somos</h2>

      <p>
        Nosso trabalho busca criar oportunidades por meio de projetos nas
        áreas de educação, alimentação, saúde, inclusão e meio ambiente.
      </p>
    </section>

    <section>
      <h2>Entre em contato</h2>

      <address>
        <p>E-mail: contato@ongesperanca.org</p>
        <p>Telefone: (83) 3333-3333</p>
        <p>Campina Grande - PB</p>
      </address>
    </section>
  `;
}

export function renderizarProjetos() {
  const cards = projetos
    .map(
      (projeto) => `
        <article>
          <h3>${projeto.titulo}</h3>

          <p>
            ${projeto.descricao}
          </p>
        </article>
      `,
    )
    .join("");

  return `
    <section>
      <h2>Nossos Projetos</h2>

      <p>
        Conheça algumas das iniciativas desenvolvidas pela ONG e veja como
        você pode contribuir.
      </p>

      <img
        src="assets/ChatGPT Image 24 de set. de 2026, 21_01_48.png"
        alt="Voluntários e crianças participando de um projeto social"
      />
    </section>

    <section>
      <h2>Projetos sociais</h2>

      ${cards}
    </section>

    <section>
      <h2>Informações dos projetos</h2>

      <div>
        <span class="badge">Voluntariado</span>
        <span class="badge">Doação</span>
        <span class="badge">Ação social</span>
      </div>

      <div class="alert" role="alert">
        <strong>Atenção:</strong>
        As vagas para voluntários são atualizadas conforme a necessidade de
        cada projeto.
      </div>
    </section>

    <section>
      <h2>Doações</h2>

      <p>
        As doações ajudam a manter os projetos e ampliar o atendimento às
        pessoas beneficiadas pelas ações da ONG.
      </p>
    </section>

    <section>
      <h2>Voluntariado</h2>

      <p>
        Pessoas interessadas podem participar das atividades, colaborar com os
        projetos e contribuir com suas habilidades.
      </p>

      <p>
        Para participar, faça seu cadastro na página
        <a href="?pagina=cadastro" data-route="cadastro">
          Seja um colaborador
        </a>.
      </p>
    </section>
  `;
}

export function renderizarCadastro() {
  return `
    <section>
      <h2>Seja um colaborador</h2>

      <p>
        Preencha seus dados para fazer parte da rede de colaboradores da ONG
        Esperança.
      </p>

      <img
        src="assets/ChatGPT Image 24 de set. de 2026, 21_01_42.png"
        alt="Pessoa realizando cadastro para participar de uma ONG"
      />
    </section>

    <form id="form-cadastro" novalidate>

      <fieldset>
        <legend>Dados pessoais</legend>

        <p>
          <label for="nome">Nome completo:</label>

          <input
            type="text"
            id="nome"
            name="nome"
            required
            minlength="3"
            maxlength="100"
            autocomplete="name"
          />
        </p>

        <p>
          <label for="email">E-mail:</label>

          <input
            type="email"
            id="email"
            name="email"
            required
            autocomplete="email"
          />
        </p>

        <p>
          <label for="nascimento">Data de nascimento:</label>

          <input
            type="date"
            id="nascimento"
            name="nascimento"
            required
          />
        </p>

        <p>
          <label for="cpf">CPF:</label>

          <input
            type="text"
            id="cpf"
            name="cpf"
            required
            pattern="^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$"
            maxlength="14"
            placeholder="000.000.000-00"
            title="Digite o CPF no formato 000.000.000-00"
          />
        </p>
      </fieldset>

      <fieldset>
        <legend>Contato</legend>

        <p>
          <label for="telefone">Telefone:</label>

          <input
            type="tel"
            id="telefone"
            name="telefone"
            required
            pattern="^\\(\\d{2}\\) \\d{5}-\\d{4}$"
            maxlength="15"
            placeholder="(83) 99999-9999"
            title="Digite o telefone no formato (83) 99999-9999"
            autocomplete="tel"
          />
        </p>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>

        <p>
          <label for="cep">CEP:</label>

          <input
            type="text"
            id="cep"
            name="cep"
            required
            pattern="^\\d{5}-\\d{3}$"
            maxlength="9"
            placeholder="00000-000"
            title="Digite o CEP no formato 00000-000"
            autocomplete="postal-code"
          />
        </p>

        <p>
          <label for="cidade">Cidade:</label>

          <input
            type="text"
            id="cidade"
            name="cidade"
            required
            maxlength="60"
            autocomplete="address-level2"
          />
        </p>

        <p>
          <label for="estado">Estado:</label>

          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            <option value="PB">Paraíba</option>
            <option value="PE">Pernambuco</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="CE">Ceará</option>
            <option value="AL">Alagoas</option>
            <option value="BA">Bahia</option>
          </select>
        </p>
      </fieldset>

      <button type="submit">
        Cadastrar
      </button>

    </form>
  `;
}
