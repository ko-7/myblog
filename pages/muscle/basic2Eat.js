import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Index.module.scss';
import Layout from '/components/Layout';

import Profile from '/components/Profile';
import Archive from '/components/Archive';

export default function Basic2(){
  return (<Layout>
    <div className={styles.container}>

      {/* /////////////////////メインコンテンツ//////////////////////////////// */}
      <div className={styles.mainContents}>
        {/* ---------------------------------メタ情報！！-------------------------- */}
        <div className={styles.updated}>2021年8月7日</div>
        <h1>【重要】食事制限⓵　準備編</h1>
        <img className={styles.topPhoto} src='/muscle/basic2EatTop.jpg' />
        <p className={styles.topPhotoSource}>Photo by Eiliv-Sonas Aceron on Unsplash</p>
        <p>
          食事制限を始めるにあたっての準備として、基礎知識をまとめます。<br />
          とても大事な内容で、知っているだけで食事制限の成功率がぐんと上がります。
        </p>

        {/* -----------------------------------見出し１-------------------------- */}
        <h2>食事制限の前提「摂取カロリー ＜ 消費カロリー」</h2>
        <p>脂肪を落とすためには1日に食べるカロリーより消費するカロリーが多くなるようにする必要があります。</p>
        <p>
          「摂取カロリー ＜ 消費カロリー」を日々達成するために、<br />
          まず、準備が必要です。
        </p>

        <p>といっても準備はシンプルで、下のように3ステップだけです。</p>
        <ul>
          <h3>食事制限の準備　3ステップ</h3>
          <li>ステップ１：1日の消費カロリーを知る</li>
          <li>ステップ２：1日の摂取カロリーを決める！</li>
          <li>ステップ３：カロリーをどう摂るか、栄養バランス(PFC)を考える</li>
          <li>食事制限開始！！</li>
        </ul>

        {/* -----------------------------------見出し２-------------------------- */}
        <h2>ステップ１：1日の消費カロリーを知る</h2>
        <p>
          では1日の消費カロリーを知るところから始めます。<br />
          1日の消費カロリーには<br />
        </p>
        <ul>
          <li>基礎代謝：何もしないでも（寝てても）消費するカロリー</li>
          <li>活動による消費カロリー：運動や日常生活で消費するカロリー</li>
        </ul>
        <p>の2種類があり、下のようになっています。</p>
        <h3>消費カロリー　=　基礎代謝　+　活動による消費カロリー</h3>
        <h4>
          消費カロリーはいろんなWebページで目安が紹介されていたり、<br />
          体重と体脂肪率から算出する方法などあります。
        </h4>
        <p>
          消費カロリーには個人差があるので、あくまで目安がわかればＯＫです。<br />
          ここでは私が参考にしたWebページを紹介します。<br />
        </p>
        <h3>
          【消費カロリー　おすすめのWebページ】<br />
          <a href="https://motivated.jp/modules/calom/index.php" target="_blank" rel="noopener noreferrer">
            https://motivated.jp/modules/calom/index.php
          </a>
        </h3>
        <p>
        「体重」と「年齢」を入力して、<br />
        「基礎代謝」と「1日の消費カロリー」を確認ください。<br /><br />
        　※必要なのは、「基礎代謝」と「1日の消費カロリー」です。「活動による消費カロリー」は不要です。
        </p>

        {/* -----------------------------------見出し3-------------------------- */}
        <h2>ステップ２：1日の摂取カロリーを決める！</h2>
        <p>次に、ステップ１で調べた消費カロリーをもとに1日の摂取カロリーを決めます</p>
        <p>摂取カロリーの決め方はシンプルで、下の範囲内で適当に決めてください。</p>
        <ul><li><h3>1日の消費カロリー　＞　1日の摂取カロリー　＞　1日の基礎代謝</h3></li></ul>

        <p>
          というのも、脂肪を落とすには「1日の消費カロリー　＞　1日の摂取カロリー」であることは必須です。<br />
        </p>
        <p>
          「1日の摂取カロリー　＞　1日の基礎代謝」というのは、<br />
          摂取カロリーを基礎代謝以下にしてしまうと体に過度の負担がかかり体を壊してしまうためです。<br />
        </p>
        <p>
          あとは、どれだけのペースで脂肪を落としたいかの問題なので、<br />
          ストレスとのバランスを考慮して摂取カロリーを調整してください。
        </p>
        <p>
          私は始め、1日の消費カロリーより300kcal低くなるように摂取カロリーを設定しました。<br />
          基礎代謝＋100kcalでやってみたこともありますが、ストレスで食欲が爆発しました...<br />
          我慢しすぎると、食欲が爆発するので、徐々に自分の限度を見極めつつ調整してみてください。
        </p>

        {/* -----------------------------------見出し4-------------------------- */}
        <h2>ステップ３：カロリーをどう摂るか、栄養バランス(PFC)を考える</h2>
        <p>
          最後に栄養バランスを考えます。<br />
          ステップ２で摂取カロリーを決めましたが、そのカロリーを何から摂るかを考えます。
        </p>
        <p>主なエネルギー源となる栄養素は下の3つだけです。</p>
        <ul>
          <li>・タンパク質(Protein)</li>
          <li>・脂質　　　(Fat)</li>
          <li>・炭水化物　(Carbohydrate)</li>
        </ul>
        <p>
          ですので、この3つの栄養素それぞれで何kcal摂るかを考えるだけで良いのです。<br />
          この配分のことを各栄養素の頭文字をとって「PFCバランス」と言います。
        </p>
        <p>
          さて、ではPFCバランスをどうするかですが、<br />
          私はシャイニー薊さんという方を参考にしていて、下のようにしています。<br />
          ※　()内は摂取カロリー1800kcalの例です。
        </p>
        <ul>
          <h3>PFCバランス</h3>
          <li>・タンパク質：30%　（540kcal / 1800kcal）</li>
          <li>・脂質　　　：20%　（360kcal / 1800kcal）</li>
          <li>・炭水化物　：50%　（900kcal / 1800kcal）</li>
        </ul>
        <p>
          これで、カロリーの配分はわかりました。
        </p>
        <p>
          しかし、スーパーで売ってる食品の裏のラベルには「カロリー」ではなく「g」で表記されています。<br />
          なので、上のカロリーを「g」に変換して把握しておく必要があります。<br />
          各栄養素の1g当たりカロリーが下の表です。
        </p>
        <ul>
          <li>・タンパク質：4kcal/g</li>
          <li>・脂質　　　：9kcal/g</li>
          <li>・炭水化物　：4kcal/g</li>
        </ul>
        <p>摂取カロリー1800kcalで計算すると下のようになります。</p>
        <ul>
          <h3>1日の摂取量　(摂取カロリー1800kcalの場合)</h3>
          <li>・タンパク質：135g</li>
          <li>・脂質　　　：40g</li>
          <li>・炭水化物　：225g</li>
        </ul>
        <p>PFCバランスをきっちり守ることは難しいので、あくまで目安としてください。</p>

        {/* -----------------------------------まとめ-------------------------- */}
        <h2>まとめ</h2>
        <p>記事が長くなってしまったので、ここで内容をさらっとまとめます。</p>
        <ul>
          <h3>食事制限の準備</h3>
          <li>●前提：「摂取カロリー ＜ 消費カロリー」は必須条件</li>
          <li>　</li>
          <li>●ステップ１：1日の消費カロリーを知る</li>
          <li>　このページで調べる ⇒ 
            <a href="https://motivated.jp/modules/calom/index.php" target="_blank" rel="noopener noreferrer">
              https://motivated.jp/modules/calom/index.php
            </a>
          </li>
          <li>　</li>

          <li>●ステップ２：1日の摂取カロリーを決める！</li>
          <li>　↓↓　この範囲で摂取カロリーを決める　↓↓</li>
          <li>　1日の消費カロリー　＞　1日の摂取カロリー　＞　1日の基礎代謝</li>
          <li>　</li>

          <li>●ステップ３：栄養バランス(PFC)を考える</li>
          <li>　カロリー配分　⇒　P：30%,　F：20%,　C：50%</li>
          <li>　「g」に換算　⇒　P：4kcal/g,　F：9kcal/g,　C：4kcal/g</li>
        </ul>

        <p>
          ここまで、食事制限の考え方を書いてきましたが、<br />
          カロリー計算やPFCバランスを踏まえた食材選びなどを<br />
          毎日やるのは難しいと感じたのではないでしょうか。
        </p>
        <p>
          そんな方へ向けて次の記事では日々の負担を極限まで減らして、<br />
          楽に食事制限に取り組める具体的な方法を紹介します。
        </p>
        <p>記事を最後まで読んでいただいてありがとうございました。</p>
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