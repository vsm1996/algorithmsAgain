function stickers_for(phrase) {
  var sticker = "instagram";

  var stickerArr = Array.from(sticker);
  var orgStickerObj = {};
  var phraseStickerObj = {};
  var count = 1;

  // create orgObj map to hold letter count
  stickerArr.map((value) => {
    orgStickerObj[value] = 0;
  });

  // create phraseObj map to hold letter count
  stickerArr.map((value) => {
    phraseStickerObj[value] = 0;
  });

    // create keys get values based on number of appearance in arr
  for (let i = 0; i < phrase.length; i++) {
    phraseStickerObj[phrase[i]] = phraseStickerObj[phrase[i]] + 1;
  }
  for (let i = 0; i < sticker.length; i++) {
    orgStickerObj[sticker[i]] = orgStickerObj[sticker[i]] + 1;
  }

  //counting letter with highest occurence
  for (let el in phraseStickerObj) {
    if (
      phraseStickerObj[el] > orgStickerObj[el] &&
      phraseStickerObj[el] > count
    ) {
      count = phraseStickerObj[el];
    }
  }

  //finding key with highest occurence
  var largestP_key = Object.keys(phraseStickerObj).find(
    (key) => phraseStickerObj[key] === count
  );
  //returning amount needed based on how many times most used key 
  // can go into original sticker
  return Math.round(phraseStickerObj[largestP_key] / orgStickerObj[largestP_key]);
}

console.log(stickers_for("taming giant gnats"));
console.log(stickers_for("artisan martians"));
console.log(stickers_for("tiara"));
