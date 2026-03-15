# Contributing

Thank you for your interest in contributing!

## Getting started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run the tests
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/)
6. Open a Pull Request

## Development setup

```bash
git clone https://github.com/xabierlameiro/storybook.git
cd storybook
npm install
npm run dev
```

## Running Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006).

## Quality gates

```bash
npm test -- --watchAll=false   # Jest unit tests
npm run build                   # CRA production build
npm run build-storybook         # Storybook static build
```

## Reporting bugs

Open a [GitHub issue](https://github.com/xabierlameiro/storybook/issues).

## Questions

Reach out to [@xabierlameiro](https://github.com/xabierlameiro).
