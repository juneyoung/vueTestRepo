## 00. `Vue.js` 테스트

원본 : http://vuejs.kr/2017/02/05/express-with-vue/ 

## 01. 작업 내역

#### 1. nodejs 백앤드 구축
`express` 미들웨어를 사용하며 별도로 설치를 해줘야 함. `express-generator` 라는 zero-congifuration 툴을 사용하면 쉽게 구성할 수 있음
```
# express 의 설치 - 권한 이슈가 있으면 sudo 를 붙일 것 
$> node i -g express
# zero-configuration tool 설치
$> node i -g express-generator

# 서버 프로젝트 시작하기
$> express --view=jade {프로젝트 명}

# 3000 포트-기본- 을 이용하여 서비스 구동
$> cd {프로젝트 명}
$> npm i && npm start
```

#### 2. vuejs 프론트앤드 구축

```
# vue 설치 - 권한 이슈가 있으면 sudo 를 붙일 것
$> node i -g vue
# zero-configuration tool 설치
$> node i -g vue-cli

# 서버 프로젝트 시작하기
$> vue init webpack {프로젝트 명}

# 8080 포트-기본- 을 이용하여 서비스 구동
$> cd {프로젝트 명}
$> npm i && npm start
```

#### 3. vuejs 에서 express 로의 프록시

vue 프로젝트 내부의 `/config/index.js`
```
... 전략
proxyTable : {
  '/api' : {
    target : 'http://127.0.0.1:3000/api',
    changeOrigin : true,
    pathRewrite : {
      '^api' : ''
    }
  }
} 
... 후략 
```
`api` 이하로 들어오는 요청에 대해 `3000/api` 로 라우팅하는 설정임

## 99. 내역
- 20180430 - 초안작성 
