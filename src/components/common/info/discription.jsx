import React from "react";
import card from "../../../assets/card.svg";

export default function Discription() {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-1 gap-4 mt-8">
        <div className="col-span-full min-[650px]:col-span-3">
          <img
            className="rounded-lg w-auto min-[650px]:w-full h-auto"
            src={card}
            alt="card"
          />
        </div>
        <div className="col-span-full min-[650px]:col-span-9 min-[650px]:col-start-4">
          <b className="text-sm text-primary">
            127 min 16+ 2022 Jangari Drama Kriminal O'zbekiston Rossiya
          </b>
          <p className="mt-3">
            Oʻzbekiston tashqi razvedka xizmati xodimi Izzat „Baron“ nomi ostida
            besh yil davomida Yaqin Sharq mamlakatlari, shu jumladan Suriyada
            faoliyat yuritayotgan terroristik guruhlarni moliyalashtirishda
            gumon qilinayotgan narkobaron Bassam bilan yashirin ishlamoqda.
            Baronning vazifasi jinoyatchilarga qurol etkazib berishning oldini
            olish, omon qolish va oʻz oilasi bagʻriga qaytishdir. Baron uni fosh
            qilmoqchi boʻlgan sheriklaridan birini oʻldiradi, ammo Bassam
            Izzatni qutqarishga qaror qiladi va uni oʻgʻli bilan Moskvaga
            yuboradi, u yerda mashina portlashi oqibatida Bassamning oʻgʻli
            vafot etadi. Ammo Bassam shunda ham Baronni oʻldirmaslikka qaror
            qiladi, uni Suriyaga, terrorchilarni tayyorlaydigan lagerlardan
            biriga yuboradi
          </p>
          <br />
          <div>
            <span className="w-[50px] inline-block">Til:</span>
            <span>uz</span>
          </div>
          <div>
            <span className="w-[50px] inline-block">Sifati:</span>
            <span>HD</span>
          </div>
        </div>
      </div>
    </>
  );
}
