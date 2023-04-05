function delDel(str) {
  if (str.slice(1, 4) === "del") {
    return str.charAt(0) + str.slice(4);
  }
  return str;
}
