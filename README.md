# DO NOT USE THIS BRANCH UNLESS YOU ARE CONTRIBUTING TO THE RELATED ISSUES!

This branch is a reproduction for 3 issues:

- Nuxt/Vue link hydratation (currently in revision in nuxt-directus to rule out that module).
- nuxt-directus `statusMessage.replace`
- directus `schema apply`

# How to reproduce
Follow the chapter about the related repo/issue.
All the reproductions use a docker-compose to deploy a local directus stack, so make sure to have docker setup and running.
Personally, for ease of use, I manage all via docker desktop + vscode + docker extension.

### Directus user and password
**user@example.com**
**password**

## Nuxt/Vue
[nuxt-directus/issue#148](https://github.com/Intevel/nuxt-directus/issues/148)
I'm having an hard time reproducing this error in local dev. ~~Must be a latency/timing issue then.~~ As stated in the issue it is probably my fault on the wrong fetching methodology.

## nuxt-directus
[nuxt-directus/issue#147](https://github.com/Intevel/nuxt-directus/issues/147)
It is as simple as generating a `FORBIDDEN` error within directus and trying to access it with a fetch request from nuxt.

1. docker-compose up the `docker-compose-dev.yml`.
3. create a `links` collection (GUUID) with:
 - input: `name`
 - input: `link`
 - datepicker: `date`
 - statuses: `hidden` and `visible`
4. fill the collection with the provided `links.csv`.
5. apply a custom public access that filters only the `visible` items, but doesn't grant any field permission (intended).
6. start nuxt `npm i && npm run dev` and navigate to the links page.

## directus
[directus/issue#17117](https://github.com/directus/directus/issues/17117)
It is as simple as spinning up a local dev directus stack and trying to apply the provided schema (already binded to the directus container).

1. docker-compose up the `docker-compose-dev.yml`.
2. attach sh to the running directus container.
3. apply the schema `npx directus schema apply --yes schema.yml`
4. done.