# Contributing

Thanks for considering a contribution to `cep-address-finder`.

## Development

```bash
yarn install
yarn test
yarn build
```

## Pull Requests

1. Fork the repository and create a feature branch from `main`.
2. Add or update tests covering your change.
3. Run `yarn test` and ensure ESLint/Prettier pass.
4. Open a PR with a clear description of the change and motivation.
5. CI must pass before review.

## Reporting Bugs

Open a GitHub issue including:

- Library version
- Node.js version (or browser)
- Minimal reproduction
- Expected vs. actual behavior

## Reporting Security Issues

See [SECURITY.md](./SECURITY.md). Do **not** file public issues for vulnerabilities.

## Commit Style

Use conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`).

## Releases

Releases are published to npm via the `Release` GitHub Action when a `v*.*.*`
tag is pushed. Provenance is attached automatically.
