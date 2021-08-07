import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Index.module.scss';
import Layout from '/components/Layout';

import Profile from '/components/Profile';
import Archive from '/components/Archive';

export default function Basic1(){

  return (<Layout>
    <div className={styles.container}>

      {/* /////////////////////メインコンテンツ//////////////////////////////// */}
      <div className={styles.mainContents}>
        {/* ---------------------------------メタ情報！！-------------------------- */}
        <div className={styles.updated}>2021/7/10</div>
        <h1>体づくり（ダイエット＋筋トレ）を始める前に確認しておくべきこと</h1>
        <img className={styles.topPhoto} src='/muscle/basic1Top.jpg' />
        <p>
          この記事では体づくり（ダイエット＋筋トレ）を始める前に、体づくりのために何をやったらいいのかをざっくり確認していきます。<br />
        </p>

        {/* -----------------------------------見出し１-------------------------- */}
        <h2>体づくり（ダイエット・筋トレ）のためにやること</h2>
        <p>体づくりのためにやることはとてもシンプルです。</p>
        <h3>食べる量を減らし、運動をする。</h3>
        <ul>
          <li>食べる量を減らす　⇒　食事制限</li>
          <li>運動をする　　　　⇒　筋トレ（＋有酸素運動）</li>
        </ul>
        <p>
          理想の体になるには「食事制限」と「筋トレ」の両方に取り組む必要があります。<br />
          次に両方必要な理由を説明します。
        </p>

        {/* -----------------------------------見出し２-------------------------- */}
        <h2>体づくりに「食事制限」「筋トレ」の両方が必要な理由</h2>
        <p>食事制限だけ取り組んだ場合、脂肪と一緒に筋肉も減っていくので</p>
        <h4>体重は減りますが体はダラッとしたままになります。</h4>
        <p>次に、筋トレのみに取り組んだ場合ですが、</p>
        <h4>これは特に腹筋に言えることなのですが、脂肪が筋肉を覆ってしまって筋肉が見えなくなります。</h4>
        <p>ということで「食事制限」と「筋トレ」それぞれの目的はこのようになります。</p>
        <ul>
          <li>・食事制限：余分な脂肪を落とす</li>
          <li>・筋トレ　：体のメリハリをつくる</li>
        </ul>
        <p>スラっとしたボディライン、または、筋肉質な見た目になるためには、</p>
        <h3>筋トレで体のメリハリをつくりつつ、食事制限で脂肪を落とす必要があります。</h3>
        <p>
          ちなみに、ランニングやスポーツなどの有酸素運動は脂肪燃焼になるので、<br />
          余裕があれば食事制限、筋トレにプラスして有酸素運動も取り入れると<br />
          効率的に脂肪を落とすことができます。
        </p>
        <p>上のリストに有酸素運動も追加すると下のようになります。</p>
        <ul>
          <li>・食事制限　：余分な脂肪を落とす</li>
          <li>・筋トレ　　：体のメリハリをつくる</li>
          <li>・有酸素運動：さらに余分な脂肪を落とす</li>
        </ul>

        {/* -----------------------------------見出し３-------------------------- */}
        <h2>まとめ</h2>
        <p>
          体づくり（ダイエット・筋トレ）のためにやること
        </p>
        <ul>
          <li>・食事制限　：余分な脂肪を落とす</li>
          <li>・筋トレ　　：体のメリハリをつくる</li>
          <li>(・有酸素運動：さらに余分な脂肪を落とす) ⇐ 余裕があればやる</li>
        </ul>
        
        <p>次回以降の記事で、今度は「食事制限」、「筋トレ」のおすすめのやり方を具体的に解説していきます。</p>
      </div>



{/* ------------------------以下はいじらない----------------------------------- */}
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