---
title: Nuxt 3 moduły
---

    29.10.2021

    
<img class="animate-pulse" src="/Nuxt-js.png" alt="Nuxtlogo" style="height: 100px; width:100px;"/>


 

# Nuxt 3 - moduły

Po około 2 tygodniach po udostępnieniu Nuxt 3 w wersji beta public prace nad samym projektem, dokumentacją są rozwijane aby w efekcie po pewnym czasie ogłosić wersję stabilną - gotową do produkcji.

Ważnym elementem jego rozwoju są moduły, które można zainstalować i używać w Nuxt 3.


## Moduły wzbogacają funfcjonalności frameworka.

Moduły są to biblioteki usług, funkcjonalności, które w prosty sposób można zintegrować z frameworkiem i korzystać z nich w prosty sposób.
Moduły wzbogacją framwork i dają moliwość prostego korzystania z tego co już developmencie jest sprawdzone i działa.
Tak jak pisałem wcześniej o starterach, pozwala to skrócić czas tworzenia aplikacji, skorzystać z gotowych wzorców i rozwiązań.

## Moduły Nuxt 2 z których korzystałem.

Osobiście w Nuxt 2 korzystałem między innymi z 
- [i18n](https://github.com/nuxt-community/i18n-module) modułu do internacjonalizacji. 
- [content](https://content.nuxtjs.org/), do prostego dostępu do treści i danych tworzonych w Markdown, JSON, YAML, XML i pliku CSV przez API na wzór MongoDB.
- [axsios](https://axios.nuxtjs.org/) modułu do Nuxt opartego na bibliotece clienta http dla przeglądaki i node js
- [tailwind css](https://tailwindcss.nuxtjs.org/) co raz bardziej używanego i rozwijanego frameworku css typu utility first.

Przedstawiłem tylko 4 z 172 modułów stworzonych dla Nuxt 2. Pełną listę możemy znaleźć na stronie [modules.nuxt.org](https://modules.nuxtjs.org/)

## Moduły Nuxt 3 w TS

Nuxt 3 został napisany w Type Script, co ma daje nam bardzo wiele zalet w nowoczesnym kodowaniu i tworzeniu aplikacji webowych. Również moduły, aby w pełni korzystać benefitów TS powinny być w TS napisane. Dlatego też najszybciej powstały te które były w miarę świeże. 
Należą do nich:

- [nuxt-windicss](https://github.com/windicss/nuxt-windicss) moduł kolejnego frameworka css typu utility first kompatybilnego z wspomnianym wcześniej tailwind css.
- [pinia/nuxt](https://pinia.esm.dev) moduł dzięki któremu intuicyjnie, bezpiecznie jeśli chodzi o typowanie mozemy prosto i elastcznie tworzyć i zarządzć magazynem danych (store)  dla Vue wraz z dostępem do DevTools w przeglądarce.
- [primevue](https://www.primefaces.org/primevue/) moduł integrując z Nuxt 3 bibliotekę komponentów UI dla Vue.

## Czekamy na kolejne moduły

Patrząc na ilość modułów dla Nuxt 2 i ogrom możliwości jakie nam dają w zakresie DX (DEVELOPER EXPERIENCE) oczekujemy aby jak najszybciej wiekszość była zailmplementowana do Nuxt 3. To też jest jednym z elementów ogłoszenia stabilnej wersji Nuxt 3.

Poniżej odnośnik do strony gdzie na bieżąco publikowany jest status gotowości użycia go w Nuxt 3.


[Is Nuxt 3 ready?](https://isnuxt3ready.owln.ai/)


[Moja uproszczona wersja na bazie NUXT 3 i jego API ](https://condescending-snyder-943f7c.netlify.app/)

## O jakich modułach byś marzył?