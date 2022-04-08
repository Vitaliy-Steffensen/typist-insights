# Getting Started with typist-insights

This is a project for typist to gather better insights on their typing perfomnce (for free).
The open source development started the 27th of march 2022. Current contributers include:

- [Vitaliy Steffensen](https://gist.github.com/Vitaliy-Steffensen)
  <br/><br/>

## What it is all about

- Turning a large amount of hard data into simple and KPI's and views, for the user to gain insights on their perfomance improvement and the areas which they can improve.
- Create a perfomant webapplication that can process vast amount of rapid user inputs and provide usefull feedback while keeping a smooth perfomance as a webpage.
- Gamified design that keeps users engaged, and leaves them wanting to earn a better score!
  <br/><br/>

# Navigate

- [Documentation](#Documentation)
  - [Perfomance](##Perfomance)
  - [Testing](##Testing)

<br/><br/><br/>

# Documentation

## Perfomance

In order with to conditionally render the ui based on a vast amount of fast pace userinputs, and keeping a smooth and optimized experience we need to use the concept of dynamic programming. This includes the usage of:
- Memoization, with purecomponent, `memo` & the `useMemo()`/`useCallback` hooks --> to prevent unnecessary re-renders.
- Keeping components state local where necessary
- Code-splitting using dynamic import

## Testing

_Test files are put in `__tests__` folder in the folder they are used in_

- Unit tests are created using [Jest](https://jestjs.io/docs/tutorial-react)
- Automatic E2E- & Intergrations tests are created using [React testing libary](https://testing-library.com/docs/react-testing-library/intro/)
