# Test Driven Development with Trees in Jasmine

## Setting up jasmine

Jasmine is a node.js library. If you're just running this project, all you'll need to do is clone it down and run `npm install` in the base directory, and `npm install -g jasmine` to be able to run the `jasmine` command to run tests.

If you're setting up jasmine for an existing project, check out [the docs](https://jasmine.github.io/setup/nodejs.html) for more detailed info.

If you are starting a node project from scratch to try out jasmine, you'll want a `package.json` file -- if you want info on how to generate one, take a look at [these docs](https://docs.npmjs.com/creating-node-js-modules).

## Test Driven Development

* what is it?
    - start with requirements
    - write tests for the behaviors you care about
    - *then* write the function
    - often jumping back and forth between implementation and writing more tests
    - The process is often described as red, green, refactor (start with writing a failing test, then write code to pass the test, then make the code better)
* when is it useful?
    - when requirements are clear-cut and known ahead of time
    - when there's tricky logic involved
    - when there are edge cases that might fall through the cracks
    - when you find yourself repeatedly going through the same motions to manually test something
* when is it less ideal?
    - when you're not sure about the final requirements yet
        + design decisions not yet made
        + not sure what kinds of input to expect
        + quick and dirty prototyping that you expect to scrap
    - when it's legitimately a better time/attention trade-off to manually test every time than to write an automated test
        + e.g. testing behavior of a web page element after an ajax call
    - when it's difficult to stub out integrated systems


Note that writing comprehensive tests up front is often a difficult target -- if you intend to use TDD for a project but find that you've gotten partway through the project without any tests, it's often a good idea to add some even if they don't cover all the edge cases.  

Whether or not you're taking a TDD approach, if you ever find a bug in the course of manual testing, try to write a test that will fail with the bug in place and pass once it's fixed!

### TDD with Jasmine

Jasmine and some other testing frameworks (like rspec) tend to try to have the syntax work out such that each test reads like a sentence.  You can take a look at some of the syntax [here](https://jasmine.github.io/tutorials/your_first_suite.html).

```
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
```

The main building blocks are `describe` blocks which serve to group tests and define local scope, `it` blocks which define a specific test or set of tests (also known as specs), and `expect` blocks which actually check that the code is behaving as desired using `matchers`.

When using `toBe` and `toEqual` matchers, you should put the code you want to exercise on the left (as a parameter to `expect`) and the value you expect it to evaluate to on the right (as a parameter to the matcher).


#### Running Jasmine tests
Assuming you've set up your `jasmine.json` file, you can run all of your Jasmine tests with just the command `jasmine`.  If you only want to run the tests in a single file, you can run `jasmine` followed by the path to that file.  You can also specify other options in the `jasmine.json` file, such as whether to run tests in random order, stop running the test once a spec fails, or or stop running an indivdiual test when an expect fails.

## Trees
This repo has a simple `TreeNode` implementation for binary trees.  It already contains tests and implementation for a deep comparision `.equals` method.  We'll add tests and implementation for a few others (some subset of creating a tree from an array, getting the depth of a tree, determining if a tree is balanced, and whether it's a binary search tree).
