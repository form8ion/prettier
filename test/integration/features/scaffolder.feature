Feature: Scaffolder

  Scenario: Scaffold
    Given a prettier config is defined
    When the project is scaffolded
    Then the dependencies are defined
    And the config file is created
    And the eslint config is defined

  Scenario: no config provided
    Given no prettier config is defined
    When the project is scaffolded
    Then prettier is not configured
