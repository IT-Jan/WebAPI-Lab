"#WebAPI-Lab" 

Packages installation:<br />
npm i koa koa-bodyparser koa-json koa-logger <br />
npm i koa-router@11.0.2<br />
npm i @types/koa<br />
npm i @types/koa-bodyparser<br />
npm i @types/koa-json<br />
npm i @types/koa-logger<br />
npm i @types/koa-router<br />
npm i koa-passport @types/koa-passport<br />
npm i passport-http @types/passport-http<br />
npm i passport-jwt @types/passport-jwt<br />
npm i jsonschema<br />
npm i koa-static @types/koa-static<br />
npm i @koa/cors<br />
npm i -g jest <br />
npm i supertest<br />
npm i eslint<br />
<br />
<b>Before running the code:</b><br />
1. Setup the database<br />
2. Update config.ts<br />
3. Create "out" folder<br />
<br />
<b>Setup the Web Server:</b><br />
    npx tsc -init<br />
    tsc<br />
    node .\out\<br />
<br />
<b>React & vite & ant design: </b><br />
    npm init vite@latest front-end<br />
    cd front-end<br />
    npm i antd<br />
    npm i react-router-dom<br />
    npm i axios<br />
    npm i js-base64<br />
    npm run dev<br />
<br />
<b>Elint: </b><br />
    npm init @eslint/config<br />
    npx eslint .\out\routes\<br />
    npx eslint [the js file within the folder] > [export filename]<br />