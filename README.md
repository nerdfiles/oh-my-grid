# oh-my-grid

Pulling data from [Energy Information Administration][1] to render in the relevant D3, C3 and Rickshaw graphs for supporting analysis of HEP (human error probability) in response to forms of power grid failure (cascading failures, etc.).

## API

Some examples:

1. http://api.eia.gov/series/?series_id=ELEC.GEN.ALL-AK-99.A&api_key={API_KEY}[&num=][&out=xml|json]

## Strategy

We're basically going to parse some XML after consuming it and throw it into fancy visuals that will inform users toward better decision-making about whether they should adjust their power use to desired levels as needed given some ecological/existential weather risk scenario.

## Architecture

This will be a monolithic codebase, but likely broken down into submodules. Frontend and backend capabilities live within the `src` folder and will be autonomous in that the client there will be maintained its own framework-based front end. (The framework, obviously, is implemented with the intention eventually for an entirely bespoke subcodebase to replace it.)

The "backend", what provides the API, database, encryption tools, loggin, and other capabilities will follow a domain-driven architectural style (DDD, DDA, etc.), based on Domain-driven Design (E. Evans) to support reactive and non-reactive (REST-ful) services. CQRS may be implemented to support messaging or communications capabilities, if they are deemed necessary for the utility of the application.

## TODO

1. Implement DARRT for resource/modules and actions on repositories.

[1]: https://www.eia.gov/opendata/
