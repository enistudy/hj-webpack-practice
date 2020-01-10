# Webpack

## 목표

1. Webpack이 무엇인지 알 수 있다.
2. Webpack 핵심 요소를 알 수 있다.
3. Webpack의 기본적인 설정을 커스텀하게 할 수 있다.

## build

```
npm run build
```

## dev server start

```
npm start
```

## test

```
npm test
```

---

## Webpack 이란?

프로젝트를 수행하다 보면 유지보수의 측면에서 하나의 파일이 아닌 여러 파일로 나눠서 작업하는 경우가 많다. 파일 단위의 모듈화는 유지보수 측면에서는 좋으나 웹 프론트엔드 입장에서 네트워크 비용을 증가시키는 단점이 있다. 그렇기 때문에 개발은 모듈 단위로 하되, 실제 배포는 하나의 파일로 묶어서 처리할 필요가 있다. 

Webpack는 이렇게 여러 모듈로 나누어진 파일을 하나의 파일로 묶어주는 역할을 수행한다. Webpack은 자바스크립트, 이미지, 스타일 시트 등 모든 것을 모듈로 간주한다. 이미지나 스타일 시트와 같은 비 자바스트크립트 파일은 자바스크립트 형태로 로딩하여 번들링 해준다.

## Webpack의 핵심요소

Webpack의 핵심요소는 크게 4가지로 볼 수 있다.

- 엔트리(Entry)
- 아웃풋(Output)
- 로더(Loader)
- 플러그인(Plugin)

### Entry

엔트리(Entry)는 의존성 그래프의 시작지점이다. 의존성 그래프란 각 모듈 간의 의존성을 그래프 형태로 나타낸 것을 의미한다. 여러 모듈로 얽혀진 애플리케이션은 당연히 모듈 간 의존성도 복잡할 것이다. 웹팩이 복잡한 모듈 관계를 속에서 어느 지점부터 번들링할 것인지 지정해주는 것이 바로 엔트리이다.

```javascript
module.exports = {
   entry: ["@babel/polyfill", "./src/index.tsx"],
   ...
}
```

### Output

엔트리로 설정한 파일을 시작으로 의존되어 있는 모든 모듈들을 하나의 파일로 번들링한 결과를 어디에 위치시킬 것인지 설정하는 것이 바로 아웃풋이다.

```javascript
module.exports = {
  output: {
    filename: "bundle.[hash].js",
    path: path.join(__dirname, "dist"),
  },
}
```

### Loader

웹팩은 자바스크립트이든 그렇지 않든 모두 모듈로 처리한다. 위에서 잠깐 언급했듯이, 이미지나 폰트, 스타일시트와 같이 비 자바스크립트 파일도 모듈로 처리한다. 하지만 웹팩은 자바스크립트 밖에 인식하지 못하기 때문에 비 자바스크립트 파일을 자바스크립트로 인식할 수 있도록 도와주는 무언가가 필요하다. 그것이 바로 로더이다.

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      ...
    ],
  },
}
```

### Plugin

플러그인은 번들링된 결과물에 추가적인 작업을 할 때 사용된다. 번들링된 자바스크립트를 난독화하거나 CSS 등과 같은 파일을 따로 빼내어 결과물을 만드는 용도로 사용할 수 있다.

```javascript
module.exports = {
  plugins: [    
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new Dotenv(),
  ],
}
```

## 참고

- http://jeonghwan-kim.github.io/js/2017/05/15/webpack.html

- http://webframeworks.kr/tutorials/translate/webpack-the-confusing-parts/

- https://webpack.js.org/loaders/
- https://velog.io/@padakim/Webpack4-for-React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%9B%B9%ED%8C%A94-1-