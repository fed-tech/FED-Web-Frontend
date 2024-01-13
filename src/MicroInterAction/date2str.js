export function date2str(d) {
  var date = new Date(d);
  return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}
