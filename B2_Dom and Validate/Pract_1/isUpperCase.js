function isFirstLetterUpperCase(str) {
  const regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    document.write("String of first character is uppercase");
  } else {
    document.write("String of first character is not uppercase");
  }
}
