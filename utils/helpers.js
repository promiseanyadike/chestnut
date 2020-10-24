// export function clone(val) {
//   return JSON.parse(JSON.stringify(val))
// }

// export function Notification(self, message, type) {
//   self.$buefy.snackbar.open({
//     duration: 1000,
//     message: message,
//     type: type,
//     position: 'is-top'
//   })
// }


// export function copy(val) {
//   if (typeof val === 'object') {
//     if (val) {
//       return JSON.parse(JSON.stringify(val))
//     }
//   }

//   return null
// }

export function clone(val) {
  return JSON.parse(JSON.stringify(val))
}

export function Notification(self, message, type) {
  self.$buefy.snackbar.open({
    duration: 1000,
    message: message,
    type: type,
    position: 'is-top'
  })
}

export function Dialog(self, message, type, onConfirm) {
  self.$dialog.alert({
    message: message,
    type: type,
    position: "is-top",
    onConfirm: onConfirm
  });
}

export function copy(val) {
  if (typeof val === 'object') {
    return JSON.parse(JSON.stringify(val));
  }
  return null;
}


export function Slugify(string) {
  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}