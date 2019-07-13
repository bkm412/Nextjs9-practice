# Nextjs9-practice
Practice project for changing in next.js 9 version

Next.js 9 + typescript + styled components

# 프로젝트 설명
## 실행방법
```
#package install
$ yarn
or
$ npm install

#start local server
$ yarn dev 
or
$ npm run dev
```

## 주요 기능
- Next.js 9에서 제공하는 API route를 사용해서 API 제공 ( http://localhost:3000/api/user, http://localhost:3000/api/user/:id)
- Next.js 9에서 제공하는 기본 타입스크립트 기능 사용 ( next dev )
- Next.js 9에서 제공하는 dynamic route 사용 ( http://localhost:3000/user, http://localhost:3000/user/:id )

# 주요 변경점
## dynamic route 기본 제공

기존에는 dynamic route는 별도로 server 파일에서 설정했었습니다.

dynamic route 의 예시로는 간단한게 아래와 같은 코드가 있습니다.

```javascript
app.get('/user/:id, function(req, res) {
    var id = req.params.id;
    //위의 경우 user/ 뒤의 숫자를 동적으로 id 변수에 받아서 페이지 라우팅을 처리할 수 있습니다.
});
```

앞으로는 별도로 server 파일에서 설정하지 않고 `pages`폴더 안에 Next.js의 규칙을 따라 파일을 만들어 주는 것 만으로 dynamic route를 구현할 수 있습니다.

파일명을 [param].jsx로 만들어 주세요.

예를 들면 `user/:id` 의 라우팅을 구현하고 싶다면 `pages/user` 폴더 안에 `[id].jsx` 파일로 컴포넌트를 만들어 주면 됩니다.

그 후에 `getInitialProps` 함수를 사용해 id값을 받아올 수 있습니다.

```javascript
// user/3으로 접속했다면
static async getInitialProps({ query }) {
  const { id } = query // 3이 들어옵니다.

  return { ... }
}
```



## 타입스크립트 관련 개선

이전에는 typescript를 사용하기 위해 next.config.js를 커스터마이징 하고 .babelrc에 별도 설정을 해줘야 typescript를 사용할 수 있었습니다.

하지만 Next.js 9버전에서는 typescript를 사용하기 위한 요건이 굉장히 간단해졌습니다.

우선 타입스크립트 관련 모듈을 설치합니다
```
$ yarn add -D @types/node @types/react typescript
```

그 후 여러분의 dev script를 변경해줍니다
```
"dev": "next dev" //기존에는 next를 사용했습니다.
```

이제 `yarn dev`를 실행할 때 `next dev`명령어를 통해 구동이 될 것이고, 이 명령어는 기존 `next`구동으로 잡지 못했던 타입에러를 잡아줍니다.

또한 typescript관련 설정 파일이 없을 때 기본적으로 이를 만들어 줍니다. 예를 들면 `tsconfig.json` 같은 파일을 생성해줍니다.

별도로 더이상 babel과 next config를 설정할 필요가 없습니다.




## API route 제공

더 이상 get API를 제공하기 위해서 server 파일을 커스터마이징 할 필요가 없습니다.

`pages/api` 폴더에 파일을 만들고, 이 파일들은 react component 대신 request handler를 export 해주면 됩니다.

예를 들어 `<siteuri>/api/user` 라는 api로 데이터를 제공해주고자 한다면 `pages/api/user.js` 파일을 만든 후에 아래와 같이 export해주면 됩니다.

```javascript
export default function handle(req, res) {
  //your logic
  res.send('It is user');
  res.end();
}
```

api콜 또한 dynamic router로 구현이 가능하므로 `/user/:id` 와 같은 API를 쉽게 구현할 수 있습니다.

