#Node.js v12がインストールされたベースイメージ
FROM node:14

#アプリケーションディレクトリを作成
WORKDIR /usr/src/app
RUN mkdir /usr/src/app/log

#アプリケーションの依存関係をインストール
COPY package.json .
COPY yarn.lock .
RUN yarn

#アプリケーションのソースを配置
#ホストOSのカレントディレクトリ配下をコンテナ内の作業ディレクトリにコピー
COPY . .

#コンテナがアクセスを許可するポート指定
EXPOSE 8080

#コンテナ起動時に実行するコマンドを指定
CMD [ "yarn", "start" ]