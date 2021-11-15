---
title: Vue 3 and Graphql
---

    14.11.2021

<img class="animate-pulse"  src="/vue512.png" alt="VueLogo" style="height: 100px; width:100px;"/>

# Vue 3 and GraphQL


## What is GraphQL?

GraphQL - is a different way of querying and responding in the process of retrieving data from a server than the traditional REST API. 

Features - flexible query language, single endpoint and qraphql server hooked up to databases and even REST API.

## How is it better than REST API?

- GraphQL has one specification of client and server API, which everyone knows and recognizes

- GraphQL has one endpoint

- the client has a simple query language and the server defines the data schema to be requested

- it is possible to fetch diversified data with one query, where in case of REST there would be several queries to several addresses

- less traffic is generated between server and client

## Query and response process in GraphQL.

- graphl server automatically generates API specification for us - [example fake GraphQL server](https://GraphQLzero.almansi.me/api)

- we write a query - for example 

```js
query {
  post(id: 1) {
    id
    title
    body
  }
}
```
- we get the response in JSON

```js
{
  "post": {
    "id": "1",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
}
```
- also through query-mutation we modify the data
```js
mutation (
  $id: ID!,
  $input: UpdatePostInput!
) {
  updatePost(id: $id, input: $input) {
    id
    body
  }
}
```
where the variables can be

```js
{
  "id": 1,
  "input": {
    "body": "Some updated content."
  }
}
```

Of course, for the efficient implementation of GraphQL 
to produce software applications, you need: 

- clients for web, android, ios applications
- GraphQL server
- environment, platform for development, testing, control.

## Apollo Graph Platform

[Apollo Graph Platform](https://www.apolloGraphQL.com/docs/intro/platform/)
combines the answers to these 3 needs necessary for GraphQL to run smoothly and as a platform handles about 90% of GraphQL query traffic.

- It gives us Apollo GraphQL client with which we can serve queries and receive responses in our web, android and ios applications. 
- We also get a server that responds to these queries 
- and a studio through which we get a set of tools for monitoring, testing, team collaboration and more.

## Vue Apollo

[Vue Apollo V4](https://v4.apollo.vuejs.org/) is a GraphQL client for Vue 3 still in the early stages of the v4.0.0-alpha.4 project but worth a look. There is an announcement of a continuation of this GraphQL client.

This client is written in 3 types of APIs:

- [option API](https://v4.apollo.vuejs.org/guide-option/) - typical for Vue 2 and used in Vue 3
- [composition API](https://v4.apollo.vuejs.org/guide-composable/) - standard for Vue 3
- components API](https://v4.apollo.vuejs.org/guide-components/) - to be used directly in a template as a component

Of course we also have a stable version [Apollo Vue V3](https://apollo.vuejs.org/guide/) for Vue 2.

## Is it worth it?

As usual there are pros and cons but also [more and more users](https://GraphQL.org/users) - with Facebook and Twitter leading the way.
This is a good time to try, I believe.

Sources:

- [GraphQL.org](https://GraphQL.org/)
- [Apollo GraphQL](https://www.apolloGraphQL.com/)
- [GraphQLZero](https://GraphQLzero.almansi.me/#get-started) - GraphQL fake API for testing.
- [vue-apollo](https://github.com/vuejs/vue-apollo)
- example application for Vue 2 but with composition API [Rick & Morty meet Apollo Client](https://github.com/NataliaTepluhina/apollo-presentation) from [Natalia Tepluhina](https://www.nataliatepluhina.com/) 
- GraphQL vs REST API! who will win?](https://GraphQLmastery.pl/)
