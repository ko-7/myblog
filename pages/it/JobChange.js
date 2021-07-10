import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Index.module.scss';
import Layout from '/components/Layout';

import Profile from '/components/Profile';
import Archive from '/components/Archive';

export default function Home(){
  return (<Layout>
    <div className={styles.container}>

      {/* /////////////////////メインコンテンツ//////////////////////////////// */}
      <div className={styles.mainContents}>
        {/* ---------------------------------メタ情報！！-------------------------- */}
        <div className={styles.updated}>2021年6月20日</div>
        <h1>未経験・地方でのWeb系転職は「インフラエンジニア」「大手SES企業」が狙い目です！</h1>
        <img className={styles.topPhoto} src='/it/JobChangeTop.png' />
        
        <p>
          業界未経験でIT業界(インフラ系)へ転職した経験から、
          未経験転職なら「インフラエンジニア」で「大手SES企業」
          への転職がおすすめという話をします。
        </p>

        {/* -----------------------------------見出し１-------------------------- */}
        <h2>転職時の私の状況</h2>
        <p>
          副業をしようと気軽にプログラミングを始めた私は転職しようと決心するまで2年半かかり、
          転職時の状況はこんな感じでした。
        </p>
        <ul>
          <li>● 基本情報技術者試験　合格</li>
          <li>● html、css、javascriptは1週間あれば1ページ作れる程度</li>
          <li>● git、heroku、AWS(EC2,Amplify)をなんとなく使ったことがある</li>
          <li>● Ruby on RailsでCRUD操作など基本的なことができる</li>
          <li>● React、Nextでポートフォリオサイトを作成したことがある</li>
        </ul>
        <p>
          まだまだ知識不足ですが、Webの世界の全体がなんとなく見える程度の知識はありました。
        </p>

        {/* -----------------------------見出し２--------------------------- */}
        <h2>IT系の業種は大きく分けて4種類！</h2>
        <p>
          ではさっそく転職の話に入っていきます。
          Web系しか知らなかった私は転職活動を初めて、ITの業界は大きく4種類あることを知りました。
        </p>
        <ul>
          <li>１．組み込み系：　主にC言語やJavaを使い自動車やATMで使うプログラムを組む</li>
          <li>２．オープン系：　社内で使用するシステムをつくる</li>
          <li>３．Web系　　：　html,css,javascriptでフロントを作ったり、php,rubyなどでバックエンドを組む</li>
          <li>４．インフラ系：　サーバー、ネットワークを整えるいわばITの基礎を整える</li>
        </ul>
        <p>
          「え、Web系とインフラ系って違う業界なの？」<br />
          と思う方もいると思うのですが、<br />
        </p>
        <h4>インフラ系はサーバーを扱うのでWeb系以外にも、<br />
          ATMや自動車などのデータをサーバーに集めたりするなど、<br />
          組み込み系などIT業界に幅広く関わります。
        </h4>
        <h3>しかし、インフラはITの基礎なので確実に今後Webを勉強する上での力になります！</h3>

        {/* ---------------------------------見出し３--------------------------------------- */}
        <h2>インフラエンジニアの魅力</h2>
        <p>私自身転職活動を始めて、転職エージェントの話を聞くまではWeb系のバックエンドエンジニアになろうとしていました。</p>
        <h4>しかし、上であげた4つにはこんな特徴があるらしいのです</h4>
        <ul>
          <li>１．組み込み系：東海地方で求人が多い</li>
          <li>２．オープン系：全国で求人がある</li>
          <li>３．Web系　　：求人はほぼ東京にしかない</li>
          <li>４．インフラ系：全国で求人がある。不況でも安定して求人がある。</li>
        </ul>
        <p>
          インフラ系はITの基盤であるため景気によらず投資が必要で求人が安定してる上、
          全国に求人があるらしい。
        </p>
        <h3>
          さらに、オンプレでインフラの基礎を学びつつAWSなどのクラウドも触ればこの先Web系の仕事をするにしてもきっと強みになる！
        </h3>          
        <p>こんな感じで私はインフラ系に転職することにしました。</p>

        {/* ----------------------------------見出し４------------------------- */}
        <h2>SES企業って評判悪いけど大丈夫？</h2>
        <p>
          次に悪い噂ばかりのSES企業について話していきます。<br />
          結論から言うと、
        </p>
        <h3>「大手」のSES企業なら積極的に狙っていくべき！</h3>
        <p>です。</p>
        <h4>というのも、大手SES企業なら扱う案件が多く、ほぼ希望通りに仕事をさせてもらえる上、教育が手厚いためスキルを高めて次の転職も見えてきます！</h4>
        <h3>また、自社開発や受託をしている企業より大手SES企業の方が給料や待遇などの条件が良い場合が多いです。</h3>
        <p>ちなみに私は「年収320万円(残業代除く)＋講座無料で受け放題」の未経験としては比較的良い条件で内定をもらいました。</p>

        {/* ----------------------------見出し５------------------------- */}
        <h2>まとめ</h2>
        <h3>インフラはWeb系の仕事をする上での基礎になります！</h3>
        <p>
          未経験でWeb系に転職したい人もいったん未経験でも入りやすい
          <h3>大手SES企業でインフラ系の仕事</h3>
          をして実務経験を積みつつスキルを高めてから改めてWeb系に行くのもいいんじゃないかなと思います！
        </p>

      </div>





{/* /////////////////////////////以下はいじらない/////////////////////////////////////////// */}
      {/* 右サイドコンテンツ */}
      <div className={styles.sideContents}>
        {/* プロフィール（右サイドコンテンツ） */}
        <Profile />
        {/* 過去記事アーカイブ（右サイドコンテンツ */}
        <Archive />
      </div>
    </div>
  </Layout>)
}

