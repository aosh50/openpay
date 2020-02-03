# Openpay Code Test - Alex O'Shannessy

### Packages

- node-sass
  - Compiling sass to css
- date-fns
  - Manipulating dates
- faker
  - Generating sample data (in place of API)
- ramda
  - functional js library

### Other libraries

- Material icons
- Openpay Brand assets - <https://brand.openpay.com.au/>

#### Why Create React App?

A simple way to get started quickly, allowing me to focus my time on the problem rather than configuration

#### Why no redux?

I decided with such a simple app, adding Redux would add complexity with little benefit. As part of a larger application, the plans could be loaded from the API (using a package like Axios) into the global state, and the filter/sorting done as part of a selector

#### Known shortcomings

- Dates
  - The payment plan's finish date is generated using JS's `new Date()`, this allows that date to be manipulated on the client side and thus alter the payment plans. Solution: Serve side validation!

- Generated data
  - There are no checks to make sure a payment plan isn't duplicated in the generated data. 