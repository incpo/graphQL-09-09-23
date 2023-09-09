# GraphQL Setup

This is a Next.js project that combines the power of several modern technologies to create a fully type-safe end-to-end
GraphQL solution for Next.js applications.

![GIF demo](demo/preview.gif)

## Technologies Used

+ Next.js: A popular React framework for building fast and scalable web applications with server-side rendering and
  routing.

+ Apollo Server: A GraphQL server implementation that allows you to define your data schema and resolvers for your
  GraphQL APIs.

+ Type GraphQL: A library for creating GraphQL schemas using TypeScript classes and decorators, ensuring type safety.

+ GraphQL Code Generation: A tool that generates TypeScript typings for your GraphQL queries, mutations, and schema,
  making your client-side code type-safe.

+ React Query: A powerful data-fetching library for React that simplifies data management and provides hooks for
  interacting with your GraphQL APIs.

+ graphql-request: A lightweight GraphQL client for making GraphQL requests from your Next.js frontend.

## Features

Type Safety: With TypeScript, Type GraphQL, and GraphQL Code Generation, your entire GraphQL stack becomes fully
type-safe, eliminating runtime errors and enhancing developer productivity.

Server-side Rendering: Next.js provides server-side rendering out of the box, enhancing SEO and page load times.

Efficient Data Fetching: React Query ensures efficient data fetching, reducing unnecessary network requests.

## Getting Started

1. Clone this repository```git clone https://github.com/incpo/graphQL-09-09-23.git```
2. Install dependencies using ```pnpm install```
3. Start the development server on 3000 port using ```pnpm dev```

## Running Tests

To run tests, run the following command

```bash
  pnpm test
```

