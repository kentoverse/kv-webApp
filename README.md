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

# References
- Next JS Documentation
https://nextjs.org/docs

- NextJS Beta
https://beta.nextjs.org/docs/upgrade-guide

- Components Example
https://flowbite.com/docs/components

- Icons
https://react-icons.github.io/react-icons/

- Typescript Cheatsheet
https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-advanced-object-types/cheatsheet

- NextJS VSCode Extention 
https://marketplace.visualstudio.com/items?itemName=IbrahimCesar.ibrahimcesar-nextjs-developer-pack

- Image Sample
https://unsplash.com/s/photos/product

Styled JSX
https://github.com/vercel/styled-jsx

- Types
https://blog.logrocket.com/comparing-typescript-and-proptypes-in-react-applications/

- Test 
https://nextjs.org/docs/advanced-features/debugging


   

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
```

```bash ( Deploy project to DEV.env )
firebase login
firebase deploy
```

```bash ( Upload project to Github Repo )
git pull origin main
git checkout -b [dev-branch-name]
git add .
git commit -m [name of commit]      /* wrap value with ""
git push origin main

git checkout main                   /* rebase main branch
git pull origin main
git checkout dev-branch
git rebase main
git checkout main                   /* merge main branch (github)
git merge dev-branch
git push origin main
git remote -v                       /* merge main branch (google)
git push google main 
git merge google/main
```

```bash (Useful CLI)
rm package-lock.json && rm -rf node_modules
rm -rf .next && rm -rf out 
npx next info
npx next -h 

git remote add google https://source.developers.google.com/p/kv-web-apps/r/kv-webapp-dev

// authorized permission to folder
sudo chmod -R u+w /Users/mocavada/Library/Caches/pip

```
```bash


````
# enable the hidden command
firebase --open-sesame deletegcfartifacts
# purge everything
firebase functions:deletegcfartifacts 
firebase experiments:enable webframeworks
firebase use --add [project]


https://docs.docker.com/get-started/02_our_app/

https://nextjs.org/docs/advanced-features/static-html-export

{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [{
        "source": "**",
        "destination": "/index.html"
      }],
    "frameworksBackend": {
      "region": "us-east1"
    },
    "cleanUrls": true,
    "headers": [
      {
        "source": "/favicon.ico",
        "headers": [{
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }]
      }
    ]
  }
}

/** FETCHING DATA 
Client Navigation - [getInitialProps] 
Build Time - [getStaticProps]

see [docs] for Caveats
https://nextjs.org/docs/advanced-features/static-html-export#getinitialprops





getInitialProps will be called on every client-side navigation, if you'd like to only fetch data at build-time, switch to getStaticProps

import fetch from 'isomorphic-unfetch';

function MyPage(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

MyPage.getInitialProps = async function() {
  const res = await fetch('https://example.com/api/data');
  const data = await res.json();

  return {
    title: data.title,
    description: data.description
  };
};

export default MyPage;