## KENTOVERSE WEB APP

DEV - [-https://kv-api-services-2.firebaseapp.com/]

# The Project
- Phase 1 - Tech Stack & Tooling
- Phase 2 - Environment
- Phase 3 - Design, Planning, Roadmap, Strategy
- Phase 4 - Development
- Phase 4 - Test

# Tech Stack
Framework
- [NextJS-13] - (https://beta.nextjs.org/docs/upgrade-guide)
- [Tailwind] - (https://tailwindcss.com/docs/installation)
- [Firebase] - (https://firebase.google.com/)

Tooling
- [VSCode] - (https://openai.com/blog/chatgpt)
- [Figma] - (https://www.figma.com)
- [Storybook] - (https://storybook.js.org)
- [Bootstrap] - (https://getbootstrap.com/)
- [Coolors] - (https://coolors.co)
- [ChatGPT] - (https://openai.com)

Dependencies
- [GoogleFont] - (https://fonts.google.com)





## Start Local Development

```bash ( Open project in IDE )
git remote -v                       /* copy remote url (github)
git clone (remote url)            
git checkout -b [dev-branch-name]

source ~/.nvm/nvm.sh                /* use latest version (node)
npm install
npm run dev
npm run storybook                   /* develop with (storybook)
npm run build
npm run start                       /* run production code

- ( Merget to Main branch )
git checkout main                  
git pull origin main
git checkout dev-branch
git rebase main
git checkout main                   /* merge main branch - - 

git merge dev-branch && git push origin main

## Reset to main last version
git checkout -b [new-branch]
git add . && git commit -m "test" && git push -f origin [new-branch]
git fetch
git reset --hard origin/main
git push -f origin main

## Deploy project to DEV.env
firebase login
firebase deploy
# enable the hidden command
firebase --open-sesame deletegcfartifacts
# purge everything
firebase functions:deletegcfartifacts 
firebase experiments:enable webframeworks
firebase use --add [project]

- (Useful CLI)
rm package-lock.json && rm -rf node_modules
rm -rf .next && rm -rf out 
npx next info
npx next -h 
git remote add google 
https://source.developers.google.com/p/kv-web-apps/r/kv-webapp-dev

// authorized permission to folder
sudo chmod -R u+w /Users/mocavada/Library/Caches/pip

## getInitialProps will be called on every client-side navigation, 
## if you'd like to only fetch data at build-time, switch to getStaticProps (see example code in 
(libs/service)


### References
# NextJS 
- Next JS Documentation (https://nextjs.org/docs)

- NextJS Beta (https://beta.nextjs.org/docs/upgrade-guide)

- NextJS Data Fetching Client- getInitialProps while Build Time - getStaticProps
(https://nextjs.org/docs/advanced-features/static-html-export)

 https://nextjs.org/docs/advanced-features/static-html-export#getinitialprops !Caveats

- NextJS VSCode Extention (https://marketplace.visualstudio.com/items?itemName=IbrahimCesar.ibrahimcesar-nextjs-developer-pack)

- Test (https://nextjs.org/docs/advanced-features/debugging)

- Typescript Cheatsheet (https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-advanced-object-types/cheatsheet)

- Tailwind Channel
(https://www.youtube.com/@TailwindLabs)
- Tailwind Inline Variabke 
https://v2.tailwindcss.com/docs/just-in-time-mode

#UI Dev

- Styled JSX (https://github.com/vercel/styled-jsx)

- Components Example (https://flowbite.com/docs/components)
- Icons (https://react-icons.github.io/react-icons)
- Image Sample (https://unsplash.com/s/photos/product)
- Types (https://blog.logrocket.com/comparing-typescript-and-proptypes-in-react-applications)

