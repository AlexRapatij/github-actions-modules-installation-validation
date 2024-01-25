# The module installation validation GitHub action

## Example
```yaml
name: "Validation of installed modules"
on: [pull_request]
jobs:
  validate-installed-modules:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Validate installed modules
        uses: AlexRapatij/github-actions-modules-installation-validation@v1.0.1
        with:
          allowed-vendors: |-
            Gene
            GeneSoftware
          allowed-modules: |-
            Magento_Catalog
            Magento_Email
```
