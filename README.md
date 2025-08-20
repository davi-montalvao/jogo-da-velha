# 🎮 Jogo da Velha

Um jogo da velha moderno e responsivo construído com **Next.js**, **TypeScript** e **CSS3**. O jogo oferece uma experiência visual atrativa com animações suaves e design responsivo para todos os dispositivos.

## ✨ Características

- 🎯 **Interface moderna** com gradientes e sombras
- 📱 **Totalmente responsivo** para mobile e desktop
- 🎨 **Animações suaves** e feedback visual
- 🌙 **Suporte a modo escuro** automático
- ⚡ **Performance otimizada** com Next.js
- 🔧 **TypeScript** para código mais seguro
- 🎭 **Indicador de jogador atual** com animações
- 🏆 **Mensagens de vitória** com emojis e estilos

## 🚀 Como executar

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/jogo-da-velha.git
cd jogo-da-velha
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Build para produção

```bash
npm run build
npm start
# ou
yarn build
yarn start
```

## 🎮 Como jogar

1. **Início**: O jogo começa com o jogador X
2. **Jogada**: Clique em qualquer célula vazia para fazer sua jogada
3. **Alternância**: Os jogadores X e O se alternam automaticamente
4. **Vitória**: Alinhe 3 símbolos iguais em linha horizontal, vertical ou diagonal
5. **Empate**: Se todas as células forem preenchidas sem vencedor
6. **Reiniciar**: Clique em "Jogar Novamente" para uma nova partida

## 🛠️ Tecnologias utilizadas

- **[Next.js 13](https://nextjs.org/)** - Framework React para produção
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem
- **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)** - Estilos modernos com variáveis CSS
- **[React Hooks](https://reactjs.org/docs/hooks-intro.html)** - Estado e efeitos do React

## 📱 Responsividade

O jogo é otimizado para diferentes tamanhos de tela:

- **Desktop**: Layout completo com espaçamentos generosos
- **Tablet**: Adaptação para telas médias
- **Mobile**: Interface otimizada para toque com botões maiores

### Breakpoints CSS
- `640px` - Tablets e dispositivos médios
- `480px` - Smartphones e dispositivos pequenos

## 🎨 Design System

### Cores
- **Primária**: `#6366f1` (Indigo)
- **Secundária**: `#ec4899` (Pink)
- **Sucesso**: `#10b981` (Green)
- **Aviso**: `#f59e0b` (Yellow)
- **Perigo**: `#ef4444` (Red)

### Tipografia
- **Fonte principal**: Inter (fallback para fontes do sistema)
- **Títulos**: Peso 800 (Extra Bold)
- **Texto**: Peso 400-600 (Regular-Medium)

### Animações
- **Entrada**: `popIn` para células do tabuleiro
- **Hover**: Elevação e sombras para interatividade
- **Vitória**: `slideUp` para mensagens de resultado
- **Indicador**: `pulse` para jogador atual

## 📁 Estrutura do projeto

```
jogo-da-velha/
├── src/
│   ├── pages/
│   │   ├── _app.tsx          # Configuração do app
│   │   ├── index.tsx         # Página principal do jogo
│   │   └── api/              # APIs (se necessário)
│   ├── styles/
│   │   └── globals.css       # Estilos globais
│   └── assets/               # Imagens e recursos
├── public/                   # Arquivos estáticos
├── package.json              # Dependências e scripts
├── tsconfig.json            # Configuração TypeScript
└── README.md                # Este arquivo
```

## 🔧 Scripts disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 🌟 Funcionalidades implementadas

- ✅ Tabuleiro 3x3 responsivo
- ✅ Lógica de jogo completa
- ✅ Verificação de vitória e empate
- ✅ Indicador de jogador atual
- ✅ Botão de reiniciar jogo
- ✅ Animações CSS suaves
- ✅ Design responsivo para mobile
- ✅ Suporte a modo escuro
- ✅ Gradientes e sombras modernas
- ✅ Feedback visual para interações

## 🚧 Possíveis melhorias futuras

- [ ] Sistema de pontuação
- [ ] Modo multiplayer online
- [ ] Diferentes tamanhos de tabuleiro
- [ ] Sons e efeitos sonoros
- [ ] Histórico de partidas
- [ ] Modo contra IA
- [ ] Temas personalizáveis
- [ ] PWA (Progressive Web App)

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome** - [seu-email@exemplo.com](mailto:seu-email@exemplo.com)

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) pela excelente framework
- [React](https://reactjs.org/) pela biblioteca incrível
- Comunidade open source por inspiração e recursos

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**
