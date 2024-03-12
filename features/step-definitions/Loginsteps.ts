import { Given, When } from "@wdio/cucumber-framework";
import homeTest from "../../Test/sausePage";

Given("User should launch url successfully.", async function () {
  await homeTest.launchBrowserUrl("https://www.saucedemo.com/");
  
  
});

When(
  "user enter username and password tahn he login successfully",
  async function () {
    await homeTest.loginToSauseApp("standard_user", "secret_sauce");
  }
);
