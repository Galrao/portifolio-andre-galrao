function trocarConteudo(secao) {
    const conteudo = document.getElementById("conteudo");

    if (secao === "sobre") {
        conteudo.innerHTML = `
             <h2>Sobre Mim</h2>
            <img src="imagens/andre.jpg" alt="Foto André" class="foto-sobre-mim">
            <p class="clear-fix">Olá! Me chamo André Lacerda Galrão, tenho 41 anos, sou casado e pai da Lorena. Minha vida é guiada por princípios de fé e família, que considero meus pilares.</p>
            <p>Sou cristão, e a oração, a frequência à igreja e a busca por ser útil ao próximo são aspectos fundamentais do meu dia a dia.</p>
            <p>Tenho uma trajetória sólida na aviação, especialmente na área de despacho operacional de voo, onde a precisão e a organização são essenciais. Sou apaixonado por tecnologia, aviação e leitura.</p>
            <p>Minha experiência profissional me ensinou a importância do planejamento e da comunicação eficaz, qualidades que aplico em todas as áreas da vida.</p>
            <p>Em casa, encontro refúgio e momentos de lazer assistindo a séries e filmes, tocando violão e lendo.</p>
            <p>Nos finais de semana, adoro explorar parques e lugares com natureza e ar livre, e é claro, levar meu cachorro Tobby para passear.</p>
            <p>Além disso, meu interesse por tecnologia, programação e jogos é constante, sempre buscando aprender e me atualizar nesse universo dinâmico.</p>
            <p>A leitura é, sem dúvida, meu hobby preferido e considero uma das melhores terapias para a alma. Sou um leitor assíduo e apaixonado.</p>
            <p>Entre as obras que li recentemente e que recomendo estão: "Cristianismo puro e simples" de C. S. Lewis, "O Boi que Guardava o Sábado" de Bradley Booth, "O Desejado de Todas as Nações" de Ellen G. White, "A Chave da Virada" de Marcello Niek e Bruno Raso.</p>
            <p>Acima de tudo, a Bíblia Sagrada é a minha principal leitura. Atualmente, estou embarcando na leitura de "Não tenho fé suficiente para ser Ateu".</p><br>
            <p>Que o seu dia e a sua semana sejam abençoados por Deus!</p> 
        `;
    } else if (secao === "formacao") {
        conteudo.innerHTML = `
            <h2>Formação</h2>
            <ul>
                <li>Análise e Desenvolvimento de sistemas - Cursando</li><br>
                <li>MBA em Liderança de Pessoas e Coaching</li>
                <li>Administração de Empresas</li>
                <li>Despachante Operacional de Voo – Código ANAC 142960</li>
                <li>Inglês fluente – Escrita e Conversação</li>
                <li>Espanhol fluente – Escrita e Conversação</li>
            </ul>
        `;
    } else if (secao === "portfolio") {
        conteudo.innerHTML = `
            <h2>Portfólio</h2>
            <p>Estes são alguns cursos que realizei na área de tecnologia:</p>
            <ul>
                <li>Excel Avançado – Udemy</li>
                <li>Python – Udemy</li>
                <li>PHP – Udemy</li>
                <li>HTML – Udemy</li>
                <li>Banco de Dados – Udemy</li>
            </ul>
        `;
    } else if (secao === "contato") {
        conteudo.innerHTML = `
            <h2>Contato</h2>
            <form>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome">

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email">

                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows="5" placeholder="Digite sua mensagem"></textarea>

                <input type="submit" value="Enviar">
            </form>
        `;
    }
}