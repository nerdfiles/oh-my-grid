# Powergrid

Pulling data from [energy-graph.com][1] to render in the relevant D3, C3 and Rickshaw graphs for supporting analysis of HEP (human error probability) in response to forms of power grid failure (cascading failures, etc.).

## Regions

1. [West][2]
2. [East][3]

## Strategy

We're basically going to parse some XML after consuming it and throw it into fancy visuals that will inform users toward better decision-making about whether they should adjust their power use to desired levels as needed given some ecological/existential weather risk scenario.

## Architecture

This will be a monolithic codebase, but likely broken down into submodules. Frontend and backend capabilities live within the `src` folder and will be autonomous in that the client there will be maintained its own framework-based front end. (The framework, obviously, is implemented with the intention eventually for an entirely bespoke subcodebase to replace it.)

The "backend", what provides the API, database, encryption tools, loggin, and other capabilities will follow a domain-driven architectural style (DDD, DDA, etc.), based on Domain-driven Design (E. Evans) to support reactive and non-reactive (REST-ful) services. CQRS may be implemented to support messaging or communications capabilities, if they are deemed necessary for the utility of the application.

[1]: http://energy-graph.com
[2]: http://energy-graph.com/?Map_Large_Generator_West
[3]: http://energy-graph.com/?Map_Large_Generator_East
