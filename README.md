<h1>Automated Testing with Cypress</h1>

<p>This project is designed to automate end-to-end testing for web applications using <strong>Cypress</strong>. The tests are written in JavaScript and utilize <strong>SelectorsHub</strong> for accurate selector identification.</p>

<h2>Installation</h2>
<p>To install the necessary dependencies, run:</p>
<pre><code>npm install</code></pre>

<h2>Running the Tests</h2>
<p>To execute the tests, use the following command:</p>
<pre><code>npx cypress open</code></pre>
<p>This will open the Cypress interface where you can select and run the tests.</p>

<h2>Gherkin Structure</h2>
<p>The tests are written using the <strong>Gherkin</strong> format, making it easy to read and understand the test scenarios. The basic structure used is:</p>
<ul>
    <li><strong>Given</strong>: Defines the initial state of the system.</li>
    <li><strong>When</strong>: Describes the action to be performed.</li>
    <li><strong>Then</strong>: Verifies the expected outcome after the action.</li>
</ul>

<h2>Page Object Model</h2>
<p>This project uses the <strong>Page Object Model</strong> method to organize the automation objects. Each page of the application has a corresponding class that encapsulates interactions with its elements, promoting code reuse and easier maintenance.</p>
