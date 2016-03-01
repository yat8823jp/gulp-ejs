# Spycejs Gulp　開発環境構築
Static Page develop gulp-ejs

## パッケージ一覧
* gulp
* gulp-sass
* browserSync
* html5shiv
* sanitize.css
* plumber //エラー通知
* notify //エラー通知
* gulp-imagemin //画像圧縮
* imagemin-pngquant //png画像の圧縮
* gulp-pleeease //ベンダープレフィックス
* gulp-useref //ファイル結合
* gulp-if //if文
* gulp-uglify //js圧縮
* gulp-cssnano //css圧縮
* del //ディレクトリ削除
* run-sequence //並行処理
* gulp-ejs //htmlの書き出し＆テンプレートファイルインクルード,
* gulp-sourcemaps //ソースマップ

## 依存アプリケーション等

* [npm](https://www.npmjs.com/)
* [gulp](http://gulpjs.com/)
* [sanitize.css](https://10up.github.io/sanitize.css/)
* [sass](http://sass-lang.com/)

## 設定ファイル

* .editorcoding 文字コード設定


### インストール

#### npmインストール
` npm install `

エラーが出たら `sudo` をつける

### Usage
* 開発を行うファイルはdevディレクトリの中に入れてください。
* htmlの吐き出し元となる、ejsファイルをejsフォルダの中にいれて開発してください。監視中、ejsフォルダのファイルが更新されると、devフォルダに吐出されます。
  * 例）dev/ejs/index.ejs → dev/index.html
* index.ejs、共通テンプレート用の_head.ejs、_foot.ejsを入れています。
* コンパイル時にcss、jsファイルは結合されます。デフォルトで入っているものを利用すれば、コンパイル時の書き出しの設定をコメントにして入れています。必要に応じて書き換えてください。
  * 例）`<!-- build:css css/common.css -->` 〜 `<!-- endbuild -->`
* リセットにsanitize.css を使用しています。お好みでnormalize.cssやreset.cssに変更してください。
* 開発が終わったら、 `gulp build` コマンドを利用し、devフォルダに吐出さているファイルより、htdocsのフォルダに全ファイルが吐出されます。
  * 例）dev/index.html → htdocs/index.html
* bowerで管理するファイルはコンパイル時に結合されるので、htdocsにbowerのディレクトリが入ることはありません。また、移す必要もありません。

### 起動コマンド
` gulp `　- defaultで設定しているtaskが起動する

` gulp *** ` - *** のtaskを起動する

### Author

YAT [http://wp.yat-net.com](http://wp.yat-net.com)

Chiaki [http://mellowchanter.info/](http://mellowchanter.info/)

###Version

2016.03.01 2.0.0 ejs v2.0に対応  

2016.02.29 1.3.0 bower の利用停止、dev内を整備して`gulp` を叩くだけで開発が始められるようにしました

2015.11.08 1.2.0 gulp-ruby-sassの廃止。gulp-sassの導入

2015.11.08 1.1.4 sourcemapの追加

2015.10.06 1.1.3 ruby-sassのインストール追記。モジュールアップデート他

2015.08.09 1.1.2 テンプレートファイル追加

2015.08.09 1.1.1 フォルダ名変更 template → ejs

2015.08.06 1.1 EditorConfig merge

2015.08.05 1.0
