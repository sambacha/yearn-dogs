var SC = SC || {},
  CoreDocs = CoreDocs || {},
  NO = false,
  YES = true;
CoreDocs.loc = function (a, b) {
  if (b === undefined) {
    CoreDocs.error('"' + a + '" needs a comment to be picked up for loc.');
  }
  a = a.loc();
  a = a.replace(/@@/g, "%@");
  return a;
};
SC.String = {
  fmt: function () {
    var f = this.gsub(/%@([0-9]+)/, function (g) {
      return (arguments[parseInt(g[1], 0) - 1] || "").toString();
    });
    var c = [];
    var a = -1;
    var e = 0;
    var b = 0;
    while ((a = f.indexOf("%@", e)) >= 0) {
      c.push(f.slice(e, a));
      e = a + 2;
      var d = arguments[b++];
      if (d && d.toString) {
        d = d.toString();
      }
      c.push(d);
    }
    if (e < f.length) {
      c.push(f.slice(e, f.length));
    }
    return c.length > 1 ? c.join("") : c[0];
  },
  loc: function () {
    var a = String[String.currentLanguage()];
    var b = a[this];
    if (!b) {
      b = String.English[this] || this;
    }
    return b.fmt.apply(b, arguments);
  },
};
for (var key in SC.String) {
  String.prototype[key] = SC.String[key];
}
Object.extend(String, {
  browserLanguage: (navigator.language || navigator.browserLanguage).split(
    "-",
    1
  )[0],
  useAutodetectedLanguage: NO,
  preferredLanguage: null,
  currentLanguage: function () {
    var a = this.useAutodetectedLanguage
      ? this.browserLanguage || this.preferredLanguage || "en"
      : this.preferredLanguage || this.browserLanguage || "en";
    if (!this[a]) {
      a = this.normalizedLanguage(a);
    }
    return a;
  },
  normalizedLanguage: function (a) {
    switch (a) {
      case "fr":
        a = "French";
        break;
      case "de":
        a = "German";
        break;
      case "ja":
      case "jp":
        a = "Japanese";
        break;
      case "en":
        a = "English";
        break;
      case "es":
        a = "Spanish";
        break;
      default:
        a = "English";
        break;
    }
    return a;
  },
  addStringsFor: function (b, a) {
    b = String.normalizedLanguage(b);
    if (!String[b]) {
      String[b] = {};
    }
    Object.extend(String[b], a || {});
    return this;
  },
});
String.English = String.English || {};
String.French = String.French || {};
String.German = String.German || {};
String.Japanese = String.Japanese || {};
String.Spanish = String.Spanish || {};
