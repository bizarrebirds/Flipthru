import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react'
import Papa from 'papaparse';
import Image from 'next/image';
import useSWR from 'swr';

const csvFetcher = url => fetch(url)
  .then(response => response.text())
  .then(v => Papa.parse(v))
  .then(v => v.data.slice(1))
  .then(array => {
    var albumToPcs = {};
    array.forEach(elem => {
      const source = elem[2];
      const version = elem[3];
      const combined = source + version;
      if (!(combined in albumToPcs)) {
        albumToPcs[combined] = [];
      }
      albumToPcs[combined].push(elem);
    })
    return albumToPcs;
  })
  .then(albumToPcs => {
    console.log(albumToPcs);
    var html = [];
    for (const [album, pcs] of Object.entries(albumToPcs)) {
      html.push(
      <div className="albumHeader">
        <p className="albumTitle">{pcs[0][2]}</p>
        <p className="albumVersion">{pcs[0][3].replaceAll(",", "/")}</p>
      </div>);
      for (const [i, pc] of Object.entries(pcs)) {
        const type = pc[0];
        const press = pc[1];
        const source = pc[2];
        const version = pc[3];
        const frontId = pc[4];
        const backId = pc[5];
        const member = pc[6];
        const releaseDateString = pc[7];
        const yearString = pc[8];
        const country = pc[9];
        const orientation = pc[10];
        const firstClassName = i === "0" ? "firstCard" : "";

        html.push(<div className={"cardInfo " + firstClassName} key={pc}>
            <Image
              src="/images/default.png"
              className="photoCards"
              alt="Default"
              width={55}
              height={85}
            />
            <p className="memberName">{member}</p>
          </div>);
      }
    }
    return html;
  });

function FirstPost(props) {
  const { data, error, isLoading } = useSWR('/masterlist.csv', csvFetcher);

  // var rows = fetch('/masterlist.csv')
  //   .then(response => response.text())
  //   

  return (
    <>
      <Head>
        <title>Masterlist</title>
      </Head>
      <h1>Photocard Masterlist</h1>
        <p><Link href="/">Home</Link></p>
        <div class="search-wrapper">
            <label for="search">Search Photocards</label>
            <input type="search" id="search"></input>
        </div>
        <div className="container">
          {data}
      <footer>
        <p><i>Links</i></p>
        <p><a href="https://discord.gg/bB45cxwXvn">Discord</a></p>
        <p><a href="https://twitter.com/btsflipthru">Twitter</a></p>
        <p><a href="https://www.instagram.com/btsflipthru/">Instagram</a></p>
        <p><a href="mailto:btsvirtualbinder@gmail.com">Email</a></p>
      </footer>
      </div>
    </>
  );
}

export default FirstPost;