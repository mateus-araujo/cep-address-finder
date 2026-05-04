# Security Policy

## Supported Versions

Only the latest minor release line of `cep-address-finder` receives security fixes.

| Version | Supported |
| ------- | --------- |
| 1.4.x   | ✅        |
| < 1.4   | ❌        |

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for security problems.

Instead, report privately via GitHub Security Advisories:

https://github.com/mateus-araujo/cep-address-finder/security/advisories/new

Include:

- Affected version(s)
- Reproduction steps or proof-of-concept
- Impact assessment

You can expect an initial response within **5 business days**. Once a fix is
prepared, a coordinated release and advisory will be published.

## Scope

In scope:

- Code in `src/` shipped via the `dist/` npm bundle
- The published npm package `cep-address-finder`

Out of scope:

- Vulnerabilities in `devDependencies` that do not affect the published
  artifact
- Third-party services queried by the library (e.g. ViaCEP)
