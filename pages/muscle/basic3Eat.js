// 記事のテンプレート
// 書いたらpagesの各フォルダに格納する！

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Index.module.scss';
import Layout from '/components/Layout';

import Profile from '/components/Profile';
import Archive from '/components/Archive';

export default function TemplateArticle(){
  return (<Layout>
    <div className={styles.container}>

      {/* /////////////////////メインコンテンツ//////////////////////////////// */}
      <div className={styles.mainContents}>
        {/* ---------------------------------メタ情報！！-------------------------- */}
        <div className={styles.updated}>2021年8月9日</div>
        <h1>食事制限⓶　おすすめのやり方</h1>
        <img className={styles.topPhoto} src='/muscle/basic3EatTop.jpg' />
        <p className={styles.topPhotoSource}>PexelsのAnush Gorakによる写真</p>
        <p>
          カロリーとPFCバランスを毎日考えながら食事制限を続けるのは大きな負担になります。<br />
          そこで、この記事では楽に食事制限を続ける方法を紹介します。
        </p>

        {/* -----------------------------------見出し１-------------------------- */}
        <h2>食事制限のやり方</h2>
        <p>
          食事制限のやり方としては、<br />
          youtubeで筋トレ系の情報発信をしていて有名なシャイニー薊さん考案の「沼」<br />を毎日食べるのがおすすめです。<br />
          とてもシンプルで、日々の負担が非常に軽くなります。<br />
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NJtgQEXAjNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>
          レシピはWebページでも見られます。<br />
          <a href="https://www.webuomo.jp/foodie/97298/" target="_blank" rel="noopener noreferrer">
            https://www.webuomo.jp/foodie/97298/
          </a>
        </p>
        <p>
          上の動画とWebページを見てもらえれば、沼が何か、そして減量のやり方がわかりますので、<br />
          時間のある時に見てみてください。
        </p>
        <p>
          このやり方であれば、毎日カロリー、PFCバランスを考える必要がないため、<br />
          食事制限の負担が非常に軽くなり、継続して食事制限に取り組むことができます。
        </p>
        
        {/* -----------------------------------見出し２-------------------------- */}
        <h2>私の経験</h2>
        <p>
          私も2021年1月末から「沼」をほぼ毎日食べているので、その経験を少しお話しします。<br />
        </p>
        <p>私はこのように「沼」生活を送っています。</p>
        <ul>
          <li>・3合炊きの炊飯器を使用</li>
          <li>・朝夜2食分の「沼」を毎日つくる（2食分で約1000kcal）</li>
          <li>・昼は会社の食堂で食べる（約700kcal）</li>
          <li></li>
        </ul>
        <p>
          こんな感じで沼生活を続けると一か月に1kgペースで体重が落ちてきて、<br />
          腹筋が割れてきたところで体重が安定しています。<br />
          （食べ過ぎると腹筋が脂肪で隠れて、気合い入れると腹筋が割れてくるのを繰り返してます...）
        </p>
        <p>
          「沼」生活を続けると確実に体重は落ちてきますしストレスもかなり軽くて、<br />
          さらに、腹筋が割れたことに感動しました。
        </p>
        
        {/* -----------------------------------まとめ-------------------------- */}
        <h2>まとめ</h2>
        <p>
          「沼」生活では毎日同じものを食べるので、カロリーとPFCバランスの管理がかなり楽で、<br />
          継続することで自分なりのやり方も見えてきます。
        </p>
        <p>
          「摂取カロリー ＜ 消費カロリー」の範囲で摂取カロリーを調整し、<br />
          最適なやり方を探してみてください。
        </p>
        <p>今回も最後まで読んでいただいてありがとうございました。</p>

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