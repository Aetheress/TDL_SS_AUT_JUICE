# TDL_SS_AUT_JUICE

Set-up steps. Likely the final task won't have the exact same steps, but regardless these are the steps that were taken to setup THIS project in particular. There will likely be much overlap anyway.



**Stage 1: Creating the repository**

1. Log into your GitHub account
2. Open this link: https://github.com/new
3. Fill in the repository name field with something, maybe the teacher will give us a name himself
4. Check the "Add a README file" option (may not be necessary tomorrow)
5. Under the "Add .gitignore" section press on the select element that says ".gitignore template: None", write "Node" and select the only option offered to you
6. Press "Create Repository"



**Stage 2: Setting up the workspace**

7. Open the terminal (Command + Space, type in "Terminal"; or you can use the internal terminal in VS Code as well if you prefer)
8. Navigate to the Desktop folder (likely just one "cd Desktop" command will be all you need) (I suspect the teacher will want the folder to be on the Desktop tomorrow as well)
9. Create your work folder, this is the place you'll be working in - mkdir XXX (replace XXX with whatever name you choose or we are told to use)
10. Navigate to the folder you just created - cd XXX



**Stage 3: Cloning the repository**

11. Go to the repository you created in Stage 1 and press "Code"

![image](https://user-images.githubusercontent.com/55312233/186472008-aefb4a74-e482-4eb1-ab26-70b291f7065c.png)

12. Copy the link to your repository

![image](https://user-images.githubusercontent.com/55312233/186472165-957275df-fb09-405a-ab03-4aabf723a9ae.png)

13. Return to the terminal and write "git clone ???" (replace ??? with the link to your repository)
14. Navigate to the folder that contains the repository we just cloned - cd ??? (replace ??? with the name of the folder, you can just use the TAB key after writing "cd ".



**Stage 4: Setting up a Cypress project**

15. Write "npm init" and then keep pressing ENTER repeatedly until you've gone through everything (a good 15 ENTER presses will be enough probably).
16. Write "npm i cypress --save-dev" and wait for the installation to finish.
17. Write "npx cypress open" and wait for Cypress to open.
18. This part should be familiar to you all - press E2E Testing, scroll down, press "Continue", select a browser, press "Start E2E testing in ...", select "Create new empty spec", click "Create Spec", click "Okay, run the spec".



**Stage 5: Preparing configuration and stuff to start working**

19. Find the "cypress.config.js" file in your project and add a baseUrl thing like in here (https://github.com/Aetheress/TDL_SS_AUT_JUICE/blob/main/cypress.config.js). You can also just copy-paste and then replace the URL in the quotation marks with the actual site we are testing (e.g., "http://demoqa.com", etc.).
20. Create a "pageObjects" folder under "cypress".
21. Create a new file in the "pageObjects" folder called "basePage.js" or "base.js" or "base.page.js" just whatever you like really. This is the folder where you will be putting all the pages with the static get functions in.
22. Just copy-paste this into the basePage.js file (base pages in our level don't really change):

```
class BasePage {
    static get url() {
        return "/";
    }
    static visit(options) {
        options = {
          timeout: Cypress.config("defaultCommandTimeout"),
          uniqueText: this.uniqueText,
          expectedUrl: this.url,
          ...options,
        };
        return cy
          .visit(this.url)
          .then(() => this.assertIsCurrentPage(options))
      }
    
    static assertIsCurrentPage(
        options = {
          timeout: Cypress.config("defaultCommandTimeout"),
          expectedUrl: this.url,
        }
      ) {
        return this.validatePath(options);
    }
    
    static validatePath(
        options = {
          timeout: Cypress.config("defaultCommandTimeout"),
          expectedUrl: this.url,
        }
      ) {
        return cy
          .location(options)
          .should((loc) =>
            expect(`${loc.pathname}${loc.search}`).to.eq(options.expectedUrl)
          );
     }
}
export default BasePage;
```
 
23. Open the "spec.cy.js" file in cypress/e2e. This is your test scenario/cases file. You can consult (https://github.com/Aetheress/TDL_SS_AUT_JUICE/blob/main/cypress/e2e/spec.cy.js) for how it looks like. But this should be your starting point, you can copy-paste:

```
describe('name', () => {
  context("name", () => {
    beforeEach(()=> {
      
    });
    it("name", () => {
    
    });
  });
});
```
  
24. Everything is basically set up and you can start doing the actual task. Don't forget to finish each page object you make with an "export default ..." statement and then to put an "import ... from "..."" statement for that class in the test scenario (spec.cy.js) file.


**Stage 6: Pushing to GitHub after you're done**

25. I sure as hell hope the teacher can assist you on this. Surely he will, I mean the task is already done it can hardly be considered intervening. I can't really explain this part well. Someone else can try if they'd like.
