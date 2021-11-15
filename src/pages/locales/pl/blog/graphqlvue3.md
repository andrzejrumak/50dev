---
title: Vue 3 i GraphQL

---

    14.11.2021

<img class="animate-pulse"  src="/vue512.png" alt="VueLogo" style="height: 100px; width:100px;"/>

# Vue 3 i GraphQL


## Czym jest GraphQL?

GraphQL - jest innym niż tradycyjny REST API sposobem zapytań i odpowiedzi w procesie pobieraia danych z serwera. 

Cechy charakterystyczne - elastyczny jezyk zapytań, jeden endpoint i serwer qraphql podpięty pod bazy danych a nawet REST API.

## W czym jest lepszy od REST API?

- posiada jednolitą specyfikację API klienta i serwera, która wszyscy znają i uznają

- posiada jeden endpoint

- klient ma prosty język zapytań a serwer definiuje schemat danych do pobrania

- można jednym zapytaniem pobrać zróznicowane dane, gdzie w przypadku REST byłoby kilka zapytań do kilku adresów

- generowany jest mniejszy ruch między serwerem a klientem

## Proces zapytań i odpowiedzi w GraphQL.

- serwer graphl generuje dla nas automatycznie specyfikację API - [przykładowy fake GraphQL server](https://GraphQLzero.almansi.me/api)

- piszemy zapytanie - przykładowo 

```js
query {
  post(id: 1) {
    id
    title
    body
  }
}
```
- dostajemy odpowiedź w JSON

```js
{
  "post": {
    "id": "1",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
}
```
- również poprzez zapytanie - mutacje - modyfikujemy dane

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

gdzie zmiennymi będą

```js
{
  "id": 1,
  "input": {
    "body": "Some updated content."
  }
}
```

Oczywiście dla sprawnego implementowania GraphQL 
do produkcji oprogramowania, aplikacji potrzebne są: 

- klienci dla aplikacji web, android, ios
- serwer GraphQL
- środowisko, platforma dla developmentu, testów, kontroli.  

## Apollo Graph Platform

[Apollo Graph Platform](https://www.apolloGraphQL.com/docs/intro/platform/)
łączy w sobie odpowiedzi na te 3 potrzeby konieczne do sprawnego działania GraphQL i jako platforma obsługuje około 90% ruchu zapytań GraphQL.

- daje nam klienta Apollo GraphQL dzięki, któremu możmy obsługiwać zapytania i odbierać odpowiedzi w naszych aplikacjach web, android i ios. 
- dostajemy równie serwer odpowiadający na te zapytania 
- oraz studio,  poprzez które zdobywamy zestaw narzędzi do monitorowania, testowania, współpracy w ramach zespołu i inne.

## Vue Apollo

[Vue Apollo V4](https://v4.apollo.vuejs.org/) jest klientem GraphQL dla Vue 3 jeszcze w początkowej fazie projektu v4.0.0-alpha.4 ale warto jej się przyjrzeć. Jest zapowiedź kontynuacji tego klienta GraphQL.

Klient ten jest pisany w 3 rodzajach API:

- [option API](https://v4.apollo.vuejs.org/guide-option/) - typowe dla Vue 2 i stosowane w Vue 3
- [composition API](https://v4.apollo.vuejs.org/guide-composable/) - standard dla Vue 3
- [components API](https://v4.apollo.vuejs.org/guide-components/) - do zastosowania bezpośrednio w template jako komponent

Oczywiście mamy też stabilną wersję [Apollo Vue V3](https://apollo.vuejs.org/guide/) dla Vue 2.


## Czy warto?

Jak zwykle są za i przeciw ale też [co raz więcej użytkowników](https://GraphQL.org/users) - z Facebook i Twitter na czele.
Jest to dobry moment aby spróbować.



Źrodła:

- [GraphQL.org](https://GraphQL.org/)
- [Apollo GraphQL](https://www.apolloGraphQL.com/)
- [GraphQLZero](https://GraphQLzero.almansi.me/#get-started) - GraphQL fake API dla testów.
- [vue-apollo](https://github.com/vuejs/vue-apollo)
- przykład aplikacji dla Vue 2 ale z composition API [Rick & Morty meet Apollo Client](https://github.com/NataliaTepluhina/apollo-presentation) z prazentacji [Natalia Tepluhina](https://www.nataliatepluhina.com/) 
- [GraphQL vs REST API! kto wygra?](https://GraphQLmastery.pl/)
