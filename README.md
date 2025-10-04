# SauceDemo Automated Test Suite (Playwright + POM)

This project contains an automated test suite for [SauceDemo](https://www.saucedemo.com/) built with **Playwright** using the **Page Object Model (POM)** design pattern.

It covers the **checkout flow** where a user logs in, selects 3 random items, adds them to the cart, and completes the purchase.

---

## 📂 Project Structure

```
tests/
  checkoutflow.spec.js       # Main test suite
pages/
  loginpage.js               # Page object for Login
  homepage.js                # Page object for Home page
  cartpage.js                # Page object for Cart page
  checkoutpage.js            # Page object for Checkout page
  checkoutOverviewpage.js    # Page object for Checkout page
playwright.config.js         # Playwright configuration
package.json                 # Dependencies
```

---

## ⚙️ Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/RawanAlmusfer/SauceDemo-Automated-Test-Suite.git
   cd SauceDemo-Automated-Test-Suite
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

---

## ▶️ Running the Tests

Run all tests:

```bash
npx playwright test
```

---

## 📊 Reporting

After the tests run, you can generate and open an HTML report:

```bash
npx playwright show-report
```

Reports are stored in the `playwright-report` folder.


## Allure Report (Optional)

This project also supports Allure reporting for richer, interactive test reports.

  1. Install the Allure dependencies:

  ```bash
  npm install -D allure-playwright
  ```

  2. Run your tests and generate the Allure results:

  ```bash
  npx playwright test
  ```
  The results will be saved in the allure-results folder.
  
  3. Generate and open the Allure report:
  
  ```bash
  
  allure generate ./allure-results -o ./allure-report
  allure open ./allure-report
  ```

---

## ✅ Test Coverage

* User logs in with valid credentials
* Selects **3 random items** 
* Adds them to the cart
* Proceeds through checkout
* Confirms successful purchase with an assertion on the **Thank you** message

---

## 🛠️ Tech Stack

* [Playwright](https://playwright.dev/)
* JavaScript (Node.js)
* Page Object Model (POM) Design Pattern

---

## 🔗 Deliverables

* Source code in this repository
* This README with setup + execution steps
* Playwright HTML reports for results

