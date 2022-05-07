// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin'); // 어디에서 실행할 것인지를 구성옵션으로 명시해줘야 한다.
const CopyPlugin = require('copy-webpack-plugin'); // 설치한 패키지 가져오기

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  // parcel index.html
  // webpack은 parcel과 다르게 html파일이 아닌 js파일을 진입점으로 설정한다.
  // => parcel main.js 와 동일한 개념으로 이해
  entry : './js/main.js',

  // 결과물(번들)을 반환하는 설정
  // path는 nodejs에서 필요로하는 절대경로를 명시해줘야함.
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}