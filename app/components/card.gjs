import { equals } from "../helpers/conditionals";

<template>
  <div class="card">
    <h3>Username: {{@username}}</h3>
    <h4>Full name: {{@full_name}}</h4>
    <p>Age:
      {{@age}}
      {{if (equals @age 1) 'year' 'years'}} old ({{if
        @isLegal
        "Is of a legal age!"
        "Is not of a legal age"
      }})</p>
    <p>Bio: {{@bio}}</p>
  </div>
</template>
