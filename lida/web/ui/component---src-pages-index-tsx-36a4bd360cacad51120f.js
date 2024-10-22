/*! For license information please see component---src-pages-index-tsx-36a4bd360cacad51120f.js.LICENSE.txt */
'use strict';
(self.webpackChunklida = self.webpackChunklida || []).push([
  [691],
  {
    23258: function (e, t, a) {
      a.r(t),
        a.d(t, {
          render: function () {
            return I;
          },
        });
      var n = window.document,
        r = window.Math,
        o = window.HTMLElement,
        i = window.XMLHttpRequest,
        l = function (e, t) {
          for (var a = 0, n = e.length; a < n; a++) t(e[a]);
        },
        c = function (e) {
          return function (t, a, n) {
            var r = e.createElement(t);
            if (null != a)
              for (var o in a) {
                var i = a[o];
                null != i && (null != r[o] ? (r[o] = i) : r.setAttribute(o, i));
              }
            return (
              null != n &&
                l(n, function (t) {
                  r.appendChild('string' == typeof t ? e.createTextNode(t) : t);
                }),
              r
            );
          };
        },
        s = c(n),
        d = function (e, t) {
          return {}.hasOwnProperty.call(e, t);
        },
        m = function (e) {
          return ('' + e).toLowerCase();
        },
        u = 'github.com',
        p = 'https://api.' + u,
        f = i && 'prototype' in i && 'withCredentials' in i.prototype,
        g =
          f &&
          o &&
          'attachShadow' in o.prototype &&
          !('prototype' in o.prototype.attachShadow),
        h = function (e, t, a) {
          e.addEventListener
            ? e.addEventListener(t, a, !1)
            : e.attachEvent('on' + t, a);
        },
        b = function (e, t, a) {
          e.removeEventListener
            ? e.removeEventListener(t, a, !1)
            : e.detachEvent('on' + t, a);
        },
        v = {
          light:
            ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0969da;outline-offset:-2px}.btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(31,35,40,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#e9ebef;background-position:0 -0.5em;border-color:#cbcdd1;border-color:rgba(31,35,40,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(31,35,40,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#dddedf;border-color:rgba(31,35,40,.15)}.social-count:hover,.social-count:focus{color:#0969da}.octicon-heart{color:#bf3989}",
          light_high_contrast:
            '.btn:focus-visible,.social-count:focus-visible{outline:2px solid #0349b4;outline-offset:-2px}.btn{color:#0e1116;background-color:#e7ecf0;border-color:#2f3237;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#c4cdd5;background-position:0 -0.5em;border-color:#282c32;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:active{background-color:#d8dde1;border-color:#2c2f34;border-color:rgba(1,4,9,.8)}.social-count{color:#0e1116;background-color:#fff;border-color:#34363a;border-color:rgba(1,4,9,.8)}.social-count:hover,.social-count:focus{color:#0349b4}.octicon-heart{color:#971368}',
          dark: ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #2f81f7;outline-offset:-2px}.btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:hover,.social-count:focus{color:#2f81f7}.octicon-heart{color:#db61a2}",
          dark_dimmed:
            ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #539bf5;outline-offset:-2px}.btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:hover,.social-count:focus{color:#539bf5}.octicon-heart{color:#c96198}",
          dark_high_contrast:
            '.btn:focus-visible,.social-count:focus-visible{outline:2px solid #71b7ff;outline-offset:-2px}.btn{color:#f0f3f6;background-color:#272b33;border-color:#7a828e;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:none;filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:hover,.social-count:focus{color:#71b7ff}.octicon-heart{color:#ef6eb1}',
        },
        x = function (e, t) {
          return (
            '@media(prefers-color-scheme:' + e + '){' + v[d(v, t) ? t : e] + '}'
          );
        },
        w = function (e) {
          if (null == e) return v.light;
          if (d(v, e)) return v[e];
          var t = (function (e, t, a, n) {
            null == t && (t = '&'),
              null == a && (a = '='),
              null == n && (n = window.decodeURIComponent);
            var r = {};
            return (
              l(e.split(t), function (e) {
                if ('' !== e) {
                  var t = e.split(a);
                  r[n(t[0])] = null != t[1] ? n(t.slice(1).join(a)) : void 0;
                }
              }),
              r
            );
          })(e, ';', ':', function (e) {
            return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, '');
          });
          return (
            v[d(v, t['no-preference']) ? t['no-preference'] : 'light'] +
            x('light', t.light) +
            x('dark', t.dark)
          );
        },
        E = {
          'comment-discussion': {
            heights: {
              16: {
                width: 16,
                path: '<path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>',
              },
            },
          },
          download: {
            heights: {
              16: {
                width: 16,
                path: '<path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>',
              },
            },
          },
          eye: {
            heights: {
              16: {
                width: 16,
                path: '<path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>',
              },
            },
          },
          heart: {
            heights: {
              16: {
                width: 16,
                path: '<path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>',
              },
            },
          },
          'issue-opened': {
            heights: {
              16: {
                width: 16,
                path: '<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>',
              },
            },
          },
          'mark-github': {
            heights: {
              16: {
                width: 16,
                path: '<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>',
              },
            },
          },
          package: {
            heights: {
              16: {
                width: 16,
                path: '<path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>',
              },
            },
          },
          play: {
            heights: {
              16: {
                width: 16,
                path: '<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>',
              },
            },
          },
          'repo-forked': {
            heights: {
              16: {
                width: 16,
                path: '<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>',
              },
            },
          },
          'repo-template': {
            heights: {
              16: {
                width: 16,
                path: '<path d="M13.25 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-.75a.75.75 0 0 1 0-1.5h.75v-.25a.75.75 0 0 1 .75-.75ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2ZM2.75 8a.75.75 0 0 1 .75.75v.268c.083-.012.166-.018.25-.018h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.75c0 .28.114.532.3.714a.75.75 0 1 1-1.05 1.072A2.495 2.495 0 0 1 2 11.5V8.75A.75.75 0 0 1 2.75 8ZM11 .75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V1.5h-.75A.75.75 0 0 1 11 .75Zm-5 0A.75.75 0 0 1 6.75 0h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 .75Zm0 9A.75.75 0 0 1 6.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 9.75ZM4.992.662a.75.75 0 0 1-.636.848c-.436.063-.783.41-.846.846a.751.751 0 0 1-1.485-.212A2.501 2.501 0 0 1 4.144.025a.75.75 0 0 1 .848.637ZM2.75 4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 2.75 4Zm10.5 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"></path>',
              },
            },
          },
          star: {
            heights: {
              16: {
                width: 16,
                path: '<path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>',
              },
            },
          },
        },
        y = function (e, t) {
          (e = m(e).replace(/^octicon-/, '')), d(E, e) || (e = 'mark-github');
          var a = t >= 24 && 24 in E[e].heights ? 24 : 16,
            n = E[e].heights[a];
          return (
            '<svg viewBox="0 0 ' +
            n.width +
            ' ' +
            a +
            '" width="' +
            (t * n.width) / a +
            '" height="' +
            t +
            '" class="octicon octicon-' +
            e +
            '" aria-hidden="true">' +
            n.path +
            '</svg>'
          );
        },
        k = {},
        N = function (e, t) {
          var a = k[e] || (k[e] = []);
          if (!(a.push(t) > 1)) {
            var n = (function (e) {
              var t;
              return function () {
                t || ((t = 1), e.apply(this, arguments));
              };
            })(function () {
              for (delete k[e]; (t = a.shift()); ) t.apply(null, arguments);
            });
            if (f) {
              var r = new i();
              h(r, 'abort', n),
                h(r, 'error', n),
                h(r, 'load', function () {
                  var e;
                  try {
                    e = JSON.parse(this.responseText);
                  } catch (t) {
                    return void n(t);
                  }
                  n(200 !== this.status, e);
                }),
                r.open('GET', e),
                r.send();
            } else {
              var o = this || window;
              o._ = function (e) {
                (o._ = null), n(200 !== e.meta.status, e.data);
              };
              var l = c(o.document)('script', {
                  async: !0,
                  src: e + (-1 !== e.indexOf('?') ? '&' : '?') + 'callback=_',
                }),
                s = function () {
                  o._ && o._({ meta: {} });
                };
              h(l, 'load', s),
                h(l, 'error', s),
                (function (e, t, a) {
                  if (null != e.readyState) {
                    var n = 'readystatechange';
                    h(e, n, function r() {
                      if (t.test(e.readyState))
                        return b(e, n, r), a.apply(this, arguments);
                    });
                  }
                })(l, /de|m/, s),
                o.document.getElementsByTagName('head')[0].appendChild(l);
            }
          }
        },
        Z = function (e, t, a) {
          var n = c(e.ownerDocument),
            r = e.appendChild(n('style', { type: 'text/css' })),
            o =
              'body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}' +
              w(t['data-color-scheme']);
          r.styleSheet
            ? (r.styleSheet.cssText = o)
            : r.appendChild(e.ownerDocument.createTextNode(o));
          var i = 'large' === m(t['data-size']),
            l = n(
              'a',
              {
                className: 'btn',
                href: t.href,
                rel: 'noopener',
                target: '_blank',
                title: t.title || void 0,
                'aria-label': t['aria-label'] || void 0,
                innerHTML: y(t['data-icon'], i ? 16 : 14) + '&nbsp;',
              },
              [n('span', {}, [t['data-text'] || ''])]
            ),
            s = e.appendChild(
              n('div', { className: 'widget' + (i ? ' widget-lg' : '') }, [l])
            ),
            d = l.hostname.replace(/\.$/, '');
          if (('.' + d).substring(d.length - 10) !== '.' + u)
            return l.removeAttribute('href'), void a(s);
          var f = (' /' + l.pathname).split(/\/+/);
          if (
            ((((d === u || d === 'gist.' + u) && 'archive' === f[3]) ||
              (d === u &&
                'releases' === f[3] &&
                ('download' === f[4] ||
                  ('latest' === f[4] && 'download' === f[5]))) ||
              d === 'codeload.' + u) &&
              (l.target = '_top'),
            'true' === m(t['data-show-count']) &&
              d === u &&
              'marketplace' !== f[1] &&
              'sponsors' !== f[1] &&
              'orgs' !== f[1] &&
              'users' !== f[1] &&
              '-' !== f[1])
          ) {
            var g, h;
            if (!f[2] && f[1]) (h = 'followers'), (g = '?tab=followers');
            else if (!f[3] && f[2])
              (h = 'stargazers_count'), (g = '/stargazers');
            else if (f[4] || 'subscription' !== f[3])
              if (f[4] || 'fork' !== f[3]) {
                if ('issues' !== f[3]) return void a(s);
                (h = 'open_issues_count'), (g = '/issues');
              } else (h = 'forks_count'), (g = '/forks');
            else (h = 'subscribers_count'), (g = '/watchers');
            var b = f[2] ? '/repos/' + f[1] + '/' + f[2] : '/users/' + f[1];
            N.call(this, p + b, function (e, t) {
              if (!e) {
                var r = t[h];
                s.appendChild(
                  n(
                    'a',
                    {
                      className: 'social-count',
                      href: t.html_url + g,
                      rel: 'noopener',
                      target: '_blank',
                      'aria-label':
                        r +
                        ' ' +
                        h
                          .replace(/_count$/, '')
                          .replace('_', ' ')
                          .slice(0, r < 2 ? -1 : void 0) +
                        ' on GitHub',
                    },
                    [('' + r).replace(/\B(?=(\d{3})+(?!\d))/g, ',')]
                  )
                );
              }
              a(s);
            });
          } else a(s);
        },
        C = window.devicePixelRatio || 1,
        A = function (e) {
          return (
            (C > 1 ? r.ceil((r.round(e * C) / C) * 2) / 2 : r.ceil(e)) || 0
          );
        },
        M = function (e, t) {
          (e.style.width = t[0] + 'px'), (e.style.height = t[1] + 'px');
        },
        I = function (e, t) {
          if (null != e && null != t)
            if (
              (e.getAttribute &&
                (e = (function (e) {
                  var t = {
                    href: e.href,
                    title: e.title,
                    'aria-label': e.getAttribute('aria-label'),
                  };
                  return (
                    l(
                      ['icon', 'color-scheme', 'text', 'size', 'show-count'],
                      function (a) {
                        var n = 'data-' + a;
                        t[n] = e.getAttribute(n);
                      }
                    ),
                    null == t['data-text'] &&
                      (t['data-text'] = e.textContent || e.innerText),
                    t
                  );
                })(e)),
              g)
            ) {
              var a = s('span');
              Z(a.attachShadow({ mode: 'closed' }), e, function () {
                t(a);
              });
            } else {
              var o = s('iframe', {
                src: 'javascript:0',
                title: e.title || void 0,
                allowtransparency: !0,
                scrolling: 'no',
                frameBorder: 0,
              });
              M(o, [0, 0]), (o.style.border = 'none');
              h(o, 'load', function a() {
                var i,
                  l = o.contentWindow;
                try {
                  i = l.document.body;
                } catch (c) {
                  return void n.body.appendChild(o.parentNode.removeChild(o));
                }
                b(o, 'load', a),
                  Z.call(l, i, e, function (a) {
                    var n = (function (e) {
                      var t = e.offsetWidth,
                        a = e.offsetHeight;
                      if (e.getBoundingClientRect) {
                        var n = e.getBoundingClientRect();
                        (t = r.max(t, A(n.width))), (a = r.max(a, A(n.height)));
                      }
                      return [t, a];
                    })(a);
                    o.parentNode.removeChild(o),
                      (function (e, t, a) {
                        h(e, t, function n() {
                          return b(e, t, n), a.apply(this, arguments);
                        });
                      })(o, 'load', function () {
                        M(o, n);
                      }),
                      (o.src =
                        'https://unpkg.com/github-buttons@2.27.0/dist/buttons.html#' +
                        (o.name = (function (e, t, a, n) {
                          null == t && (t = '&'),
                            null == a && (a = '='),
                            null == n && (n = window.encodeURIComponent);
                          var r = [];
                          for (var o in e) {
                            var i = e[o];
                            null != i && r.push(n(o) + a + n(i));
                          }
                          return r.join(t);
                        })(e))),
                      t(o);
                  });
              }),
                n.body.appendChild(o);
            }
        };
    },
    79533: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return Se;
          },
        });
      var n = a(67294),
        r = a(99286),
        o = a(98393),
        i = a(9796),
        l = a(39784),
        c = ['title', 'titleId'];
      var s = n.forwardRef(function (e, t) {
          var a = e.title,
            r = e.titleId,
            o = (0, l.Z)(e, c);
          return n.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                'aria-hidden': 'true',
                ref: t,
                'aria-labelledby': r,
              },
              o
            ),
            a ? n.createElement('title', { id: r }, a) : null,
            n.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
            })
          );
        }),
        d = a(94730),
        m = a(70769),
        u = a(11005),
        p = ['title', 'titleId'];
      var f = n.forwardRef(function (e, t) {
          var a = e.title,
            r = e.titleId,
            o = (0, l.Z)(e, p);
          return n.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                'aria-hidden': 'true',
                ref: t,
                'aria-labelledby': r,
              },
              o
            ),
            a ? n.createElement('title', { id: r }, a) : null,
            n.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z',
            })
          );
        }),
        g = ['title', 'titleId'];
      var h = n.forwardRef(function (e, t) {
          var a = e.title,
            r = e.titleId,
            o = (0, l.Z)(e, g);
          return n.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                'aria-hidden': 'true',
                ref: t,
                'aria-labelledby': r,
              },
              o
            ),
            a ? n.createElement('title', { id: r }, a) : null,
            n.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z',
            })
          );
        }),
        b = a(28592),
        v = function () {
          var e = [
              {
                name: 'Data Summarization',
                description: n.createElement(
                  'div',
                  null,
                  'Datasets can be massive. LIDA summarizes data into a',
                  ' ',
                  n.createElement(b.v9, null, 'compact but information dense'),
                  ' natural language representation used as grounding context for all subsequent operations.'
                ),
                href: '#',
                icon: o.Z,
              },
              {
                name: 'Automated Data Exploration',
                description: n.createElement(
                  'div',
                  null,
                  'Unfamiliar with a dataset? LIDA provides a fully automated mode that generates meaningful ',
                  n.createElement(b.v9, null, 'visualization goals'),
                  ' based on the dataset. EDA for free.'
                ),
                href: '#',
                icon: o.Z,
              },
              {
                name: 'Grammar-Agnostic Visualizations',
                description: n.createElement(
                  'div',
                  null,
                  'Want visualizations created in python in Altair, Matplotlib, Seaborn etc? How about R, C++ ? LIDA is',
                  ' ',
                  n.createElement(b.v9, null, 'grammar agnostic'),
                  ' i.e., can generate visualizations in any grammar represented as code.'
                ),
                href: '#',
                icon: i.Z,
              },
              {
                name: 'Infographics Generation',
                description: n.createElement(
                  'div',
                  null,
                  'Convert data into rich, embellished, engaging',
                  ' ',
                  n.createElement(b.v9, null, 'stylized infographics'),
                  ' using image generation models. Think data stories, personalization (brand, style, marketing etc.)?'
                ),
                href: '#',
                icon: s,
              },
            ],
            t = n.useState(!1),
            a = t[0],
            r = t[1],
            l = [
              {
                name: 'Visualization Explanation ',
                description: n.createElement(
                  'div',
                  null,
                  ' ',
                  'Get ',
                  n.createElement(b.v9, null, 'detailed descriptions'),
                  ' of visualization code. This has applications in accessibility, data literacy, education, and debugging/sensemaking of visualizations.',
                  ' '
                ),
                href: '#',
                icon: d.Z,
              },
              {
                name: 'Self-Evaluation',
                description: n.createElement(
                  'div',
                  null,
                  'LLMs like GPT-3.5 and GPT-4',
                  ' ',
                  n.createElement(
                    b.v9,
                    null,
                    'encode visualization best practices'
                  ),
                  '. LIDA applies these capabilities in generating multi-dimensional evaluation scores for visualizations represented as code.'
                ),
                href: '#',
                icon: m.Z,
              },
              {
                name: 'Visualization Repair',
                description: n.createElement(
                  'div',
                  null,
                  'LIDA provides methods to automatically improve visualizations (via self-evaluation feedback) or repair visualizations based on user provided or compile feedback.'
                ),
                href: '#',
                icon: u.Z,
              },
              {
                name: 'Visualization Recommendations',
                description: n.createElement(
                  'div',
                  null,
                  'Given some context (goals, or an existing visualization), LIDA can recommend additional visualizations that may be useful to the user (e.g., for comparison, or to provide additional perspectives).'
                ),
                href: '#',
                icon: f,
              },
            ],
            c = function (e) {
              return e.map(function (e) {
                return n.createElement(
                  'div',
                  { key: 'feature_name' + e.name, className: 'flex flex-col' },
                  n.createElement(
                    'div',
                    {
                      className:
                        'text-base font-semibold leading-7 text-primary',
                    },
                    n.createElement(
                      'div',
                      {
                        className:
                          'mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-accent',
                      },
                      n.createElement(e.icon, {
                        className: 'h-6 w-6 text-white',
                        'aria-hidden': 'true',
                      })
                    ),
                    e.name
                  ),
                  n.createElement(
                    'div',
                    {
                      className:
                        'mt-1 flex flex-auto flex-col text-base leading-7 text-primary',
                    },
                    n.createElement(
                      'div',
                      { className: 'flex-auto' },
                      e.description
                    )
                  )
                );
              });
            };

          return null;
          /* return n.createElement(
            'div',
            { className: 'mt-10 ' },
            n.createElement(
              'div',
              { className: 'text-3xl mb-4 font-semibold' },
              ' ',
              'Features - What Can You Do with LIDA?',
              ' '
            ),
            n.createElement(
              'div',
              { className: 'mt-4 mb-6 rounded' },
              n.createElement(
                'div',
                { className: 'mb-4 text-xs' },
                ' ',
                'Click on the video below for an overview of the capabilities of the LIDA user interface.'
              )
            ),
            n.createElement(
              'div',
              {
                onClick: function () {
                  return r(!0);
                },
                role: 'button',
                tabIndex: 0,
                className: 'relative group mb-6',
              },
              !a &&
                n.createElement(
                  'div',
                  null,
                  n.createElement('img', {
                    alt: 'Lida video screenshot',
                    className: 'w-full rounded',
                    src: '/images/videoscreen.png',
                  }),
                  n.createElement('div', {
                    className:
                      'rounded group-hover:opacity-10  duration-500  absolute inset-0 bg-black opacity-40',
                  }),
                  n.createElement(
                    'div',
                    {
                      className:
                        'absolute inset-0 flex items-center justify-center',
                    },
                    n.createElement(
                      'div',
                      {
                        className:
                          'inline-flex   items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-700 hover:brightness-110 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent',
                      },
                      n.createElement(h, {
                        className: '-ml-1 mr-3 h-7 w-7',
                        'aria-hidden': 'true',
                      }),
                      'Watch Video'
                    )
                  )
                ),
              a &&
                n.createElement(
                  'div',
                  null,
                  n.createElement(
                    'div',
                    {
                      style: { padding: '56.25% 0 0 0', position: 'relative' },
                    },
                    n.createElement('iframe', {
                      src: 'https://player.vimeo.com/video/820968433?h=a7652e817e&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1&autoplay=1&amp',
                      frameBorder: '0',
                      allow: 'autoplay; fullscreen; picture-in-picture',
                      allowFullScreen: !0,
                      style: {
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      },
                      className: 'rounded',
                      title:
                        'DataQuery PRO : Automatic Generation of Grammar Agnostic Visualizations and Infographics with Large Language Models',
                    })
                  ),
                  n.createElement('script', {
                    src: 'https://player.vimeo.com/api/player.js',
                  })
                )
            ),
            n.createElement(
              'div',
              { className: 'text-base' },
              ' ',
              'DataQuery PRO  leverages the language modeling and code writing capabilities of state-of-the-art LLMs in enabling core automated visualization capabilities (data summarization, goal exploration, visualization generation, infographics generation) as well as operations on existing visualizations (visualization explanation, self-evaluation, automatic repair, recommendation).'
            ),
            n.createElement(
              'div',
              { className: '  py-6  ' },
              n.createElement(
                'div',
                { className: '     ' },
                n.createElement(
                  'div',
                  { className: '' },
                  n.createElement(
                    'div',
                    { className: 'mb-4' },
                    ' ',
                    n.createElement(
                      'span',
                      {
                        className:
                          'inline-block text-accent font-semibold mr-2',
                      },
                      ' ',
                      'AutoViz',
                      ' '
                    ),
                    'Core automated visualization capabilities',
                    ' '
                  ),
                  n.createElement(
                    'div',
                    {
                      className:
                        'grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16   md:grid-cols-4 ',
                    },
                    c(e)
                  )
                ),
                n.createElement(
                  'div',
                  { className: 'mt-4' },
                  n.createElement(
                    'div',
                    { className: 'mb-4' },
                    ' ',
                    n.createElement(
                      'span',
                      {
                        className:
                          'inline-block text-accent font-semibold mr-2',
                      },
                      ' ',
                      'VizOps',
                      ' '
                    ),
                    'Operations on Generated Visualizations',
                    ' '
                  ),
                  n.createElement(
                    'div',
                    {
                      className:
                        'grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16   md:grid-cols-4 ',
                    },
                    c(l)
                  )
                ),
                n.createElement(
                  'div',
                  { className: 'mt-6' },
                  n.createElement(
                    'a',
                    {
                      target: '_blank',
                      'aria-label': 'Learn more in the paper',
                      rel: 'noopener noreferrer',
                      href: 'https://aclanthology.org/2023.acl-demo.11/',
                      className: 'text-sm font-semibold leading-6 text-accent',
                    },
                    'Learn more in the paper ',
                    n.createElement('span', { 'aria-hidden': 'true' }, '→')
                  )
                )
              )
            )
          ); */
        },
        x = ['title', 'titleId'];
      var w = n.forwardRef(function (e, t) {
          var a = e.title,
            r = e.titleId,
            o = (0, l.Z)(e, x);
          return n.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                'aria-hidden': 'true',
                ref: t,
                'aria-labelledby': r,
              },
              o
            ),
            a ? n.createElement('title', { id: r }, a) : null,
            n.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
            })
          );
        }),
        E = ['title', 'titleId'];
      var y = n.forwardRef(function (e, t) {
          var a = e.title,
            r = e.titleId,
            o = (0, l.Z)(e, E);
          return n.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                'aria-hidden': 'true',
                ref: t,
                'aria-labelledby': r,
              },
              o
            ),
            a ? n.createElement('title', { id: r }, a) : null,
            n.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
            })
          );
        }),
        k = a(71082),
        N = a(28893),
        Z = a(35774),
        C = a(89907),
        A = a(5626),
        M = a(70556),
        I = a(27358),
        L = a(49955);
      function z(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(a), !0).forEach(function (t) {
                (0, Z.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : z(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function S(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = (0, L.Z)(e);
          if (t) {
            var r = (0, L.Z)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return (0, I.Z)(this, a);
        };
      }
      var G = (function (e) {
          (0, M.Z)(r, e);
          var t = S(r);
          function r(e) {
            var a;
            return (
              (0, C.Z)(this, r),
              ((a = t.call(this, e)).$ = n.createRef()),
              (a._ = n.createRef()),
              a
            );
          }
          return (
            (0, A.Z)(r, [
              {
                key: 'render',
                value: function () {
                  return n.createElement(
                    'span',
                    { ref: this.$ },
                    n.createElement(
                      'a',
                      D(D({}, this.props), {}, { ref: this._ }),
                      this.props.children
                    )
                  );
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.paint();
                },
              },
              {
                key: 'getSnapshotBeforeUpdate',
                value: function () {
                  return this.reset(), null;
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.paint();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.reset();
                },
              },
              {
                key: 'paint',
                value: function () {
                  var e = this,
                    t = this.$.current.appendChild(
                      document.createElement('span')
                    );
                  Promise.resolve()
                    .then(a.bind(a, 23258))
                    .then(function (a) {
                      var n = a.render;
                      null != e._.current &&
                        n(t.appendChild(e._.current), function (e) {
                          try {
                            t.parentNode.replaceChild(e, t);
                          } catch (t) {}
                        });
                    });
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.$.current.replaceChild(
                    this._.current,
                    this.$.current.lastChild
                  );
                },
              },
            ]),
            r
          );
        })(n.PureComponent),
        j = function () {
          return null;
          /* return n.createElement(
            'div',
            { className: 'mt-10 ' },
            n.createElement(
              'div',
              { className: 'bg-white rounded  pb-20 border' },
              n.createElement(
                'main',
                null
                  n.createElement(
                  'div',
                  { className: 'relative isolate' },
                  n.createElement(
                    'svg',
                    {
                      className:
                        'absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]',
                      'aria-hidden': 'true',
                    },
                    n.createElement(
                      'defs',
                      null,
                      n.createElement(
                        'pattern',
                        {
                          id: '1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84',
                          width: 200,
                          height: 200,
                          x: '50%',
                          y: -1,
                          patternUnits: 'userSpaceOnUse',
                        },
                        n.createElement('path', {
                          d: 'M.5 200V.5H200',
                          fill: 'none',
                        })
                      )
                    ),
                    n.createElement(
                      'svg',
                      {
                        x: '50%',
                        y: -1,
                        className: 'overflow-visible fill-gray-50',
                      },
                      n.createElement('path', {
                        d: 'M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z',
                        strokeWidth: 0,
                      })
                    ),
                    n.createElement('rect', {
                      width: '100%',
                      height: '100%',
                      strokeWidth: 0,
                      fill: 'url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)',
                    })
                  ),
                  n.createElement(
                    'div',
                    {
                      className:
                        'absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48',
                      'aria-hidden': 'true',
                    },
                    n.createElement('div', {
                      className:
                        'aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30',
                      style: {
                        clipPath:
                          'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                      },
                    })
                  )
                   n.createElement(
                    'div',
                    { className: 'overflow-hidden' },
                    n.createElement(
                      'div',
                      {
                        className:
                          'mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-16 lg:px-8 ',
                      },
                      n.createElement(
                        'div',
                        {
                          className:
                            'mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center',
                        },
                        n.createElement(
                          'div',
                          {
                            className:
                              'w-full max-w-xl lg:shrink-0 xl:max-w-2xl',
                          },
                          n.createElement(
                            'h1',
                            {
                              className:
                                'text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl',
                            },

                            'Automatic Generation of Visualizations and Infographics with LLMs'
                          ),
                          n.createElement(
                            'div',
                            { className: 'text-gray-600 mt-2' },
                            'Works with any programming language or visualization grammar',
                            ' ',
                            n.createElement(
                              'div',
                              { className: 'mt-2' },
                              n.createElement(
                                G,
                                {
                                  href: 'https://github.com/microsoft/lida',
                                  'data-size': 'large',
                                  'data-show-count': 'true',
                                  'aria-label': 'Star microsoft/lida on GitHub',
                                },
                                'Star'
                              )
                            )
                          ),
                          n.createElement(
                            'div',
                            { className: 'mt-10 flex items-center gap-x-6' },
                            n.createElement(
                              'a',
                              {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                href: 'https://aclanthology.org/2023.acl-demo.11/',
                                className:
                                  'rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-white hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600',
                              },
                              n.createElement(w, {
                                className: 'h-5 w-5 inline-block mr-2',
                              }),
                              'Read the Paper'
                            ),
                            n.createElement(
                              k.Link,
                              {
                                className:
                                  'text-sm font-semibold leading-6 text-gray-900',
                                to: '/demo',
                              },
                              ' ',
                              n.createElement(y, {
                                className: 'h-5 w-5 inline-block mr-2',
                              }),
                              'Live demo ',
                              n.createElement(
                                'span',
                                { 'aria-hidden': 'true' },
                                '→'
                              )
                            ),
                            n.createElement(
                              'a',
                              {
                                className:
                                  'text-sm font-semibold leading-6 text-gray-900',
                                href: 'https://github.com/microsoft/lida',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              },
                              ' ',
                              n.createElement(N.Z, {
                                icon: 'github',
                                size: 5,
                                className: 'mr-2',
                              }),
                              'Code on GitHub ',
                              n.createElement(
                                'span',
                                { 'aria-hidden': 'true' },
                                '→'
                              )
                            )
                          ),
                          n.createElement(
                            'div',
                            {
                              className:
                                'relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none',
                            },
                            n.createElement(
                              'div',
                              { className: 'text-lg' },
                              'Systems that support users in the automatic creation of visualizations must address several subtasks - understand the semantics of data, enumerate relevant visualization goals and generate visualization specifications. In this work, we',
                              ' ',
                              n.createElement(
                                b.v9,
                                null,
                                n.createElement(
                                  n.Fragment,
                                  null,
                                  'pose visualization generation as a multi-stage generation problem',
                                  ' '
                                )
                              ),
                              ' ',
                              'and argue that well-orchestrated pipelines based on large language models (LLMs) and image generation models (IGMs) are suitable to addressing these tasks. We present LIDA, a novel tool for generating grammar-agnostic visualizations and infographics. LIDA comprises of 4 modules - A SUMMARIZER that converts data into a rich but compact natural language summary, a GOAL EXPLORER that enumerates visualization goals given the data, a VISGENERATOR that generates, refines, executes and filters visualization code and an INFOGRAPHER module that yields data-faithful stylized graphics using IGMs. LIDA provides a python api, and a hybrid user interface (direct manipulation and',
                              ' ',
                              n.createElement(b.v9, null, 'multilingual'),
                              ' natural language) for interactive chart, infographics and data story generation.'
                            ),
                            n.createElement(
                              'div',
                              { className: ' inline-block mt-6  ' },
                              ' ',
                              n.createElement(
                                'div',
                                { className: 'text-sm mb-1 text-gray-500' },
                                ' ',
                                'Install via pip'
                              ),
                              n.createElement(
                                'div',
                                {
                                  className:
                                    'text-gray-400 bg-gray-800 px-4 p-1 rounded pr-10',
                                },
                                'pip install ',
                                n.createElement(
                                  'span',
                                  { className: 'text-white' },
                                  'lida'
                                )
                              )
                            )
                          )
                        ),
                        n.createElement(
                          'div',
                          {
                            className:
                              'mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0',
                          },
                          n.createElement(
                            'div',
                            {
                              className:
                                'ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80',
                            },
                            n.createElement(
                              'div',
                              { className: 'relative' },
                              n.createElement('img', {
                                src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
                                alt: 'lida home page image',
                                className:
                                  'aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg',
                              }),
                              n.createElement('div', {
                                className:
                                  'pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10',
                              })
                            )
                          ),
                          n.createElement(
                            'div',
                            {
                              className:
                                'mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36',
                            },
                            n.createElement(
                              'div',
                              { className: 'relative' },
                              n.createElement('img', {
                                src: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
                                alt: 'lida home page image',
                                className:
                                  'aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg',
                              }),
                              n.createElement('div', {
                                className:
                                  'pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10',
                              })
                            ),
                            n.createElement(
                              'div',
                              { className: 'relative' },
                              n.createElement('img', {
                                src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80',
                                alt: 'lida home page image',
                                className:
                                  'aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg',
                              }),
                              n.createElement('div', {
                                className:
                                  'pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10',
                              })
                            )
                          ),
                          n.createElement(
                            'div',
                            {
                              className:
                                'w-44 flex-none space-y-8 pt-32 sm:pt-0',
                            },
                            n.createElement(
                              'div',
                              { className: 'relative' },
                              n.createElement('img', {
                                src: 'https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80',
                                alt: 'lida home page image',
                                className:
                                  'aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg',
                              }),
                              n.createElement('div', {
                                className:
                                  'pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10',
                              })
                            ),
                            n.createElement(
                              'div',
                              { className: 'relative' },
                              n.createElement('img', {
                                src: 'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
                                alt: 'lida home page image',
                                className:
                                  'aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg',
                              }),
                              n.createElement('div', {
                                className:
                                  'pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10',
                              })
                            )
                          )
                        )
                      )
                    )
                  ) 
                )
              )
            )
          );*/
        },
        P = function () {
          return null;
          /*   return n.createElement(
            'div',
            { className: 'mt-10 ' },
            n.createElement(
              'div',
              { className: 'text-3xl   pt-4 mb-4 font-bold' },
              'System Architecture'
            ),
            n.createElement(
              'div',
              { className: '  mb-4 mt-4 ' },
              'System architecture for LIDA'
            ),
            n.createElement(
              'div',
              { className: 'mt-10 bg-white rounded p-3' },
              n.createElement('img', {
                src: '/files/lidamodules.jpg',
                alt: 'Lida architecture',
              })
            ),
            n.createElement(
              'div',
              { className: 'mt-2 text-sm flex' },
              n.createElement(
                'div',
                { className: 'mt-1  ' },
                ' Architecture for LIDA'
              ),
              n.createElement(
                'div',
                { className: 'mt-1 text-xs inline-block flex-1 text-right' },
                n.createElement('span', { className: ' font-semibold' }, 'LLM'),
                ' = Large Language Model |',
                ' ',
                n.createElement('span', { className: 'font-semibold' }, 'IGM'),
                ' = Image Generation Model',
                ' '
              )
            ),
            n.createElement(
              'div',
              { className: 'mt-10 bg-white rounded p-3' },
              n.createElement('img', {
                src: '/files/infographics_small.jpg',
                alt: 'Lida architecture',
              })
            ),
            n.createElement(
              'div',
              { className: 'mt-1 text-sm ' },
              ' ',
              'Example infographics generated with LIDA'
            )
          ); */
        },
        O = a(20501),
        R = function () {
          return null;
          /*  return n.createElement(
            'div',
            { className: 'mt-14' },
            n.createElement(
              'div',
              { className: 'text-3xl mb-4 font-semibold' },
              ' BibTex'
            ),
            n.createElement(
              'div',
              { className: 'mb-3' },
              ' ',
              'A paper on LIDA is',
              ' ',
              n.createElement(
                'a',
                {
                  href: 'https://arxiv.org/abs/2303.02927',
                  target: '_blank',
                  rel: 'noreferrer',
                  className: 'text-green-700 underline inline-block ',
                },
                'available on arxiv'
              ),
              ' ',
              'and has been accepted at the 2023 ACL Conference (System Demonstrations).'
            ),
            n.createElement(
              'div',
              { className: 'overflow-auto p-3 pr-1 bg-secondary rounded ' },
              n.createElement(O.d, {
                code: '@article{dibia2023lida,\n    title={DataQuery PRO: A Tool for Automatic Generation of Grammar-Agnostic Visualizations and Infographics using Large Language Models},\n    author={Victor Dibia},\n    year={2023},\n    booktitle = "Proceedings of the 61th Annual Meeting of the Association for Computational Linguistics: System Demonstrations",\n    publisher = "Association for Computational Linguistics",\n    month={March}, \n    day={6},\n    eprint={2303.02927},\n    archivePrefix={arXiv},\n    primaryClass={cs.AI}\n}',
                language: 'bibtex',
                wrapLines: !0,
                className: '',
              })
            )
          ); */
        },
        H = a(70966),
        _ = a(64055),
        F = a(47462),
        B = a(75900),
        T = a.n(B),
        V = a(82277),
        W = a(53168),
        X = a(1449),
        K = a(61637),
        U = a(27840),
        q = a(54038),
        $ = a(262),
        Y = a(11786),
        J = a(86552),
        Q = a(62168),
        ee = a(45934),
        te = n.forwardRef(function (e, t) {
          var a,
            r = e.prefixCls,
            o = e.forceRender,
            i = e.className,
            l = e.style,
            c = e.children,
            s = e.isActive,
            d = e.role,
            m = n.useState(s || o),
            u = (0, V.Z)(m, 2),
            p = u[0],
            f = u[1];
          return (
            n.useEffect(
              function () {
                (o || s) && f(!0);
              },
              [o, s]
            ),
            p
              ? n.createElement(
                  'div',
                  {
                    ref: t,
                    className: T()(
                      ''.concat(r, '-content'),
                      ((a = {}),
                      (0, J.Z)(a, ''.concat(r, '-content-active'), s),
                      (0, J.Z)(a, ''.concat(r, '-content-inactive'), !s),
                      a),
                      i
                    ),
                    style: l,
                    role: d,
                  },
                  n.createElement(
                    'div',
                    { className: ''.concat(r, '-content-box') },
                    c
                  )
                )
              : null
          );
        });
      te.displayName = 'PanelContent';
      var ae = te,
        ne = [
          'showArrow',
          'headerClass',
          'isActive',
          'onItemClick',
          'forceRender',
          'className',
          'prefixCls',
          'collapsible',
          'accordion',
          'panelKey',
          'extra',
          'header',
          'expandIcon',
          'openMotion',
          'destroyInactivePanel',
          'children',
        ],
        re = n.forwardRef(function (e, t) {
          var a,
            r,
            o = e.showArrow,
            i = void 0 === o || o,
            l = e.headerClass,
            c = e.isActive,
            s = e.onItemClick,
            d = e.forceRender,
            m = e.className,
            u = e.prefixCls,
            p = e.collapsible,
            f = e.accordion,
            g = e.panelKey,
            h = e.extra,
            b = e.header,
            v = e.expandIcon,
            x = e.openMotion,
            w = e.destroyInactivePanel,
            E = e.children,
            y = (0, $.Z)(e, ne),
            k = 'disabled' === p,
            N = 'header' === p,
            Z = 'icon' === p,
            C = null != h && 'boolean' != typeof h,
            A = function () {
              null == s || s(g);
            },
            M =
              'function' == typeof v
                ? v(e)
                : n.createElement('i', { className: 'arrow' });
          M &&
            (M = n.createElement(
              'div',
              {
                className: ''.concat(u, '-expand-icon'),
                onClick: ['header', 'icon'].includes(p) ? A : void 0,
              },
              M
            ));
          var I = T()(
              ((a = {}),
              (0, J.Z)(a, ''.concat(u, '-item'), !0),
              (0, J.Z)(a, ''.concat(u, '-item-active'), c),
              (0, J.Z)(a, ''.concat(u, '-item-disabled'), k),
              a),
              m
            ),
            L = {
              className: T()(
                l,
                ((r = {}),
                (0, J.Z)(r, ''.concat(u, '-header'), !0),
                (0, J.Z)(r, ''.concat(u, '-header-collapsible-only'), N),
                (0, J.Z)(r, ''.concat(u, '-icon-collapsible-only'), Z),
                r)
              ),
              'aria-expanded': c,
              'aria-disabled': k,
              onKeyDown: function (e) {
                ('Enter' !== e.key &&
                  e.keyCode !== ee.Z.ENTER &&
                  e.which !== ee.Z.ENTER) ||
                  A();
              },
            };
          return (
            N ||
              Z ||
              ((L.onClick = A),
              (L.role = f ? 'tab' : 'button'),
              (L.tabIndex = k ? -1 : 0)),
            n.createElement(
              'div',
              (0, q.Z)({}, y, { ref: t, className: I }),
              n.createElement(
                'div',
                L,
                i && M,
                n.createElement(
                  'span',
                  {
                    className: ''.concat(u, '-header-text'),
                    onClick: 'header' === p ? A : void 0,
                  },
                  b
                ),
                C &&
                  n.createElement(
                    'div',
                    { className: ''.concat(u, '-extra') },
                    h
                  )
              ),
              n.createElement(
                Q.ZP,
                (0, q.Z)(
                  {
                    visible: c,
                    leavedClassName: ''.concat(u, '-content-hidden'),
                  },
                  x,
                  { forceRender: d, removeOnLeave: w }
                ),
                function (e, t) {
                  var a = e.className,
                    r = e.style;
                  return n.createElement(
                    ae,
                    {
                      ref: t,
                      prefixCls: u,
                      className: a,
                      style: r,
                      isActive: c,
                      forceRender: d,
                      role: f ? 'tabpanel' : void 0,
                    },
                    E
                  );
                }
              )
            )
          );
        }),
        oe = [
          'children',
          'label',
          'key',
          'collapsible',
          'onItemClick',
          'destroyInactivePanel',
        ];
      var ie = function (e, t, a) {
        return Array.isArray(e)
          ? (function (e, t) {
              var a = t.prefixCls,
                r = t.accordion,
                o = t.collapsible,
                i = t.destroyInactivePanel,
                l = t.onItemClick,
                c = t.activeKey,
                s = t.openMotion,
                d = t.expandIcon;
              return e.map(function (e, t) {
                var m = e.children,
                  u = e.label,
                  p = e.key,
                  f = e.collapsible,
                  g = e.onItemClick,
                  h = e.destroyInactivePanel,
                  b = (0, $.Z)(e, oe),
                  v = String(null != p ? p : t),
                  x = null != f ? f : o,
                  w = null != h ? h : i,
                  E = !1;
                return (
                  (E = r ? c[0] === v : c.indexOf(v) > -1),
                  n.createElement(
                    re,
                    (0, q.Z)({}, b, {
                      prefixCls: a,
                      key: v,
                      panelKey: v,
                      isActive: E,
                      accordion: r,
                      openMotion: s,
                      expandIcon: d,
                      header: u,
                      collapsible: x,
                      onItemClick: function (e) {
                        'disabled' !== x && (l(e), null == g || g(e));
                      },
                      destroyInactivePanel: w,
                    }),
                    m
                  )
                );
              });
            })(e, a)
          : (0, Y.Z)(t).map(function (e, t) {
              return (function (e, t, a) {
                if (!e) return null;
                var r = a.prefixCls,
                  o = a.accordion,
                  i = a.collapsible,
                  l = a.destroyInactivePanel,
                  c = a.onItemClick,
                  s = a.activeKey,
                  d = a.openMotion,
                  m = a.expandIcon,
                  u = e.key || String(t),
                  p = e.props,
                  f = p.header,
                  g = p.headerClass,
                  h = p.destroyInactivePanel,
                  b = p.collapsible,
                  v = p.onItemClick,
                  x = !1;
                x = o ? s[0] === u : s.indexOf(u) > -1;
                var w = null != b ? b : i,
                  E = {
                    key: u,
                    panelKey: u,
                    header: f,
                    headerClass: g,
                    isActive: x,
                    prefixCls: r,
                    destroyInactivePanel: null != h ? h : l,
                    openMotion: d,
                    accordion: o,
                    children: e.props.children,
                    onItemClick: function (e) {
                      'disabled' !== w && (c(e), null == v || v(e));
                    },
                    expandIcon: m,
                    collapsible: w,
                  };
                return 'string' == typeof e.type
                  ? e
                  : (Object.keys(E).forEach(function (e) {
                      void 0 === E[e] && delete E[e];
                    }),
                    n.cloneElement(e, E));
              })(e, t, a);
            });
      };
      function le(e) {
        var t = e;
        if (!Array.isArray(t)) {
          var a = (0, X.Z)(t);
          t = 'number' === a || 'string' === a ? [t] : [];
        }
        return t.map(function (e) {
          return String(e);
        });
      }
      var ce = n.forwardRef(function (e, t) {
          var a = e.prefixCls,
            r = void 0 === a ? 'rc-collapse' : a,
            o = e.destroyInactivePanel,
            i = void 0 !== o && o,
            l = e.style,
            c = e.accordion,
            s = e.className,
            d = e.children,
            m = e.collapsible,
            u = e.openMotion,
            p = e.expandIcon,
            f = e.activeKey,
            g = e.defaultActiveKey,
            h = e.onChange,
            b = e.items,
            v = T()(r, s),
            x = (0, K.Z)([], {
              value: f,
              onChange: function (e) {
                return null == h ? void 0 : h(e);
              },
              defaultValue: g,
              postState: le,
            }),
            w = (0, V.Z)(x, 2),
            E = w[0],
            y = w[1];
          (0,
          U.ZP)(!d, '`children` will be removed in next major version. Please use `items` instead.');
          var k = ie(b, d, {
            prefixCls: r,
            accordion: c,
            openMotion: u,
            expandIcon: p,
            collapsible: m,
            destroyInactivePanel: i,
            onItemClick: function (e) {
              return y(function () {
                return c
                  ? E[0] === e
                    ? []
                    : [e]
                  : E.indexOf(e) > -1
                  ? E.filter(function (t) {
                      return t !== e;
                    })
                  : [].concat((0, W.Z)(E), [e]);
              });
            },
            activeKey: E,
          });
          return n.createElement(
            'div',
            { ref: t, className: v, style: l, role: c ? 'tablist' : void 0 },
            k
          );
        }),
        se = Object.assign(ce, { Panel: re }),
        de = se,
        me = (se.Panel, a(8613)),
        ue = a(51880),
        pe = a(94221),
        fe = a(67170),
        ge = a(4363),
        he = n.forwardRef(function (e, t) {
          var a = n.useContext(fe.E_).getPrefixCls,
            r = e.prefixCls,
            o = e.className,
            i = e.showArrow,
            l = void 0 === i || i,
            c = a('collapse', r),
            s = T()((0, Z.Z)({}, ''.concat(c, '-no-arrow'), !l), o);
          return n.createElement(
            de.Panel,
            Object.assign({ ref: t }, e, { prefixCls: c, className: s })
          );
        }),
        be = a(57416),
        ve = a(16235),
        xe = a(51540),
        we = a(85146),
        Ee = function (e) {
          var t,
            a,
            n,
            r,
            o,
            i,
            l = e.componentCls,
            c = e.collapseContentBg,
            s = e.padding,
            d = e.collapseContentPaddingHorizontal,
            m = e.collapseHeaderBg,
            u = e.collapseHeaderPadding,
            p = e.collapseHeaderPaddingSM,
            f = e.collapseHeaderPaddingLG,
            g = e.collapsePanelBorderRadius,
            h = e.lineWidth,
            b = e.lineType,
            v = e.colorBorder,
            x = e.colorText,
            w = e.colorTextHeading,
            E = e.colorTextDisabled,
            y = e.fontSize,
            k = e.fontSizeLG,
            N = e.lineHeight,
            C = e.marginSM,
            A = e.paddingSM,
            M = e.paddingLG,
            I = e.paddingXS,
            L = e.motionDurationSlow,
            z = e.fontSizeIcon,
            D = ''.concat(h, 'px ').concat(b, ' ').concat(v);
          return (0, Z.Z)(
            {},
            l,
            Object.assign(
              Object.assign({}, (0, be.Wf)(e)),
              ((i = {
                backgroundColor: m,
                border: D,
                borderBottom: 0,
                borderRadius: ''.concat(g, 'px'),
              }),
              (0, Z.Z)(i, '&-rtl', { direction: 'rtl' }),
              (0, Z.Z)(
                i,
                '& > '.concat(l, '-item'),
                ((a = { borderBottom: D }),
                (0, Z.Z)(
                  a,
                  '&:last-child',
                  (0, Z.Z)(
                    {},
                    '\n            &,\n            & > '.concat(l, '-header'),
                    { borderRadius: '0 0 '.concat(g, 'px ').concat(g, 'px') }
                  )
                ),
                (0, Z.Z)(
                  a,
                  '> '.concat(l, '-header'),
                  ((t = {
                    position: 'relative',
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'flex-start',
                    padding: u,
                    paddingInlineStart: A,
                    color: w,
                    lineHeight: N,
                    cursor: 'pointer',
                    transition: 'all '.concat(L, ', visibility 0s'),
                  }),
                  (0, Z.Z)(t, '> '.concat(l, '-header-text'), { flex: 'auto' }),
                  (0, Z.Z)(t, '&:focus', { outline: 'none' }),
                  (0, Z.Z)(t, ''.concat(l, '-expand-icon'), {
                    height: y * N,
                    display: 'flex',
                    alignItems: 'center',
                    paddingInlineEnd: C,
                    marginInlineStart: s - A,
                  }),
                  (0, Z.Z)(
                    t,
                    ''.concat(l, '-arrow'),
                    Object.assign(Object.assign({}, (0, be.Ro)()), {
                      fontSize: z,
                      svg: { transition: 'transform '.concat(L) },
                    })
                  ),
                  (0, Z.Z)(t, ''.concat(l, '-header-text'), {
                    marginInlineEnd: 'auto',
                  }),
                  t)
                ),
                (0, Z.Z)(
                  a,
                  ''.concat(l, '-header-collapsible-only'),
                  (0, Z.Z)(
                    { cursor: 'default' },
                    ''.concat(l, '-header-text'),
                    { flex: 'none', cursor: 'pointer' }
                  )
                ),
                (0, Z.Z)(
                  a,
                  ''.concat(l, '-icon-collapsible-only'),
                  (0, Z.Z)(
                    { cursor: 'default' },
                    ''.concat(l, '-expand-icon'),
                    { cursor: 'pointer' }
                  )
                ),
                a)
              ),
              (0, Z.Z)(
                i,
                ''.concat(l, '-content'),
                ((n = { color: x, backgroundColor: c, borderTop: D }),
                (0, Z.Z)(n, '& > '.concat(l, '-content-box'), {
                  padding: ''.concat(s, 'px ').concat(d, 'px'),
                }),
                (0, Z.Z)(n, '&-hidden', { display: 'none' }),
                n)
              ),
              (0, Z.Z)(
                i,
                '&-small',
                (0, Z.Z)(
                  {},
                  '> '.concat(l, '-item'),
                  ((r = {}),
                  (0, Z.Z)(
                    r,
                    '> '.concat(l, '-header'),
                    (0, Z.Z)(
                      { padding: p, paddingInlineStart: I },
                      '> '.concat(l, '-expand-icon'),
                      { marginInlineStart: A - I }
                    )
                  ),
                  (0, Z.Z)(
                    r,
                    '> '.concat(l, '-content > ').concat(l, '-content-box'),
                    { padding: A }
                  ),
                  r)
                )
              ),
              (0, Z.Z)(
                i,
                '&-large',
                (0, Z.Z)(
                  {},
                  '> '.concat(l, '-item'),
                  ((o = { fontSize: k }),
                  (0, Z.Z)(
                    o,
                    '> '.concat(l, '-header'),
                    (0, Z.Z)(
                      { padding: f, paddingInlineStart: s },
                      '> '.concat(l, '-expand-icon'),
                      { height: k * N, marginInlineStart: M - s }
                    )
                  ),
                  (0, Z.Z)(
                    o,
                    '> '.concat(l, '-content > ').concat(l, '-content-box'),
                    { padding: M }
                  ),
                  o)
                )
              ),
              (0, Z.Z)(
                i,
                ''.concat(l, '-item:last-child'),
                (0, Z.Z)({}, '> '.concat(l, '-content'), {
                  borderRadius: '0 0 '.concat(g, 'px ').concat(g, 'px'),
                })
              ),
              (0, Z.Z)(
                i,
                '& '.concat(l, '-item-disabled > ').concat(l, '-header'),
                (0, Z.Z)({}, '\n          &,\n          & > .arrow\n        ', {
                  color: E,
                  cursor: 'not-allowed',
                })
              ),
              (0, Z.Z)(
                i,
                '&'.concat(l, '-icon-position-end'),
                (0, Z.Z)(
                  {},
                  '& > '.concat(l, '-item'),
                  (0, Z.Z)(
                    {},
                    '> '.concat(l, '-header'),
                    (0, Z.Z)({}, ''.concat(l, '-expand-icon'), {
                      order: 1,
                      paddingInlineEnd: 0,
                      paddingInlineStart: C,
                    })
                  )
                )
              ),
              i)
            )
          );
        },
        ye = function (e) {
          var t = e.componentCls,
            a = '> '
              .concat(t, '-item > ')
              .concat(t, '-header ')
              .concat(t, '-arrow svg');
          return (0, Z.Z)(
            {},
            ''.concat(t, '-rtl'),
            (0, Z.Z)({}, a, { transform: 'rotate(180deg)' })
          );
        },
        ke = function (e) {
          var t,
            a = e.componentCls,
            n = e.collapseHeaderBg,
            r = e.paddingXXS,
            o = e.colorBorder;
          return (0, Z.Z)(
            {},
            ''.concat(a, '-borderless'),
            ((t = { backgroundColor: n, border: 0 }),
            (0, Z.Z)(t, '> '.concat(a, '-item'), {
              borderBottom: '1px solid '.concat(o),
            }),
            (0, Z.Z)(
              t,
              '\n        > '
                .concat(a, '-item:last-child,\n        > ')
                .concat(a, '-item:last-child ')
                .concat(a, '-header\n      '),
              { borderRadius: 0 }
            ),
            (0, Z.Z)(t, '> '.concat(a, '-item:last-child'), {
              borderBottom: 0,
            }),
            (0, Z.Z)(t, '> '.concat(a, '-item > ').concat(a, '-content'), {
              backgroundColor: 'transparent',
              borderTop: 0,
            }),
            (0, Z.Z)(
              t,
              '> '
                .concat(a, '-item > ')
                .concat(a, '-content > ')
                .concat(a, '-content-box'),
              { paddingTop: r }
            ),
            t)
          );
        },
        Ne = function (e) {
          var t = e.componentCls,
            a = e.paddingSM;
          return (0, Z.Z)(
            {},
            ''.concat(t, '-ghost'),
            (0, Z.Z)(
              { backgroundColor: 'transparent', border: 0 },
              '> '.concat(t, '-item'),
              (0, Z.Z)(
                { borderBottom: 0 },
                '> '.concat(t, '-content'),
                (0, Z.Z)(
                  { backgroundColor: 'transparent', border: 0 },
                  '> '.concat(t, '-content-box'),
                  { paddingBlock: a }
                )
              )
            )
          );
        },
        Ze = (0, xe.Z)('Collapse', function (e) {
          var t = (0, we.TS)(e, {
            collapseContentBg: e.colorBgContainer,
            collapseHeaderBg: e.colorFillAlter,
            collapseHeaderPadding: ''
              .concat(e.paddingSM, 'px ')
              .concat(e.padding, 'px'),
            collapseHeaderPaddingSM: ''
              .concat(e.paddingXS, 'px ')
              .concat(e.paddingSM, 'px'),
            collapseHeaderPaddingLG: ''
              .concat(e.padding, 'px ')
              .concat(e.paddingLG, 'px'),
            collapsePanelBorderRadius: e.borderRadiusLG,
            collapseContentPaddingHorizontal: 16,
          });
          return [Ee(t), ke(t), Ne(t), ye(t), (0, ve.Z)(t)];
        }),
        Ce = n.forwardRef(function (e, t) {
          var a,
            r = n.useContext(fe.E_),
            o = r.getPrefixCls,
            i = r.direction,
            l = r.collapse,
            c = e.prefixCls,
            s = e.className,
            d = e.rootClassName,
            m = e.style,
            u = e.bordered,
            p = void 0 === u || u,
            f = e.ghost,
            g = e.size,
            h = e.expandIconPosition,
            b = void 0 === h ? 'start' : h,
            v = e.children,
            x = e.expandIcon,
            w = (0, ge.Z)(function (e) {
              var t;
              return null !== (t = null != g ? g : e) && void 0 !== t
                ? t
                : 'middle';
            }),
            E = o('collapse', c),
            y = o(),
            k = Ze(E),
            N = (0, _.Z)(k, 2),
            C = N[0],
            A = N[1],
            M = n.useMemo(
              function () {
                return 'left' === b ? 'start' : 'right' === b ? 'end' : b;
              },
              [b]
            ),
            I = T()(
              ''.concat(E, '-icon-position-').concat(M),
              ((a = {}),
              (0, Z.Z)(a, ''.concat(E, '-borderless'), !p),
              (0, Z.Z)(a, ''.concat(E, '-rtl'), 'rtl' === i),
              (0, Z.Z)(a, ''.concat(E, '-ghost'), !!f),
              (0, Z.Z)(a, ''.concat(E, '-').concat(w), 'middle' !== w),
              a),
              null == l ? void 0 : l.className,
              s,
              d,
              A
            ),
            L = Object.assign(Object.assign({}, (0, ue.Z)(y)), {
              motionAppear: !1,
              leavedClassName: ''.concat(E, '-content-hidden'),
            }),
            z = n.useMemo(
              function () {
                return v
                  ? (0, Y.Z)(v).map(function (e, t) {
                      var a, n;
                      if (
                        null === (a = e.props) || void 0 === a
                          ? void 0
                          : a.disabled
                      ) {
                        var r =
                            null !== (n = e.key) && void 0 !== n
                              ? n
                              : String(t),
                          o = e.props,
                          i = o.disabled,
                          l = o.collapsible,
                          c = Object.assign(
                            Object.assign({}, (0, me.Z)(e.props, ['disabled'])),
                            {
                              key: r,
                              collapsible:
                                null != l ? l : i ? 'disabled' : void 0,
                            }
                          );
                        return (0, pe.Tm)(e, c);
                      }
                      return e;
                    })
                  : null;
              },
              [v]
            );
          return C(
            n.createElement(
              de,
              Object.assign(
                { ref: t, openMotion: L },
                (0, me.Z)(e, ['rootClassName']),
                {
                  expandIcon: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = x
                        ? x(e)
                        : n.createElement(F.Z, {
                            rotate: e.isActive ? 90 : void 0,
                          });
                    return (0, pe.Tm)(t, function () {
                      return {
                        className: T()(
                          t.props.className,
                          ''.concat(E, '-arrow')
                        ),
                      };
                    });
                  },
                  prefixCls: E,
                  className: I,
                  style: Object.assign(
                    Object.assign({}, null == l ? void 0 : l.style),
                    m
                  ),
                }
              ),
              z
            )
          );
        });
      var Ae = Object.assign(Ce, { Panel: he }),
        Me = Ae.Panel,
        Ie = function () {
          var e = n.createElement(
              'div',
              { className: 'text-base p-4 bg-secondalry rounded' },
              n.createElement(
                'div',
                { className: 'mb-2' },
                n.createElement(H.Z, {
                  className: 'w-4 h-4 inline-block mr-2',
                }),
                "LIDA may not work well for visualization grammars that are not well represented in the LLM's training dataset. Similarly, we will likely see improved performance on datasets that resemble example datasets available online.",
                ' '
              ),
              n.createElement(
                'div',
                { className: 'mb-2' },
                n.createElement(H.Z, {
                  className: 'w-4 h-4 inline-block mr-2',
                }),
                'Performance is bottlenecked by the choice of visualization libraries used and degrees of freedom accorded the model in generating visualizations (e.g., a strict scaffold constrained to only visualization generation vs a generation scaffold with access to multiple libraries and general code writing capabilities).'
              ),
              n.createElement(
                'div',
                { className: 'mb-2' },
                n.createElement(H.Z, {
                  className: 'w-4 h-4 inline-block mr-2',
                }),
                ' LIDA currently requires code execution. While effort is made to constrain the scope of generated code (via scaffolding), a sandbox environment is recommended to ensure safe code execution.'
              ),
              n.createElement(
                'div',
                { className: 'mt-6 text-right' },
                n.createElement(
                  'a',
                  {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    'aria-label': 'Learn more in the paper',
                    href: 'https://aclanthology.org/2023.acl-demo.11/',
                    className: 'text-sm font-semibold leading-6 text-accent',
                  },
                  'Learn more in the paper ',
                  n.createElement('span', { 'aria-hidden': 'true' }, '→')
                )
              )
            ),
            t = n.createElement(
              'div',
              { className: 'text-base p-4 bg-secondarly rounded' },
              n.createElement(
                'div',
                { className: 'mb-2' },
                n.createElement(H.Z, {
                  className: 'w-4 h-4 inline-block mr-2',
                }),
                'LIDA is built as a standalone python library with classes that implement the core modules. It currently works with the chatgpt line of models (gpt-turbo-3.5). Future work will look towards integrating more complex LLM toolchains such as Semantic Kernel or Guidance.',
                ' '
              ),
              n.createElement(
                'div',
                { className: 'mt-4   text-right' },
                n.createElement(
                  'a',
                  {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href: 'https://aclanthology.org/2023.acl-demo.11/',
                    className: 'text-sm font-semibold leading-6 text-accent',
                  },
                  'Learn more in the paper ',
                  n.createElement('span', { 'aria-hidden': 'true' }, '→')
                )
              )
            ),
            a = n.createElement(
              'div',
              { className: 'text-base p-4 bg-secondarly rounded' },
              n.createElement(
                'div',
                { className: 'mb-2' },
                n.createElement(H.Z, {
                  className: 'w-4 h-4 inline-block mr-2',
                }),
                'LIDA is packaged as a python library and it is also open source! You can install and run on your local machine or modify the code on',
                ' ',
                n.createElement(
                  'a',
                  {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href: 'https://github.com/microsoft/lida',
                    className: 'text-sm font-semibold leading-6 text-accent',
                  },
                  'Github ',
                  n.createElement('span', { 'aria-hidden': 'true' }, '→')
                ),
                n.createElement(
                  'div',
                  { className: 'mt-4   text-right' },
                  n.createElement(
                    'a',
                    {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      href: 'https://aclanthology.org/2023.acl-demo.11/',
                      className: 'text-sm font-semibold leading-6 text-accent',
                    },
                    'Learn more in the paper ',
                    n.createElement('span', { 'aria-hidden': 'true' }, '→')
                  )
                )
              )
            );

          return null;
          /*  return n.createElement(
            'div',
            { className: 'mt-14' },
            n.createElement(
              'div',
              { className: 'text-3xl mb-4 font-semibold' },
              ' FAQ '
            ),
            n.createElement(
              'div',
              { className: 'border border-secondary rounded' },
              n.createElement(
                Ae,
                { bordered: !1, defaultActiveKey: ['1'] },
                n.createElement(
                  Me,
                  {
                    header: n.createElement(
                      'div',
                      { className: 'font-semibold text-lg' },
                      'What are known limitations?'
                    ),
                    key: '1',
                  },
                  e
                ),
                n.createElement(
                  Me,
                  {
                    header: n.createElement(
                      'div',
                      { className: 'font-semibold text-lg' },
                      'How is this built?'
                    ),
                    key: '2',
                  },
                  t
                ),
                n.createElement(
                  Me,
                  {
                    header: n.createElement(
                      'div',
                      { className: 'font-semibold text-lg' },
                      ' Source Code? '
                    ),
                    key: '3',
                  },
                  a
                )
              )
            )
          ); */
        },
        Le = [
          /* {
            update:
              '🚀 LIDA is now open source on GitHub. Try it out locally on your own data!',
            date: '08/14/2023',
            link: 'https://github.com/microsoft/lida',
          }, */
          /* {
            update:
              'The LIDA paper has been accepted for publication at ACL 2023 Conference (Demonstration Track)',
            date: '05/08/2023',
            link: 'https://aclanthology.org/2023.acl-demo.11/',
          }, */
        ],
        ze = function () {
          var e = Le.map(function (e, t) {
            return null;
            /* return n.createElement(
              'div',
              { key: 'updaterow' + t },
              n.createElement(
                'div',
                { className: 'inline-block' },
                n.createElement(
                  'span',
                  { className: 'font-semibold mr-2' },
                  e.date
                ),
                e.update
              ),
              n.createElement(
                'a',
                {
                  className: 'inline-block ml-2 text-accent',
                  href: e.link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                'learn more.'
              )
            ); */
          });
          return null;
          /*   return n.createElement(
            'div',
            { className: 'mt-14' },
            n.createElement(
              'div',
              { className: 'text-3xl mb-4 font-semibold' },
              ' Updates '
            ),
            n.createElement('div', null, e)
          ); */
        },
        De = function () {
          return null;
          /* return n.createElement(
            'div',
            { className: 'text-primary mb-6   ' },
            n.createElement(
              b.qV,
              null,
              n.createElement(
                'span',
                null,
                Le[0].update,
                '.',
                ' ',
                n.createElement(
                  'span',
                  { className: 'font-semibold text-sm mx-1 inline-block' },
                  Le[0].date
                ),
                ' ',
                n.createElement(
                  'a',
                  {
                    className: 'inline-block ml-1 hover:underline text-accent',
                    href: Le[0].link,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'Learn more.'
                )
              )
            ),
            n.createElement(j, null),
            n.createElement(v, null),
            n.createElement(P, null),
            n.createElement(Ie, null),
            n.createElement(R, null),
            n.createElement(ze, null)
          ); */
        },
        Se = function (e) {
          var t = e.data;
          return n.createElement(
            r.Z,
            {
              meta: t.site.siteMetadata,
              title: 'DataQuery: Automated Visualizations with LLMs',
              link: '/',
            },
            n.createElement(
              'main',
              { className: '' },
              n.createElement(
                'div',
                { className: 'hidden mb-6' },
                n.createElement(
                  'div',
                  { className: '' },
                  'Lida provides a conversational interface for automatic generation of',
                  ' ',
                  n.createElement(
                    'span',
                    { className: 'border-b border-accent' },
                    'grammar-agnostic'
                  ),
                  ' ',
                  'visualizations (and infographics) from data!.',
                  ' '
                )
              ),
              n.createElement(De, null)
            )
          );
        };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-tsx-36a4bd360cacad51120f.js.map
