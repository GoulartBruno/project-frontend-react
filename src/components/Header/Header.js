import React from "react";
import {
  Head,
  SubHead,
  CartSearch,
  UnderHead,
  ParagrapfUnderHead,
} from "./style";

export default function Header() {
  return (
    <div>
      <SubHead>
        <p>FAST SHIPPING ON ALL ORDENS</p>
      </SubHead>
      <Head>
        {/* <div>
          <p>burger</p>
        </div>
        <h1>logo</h1>
        <CartSearch>
          <div>busca</div>
          <div>cart</div>
        </CartSearch> */}
      </Head>
      <UnderHead>
        <ParagrapfUnderHead>
          €5 off any Book Purchase of €30+ | With Code: CHAPTERSBOOKSTORE
        </ParagrapfUnderHead>
      </UnderHead>
    </div>
  );
}
