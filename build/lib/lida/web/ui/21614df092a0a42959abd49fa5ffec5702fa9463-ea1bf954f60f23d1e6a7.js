'use strict';
(self.webpackChunklida = self.webpackChunklida || []).push([
  [308],
  {
    45107: function (e, t, n) {
      var r = n(39784),
        o = n(67294),
        a = ['title', 'titleId'];
      var i = o.forwardRef(function (e, t) {
        var n = e.title,
          i = e.titleId,
          u = (0, r.Z)(e, a);
        return o.createElement(
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
              'aria-labelledby': i,
            },
            u
          ),
          n ? o.createElement('title', { id: i }, n) : null,
          o.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
          })
        );
      });
      t.Z = i;
    },
    96626: function (e, t, n) {
      var r = n(39784),
        o = n(67294),
        a = ['title', 'titleId'];
      var i = o.forwardRef(function (e, t) {
        var n = e.title,
          i = e.titleId,
          u = (0, r.Z)(e, a);
        return o.createElement(
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
              'aria-labelledby': i,
            },
            u
          ),
          n ? o.createElement('title', { id: i }, n) : null,
          o.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M6 18L18 6M6 6l12 12',
          })
        );
      });
      t.Z = i;
    },
    86135: function (e, t, n) {
      var r = n(34948),
        o = n(3070),
        a = n(79114);
      e.exports = function (e, t, n) {
        var i = r(t);
        i in e ? o.f(e, i, a(0, n)) : (e[i] = n);
      };
    },
    71246: function (e, t, n) {
      var r = n(70648),
        o = n(58173),
        a = n(68554),
        i = n(97497),
        u = n(5112)('iterator');
      e.exports = function (e) {
        if (!a(e)) return o(e, u) || o(e, '@@iterator') || i[r(e)];
      };
    },
    18554: function (e, t, n) {
      var r = n(46916),
        o = n(19662),
        a = n(19670),
        i = n(66330),
        u = n(71246),
        c = TypeError;
      e.exports = function (e, t) {
        var n = arguments.length < 2 ? u(e) : t;
        if (o(n)) return a(r(n, e));
        throw c(i(e) + ' is not iterable');
      };
    },
    97659: function (e, t, n) {
      var r = n(5112),
        o = n(97497),
        a = r('iterator'),
        i = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (o.Array === e || i[a] === e);
      };
    },
    20408: function (e, t, n) {
      var r = n(49974),
        o = n(46916),
        a = n(19670),
        i = n(66330),
        u = n(97659),
        c = n(26244),
        l = n(47976),
        s = n(18554),
        f = n(71246),
        d = n(99212),
        m = TypeError,
        v = function (e, t) {
          (this.stopped = e), (this.result = t);
        },
        p = v.prototype;
      e.exports = function (e, t, n) {
        var y,
          h,
          g,
          b,
          E,
          w,
          x,
          S = n && n.that,
          O = !(!n || !n.AS_ENTRIES),
          k = !(!n || !n.IS_RECORD),
          I = !(!n || !n.IS_ITERATOR),
          N = !(!n || !n.INTERRUPTED),
          P = r(t, S),
          Z = function (e) {
            return y && d(y, 'normal', e), new v(!0, e);
          },
          j = function (e) {
            return O
              ? (a(e), N ? P(e[0], e[1], Z) : P(e[0], e[1]))
              : N
              ? P(e, Z)
              : P(e);
          };
        if (k) y = e.iterator;
        else if (I) y = e;
        else {
          if (!(h = f(e))) throw m(i(e) + ' is not iterable');
          if (u(h)) {
            for (g = 0, b = c(e); b > g; g++)
              if ((E = j(e[g])) && l(p, E)) return E;
            return new v(!1);
          }
          y = s(e, h);
        }
        for (w = k ? e.next : y.next; !(x = o(w, y)).done; ) {
          try {
            E = j(x.value);
          } catch (A) {
            d(y, 'throw', A);
          }
          if ('object' == typeof E && E && l(p, E)) return E;
        }
        return new v(!1);
      };
    },
    99212: function (e, t, n) {
      var r = n(46916),
        o = n(19670),
        a = n(58173);
      e.exports = function (e, t, n) {
        var i, u;
        o(e);
        try {
          if (!(i = a(e, 'return'))) {
            if ('throw' === t) throw n;
            return n;
          }
          i = r(i, e);
        } catch (c) {
          (u = !0), (i = c);
        }
        if ('throw' === t) throw n;
        if (u) throw i;
        return o(i), n;
      };
    },
    97497: function (e) {
      e.exports = {};
    },
    38559: function (e, t, n) {
      var r = n(82109),
        o = n(20408),
        a = n(86135);
      r(
        { target: 'Object', stat: !0 },
        {
          fromEntries: function (e) {
            var t = {};
            return (
              o(
                e,
                function (e, n) {
                  a(t, e, n);
                },
                { AS_ENTRIES: !0 }
              ),
              t
            );
          },
        }
      );
    },
    28893: function (e, t, n) {
      var r = n(67294);
      t.Z = function (e) {
        var t = e.icon,
          n = void 0 === t ? 'app' : t,
          o = e.size,
          a = void 0 === o ? 4 : o,
          i = e.color,
          u = void 0 === i ? 'currentColor' : i,
          c = e.className,
          l = 'inline-block h-' + a + ' w-' + a + ' ' + (void 0 === c ? '' : c);
        return 'github' === n
          ? r.createElement(
              'svg',
              {
                className: ' ' + l + ' inline-block  ',
                'aria-hidden': 'true',
                fill: 'currentColor',
                viewBox: '0 0 20 20',
              },
              r.createElement('path', {
                fillRule: 'evenodd',
                d: 'M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z',
                clipRule: 'evenodd',
              })
            )
          : 'loading' === n
          ? r.createElement(
              'svg',
              {
                className: ' ' + l + ' inline-block animate-spin  ',
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'currentColor',
                viewBox: '0 0 24 24',
              },
              r.createElement('path', {
                d: 'M11 3c-1.613 0-3.122.437-4.432 1.185l1.65 2.445-6.702-.378 2.226-6.252 1.703 2.522c1.633-.959 3.525-1.522 5.555-1.522 4.406 0 8.197 2.598 9.953 6.34l-1.642 1.215c-1.355-3.258-4.569-5.555-8.311-5.555zm13 12.486l-2.375-6.157-5.307 3.925 3.389.984c-.982 3.811-4.396 6.651-8.488 6.75l.891 1.955c4.609-.461 8.373-3.774 9.521-8.146l2.369.689zm-18.117 3.906c-2.344-1.625-3.883-4.33-3.883-7.392 0-1.314.29-2.56.799-3.687l-2.108-.12c-.439 1.188-.691 2.467-.691 3.807 0 3.831 1.965 7.192 4.936 9.158l-1.524 2.842 6.516-1.044-2.735-6.006-1.31 2.442z',
              })
            )
          : 'eraser' === n
          ? r.createElement(
              'svg',
              {
                className: ' ' + l + ' inline-block  ',
                xmlns: 'http://www.w3.org/2000/svg',
                fill: '' + u,
                viewBox: '0 0 24 24',
              },
              r.createElement('path', {
                d: 'M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm.456-11.429l-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z',
              })
            )
          : 'app' === n
          ? r.createElement(
              'svg',
              {
                className: ' ' + l + ' inline-block    ',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 30 30',
                fill: 'none',
              },
              r.createElement('rect', {
                x: '1',
                y: '1',
                width: '28',
                height: '28',
                rx: '2',
                stroke: '#16A34A',
                strokeWidth: '2',
              }),
              r.createElement('rect', {
                x: '7',
                y: '9',
                width: '3',
                height: '15',
                rx: '1.5',
                fill: '#22C55E',
              }),
              r.createElement('rect', {
                x: '21',
                y: '9',
                width: '3',
                height: '15',
                rx: '1.5',
                fill: '#16A34A',
              }),
              r.createElement('rect', {
                x: '14',
                y: '6',
                width: '3',
                height: '18',
                rx: '1.5',
                fill: '#F2CB39',
              })
            )
          : r.createElement(
              'svg',
              {
                className: ' ' + l + ' inline-block  ',
                xmlns: 'http://www.w3.org/2000/svg',
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
              },
              r.createElement('path', {
                d: 'M1 3.488c0-1.926 4.656-3.488 10-3.488 5.345 0 10 1.562 10 3.488s-4.655 3.487-10 3.487c-5.344 0-10-1.561-10-3.487zm10 9.158c5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487zm0 5.665c.34 0 .678-.007 1.011-.019.045-1.407.537-2.7 1.342-3.745-.839.067-1.643.1-2.353.1-3.006 0-7.588-.523-10-2.256v2.434c0 1.925 4.656 3.486 10 3.486zm1.254 1.97c-.438.02-.861.03-1.254.03-2.995 0-7.582-.518-10-2.256v2.458c0 1.925 4.656 3.487 10 3.487 1.284 0 2.526-.092 3.676-.256-1.155-.844-2.02-2.055-2.422-3.463zm10.746-1.781c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2.166-1.289l-2.063.557.916-1.925-1.387.392-1.466 3.034 1.739-.472-1.177 2.545 3.438-4.131z',
              })
            );
      };
    },
    99286: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return an;
        },
      });
      var r = n(67294),
        o = n(28893),
        a = n(64055),
        i = n(39784),
        u = n(35774);
      function c(e, t) {
        if (e in t) {
          for (
            var n = t[e],
              r = arguments.length,
              o = new Array(r > 2 ? r - 2 : 0),
              a = 2;
            a < r;
            a++
          )
            o[a - 2] = arguments[a];
          return 'function' == typeof n ? n.apply(void 0, o) : n;
        }
        var i = new Error(
          'Tried to handle "'
            .concat(
              e,
              '" but there is no handler defined. Only defined handlers are: '
            )
            .concat(
              Object.keys(t)
                .map(function (e) {
                  return '"'.concat(e, '"');
                })
                .join(', '),
              '.'
            )
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(i, c), i);
      }
      n(38559);
      function l() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(' ');
      }
      var s = ['static'],
        f = ['unmount'],
        d = ['as', 'children', 'refName'];
      function m(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return v(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return v(e, t);
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var a,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var h,
        g = (function (e) {
          return (
            (e[(e.None = 0)] = 'None'),
            (e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
            (e[(e.Static = 2)] = 'Static'),
            e
          );
        })(g || {}),
        b =
          (((h = b || {})[(h.Unmount = 0)] = 'Unmount'),
          (h[(h.Hidden = 1)] = 'Hidden'),
          h);
      function E(e) {
        var t = e.ourProps,
          n = e.theirProps,
          r = e.slot,
          o = e.defaultTag,
          a = e.features,
          l = e.visible,
          d = void 0 === l || l,
          m = e.name,
          v = x(n, t);
        if (d) return w(v, r, o, m);
        var p = null != a ? a : 0;
        if (2 & p) {
          var h = v.static,
            g = void 0 !== h && h,
            b = (0, i.Z)(v, s);
          if (g) return w(b, r, o, m);
        }
        if (1 & p) {
          var E,
            S = v.unmount,
            O = void 0 === S || S,
            k = (0, i.Z)(v, f);
          return c(
            O ? 0 : 1,
            ((E = {}),
            (0, u.Z)(E, 0, function () {
              return null;
            }),
            (0, u.Z)(E, 1, function () {
              return w(
                y(y({}, k), {}, { hidden: !0, style: { display: 'none' } }),
                r,
                o,
                m
              );
            }),
            E)
          );
        }
        return w(v, r, o, m);
      }
      function w(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          o = arguments.length > 3 ? arguments[3] : void 0,
          c = k(e, ['unmount', 'static']),
          s = c.as,
          f = void 0 === s ? n : s,
          v = c.children,
          p = c.refName,
          y = void 0 === p ? 'ref' : p,
          h = (0, i.Z)(c, d),
          g = void 0 !== e.ref ? (0, u.Z)({}, y, e.ref) : {},
          b = 'function' == typeof v ? v(t) : v;
        'className' in h &&
          h.className &&
          'function' == typeof h.className &&
          (h.className = h.className(t));
        var E = {};
        if (t) {
          for (
            var w = !1, S = [], I = 0, N = Object.entries(t);
            I < N.length;
            I++
          ) {
            var P = (0, a.Z)(N[I], 2),
              Z = P[0],
              j = P[1];
            'boolean' == typeof j && (w = !0), !0 === j && S.push(Z);
          }
          w && (E['data-headlessui-state'] = S.join(' '));
        }
        if (f === r.Fragment && Object.keys(O(h)).length > 0) {
          if (!(0, r.isValidElement)(b) || (Array.isArray(b) && b.length > 1))
            throw new Error(
              [
                'Passing props on "Fragment"!',
                '',
                'The current component <'.concat(
                  o,
                  ' /> is rendering a "Fragment".'
                ),
                'However we need to passthrough the following props:',
                Object.keys(h)
                  .map(function (e) {
                    return '  - '.concat(e);
                  })
                  .join('\n'),
                '',
                'You can apply a few solutions:',
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  'Render a single element as the child so that we can forward the props onto that element.',
                ]
                  .map(function (e) {
                    return '  - '.concat(e);
                  })
                  .join('\n'),
              ].join('\n')
            );
          var A = b.props,
            T =
              'function' == typeof (null == A ? void 0 : A.className)
                ? function () {
                    return l(
                      null == A ? void 0 : A.className.apply(A, arguments),
                      h.className
                    );
                  }
                : l(null == A ? void 0 : A.className, h.className),
            C = T ? { className: T } : {};
          return (0, r.cloneElement)(
            b,
            Object.assign(
              {},
              x(b.props, O(k(h, ['ref']))),
              E,
              g,
              (function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return {
                  ref: t.every(function (e) {
                    return null == e;
                  })
                    ? void 0
                    : function (e) {
                        var n,
                          r = m(t);
                        try {
                          for (r.s(); !(n = r.n()).done; ) {
                            var o = n.value;
                            null != o &&
                              ('function' == typeof o ? o(e) : (o.current = e));
                          }
                        } catch (a) {
                          r.e(a);
                        } finally {
                          r.f();
                        }
                      },
                };
              })(b.ref, g.ref),
              C
            )
          );
        }
        return (0, r.createElement)(
          f,
          Object.assign(
            {},
            k(h, ['ref']),
            f !== r.Fragment && g,
            f !== r.Fragment && E
          ),
          b
        );
      }
      function x() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        for (var r = {}, o = {}, a = 0, i = t; a < i.length; a++) {
          var c = i[a];
          for (var l in c)
            l.startsWith('on') && 'function' == typeof c[l]
              ? (null != o[l] || (o[l] = []), o[l].push(c[l]))
              : (r[l] = c[l]);
        }
        if (r.disabled || r['aria-disabled'])
          return Object.assign(
            r,
            Object.fromEntries(
              Object.keys(o).map(function (e) {
                return [e, void 0];
              })
            )
          );
        var s = function (e) {
          Object.assign(
            r,
            (0, u.Z)({}, e, function (t) {
              for (
                var n = o[e],
                  r = arguments.length,
                  a = new Array(r > 1 ? r - 1 : 0),
                  i = 1;
                i < r;
                i++
              )
                a[i - 1] = arguments[i];
              var u,
                c = m(n);
              try {
                for (c.s(); !(u = c.n()).done; ) {
                  var l = u.value;
                  if (
                    (t instanceof Event ||
                      (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                    t.defaultPrevented
                  )
                    return;
                  l.apply(void 0, [t].concat(a));
                }
              } catch (s) {
                c.e(s);
              } finally {
                c.f();
              }
            })
          );
        };
        for (var f in o) s(f);
        return r;
      }
      function S(e) {
        var t;
        return Object.assign((0, r.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function O(e) {
        var t = Object.assign({}, e);
        for (var n in t) void 0 === t[n] && delete t[n];
        return t;
      }
      function k(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = Object.assign({}, e),
          o = m(n);
        try {
          for (o.s(); !(t = o.n()).done; ) {
            var a = t.value;
            a in r && delete r[a];
          }
        } catch (i) {
          o.e(i);
        } finally {
          o.f();
        }
        return r;
      }
      var I = n(89907),
        N = n(5626),
        P = Object.defineProperty,
        Z = function (e, t, n) {
          return (
            (function (e, t, n) {
              t in e
                ? P(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n,
                  })
                : (e[t] = n);
            })(e, 'symbol' != typeof t ? t + '' : t, n),
            n
          );
        },
        j = (function () {
          function e() {
            (0, I.Z)(this, e),
              Z(this, 'current', this.detect()),
              Z(this, 'handoffState', 'pending'),
              Z(this, 'currentId', 0);
          }
          return (
            (0, N.Z)(e, [
              {
                key: 'set',
                value: function (e) {
                  this.current !== e &&
                    ((this.handoffState = 'pending'),
                    (this.currentId = 0),
                    (this.current = e));
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.set(this.detect());
                },
              },
              {
                key: 'nextId',
                value: function () {
                  return ++this.currentId;
                },
              },
              {
                key: 'isServer',
                get: function () {
                  return 'server' === this.current;
                },
              },
              {
                key: 'isClient',
                get: function () {
                  return 'client' === this.current;
                },
              },
              {
                key: 'detect',
                value: function () {
                  return 'undefined' == typeof window ||
                    'undefined' == typeof document
                    ? 'server'
                    : 'client';
                },
              },
              {
                key: 'handoff',
                value: function () {
                  'pending' === this.handoffState &&
                    (this.handoffState = 'complete');
                },
              },
              {
                key: 'isHandoffComplete',
                get: function () {
                  return 'complete' === this.handoffState;
                },
              },
            ]),
            e
          );
        })(),
        A = new j(),
        T = function (e, t) {
          A.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
        };
      function C(e) {
        var t = (0, r.useRef)(e);
        return (
          T(
            function () {
              t.current = e;
            },
            [e]
          ),
          t
        );
      }
      var R = function (e) {
        var t = C(e);
        return r.useCallback(
          function () {
            return t.current.apply(t, arguments);
          },
          [t]
        );
      };
      function F(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return M(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return M(e, t);
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var a,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var D,
        L = Symbol();
      function _(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Object.assign(e, (0, u.Z)({}, L, t));
      }
      function B() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var o = (0, r.useRef)(t);
        (0, r.useEffect)(
          function () {
            o.current = t;
          },
          [t]
        );
        var a = R(function (e) {
          var t,
            n = F(o.current);
          try {
            for (n.s(); !(t = n.n()).done; ) {
              var r = t.value;
              null != r && ('function' == typeof r ? r(e) : (r.current = e));
            }
          } catch (a) {
            n.e(a);
          } finally {
            n.f();
          }
        });
        return t.every(function (e) {
          return null == e || (null == e ? void 0 : e[L]);
        })
          ? void 0
          : a;
      }
      function U() {
        var e = (0, r.useState)(A.isHandoffComplete),
          t = (0, a.Z)(e, 2),
          n = t[0],
          o = t[1];
        return (
          n && !1 === A.isHandoffComplete && o(!1),
          (0, r.useEffect)(
            function () {
              !0 !== n && o(!0);
            },
            [n]
          ),
          (0, r.useEffect)(function () {
            return A.handoff();
          }, []),
          n
        );
      }
      var H =
          null != (D = r.useId)
            ? D
            : function () {
                var e = U(),
                  t = r.useState(
                    e
                      ? function () {
                          return A.nextId();
                        }
                      : null
                  ),
                  n = (0, a.Z)(t, 2),
                  o = n[0],
                  i = n[1];
                return (
                  T(
                    function () {
                      null === o && i(A.nextId());
                    },
                    [o]
                  ),
                  null != o ? '' + o : void 0
                );
              },
        z = (function (e) {
          return (
            (e.Space = ' '),
            (e.Enter = 'Enter'),
            (e.Escape = 'Escape'),
            (e.Backspace = 'Backspace'),
            (e.Delete = 'Delete'),
            (e.ArrowLeft = 'ArrowLeft'),
            (e.ArrowUp = 'ArrowUp'),
            (e.ArrowRight = 'ArrowRight'),
            (e.ArrowDown = 'ArrowDown'),
            (e.Home = 'Home'),
            (e.End = 'End'),
            (e.PageUp = 'PageUp'),
            (e.PageDown = 'PageDown'),
            (e.Tab = 'Tab'),
            e
          );
        })(z || {});
      function K(e) {
        for (
          var t = e.parentElement, n = null;
          t && !(t instanceof HTMLFieldSetElement);

        )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        var r = '' === (null == t ? void 0 : t.getAttribute('disabled'));
        return (
          (!r ||
            !(function (e) {
              if (!e) return !1;
              for (var t = e.previousElementSibling; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)) &&
          r
        );
      }
      var W = (0, r.createContext)(null);
      W.displayName = 'OpenClosedContext';
      var V,
        G = (function (e) {
          return (
            (e[(e.Open = 1)] = 'Open'),
            (e[(e.Closed = 2)] = 'Closed'),
            (e[(e.Closing = 4)] = 'Closing'),
            (e[(e.Opening = 8)] = 'Opening'),
            e
          );
        })(G || {});
      function q() {
        return (0, r.useContext)(W);
      }
      function Q(e) {
        var t = e.value,
          n = e.children;
        return r.createElement(W.Provider, { value: t }, n);
      }
      function $(e) {
        var t;
        if (e.type) return e.type;
        var n = null != (t = e.as) ? t : 'button';
        return 'string' == typeof n && 'button' === n.toLowerCase()
          ? 'button'
          : void 0;
      }
      function X(e, t) {
        var n = (0, r.useState)(function () {
            return $(e);
          }),
          o = (0, a.Z)(n, 2),
          i = o[0],
          u = o[1];
        return (
          T(
            function () {
              u($(e));
            },
            [e.type, e.as]
          ),
          T(
            function () {
              i ||
                (t.current &&
                  t.current instanceof HTMLButtonElement &&
                  !t.current.hasAttribute('type') &&
                  u('button'));
            },
            [i, t]
          ),
          i
        );
      }
      function Y(e) {
        return A.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty('current') &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
      var J,
        ee =
          null != (V = r.startTransition)
            ? V
            : function (e) {
                e();
              },
        te = ['defaultOpen'],
        ne = ['id'],
        re = ['id'];
      function oe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? oe(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : oe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ie = (function (e) {
          return (e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e;
        })(ie || {}),
        ue = (function (e) {
          return (
            (e[(e.ToggleDisclosure = 0)] = 'ToggleDisclosure'),
            (e[(e.CloseDisclosure = 1)] = 'CloseDisclosure'),
            (e[(e.SetButtonId = 2)] = 'SetButtonId'),
            (e[(e.SetPanelId = 3)] = 'SetPanelId'),
            (e[(e.LinkPanel = 4)] = 'LinkPanel'),
            (e[(e.UnlinkPanel = 5)] = 'UnlinkPanel'),
            e
          );
        })(ue || {}),
        ce =
          ((J = {}),
          (0, u.Z)(J, 0, function (e) {
            var t;
            return ae(
              ae({}, e),
              {},
              {
                disclosureState: c(
                  e.disclosureState,
                  ((t = {}), (0, u.Z)(t, 0, 1), (0, u.Z)(t, 1, 0), t)
                ),
              }
            );
          }),
          (0, u.Z)(J, 1, function (e) {
            return 1 === e.disclosureState
              ? e
              : ae(ae({}, e), {}, { disclosureState: 1 });
          }),
          (0, u.Z)(J, 4, function (e) {
            return !0 === e.linkedPanel
              ? e
              : ae(ae({}, e), {}, { linkedPanel: !0 });
          }),
          (0, u.Z)(J, 5, function (e) {
            return !1 === e.linkedPanel
              ? e
              : ae(ae({}, e), {}, { linkedPanel: !1 });
          }),
          (0, u.Z)(J, 2, function (e, t) {
            return e.buttonId === t.buttonId
              ? e
              : ae(ae({}, e), {}, { buttonId: t.buttonId });
          }),
          (0, u.Z)(J, 3, function (e, t) {
            return e.panelId === t.panelId
              ? e
              : ae(ae({}, e), {}, { panelId: t.panelId });
          }),
          J),
        le = (0, r.createContext)(null);
      function se(e) {
        var t = (0, r.useContext)(le);
        if (null === t) {
          var n = new Error(
            '<'.concat(e, ' /> is missing a parent <Disclosure /> component.')
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(n, se), n);
        }
        return t;
      }
      le.displayName = 'DisclosureContext';
      var fe = (0, r.createContext)(null);
      function de(e) {
        var t = (0, r.useContext)(fe);
        if (null === t) {
          var n = new Error(
            '<'.concat(e, ' /> is missing a parent <Disclosure /> component.')
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(n, de), n);
        }
        return t;
      }
      fe.displayName = 'DisclosureAPIContext';
      var me = (0, r.createContext)(null);
      function ve(e, t) {
        return c(t.type, ce, e, t);
      }
      me.displayName = 'DisclosurePanelContext';
      var pe = r.Fragment;
      var ye = g.RenderStrategy | g.Static;
      var he = S(function (e, t) {
          var n,
            o = e.defaultOpen,
            l = void 0 !== o && o,
            s = (0, i.Z)(e, te),
            f = (0, r.useRef)(null),
            d = B(
              t,
              _(function (e) {
                f.current = e;
              }, void 0 === e.as || e.as === r.Fragment)
            ),
            m = (0, r.useRef)(null),
            v = (0, r.useRef)(null),
            p = (0, r.useReducer)(ve, {
              disclosureState: l ? 0 : 1,
              linkedPanel: !1,
              buttonRef: v,
              panelRef: m,
              buttonId: null,
              panelId: null,
            }),
            y = (0, a.Z)(p, 2),
            h = y[0],
            g = h.disclosureState,
            b = h.buttonId,
            w = y[1],
            x = R(function (e) {
              w({ type: 1 });
              var t = Y(f);
              if (t && b) {
                var n = e
                  ? e instanceof HTMLElement
                    ? e
                    : e.current instanceof HTMLElement
                    ? e.current
                    : t.getElementById(b)
                  : t.getElementById(b);
                null == n || n.focus();
              }
            }),
            S = (0, r.useMemo)(
              function () {
                return { close: x };
              },
              [x]
            ),
            O = (0, r.useMemo)(
              function () {
                return { open: 0 === g, close: x };
              },
              [g, x]
            ),
            k = { ref: d };
          return r.createElement(
            le.Provider,
            { value: p },
            r.createElement(
              fe.Provider,
              { value: S },
              r.createElement(
                Q,
                {
                  value: c(
                    g,
                    ((n = {}),
                    (0, u.Z)(n, 0, G.Open),
                    (0, u.Z)(n, 1, G.Closed),
                    n)
                  ),
                },
                E({
                  ourProps: k,
                  theirProps: s,
                  slot: O,
                  defaultTag: pe,
                  name: 'Disclosure',
                })
              )
            )
          );
        }),
        ge = S(function (e, t) {
          var n = H(),
            o = e.id,
            u = void 0 === o ? 'headlessui-disclosure-button-'.concat(n) : o,
            c = (0, i.Z)(e, ne),
            l = se('Disclosure.Button'),
            s = (0, a.Z)(l, 2),
            f = s[0],
            d = s[1],
            m = (0, r.useContext)(me),
            v = null !== m && m === f.panelId,
            p = (0, r.useRef)(null),
            y = B(p, t, v ? null : f.buttonRef);
          (0, r.useEffect)(
            function () {
              if (!v)
                return (
                  d({ type: 2, buttonId: u }),
                  function () {
                    d({ type: 2, buttonId: null });
                  }
                );
            },
            [u, d, v]
          );
          var h = R(function (e) {
              var t;
              if (v) {
                if (1 === f.disclosureState) return;
                switch (e.key) {
                  case z.Space:
                  case z.Enter:
                    e.preventDefault(),
                      e.stopPropagation(),
                      d({ type: 0 }),
                      null == (t = f.buttonRef.current) || t.focus();
                }
              } else
                switch (e.key) {
                  case z.Space:
                  case z.Enter:
                    e.preventDefault(), e.stopPropagation(), d({ type: 0 });
                }
            }),
            g = R(function (e) {
              if (e.key === z.Space) e.preventDefault();
            }),
            b = R(function (t) {
              var n;
              K(t.currentTarget) ||
                e.disabled ||
                (v
                  ? (d({ type: 0 }),
                    null == (n = f.buttonRef.current) || n.focus())
                  : d({ type: 0 }));
            }),
            w = (0, r.useMemo)(
              function () {
                return { open: 0 === f.disclosureState };
              },
              [f]
            ),
            x = X(e, p);
          return E({
            ourProps: v
              ? { ref: y, type: x, onKeyDown: h, onClick: b }
              : {
                  ref: y,
                  id: u,
                  type: x,
                  'aria-expanded': 0 === f.disclosureState,
                  'aria-controls': f.linkedPanel ? f.panelId : void 0,
                  onKeyDown: h,
                  onKeyUp: g,
                  onClick: b,
                },
            theirProps: c,
            slot: w,
            defaultTag: 'button',
            name: 'Disclosure.Button',
          });
        }),
        be = S(function (e, t) {
          var n = H(),
            o = e.id,
            u = void 0 === o ? 'headlessui-disclosure-panel-'.concat(n) : o,
            c = (0, i.Z)(e, re),
            l = se('Disclosure.Panel'),
            s = (0, a.Z)(l, 2),
            f = s[0],
            d = s[1],
            m = de('Disclosure.Panel').close,
            v = B(t, f.panelRef, function (e) {
              ee(function () {
                return d({ type: e ? 4 : 5 });
              });
            });
          (0, r.useEffect)(
            function () {
              return (
                d({ type: 3, panelId: u }),
                function () {
                  d({ type: 3, panelId: null });
                }
              );
            },
            [u, d]
          );
          var p = q(),
            y = null !== p ? (p & G.Open) === G.Open : 0 === f.disclosureState,
            h = (0, r.useMemo)(
              function () {
                return { open: 0 === f.disclosureState, close: m };
              },
              [f, m]
            ),
            g = { ref: v, id: u };
          return r.createElement(
            me.Provider,
            { value: f.panelId },
            E({
              ourProps: g,
              theirProps: c,
              slot: h,
              defaultTag: 'div',
              features: ye,
              visible: y,
              name: 'Disclosure.Panel',
            })
          );
        }),
        Ee = Object.assign(he, { Button: ge, Panel: be }),
        we = n(53994);
      function xe(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return Se(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Se(e, t);
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var a,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function Se(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Oe() {
        var e = [],
          t = {
            addEventListener: function (e, n, r, o) {
              return (
                e.addEventListener(n, r, o),
                t.add(function () {
                  return e.removeEventListener(n, r, o);
                })
              );
            },
            requestAnimationFrame: (function (e) {
              function t() {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function () {
              var e = requestAnimationFrame.apply(void 0, arguments);
              return t.add(function () {
                return cancelAnimationFrame(e);
              });
            }),
            nextFrame: function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              return t.requestAnimationFrame(function () {
                return t.requestAnimationFrame.apply(t, n);
              });
            },
            setTimeout: (function (e) {
              function t() {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function () {
              var e = setTimeout.apply(void 0, arguments);
              return t.add(function () {
                return clearTimeout(e);
              });
            }),
            microTask: function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              var o = { current: !0 };
              return (
                (function (e) {
                  'function' == typeof queueMicrotask
                    ? queueMicrotask(e)
                    : Promise.resolve()
                        .then(e)
                        .catch(function (e) {
                          return setTimeout(function () {
                            throw e;
                          });
                        });
                })(function () {
                  o.current && n[0]();
                }),
                t.add(function () {
                  o.current = !1;
                })
              );
            },
            style: function (e, t, n) {
              var r = e.style.getPropertyValue(t);
              return (
                Object.assign(e.style, (0, u.Z)({}, t, n)),
                this.add(function () {
                  Object.assign(e.style, (0, u.Z)({}, t, r));
                })
              );
            },
            group: function (e) {
              var t = Oe();
              return (
                e(t),
                this.add(function () {
                  return t.dispose();
                })
              );
            },
            add: function (t) {
              return (
                e.push(t),
                function () {
                  var n = e.indexOf(t);
                  if (n >= 0) {
                    var r,
                      o = xe(e.splice(n, 1));
                    try {
                      for (o.s(); !(r = o.n()).done; ) {
                        (0, r.value)();
                      }
                    } catch (a) {
                      o.e(a);
                    } finally {
                      o.f();
                    }
                  }
                }
              );
            },
            dispose: function () {
              var t,
                n = xe(e.splice(0));
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  (0, t.value)();
                }
              } catch (r) {
                n.e(r);
              } finally {
                n.f();
              }
            },
          };
        return t;
      }
      function ke() {
        var e = (0, r.useState)(Oe),
          t = (0, a.Z)(e, 1)[0];
        return (
          (0, r.useEffect)(
            function () {
              return function () {
                return t.dispose();
              };
            },
            [t]
          ),
          t
        );
      }
      var Ie = (function (e) {
        return (
          (e[(e.First = 0)] = 'First'),
          (e[(e.Previous = 1)] = 'Previous'),
          (e[(e.Next = 2)] = 'Next'),
          (e[(e.Last = 3)] = 'Last'),
          (e[(e.Specific = 4)] = 'Specific'),
          (e[(e.Nothing = 5)] = 'Nothing'),
          e
        );
      })(Ie || {});
      function Ne(e, t) {
        var n = t.resolveItems();
        if (n.length <= 0) return null;
        var r = t.resolveActiveIndex(),
          o = null != r ? r : -1,
          a = (function () {
            switch (e.focus) {
              case 0:
                return n.findIndex(function (e) {
                  return !t.resolveDisabled(e);
                });
              case 1:
                var r = n
                  .slice()
                  .reverse()
                  .findIndex(function (e, n, r) {
                    return (
                      !(-1 !== o && r.length - n - 1 >= o) &&
                      !t.resolveDisabled(e)
                    );
                  });
                return -1 === r ? r : n.length - 1 - r;
              case 2:
                return n.findIndex(function (e, n) {
                  return !(n <= o) && !t.resolveDisabled(e);
                });
              case 3:
                var a = n
                  .slice()
                  .reverse()
                  .findIndex(function (e) {
                    return !t.resolveDisabled(e);
                  });
                return -1 === a ? a : n.length - 1 - a;
              case 4:
                return n.findIndex(function (n) {
                  return t.resolveId(n) === e.id;
                });
              case 5:
                return null;
              default:
                !(function (e) {
                  throw new Error('Unexpected object: ' + e);
                })(e);
            }
          })();
        return -1 === a ? r : a;
      }
      var Pe = [
          '[contentEditable=true]',
          '[tabindex]',
          'a[href]',
          'area[href]',
          'button:not([disabled])',
          'iframe',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
        ]
          .map(function (e) {
            return ''.concat(e, ":not([tabindex='-1'])");
          })
          .join(','),
        Ze = (function (e) {
          return (
            (e[(e.First = 1)] = 'First'),
            (e[(e.Previous = 2)] = 'Previous'),
            (e[(e.Next = 4)] = 'Next'),
            (e[(e.Last = 8)] = 'Last'),
            (e[(e.WrapAround = 16)] = 'WrapAround'),
            (e[(e.NoScroll = 32)] = 'NoScroll'),
            e
          );
        })(Ze || {}),
        je = (function (e) {
          return (
            (e[(e.Error = 0)] = 'Error'),
            (e[(e.Overflow = 1)] = 'Overflow'),
            (e[(e.Success = 2)] = 'Success'),
            (e[(e.Underflow = 3)] = 'Underflow'),
            e
          );
        })(je || {}),
        Ae = (function (e) {
          return (
            (e[(e.Previous = -1)] = 'Previous'), (e[(e.Next = 1)] = 'Next'), e
          );
        })(Ae || {});
      function Te() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document.body;
        return null == e
          ? []
          : Array.from(e.querySelectorAll(Pe)).sort(function (e, t) {
              return Math.sign(
                (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (t.tabIndex || Number.MAX_SAFE_INTEGER)
              );
            });
      }
      var Ce = (function (e) {
        return (e[(e.Strict = 0)] = 'Strict'), (e[(e.Loose = 1)] = 'Loose'), e;
      })(Ce || {});
      function Re(e) {
        var t,
          n,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
          e !== (null == (n = Y(e)) ? void 0 : n.body) &&
          c(
            r,
            ((t = {}),
            (0, u.Z)(t, 0, function () {
              return e.matches(Pe);
            }),
            (0, u.Z)(t, 1, function () {
              for (var t = e; null !== t; ) {
                if (t.matches(Pe)) return !0;
                t = t.parentElement;
              }
              return !1;
            }),
            t)
          )
        );
      }
      function Fe(e) {
        var t = Y(e);
        Oe().nextFrame(function () {
          t &&
            !Re(t.activeElement, 0) &&
            (function (e) {
              null == e || e.focus({ preventScroll: !0 });
            })(e);
        });
      }
      var Me = (function (e) {
        return (
          (e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse'), e
        );
      })(Me || {});
      'undefined' != typeof window &&
        'undefined' != typeof document &&
        (document.addEventListener(
          'keydown',
          function (e) {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = '');
          },
          !0
        ),
        document.addEventListener(
          'click',
          function (e) {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = '');
          },
          !0
        ));
      var De = ['textarea', 'input'].join(',');
      function Le(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : function (e) {
                return e;
              };
        return e.slice().sort(function (e, n) {
          var r = t(e),
            o = t(n);
          if (null === r || null === o) return 0;
          var a = r.compareDocumentPosition(o);
          return a & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : a & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function _e(e, t) {
        return (function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = n.sorted,
            o = void 0 === r || r,
            a = n.relativeTo,
            i = void 0 === a ? null : a,
            u = n.skipElements,
            c = void 0 === u ? [] : u,
            l = Array.isArray(e)
              ? e.length > 0
                ? e[0].ownerDocument
                : document
              : e.ownerDocument,
            s = Array.isArray(e) ? (o ? Le(e) : e) : Te(e);
          c.length > 0 &&
            s.length > 1 &&
            (s = s.filter(function (e) {
              return !c.includes(e);
            })),
            (i = null != i ? i : l.activeElement);
          var f,
            d = (function () {
              if (5 & t) return 1;
              if (10 & t) return -1;
              throw new Error(
                'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
              );
            })(),
            m = (function () {
              if (1 & t) return 0;
              if (2 & t) return Math.max(0, s.indexOf(i)) - 1;
              if (4 & t) return Math.max(0, s.indexOf(i)) + 1;
              if (8 & t) return s.length - 1;
              throw new Error(
                'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
              );
            })(),
            v = 32 & t ? { preventScroll: !0 } : {},
            p = 0,
            y = s.length;
          do {
            if (p >= y || p + y <= 0) return 0;
            var h = m + p;
            if (16 & t) h = (h + y) % y;
            else {
              if (h < 0) return 3;
              if (h >= y) return 1;
            }
            null == (f = s[h]) || f.focus(v), (p += d);
          } while (f !== l.activeElement);
          return (
            6 & t &&
              (function (e) {
                var t, n;
                return (
                  null !=
                    (n =
                      null == (t = null == e ? void 0 : e.matches)
                        ? void 0
                        : t.call(e, De)) && n
                );
              })(f) &&
              f.select(),
            2
          );
        })(Te(), t, { relativeTo: e });
      }
      function Be(e, t, n) {
        var o = C(t);
        (0, r.useEffect)(
          function () {
            function t(e) {
              o.current(e);
            }
            return (
              document.addEventListener(e, t, n),
              function () {
                return document.removeEventListener(e, t, n);
              }
            );
          },
          [e, n]
        );
      }
      function Ue(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return He(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return He(e, t);
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var a,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function He(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ze(e, t) {
        var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          o = (0, r.useRef)(!1);
        function a(n, r) {
          if (o.current && !n.defaultPrevented) {
            var a = r(n);
            if (null !== a && a.getRootNode().contains(a) && a.isConnected) {
              var i,
                u = (function e(t) {
                  return 'function' == typeof t
                    ? e(t())
                    : Array.isArray(t) || t instanceof Set
                    ? t
                    : [t];
                })(e),
                c = Ue(u);
              try {
                for (c.s(); !(i = c.n()).done; ) {
                  var l = i.value;
                  if (null !== l) {
                    var s = l instanceof HTMLElement ? l : l.current;
                    if (
                      (null != s && s.contains(a)) ||
                      (n.composed && n.composedPath().includes(s))
                    )
                      return;
                  }
                }
              } catch (f) {
                c.e(f);
              } finally {
                c.f();
              }
              return (
                !Re(a, Ce.Loose) && -1 !== a.tabIndex && n.preventDefault(),
                t(n, a)
              );
            }
          }
        }
        (0, r.useEffect)(
          function () {
            requestAnimationFrame(function () {
              o.current = n;
            });
          },
          [n]
        );
        var i = (0, r.useRef)(null);
        Be(
          'pointerdown',
          function (e) {
            var t, n;
            o.current &&
              (i.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target);
          },
          !0
        ),
          Be(
            'mousedown',
            function (e) {
              var t, n;
              o.current &&
                (i.current =
                  (null ==
                  (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                    ? void 0
                    : n[0]) || e.target);
            },
            !0
          ),
          Be(
            'click',
            function (e) {
              i.current &&
                (a(e, function () {
                  return i.current;
                }),
                (i.current = null));
            },
            !0
          ),
          Be(
            'touchend',
            function (e) {
              return a(e, function () {
                return e.target instanceof HTMLElement ? e.target : null;
              });
            },
            !0
          ),
          (function (e, t, n) {
            var o = C(t);
            (0, r.useEffect)(
              function () {
                function t(e) {
                  o.current(e);
                }
                return (
                  window.addEventListener(e, t, n),
                  function () {
                    return window.removeEventListener(e, t, n);
                  }
                );
              },
              [e, n]
            );
          })(
            'blur',
            function (e) {
              return a(e, function () {
                return window.document.activeElement instanceof
                  HTMLIFrameElement
                  ? window.document.activeElement
                  : null;
              });
            },
            !0
          );
      }
      function Ke(e) {
        return [e.screenX, e.screenY];
      }
      function We(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return Ve(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ve(e, t);
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var a,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function Ve(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Ge =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function qe(e) {
        var t,
          n,
          r = null != (t = e.innerText) ? t : '',
          o = e.cloneNode(!0);
        if (!(o instanceof HTMLElement)) return r;
        var a,
          i = !1,
          u = We(o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'));
        try {
          for (u.s(); !(a = u.n()).done; ) {
            a.value.remove(), (i = !0);
          }
        } catch (l) {
          u.e(l);
        } finally {
          u.f();
        }
        var c = i ? (null != (n = o.innerText) ? n : '') : r;
        return Ge.test(c) && (c = c.replace(Ge, '')), c;
      }
      function Qe(e) {
        var t = (0, r.useRef)(''),
          n = (0, r.useRef)('');
        return R(function () {
          var r = e.current;
          if (!r) return '';
          var o = r.innerText;
          if (t.current === o) return n.current;
          var a = (function (e) {
            var t = e.getAttribute('aria-label');
            if ('string' == typeof t) return t.trim();
            var n = e.getAttribute('aria-labelledby');
            if (n) {
              var r = n
                .split(' ')
                .map(function (e) {
                  var t = document.getElementById(e);
                  if (t) {
                    var n = t.getAttribute('aria-label');
                    return 'string' == typeof n ? n.trim() : qe(t).trim();
                  }
                  return null;
                })
                .filter(Boolean);
              if (r.length > 0) return r.join(', ');
            }
            return qe(e).trim();
          })(r)
            .trim()
            .toLowerCase();
          return (t.current = o), (n.current = a), a;
        });
      }
      var $e,
        Xe = ['__demoMode'],
        Ye = ['id'],
        Je = ['id'],
        et = ['id', 'disabled'];
      function tt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tt(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : tt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var rt = (function (e) {
          return (e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e;
        })(rt || {}),
        ot = (function (e) {
          return (
            (e[(e.Pointer = 0)] = 'Pointer'), (e[(e.Other = 1)] = 'Other'), e
          );
        })(ot || {}),
        at = (function (e) {
          return (
            (e[(e.OpenMenu = 0)] = 'OpenMenu'),
            (e[(e.CloseMenu = 1)] = 'CloseMenu'),
            (e[(e.GoToItem = 2)] = 'GoToItem'),
            (e[(e.Search = 3)] = 'Search'),
            (e[(e.ClearSearch = 4)] = 'ClearSearch'),
            (e[(e.RegisterItem = 5)] = 'RegisterItem'),
            (e[(e.UnregisterItem = 6)] = 'UnregisterItem'),
            e
          );
        })(at || {});
      function it(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function (e) {
                  return e;
                },
          n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
          r = Le(t(e.items.slice()), function (e) {
            return e.dataRef.current.domRef.current;
          }),
          o = n ? r.indexOf(n) : null;
        return -1 === o && (o = null), { items: r, activeItemIndex: o };
      }
      var ut =
          (($e = {}),
          (0, u.Z)($e, 1, function (e) {
            return 1 === e.menuState
              ? e
              : nt(nt({}, e), {}, { activeItemIndex: null, menuState: 1 });
          }),
          (0, u.Z)($e, 0, function (e) {
            return 0 === e.menuState
              ? e
              : nt(nt({}, e), {}, { __demoMode: !1, menuState: 0 });
          }),
          (0, u.Z)($e, 2, function (e, t) {
            var n,
              r = it(e),
              o = Ne(t, {
                resolveItems: function () {
                  return r.items;
                },
                resolveActiveIndex: function () {
                  return r.activeItemIndex;
                },
                resolveId: function (e) {
                  return e.id;
                },
                resolveDisabled: function (e) {
                  return e.dataRef.current.disabled;
                },
              });
            return nt(
              nt(nt({}, e), r),
              {},
              {
                searchQuery: '',
                activeItemIndex: o,
                activationTrigger: null != (n = t.trigger) ? n : 1,
              }
            );
          }),
          (0, u.Z)($e, 3, function (e, t) {
            var n = '' !== e.searchQuery ? 0 : 1,
              r = e.searchQuery + t.value.toLowerCase(),
              o = (
                null !== e.activeItemIndex
                  ? e.items
                      .slice(e.activeItemIndex + n)
                      .concat(e.items.slice(0, e.activeItemIndex + n))
                  : e.items
              ).find(function (e) {
                var t;
                return (
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r)) && !e.dataRef.current.disabled
                );
              }),
              a = o ? e.items.indexOf(o) : -1;
            return -1 === a || a === e.activeItemIndex
              ? nt(nt({}, e), {}, { searchQuery: r })
              : nt(
                  nt({}, e),
                  {},
                  { searchQuery: r, activeItemIndex: a, activationTrigger: 1 }
                );
          }),
          (0, u.Z)($e, 4, function (e) {
            return '' === e.searchQuery
              ? e
              : nt(
                  nt({}, e),
                  {},
                  { searchQuery: '', searchActiveItemIndex: null }
                );
          }),
          (0, u.Z)($e, 5, function (e, t) {
            var n = it(e, function (e) {
              return [].concat((0, we.Z)(e), [
                { id: t.id, dataRef: t.dataRef },
              ]);
            });
            return nt(nt({}, e), n);
          }),
          (0, u.Z)($e, 6, function (e, t) {
            var n = it(e, function (e) {
              var n = e.findIndex(function (e) {
                return e.id === t.id;
              });
              return -1 !== n && e.splice(n, 1), e;
            });
            return nt(nt(nt({}, e), n), {}, { activationTrigger: 1 });
          }),
          $e),
        ct = (0, r.createContext)(null);
      function lt(e) {
        var t = (0, r.useContext)(ct);
        if (null === t) {
          var n = new Error(
            '<'.concat(e, ' /> is missing a parent <Menu /> component.')
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(n, lt), n);
        }
        return t;
      }
      function st(e, t) {
        return c(t.type, ut, e, t);
      }
      ct.displayName = 'MenuContext';
      var ft = r.Fragment;
      var dt = g.RenderStrategy | g.Static;
      var mt = r.Fragment;
      var vt = S(function (e, t) {
          var n,
            o = e.__demoMode,
            l = void 0 !== o && o,
            s = (0, i.Z)(e, Xe),
            f = (0, r.useReducer)(st, {
              __demoMode: l,
              menuState: l ? 0 : 1,
              buttonRef: (0, r.createRef)(),
              itemsRef: (0, r.createRef)(),
              items: [],
              searchQuery: '',
              activeItemIndex: null,
              activationTrigger: 1,
            }),
            d = (0, a.Z)(f, 2),
            m = d[0],
            v = m.menuState,
            p = m.itemsRef,
            y = m.buttonRef,
            h = d[1],
            g = B(t);
          ze(
            [y, p],
            function (e, t) {
              var n;
              h({ type: 1 }),
                Re(t, Ce.Loose) ||
                  (e.preventDefault(), null == (n = y.current) || n.focus());
            },
            0 === v
          );
          var b = R(function () {
              h({ type: 1 });
            }),
            w = (0, r.useMemo)(
              function () {
                return { open: 0 === v, close: b };
              },
              [v, b]
            ),
            x = { ref: g };
          return r.createElement(
            ct.Provider,
            { value: f },
            r.createElement(
              Q,
              {
                value: c(
                  v,
                  ((n = {}),
                  (0, u.Z)(n, 0, G.Open),
                  (0, u.Z)(n, 1, G.Closed),
                  n)
                ),
              },
              E({
                ourProps: x,
                theirProps: s,
                slot: w,
                defaultTag: ft,
                name: 'Menu',
              })
            )
          );
        }),
        pt = S(function (e, t) {
          var n,
            o = H(),
            u = e.id,
            c = void 0 === u ? 'headlessui-menu-button-'.concat(o) : u,
            l = (0, i.Z)(e, Ye),
            s = lt('Menu.Button'),
            f = (0, a.Z)(s, 2),
            d = f[0],
            m = f[1],
            v = B(d.buttonRef, t),
            p = ke(),
            y = R(function (e) {
              switch (e.key) {
                case z.Space:
                case z.Enter:
                case z.ArrowDown:
                  e.preventDefault(),
                    e.stopPropagation(),
                    m({ type: 0 }),
                    p.nextFrame(function () {
                      return m({ type: 2, focus: Ie.First });
                    });
                  break;
                case z.ArrowUp:
                  e.preventDefault(),
                    e.stopPropagation(),
                    m({ type: 0 }),
                    p.nextFrame(function () {
                      return m({ type: 2, focus: Ie.Last });
                    });
              }
            }),
            h = R(function (e) {
              if (e.key === z.Space) e.preventDefault();
            }),
            g = R(function (t) {
              if (K(t.currentTarget)) return t.preventDefault();
              e.disabled ||
                (0 === d.menuState
                  ? (m({ type: 1 }),
                    p.nextFrame(function () {
                      var e;
                      return null == (e = d.buttonRef.current)
                        ? void 0
                        : e.focus({ preventScroll: !0 });
                    }))
                  : (t.preventDefault(), m({ type: 0 })));
            }),
            b = (0, r.useMemo)(
              function () {
                return { open: 0 === d.menuState };
              },
              [d]
            );
          return E({
            ourProps: {
              ref: v,
              id: c,
              type: X(e, d.buttonRef),
              'aria-haspopup': 'menu',
              'aria-controls': null == (n = d.itemsRef.current) ? void 0 : n.id,
              'aria-expanded': 0 === d.menuState,
              onKeyDown: y,
              onKeyUp: h,
              onClick: g,
            },
            theirProps: l,
            slot: b,
            defaultTag: 'button',
            name: 'Menu.Button',
          });
        }),
        yt = S(function (e, t) {
          var n,
            o,
            u = H(),
            c = e.id,
            l = void 0 === c ? 'headlessui-menu-items-'.concat(u) : c,
            s = (0, i.Z)(e, Je),
            f = lt('Menu.Items'),
            d = (0, a.Z)(f, 2),
            m = d[0],
            v = d[1],
            p = B(m.itemsRef, t),
            y = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return (0, r.useMemo)(function () {
                return Y.apply(void 0, t);
              }, [].concat(t));
            })(m.itemsRef),
            h = ke(),
            g = q(),
            b = null !== g ? (g & G.Open) === G.Open : 0 === m.menuState;
          (0, r.useEffect)(
            function () {
              var e = m.itemsRef.current;
              e &&
                0 === m.menuState &&
                e !== (null == y ? void 0 : y.activeElement) &&
                e.focus({ preventScroll: !0 });
            },
            [m.menuState, m.itemsRef, y]
          ),
            (function (e) {
              var t = e.container,
                n = e.accept,
                o = e.walk,
                a = e.enabled,
                i = void 0 === a || a,
                u = (0, r.useRef)(n),
                c = (0, r.useRef)(o);
              (0, r.useEffect)(
                function () {
                  (u.current = n), (c.current = o);
                },
                [n, o]
              ),
                T(
                  function () {
                    if (t && i) {
                      var e = Y(t);
                      if (e)
                        for (
                          var n = u.current,
                            r = c.current,
                            o = Object.assign(
                              function (e) {
                                return n(e);
                              },
                              { acceptNode: n }
                            ),
                            a = e.createTreeWalker(
                              t,
                              NodeFilter.SHOW_ELEMENT,
                              o,
                              !1
                            );
                          a.nextNode();

                        )
                          r(a.currentNode);
                    }
                  },
                  [t, i, u, c]
                );
            })({
              container: m.itemsRef.current,
              enabled: 0 === m.menuState,
              accept: function (e) {
                return 'menuitem' === e.getAttribute('role')
                  ? NodeFilter.FILTER_REJECT
                  : e.hasAttribute('role')
                  ? NodeFilter.FILTER_SKIP
                  : NodeFilter.FILTER_ACCEPT;
              },
              walk: function (e) {
                e.setAttribute('role', 'none');
              },
            });
          var w = R(function (e) {
              var t, n;
              switch ((h.dispose(), e.key)) {
                case z.Space:
                  if ('' !== m.searchQuery)
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      v({ type: 3, value: e.key })
                    );
                case z.Enter:
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    v({ type: 1 }),
                    null !== m.activeItemIndex)
                  )
                    null ==
                      (n =
                        null == (t = m.items[m.activeItemIndex].dataRef.current)
                          ? void 0
                          : t.domRef.current) || n.click();
                  Fe(m.buttonRef.current);
                  break;
                case z.ArrowDown:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    v({ type: 2, focus: Ie.Next })
                  );
                case z.ArrowUp:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    v({ type: 2, focus: Ie.Previous })
                  );
                case z.Home:
                case z.PageUp:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    v({ type: 2, focus: Ie.First })
                  );
                case z.End:
                case z.PageDown:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    v({ type: 2, focus: Ie.Last })
                  );
                case z.Escape:
                  e.preventDefault(),
                    e.stopPropagation(),
                    v({ type: 1 }),
                    Oe().nextFrame(function () {
                      var e;
                      return null == (e = m.buttonRef.current)
                        ? void 0
                        : e.focus({ preventScroll: !0 });
                    });
                  break;
                case z.Tab:
                  e.preventDefault(),
                    e.stopPropagation(),
                    v({ type: 1 }),
                    Oe().nextFrame(function () {
                      _e(
                        m.buttonRef.current,
                        e.shiftKey ? Ze.Previous : Ze.Next
                      );
                    });
                  break;
                default:
                  1 === e.key.length &&
                    (v({ type: 3, value: e.key }),
                    h.setTimeout(function () {
                      return v({ type: 4 });
                    }, 350));
              }
            }),
            x = R(function (e) {
              if (e.key === z.Space) e.preventDefault();
            }),
            S = (0, r.useMemo)(
              function () {
                return { open: 0 === m.menuState };
              },
              [m]
            );
          return E({
            ourProps: {
              'aria-activedescendant':
                null === m.activeItemIndex ||
                null == (n = m.items[m.activeItemIndex])
                  ? void 0
                  : n.id,
              'aria-labelledby':
                null == (o = m.buttonRef.current) ? void 0 : o.id,
              id: l,
              onKeyDown: w,
              onKeyUp: x,
              role: 'menu',
              tabIndex: 0,
              ref: p,
            },
            theirProps: s,
            slot: S,
            defaultTag: 'div',
            features: dt,
            visible: b,
            name: 'Menu.Items',
          });
        }),
        ht = S(function (e, t) {
          var n = H(),
            o = e.id,
            u = void 0 === o ? 'headlessui-menu-item-'.concat(n) : o,
            c = e.disabled,
            l = void 0 !== c && c,
            s = (0, i.Z)(e, et),
            f = lt('Menu.Item'),
            d = (0, a.Z)(f, 2),
            m = d[0],
            v = d[1],
            p =
              null !== m.activeItemIndex && m.items[m.activeItemIndex].id === u,
            y = (0, r.useRef)(null),
            h = B(t, y);
          T(
            function () {
              if (
                !m.__demoMode &&
                0 === m.menuState &&
                p &&
                0 !== m.activationTrigger
              ) {
                var e = Oe();
                return (
                  e.requestAnimationFrame(function () {
                    var e, t;
                    null ==
                      (t =
                        null == (e = y.current) ? void 0 : e.scrollIntoView) ||
                      t.call(e, { block: 'nearest' });
                  }),
                  e.dispose
                );
              }
            },
            [
              m.__demoMode,
              y,
              p,
              m.menuState,
              m.activationTrigger,
              m.activeItemIndex,
            ]
          );
          var g = Qe(y),
            b = (0, r.useRef)({
              disabled: l,
              domRef: y,
              get textValue() {
                return g();
              },
            });
          T(
            function () {
              b.current.disabled = l;
            },
            [b, l]
          ),
            T(
              function () {
                return (
                  v({ type: 5, id: u, dataRef: b }),
                  function () {
                    return v({ type: 6, id: u });
                  }
                );
              },
              [b, u]
            );
          var w = R(function () {
              v({ type: 1 });
            }),
            x = R(function (e) {
              if (l) return e.preventDefault();
              v({ type: 1 }), Fe(m.buttonRef.current);
            }),
            S = R(function () {
              if (l) return v({ type: 2, focus: Ie.Nothing });
              v({ type: 2, focus: Ie.Specific, id: u });
            }),
            O = (function () {
              var e = (0, r.useRef)([-1, -1]);
              return {
                wasMoved: function (t) {
                  var n = Ke(t);
                  return (
                    (e.current[0] !== n[0] || e.current[1] !== n[1]) &&
                    ((e.current = n), !0)
                  );
                },
                update: function (t) {
                  e.current = Ke(t);
                },
              };
            })(),
            k = R(function (e) {
              return O.update(e);
            }),
            I = R(function (e) {
              O.wasMoved(e) &&
                (l ||
                  p ||
                  v({ type: 2, focus: Ie.Specific, id: u, trigger: 0 }));
            }),
            N = R(function (e) {
              O.wasMoved(e) && (l || (p && v({ type: 2, focus: Ie.Nothing })));
            }),
            P = (0, r.useMemo)(
              function () {
                return { active: p, disabled: l, close: w };
              },
              [p, l, w]
            );
          return E({
            ourProps: {
              id: u,
              ref: h,
              role: 'menuitem',
              tabIndex: !0 === l ? void 0 : -1,
              'aria-disabled': !0 === l || void 0,
              disabled: void 0,
              onClick: x,
              onFocus: S,
              onPointerEnter: k,
              onMouseEnter: k,
              onPointerMove: I,
              onMouseMove: I,
              onPointerLeave: N,
              onMouseLeave: N,
            },
            theirProps: s,
            slot: P,
            defaultTag: mt,
            name: 'Menu.Item',
          });
        }),
        gt = Object.assign(vt, { Button: pt, Items: yt, Item: ht });
      function bt() {
        var e = (0, r.useRef)(!1);
        return (
          T(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          e
        );
      }
      function Et(e) {
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
          o < n;
          o++
        )
          r[o - 1] = arguments[o];
        e && r.length > 0 && (t = e.classList).add.apply(t, r);
      }
      function wt(e) {
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
          o < n;
          o++
        )
          r[o - 1] = arguments[o];
        e && r.length > 0 && (t = e.classList).remove.apply(t, r);
      }
      function xt(e, t, n, r) {
        var o = n ? 'enter' : 'leave',
          i = Oe(),
          u =
            void 0 !== r
              ? (function (e) {
                  var t = { called: !1 };
                  return function () {
                    if (!t.called)
                      return (t.called = !0), e.apply(void 0, arguments);
                  };
                })(r)
              : function () {};
        'enter' === o && (e.removeAttribute('hidden'), (e.style.display = ''));
        var l = c(o, {
            enter: function () {
              return t.enter;
            },
            leave: function () {
              return t.leave;
            },
          }),
          s = c(o, {
            enter: function () {
              return t.enterTo;
            },
            leave: function () {
              return t.leaveTo;
            },
          }),
          f = c(o, {
            enter: function () {
              return t.enterFrom;
            },
            leave: function () {
              return t.leaveFrom;
            },
          });
        return (
          wt.apply(
            void 0,
            [e].concat(
              (0, we.Z)(t.enter),
              (0, we.Z)(t.enterTo),
              (0, we.Z)(t.enterFrom),
              (0, we.Z)(t.leave),
              (0, we.Z)(t.leaveFrom),
              (0, we.Z)(t.leaveTo),
              (0, we.Z)(t.entered)
            )
          ),
          Et.apply(void 0, [e].concat((0, we.Z)(l), (0, we.Z)(f))),
          i.nextFrame(function () {
            wt.apply(void 0, [e].concat((0, we.Z)(f))),
              Et.apply(void 0, [e].concat((0, we.Z)(s))),
              (function (e, t) {
                var n = Oe();
                if (!e) return n.dispose;
                var r = getComputedStyle(e),
                  o = [r.transitionDuration, r.transitionDelay].map(function (
                    e
                  ) {
                    var t = e
                        .split(',')
                        .filter(Boolean)
                        .map(function (e) {
                          return e.includes('ms')
                            ? parseFloat(e)
                            : 1e3 * parseFloat(e);
                        })
                        .sort(function (e, t) {
                          return t - e;
                        }),
                      n = (0, a.Z)(t, 1)[0];
                    return void 0 === n ? 0 : n;
                  }),
                  i = (0, a.Z)(o, 2),
                  u = i[0] + i[1];
                if (0 !== u) {
                  n.group(function (n) {
                    n.setTimeout(function () {
                      t(), n.dispose();
                    }, u),
                      n.addEventListener(e, 'transitionrun', function (e) {
                        e.target === e.currentTarget && n.dispose();
                      });
                  });
                  var c = n.addEventListener(e, 'transitionend', function (e) {
                    e.target === e.currentTarget && (t(), c());
                  });
                } else t();
                n.add(function () {
                  return t();
                }),
                  n.dispose;
              })(e, function () {
                return (
                  wt.apply(void 0, [e].concat((0, we.Z)(l))),
                  Et.apply(void 0, [e].concat((0, we.Z)(t.entered))),
                  u()
                );
              });
          }),
          i.dispose
        );
      }
      var St = [
          'beforeEnter',
          'afterEnter',
          'beforeLeave',
          'afterLeave',
          'enter',
          'enterFrom',
          'enterTo',
          'entered',
          'leave',
          'leaveFrom',
          'leaveTo',
        ],
        Ot = ['show', 'appear', 'unmount'];
      function kt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function It(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? kt(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : kt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Nt(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return Pt(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Pt(e, t);
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var a,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function Pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Zt() {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
        )
          .split(' ')
          .filter(function (e) {
            return e.trim().length > 1;
          });
      }
      var jt = (0, r.createContext)(null);
      jt.displayName = 'TransitionContext';
      var At = (function (e) {
        return (e.Visible = 'visible'), (e.Hidden = 'hidden'), e;
      })(At || {});
      var Tt = (0, r.createContext)(null);
      function Ct(e) {
        return 'children' in e
          ? Ct(e.children)
          : e.current
              .filter(function (e) {
                return null !== e.el.current;
              })
              .filter(function (e) {
                return 'visible' === e.state;
              }).length > 0;
      }
      function Rt(e, t) {
        var n = C(e),
          o = (0, r.useRef)([]),
          i = bt(),
          l = ke(),
          s = R(function (e) {
            var t,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : b.Hidden,
              a = o.current.findIndex(function (t) {
                return t.el === e;
              });
            -1 !== a &&
              (c(
                r,
                ((t = {}),
                (0, u.Z)(t, b.Unmount, function () {
                  o.current.splice(a, 1);
                }),
                (0, u.Z)(t, b.Hidden, function () {
                  o.current[a].state = 'hidden';
                }),
                t)
              ),
              l.microTask(function () {
                var e;
                !Ct(o) && i.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          f = R(function (e) {
            var t = o.current.find(function (t) {
              return t.el === e;
            });
            return (
              t
                ? 'visible' !== t.state && (t.state = 'visible')
                : o.current.push({ el: e, state: 'visible' }),
              function () {
                return s(e, b.Unmount);
              }
            );
          }),
          d = (0, r.useRef)([]),
          m = (0, r.useRef)(Promise.resolve()),
          v = (0, r.useRef)({ enter: [], leave: [], idle: [] }),
          p = R(function (e, n, r) {
            d.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter(function (t) {
                  return (0, a.Z)(t, 1)[0] !== e;
                })),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise(function (e) {
                    d.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise(function (e) {
                    Promise.all(
                      v.current[n].map(function (e) {
                        var t = (0, a.Z)(e, 2);
                        t[0];
                        return t[1];
                      })
                    ).then(function () {
                      return e();
                    });
                  }),
                ]),
              'enter' === n
                ? (m.current = m.current
                    .then(function () {
                      return null == t ? void 0 : t.wait.current;
                    })
                    .then(function () {
                      return r(n);
                    }))
                : r(n);
          }),
          y = R(function (e, t, n) {
            Promise.all(
              v.current[t].splice(0).map(function (e) {
                var t = (0, a.Z)(e, 2);
                t[0];
                return t[1];
              })
            )
              .then(function () {
                var e;
                null == (e = d.current.shift()) || e();
              })
              .then(function () {
                return n(t);
              });
          });
        return (0, r.useMemo)(
          function () {
            return {
              children: o,
              register: f,
              unregister: s,
              onStart: p,
              onStop: y,
              wait: m,
              chains: v,
            };
          },
          [f, s, o, p, y, v, m]
        );
      }
      function Ft() {}
      Tt.displayName = 'NestingContext';
      var Mt = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'];
      function Dt(e) {
        var t,
          n,
          r = {},
          o = Nt(Mt);
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var a = n.value;
            r[a] = null != (t = e[a]) ? t : Ft;
          }
        } catch (i) {
          o.e(i);
        } finally {
          o.f();
        }
        return r;
      }
      var Lt = g.RenderStrategy;
      var _t = S(function (e, t) {
          var n = e.show,
            o = e.appear,
            u = void 0 !== o && o,
            c = e.unmount,
            l = (0, i.Z)(e, Ot),
            s = (0, r.useRef)(null),
            f = B(s, t);
          U();
          var d = q();
          if (
            (void 0 === n && null !== d && (n = (d & G.Open) === G.Open),
            ![!0, !1].includes(n))
          )
            throw new Error(
              'A <Transition /> is used but it is missing a `show={true | false}` prop.'
            );
          var m = (0, r.useState)(n ? 'visible' : 'hidden'),
            v = (0, a.Z)(m, 2),
            p = v[0],
            y = v[1],
            h = Rt(function () {
              y('hidden');
            }),
            g = (0, r.useState)(!0),
            b = (0, a.Z)(g, 2),
            w = b[0],
            x = b[1],
            S = (0, r.useRef)([n]);
          T(
            function () {
              !1 !== w &&
                S.current[S.current.length - 1] !== n &&
                (S.current.push(n), x(!1));
            },
            [S, n]
          );
          var O = (0, r.useMemo)(
            function () {
              return { show: n, appear: u, initial: w };
            },
            [n, u, w]
          );
          (0, r.useEffect)(
            function () {
              if (n) y('visible');
              else if (Ct(h)) {
                var e = s.current;
                if (!e) return;
                var t = e.getBoundingClientRect();
                0 === t.x &&
                  0 === t.y &&
                  0 === t.width &&
                  0 === t.height &&
                  y('hidden');
              } else y('hidden');
            },
            [n, h]
          );
          var k = { unmount: c },
            I = R(function () {
              var t;
              w && x(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            N = R(function () {
              var t;
              w && x(!1), null == (t = e.beforeLeave) || t.call(e);
            });
          return r.createElement(
            Tt.Provider,
            { value: h },
            r.createElement(
              jt.Provider,
              { value: O },
              E({
                ourProps: It(
                  It({}, k),
                  {},
                  {
                    as: r.Fragment,
                    children: r.createElement(
                      Bt,
                      It(
                        It(It({ ref: f }, k), l),
                        {},
                        { beforeEnter: I, beforeLeave: N }
                      )
                    ),
                  }
                ),
                theirProps: {},
                defaultTag: r.Fragment,
                features: Lt,
                visible: 'visible' === p,
                name: 'Transition',
              })
            )
          );
        }),
        Bt = S(function (e, t) {
          var n,
            o = e.beforeEnter,
            s = e.afterEnter,
            f = e.beforeLeave,
            d = e.afterLeave,
            m = e.enter,
            v = e.enterFrom,
            p = e.enterTo,
            y = e.entered,
            h = e.leave,
            g = e.leaveFrom,
            w = e.leaveTo,
            x = (0, i.Z)(e, St),
            S = (0, r.useRef)(null),
            O = B(S, t),
            k = x.unmount ? b.Unmount : b.Hidden,
            I = (function () {
              var e = (0, r.useContext)(jt);
              if (null === e)
                throw new Error(
                  'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
                );
              return e;
            })(),
            N = I.show,
            P = I.appear,
            Z = I.initial,
            j = (0, r.useState)(N ? 'visible' : 'hidden'),
            A = (0, a.Z)(j, 2),
            F = A[0],
            M = A[1],
            D = (function () {
              var e = (0, r.useContext)(Tt);
              if (null === e)
                throw new Error(
                  'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
                );
              return e;
            })(),
            L = D.register,
            _ = D.unregister,
            H = (0, r.useRef)(null);
          (0, r.useEffect)(
            function () {
              return L(S);
            },
            [L, S]
          ),
            (0, r.useEffect)(
              function () {
                var e;
                if (k === b.Hidden && S.current)
                  return N && 'visible' !== F
                    ? void M('visible')
                    : c(
                        F,
                        ((e = {}),
                        (0, u.Z)(e, 'hidden', function () {
                          return _(S);
                        }),
                        (0, u.Z)(e, 'visible', function () {
                          return L(S);
                        }),
                        e)
                      );
              },
              [F, S, L, _, N, k]
            );
          var z = C({
              enter: Zt(m),
              enterFrom: Zt(v),
              enterTo: Zt(p),
              entered: Zt(y),
              leave: Zt(h),
              leaveFrom: Zt(g),
              leaveTo: Zt(w),
            }),
            K = (function (e) {
              var t = (0, r.useRef)(Dt(e));
              return (
                (0, r.useEffect)(
                  function () {
                    t.current = Dt(e);
                  },
                  [e]
                ),
                t
              );
            })({
              beforeEnter: o,
              afterEnter: s,
              beforeLeave: f,
              afterLeave: d,
            }),
            W = U();
          (0, r.useEffect)(
            function () {
              if (W && 'visible' === F && null === S.current)
                throw new Error(
                  'Did you forget to passthrough the `ref` to the actual DOM node?'
                );
            },
            [S, F, W]
          );
          var V = Z && !P,
            q = !W || V || H.current === N ? 'idle' : N ? 'enter' : 'leave',
            $ = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t = (0, r.useState)(e),
                n = (0, a.Z)(t, 2),
                o = n[0],
                i = n[1],
                u = bt(),
                c = (0, r.useCallback)(
                  function (e) {
                    u.current &&
                      i(function (t) {
                        return t | e;
                      });
                  },
                  [o, u]
                ),
                l = (0, r.useCallback)(
                  function (e) {
                    return Boolean(o & e);
                  },
                  [o]
                ),
                s = (0, r.useCallback)(
                  function (e) {
                    u.current &&
                      i(function (t) {
                        return t & ~e;
                      });
                  },
                  [i, u]
                ),
                f = (0, r.useCallback)(
                  function (e) {
                    u.current &&
                      i(function (t) {
                        return t ^ e;
                      });
                  },
                  [i]
                );
              return {
                flags: o,
                addFlag: c,
                hasFlag: l,
                removeFlag: s,
                toggleFlag: f,
              };
            })(0),
            X = R(function (e) {
              return c(e, {
                enter: function () {
                  $.addFlag(G.Opening), K.current.beforeEnter();
                },
                leave: function () {
                  $.addFlag(G.Closing), K.current.beforeLeave();
                },
                idle: function () {},
              });
            }),
            Y = R(function (e) {
              return c(e, {
                enter: function () {
                  $.removeFlag(G.Opening), K.current.afterEnter();
                },
                leave: function () {
                  $.removeFlag(G.Closing), K.current.afterLeave();
                },
                idle: function () {},
              });
            }),
            J = Rt(function () {
              M('hidden'), _(S);
            }, D);
          (function (e) {
            var t = e.container,
              n = e.direction,
              r = e.classes,
              o = e.onStart,
              a = e.onStop,
              i = bt(),
              u = ke(),
              c = C(n);
            T(
              function () {
                var e = Oe();
                u.add(e.dispose);
                var n = t.current;
                if (n && 'idle' !== c.current && i.current)
                  return (
                    e.dispose(),
                    o.current(c.current),
                    e.add(
                      xt(n, r.current, 'enter' === c.current, function () {
                        e.dispose(), a.current(c.current);
                      })
                    ),
                    e.dispose
                  );
              },
              [n]
            );
          })({
            container: S,
            classes: z,
            direction: q,
            onStart: C(function (e) {
              J.onStart(S, e, X);
            }),
            onStop: C(function (e) {
              J.onStop(S, e, Y), 'leave' === e && !Ct(J) && (M('hidden'), _(S));
            }),
          }),
            (0, r.useEffect)(
              function () {
                V && (k === b.Hidden ? (H.current = null) : (H.current = N));
              },
              [N, V, F]
            );
          var ee = x,
            te = { ref: O };
          return (
            P &&
              N &&
              Z &&
              (ee = It(
                It({}, ee),
                {},
                {
                  className: l.apply(
                    void 0,
                    [x.className].concat(
                      (0, we.Z)(z.current.enter),
                      (0, we.Z)(z.current.enterFrom)
                    )
                  ),
                }
              )),
            r.createElement(
              Tt.Provider,
              { value: J },
              r.createElement(
                Q,
                {
                  value:
                    c(
                      F,
                      ((n = {}),
                      (0, u.Z)(n, 'visible', G.Open),
                      (0, u.Z)(n, 'hidden', G.Closed),
                      n)
                    ) | $.flags,
                },
                E({
                  ourProps: te,
                  theirProps: ee,
                  defaultTag: 'div',
                  features: Lt,
                  visible: 'visible' === F,
                  name: 'Transition.Child',
                })
              )
            )
          );
        }),
        Ut = S(function (e, t) {
          var n = null !== (0, r.useContext)(jt),
            o = null !== q();
          return r.createElement(
            r.Fragment,
            null,
            !n && o
              ? r.createElement(_t, It({ ref: t }, e))
              : r.createElement(Bt, It({ ref: t }, e))
          );
        }),
        Ht = Object.assign(_t, { Child: Ut, Root: _t }),
        zt = ['title', 'titleId'];
      var Kt = r.forwardRef(function (e, t) {
          var n = e.title,
            o = e.titleId,
            a = (0, i.Z)(e, zt);
          return r.createElement(
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
                'aria-labelledby': o,
              },
              a
            ),
            n ? r.createElement('title', { id: o }, n) : null,
            r.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z',
            })
          );
        }),
        Wt = ['title', 'titleId'];
      var Vt = r.forwardRef(function (e, t) {
          var n = e.title,
            o = e.titleId,
            a = (0, i.Z)(e, Wt);
          return r.createElement(
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
                'aria-labelledby': o,
              },
              a
            ),
            n ? r.createElement('title', { id: o }, n) : null,
            r.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
            })
          );
        }),
        Gt = n(96626),
        qt = ['title', 'titleId'];
      var Qt = r.forwardRef(function (e, t) {
          var n = e.title,
            o = e.titleId,
            a = (0, i.Z)(e, qt);
          return r.createElement(
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
                'aria-labelledby': o,
              },
              a
            ),
            n ? r.createElement('title', { id: o }, n) : null,
            r.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
            })
          );
        }),
        $t = ['title', 'titleId'];
      var Xt = r.forwardRef(function (e, t) {
          var n = e.title,
            o = e.titleId,
            a = (0, i.Z)(e, $t);
          return r.createElement(
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
                'aria-labelledby': o,
              },
              a
            ),
            n ? r.createElement('title', { id: o }, n) : null,
            r.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0',
            })
          );
        }),
        Yt = n(91160),
        Jt = n(71082);
      function en() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(' ');
      }
      var tn = function (e) {
          var t = e.meta,
            n = e.link,
            a = r.useContext(Yt.T),
            i = a.user,
            u = a.logout,
            c = i ? i.user.name : 'Unknown',
            l = i ? i.user.avatar_url : '',
            s = i ? i.user.login : 'unknown',
            f = [{ name: 'Help', href: '/' }];
          f.push({ name: 'DataQuery', href: '/demo' });
          var d = function () {
            return r.createElement(Yt.T.Consumer, null, function (e) {
              return r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(
                    'button',
                    {
                      onClick: function () {
                        'dark' === e.darkMode
                          ? e.setDarkMode('light')
                          : e.setDarkMode('dark');
                      },
                      type: 'button',
                      className:
                        'flex-shrink-0 bg-primary p-1 text-secondary rounded-full hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent',
                    },
                    r.createElement(
                      'span',
                      { className: 'sr-only' },
                      'Toggle dark mode '
                    ),
                    'dark' === e.darkMode &&
                      r.createElement(Kt, {
                        className: 'h-6 w-6',
                        'aria-hidden': 'true',
                      }),
                    'light' === e.darkMode &&
                      r.createElement(Vt, {
                        className: 'h-6 w-6',
                        'aria-hidden': 'true',
                      })
                  )
                ),
                r.createElement(
                  'a',
                  {
                    href: 'https://github.com/microsoft/lida',
                    target: '_blank',
                    rel: 'noreferrer',
                    className: 'inline-block',
                  },
                  ' ',
                  r.createElement(
                    'span',
                    { className: 'sr-only' },
                    ' View code on GitHub'
                  ),
                  r.createElement(o.Z, {
                    icon: 'github',
                    size: 5,
                    className: 'ml-1 -mt-3 sm:mt-0',
                  })
                )
              );
            });
          };
          return r.createElement(
            Ee,
            {
              as: 'nav',
              className:
                'mt-6 bg-primary text-primary mb-8 border-b border-secondary',
            },
            function (e) {
              var a = e.open;
              return r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  'div',
                  { className: '  px-0 sm:px-0 lg:px-0 ' },
                  r.createElement(
                    'div',
                    { className: 'flex justify-between h-16' },
                    r.createElement(
                      'div',
                      { className: 'flex  lg:px-0 ' },
                      r.createElement(
                        'div',
                        { className: 'flex flex-shrink-0 pt-2' },
                        r.createElement(
                          'a',
                          { className: 'block  ', href: '/' },
                          r.createElement(
                            'span',
                            {
                              className:
                                'text-accent   inline-block pt-2 absolute',
                            },
                            ' ',
                            r.createElement(o.Z, { icon: 'app', size: 8 })
                          ),
                          r.createElement(
                            'div',
                            {
                              className: 'pt-1 text-lg ml-14     inline-block',
                            },
                            r.createElement(
                              'div',
                              { className: ' flex flex-col' },
                              r.createElement(
                                'div',
                                { className: 'text-base' },
                                t.title
                              ),
                              r.createElement(
                                'div',
                                { className: 'text-xs' },
                                ' ',
                                t.description
                              )
                            )
                          )
                        )
                      ),
                      r.createElement(
                        'div',
                        { className: 'hidden md:ml-6 md:flex md:space-x-6' },
                        f.map(function (e, t) {
                          var o =
                            e.href === n ? 'bg-accent  ' : 'bg-secondary ';
                          return r.createElement(
                            'div',
                            {
                              key: t + 'linkrow',
                              className:
                                'text-primary  items-center hover:text-accent hovder:bg-secondary px-1 pt-1 block   text-sm font-medium ',
                            },
                            r.createElement(
                              Jt.Link,
                              {
                                className:
                                  'hover:text-accent h-full flex flex-col',
                                to: e.href,
                              },
                              r.createElement(
                                'div',
                                { className: ' flex-1 flex-col flex' },
                                r.createElement('div', { className: 'flex-1' }),
                                r.createElement(
                                  'div',
                                  { className: 'pb-2 px-3' },
                                  e.name
                                )
                              ),
                              r.createElement('div', {
                                className: o + '  w-full h-1 rounded-t-lg ',
                              })
                            )
                          );
                        })
                      )
                    ),
                    r.createElement(
                      'div',
                      { className: 'flex items-center md:hidden' },
                      r.createElement(
                        Ee.Button,
                        {
                          className:
                            'inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent',
                        },
                        r.createElement(
                          'span',
                          { className: 'sr-only' },
                          'Open main menu'
                        ),
                        a
                          ? r.createElement(Gt.Z, {
                              className: 'block h-6 w-6',
                              'aria-hidden': 'true',
                            })
                          : r.createElement(Qt, {
                              className: 'block h-6 w-6',
                              'aria-hidden': 'true',
                            })
                      )
                    ),
                    r.createElement(
                      'div',
                      { className: 'hidden lg:ml-4 md:flex md:items-center' },
                      r.createElement(d, null),
                      i &&
                        r.createElement(
                          r.Fragment,
                          null,
                          r.createElement(
                            'div',
                            { className: 'ml-3' },
                            r.createElement(
                              'div',
                              {
                                className: 'text-base font-medium text-primary',
                              },
                              c
                            ),
                            r.createElement(
                              'div',
                              {
                                className: 'text-xs font-normal text-secondary',
                              },
                              s
                            )
                          ),
                          r.createElement(
                            gt,
                            {
                              as: 'div',
                              className: 'ml-4 relative flex-shrink-0',
                            },
                            r.createElement(
                              'div',
                              null,
                              r.createElement(
                                gt.Button,
                                {
                                  className:
                                    'bg-primary rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent',
                                },
                                r.createElement(
                                  'span',
                                  { className: 'sr-only' },
                                  'Open user menu'
                                ),
                                r.createElement('img', {
                                  className: 'h-8 w-8 rounded-full',
                                  src: l,
                                  alt: '',
                                })
                              )
                            ),
                            r.createElement(
                              Ht,
                              {
                                as: r.Fragment,
                                enter: 'transition ease-out duration-100',
                                enterFrom: 'transform opacity-0 scale-95',
                                enterTo: 'transform opacity-100 scale-100',
                                leave: 'transition ease-in duration-75',
                                leaveFrom: 'transform opacity-100 scale-100',
                                leaveTo: 'transform opacity-0 scale-95',
                              },
                              r.createElement(
                                gt.Items,
                                {
                                  className:
                                    'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-primary ring-1 ring-black ring-opacity-5 focus:outline-none',
                                },
                                r.createElement(gt.Item, null, function (e) {
                                  var t = e.active;
                                  return r.createElement(
                                    'a',
                                    {
                                      href: '#',
                                      onClick: function () {
                                        u();
                                      },
                                      className: en(
                                        t ? 'bg-secondary' : '',
                                        'block px-4 py-2 text-sm text-primary'
                                      ),
                                    },
                                    'Sign out'
                                  );
                                })
                              )
                            )
                          )
                        )
                    )
                  )
                ),
                r.createElement(
                  Ee.Panel,
                  { className: 'md:hidden' },
                  r.createElement(
                    'div',
                    { className: 'pt-2 pb-3 space-y-1' },
                    f.map(function (e, t) {
                      return r.createElement(
                        Ee.Button,
                        {
                          key: t + 'linkrow',
                          as: 'a',
                          href: '' + e.href,
                          className:
                            'bg-secondary border-accent text-accent block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                        },
                        e.name
                      );
                    })
                  ),
                  r.createElement(
                    'div',
                    { className: 'mt-3 space-y-1 pb-2' },
                    ' ',
                    r.createElement(d, null),
                    ' '
                  ),
                  i &&
                    r.createElement(
                      'div',
                      { className: 'pt-4 pb-3 border-t border-secondary' },
                      r.createElement(
                        'div',
                        { className: 'flex items-center px-4' },
                        r.createElement(
                          'div',
                          { className: 'flex-shrink-0' },
                          r.createElement('img', {
                            className: 'h-10 w-10 rounded-full',
                            src: l,
                            alt: '',
                          })
                        ),
                        r.createElement(
                          'div',
                          { className: 'ml-3' },
                          r.createElement(
                            'div',
                            { className: 'text-base font-medium text-primary' },
                            c
                          ),
                          r.createElement(
                            'div',
                            { className: 'text-sm font-medium text-secondary' },
                            s
                          )
                        ),
                        r.createElement(
                          'button',
                          {
                            type: 'button',
                            className:
                              'ml-auto flex-shrink-0 bg-primary p-1 text-secondary rounded-full hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent',
                          },
                          r.createElement(
                            'span',
                            { className: 'sr-only' },
                            'View notifications'
                          ),
                          r.createElement(Xt, {
                            className: 'h-6 w-6',
                            'aria-hidden': 'true',
                          })
                        )
                      ),
                      r.createElement(
                        'div',
                        { className: 'mt-3 space-y-1' },
                        r.createElement(
                          Ee.Button,
                          {
                            as: 'a',
                            href: '#',
                            onClick: function () {
                              return u();
                            },
                            className:
                              'block px-4 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-secondary',
                          },
                          'Sign out'
                        )
                      )
                    )
                )
              );
            }
          );
        },
        nn = n(81146),
        rn = function () {
          return r.createElement(
            'div',
            {
              className:
                'mt-4 text-primary text-sm p-3  mb-6 border-t border-secondary ',
            },
            r.createElement(
              'div',
              null,
              r.createElement(
                'span',
                { className: 'text-accent inline-block mr-1' },
                ' ',
                r.createElement(o.Z, { icon: 'app', size: 5 })
              ),
              ' ',
              'Made at',
              ' ',
              r.createElement(
                'a',
                {
                  target: '_blank',
                  'aria-label': 'ThinkEvolve Labs',
                  rel: 'noopener noreferrer',
                  className:
                    'underlipne inline-block border-accent border-b hover:text-accent',
                  href: 'https://www.microsoft.com/en-us/research/project/lida-automatic-generation-of-grammar-agnostic-visualizations/',
                },
                ' ',
                'ThinkEvolve Labs.'
              )
              /*  r.createElement(
                'a',
                {
                  target: '_blank',
                  'aria-label': 'Privacy & Cookies',
                  rel: 'noopener noreferrer',
                  className:
                    'ml-3 inline-block border-accent border-b hover:text-accent',
                  href: ' https://privacy.microsoft.com/en-us/privacystatement/',
                },
                ' ',
                'Privacy & Cookies'
              ) */
            )
          );
        },
        on = function (e) {
          var t = e.title,
            n = e.description,
            o = e.pathname,
            a = e.children,
            i = (0, Jt.useStaticQuery)('1865044719').site.siteMetadata,
            u = i.title,
            c = i.description,
            l = i.image,
            s = i.siteUrl,
            f = {
              title: t || u,
              description: n || c,
              image: '' + s + l,
              url: '' + s + (o || ''),
              twitterUsername: i.twitterUsername,
            },
            d =
              'DataQuery PRO is a tool to automatically explore data,  generate visualizations and infographics from data using large language models like ChatGPT and GPT4';
          return r.createElement(
            r.Fragment,
            null,
            r.createElement('title', null, f.title),
            r.createElement('meta', { name: 'description', content: d }),
            r.createElement('meta', { name: 'image', content: f.image }),
            r.createElement('meta', {
              name: 'twitter:card',
              content: 'summary_large_image',
            }),
            r.createElement('meta', {
              name: 'twitter:title',
              content: f.title,
            }),
            r.createElement('meta', { name: 'twitter:url', content: f.url }),
            r.createElement('meta', {
              name: 'twitter:description',
              content: d,
            }),
            r.createElement('meta', {
              name: 'twitter:image',
              content: f.image,
            }),
            r.createElement('meta', {
              name: 'twitter:creator',
              content: f.twitterUsername,
            }),
            r.createElement('meta', {
              property: 'og:type',
              content: 'website',
            }),
            r.createElement('meta', { property: 'og:url', content: f.url }),
            r.createElement('meta', { property: 'og:title', content: f.title }),
            r.createElement('meta', { property: 'og:description', content: d }),
            r.createElement('meta', { property: 'og:image', content: f.image }),
            a
          );
        },
        an = function (e) {
          var t = e.meta,
            n = e.title,
            o = e.link,
            a = e.children,
            i = e.showHeader,
            u = void 0 === i || i,
            c = e.restricted,
            l = void 0 !== c && c,
            s = function (e) {
              var i = e.darkMode;
              return (
                r.useEffect(
                  function () {
                    document.getElementsByTagName('html')[0].className =
                      ('dark' === i ? 'dark bg-primary' : 'light bg-primary') +
                      ' ';
                  },
                  [i]
                ),
                r.createElement(
                  'div',
                  { className: ' flex flex-col' },
                  r.createElement(
                    'div',
                    { className: 'flex-1 text-primary' },
                    r.createElement(on, {
                      title: (null == t ? void 0 : t.title) + ' | ' + n,
                      description: null == t ? void 0 : t.description,
                    }),
                    u && r.createElement(tn, { meta: t, link: o }),
                    r.createElement('div', null, a)
                  ),
                  r.createElement(rn, null)
                )
              );
            };
          return r.createElement(Yt.T.Consumer, null, function (e) {
            return l
              ? r.createElement(
                  'div',
                  { className: 'h-screen bg-yellow-100 ' },
                  e.user && r.createElement(s, { darkMode: e.darkMode }),
                  !e.user && r.createElement(nn.Z, { meta: t })
                )
              : r.createElement(s, { darkMode: e.darkMode });
          });
        };
    },
    81146: function (e, t, n) {
      var r = n(67294),
        o = n(45107),
        a = n(28893),
        i = n(91160),
        u = n(71082),
        c = n(15596);
      t.Z = function (e) {
        var t = e.meta,
          n = 'undefined' != typeof window,
          l = {}.GATSBY_GIT_CLIENT_ID,
          s = n ? window.location.protocol + '//' + window.location.host : '',
          f =
            'https://github.com/login/oauth/authorize?client_id=' +
            l +
            '&redirect_uri=' +
            (s + '/login') +
            '&scope=repo',
          d = r.useState({}),
          m = d[0],
          v = d[1],
          p = r.useState(!1),
          y = p[0],
          h = p[1],
          g = r.useContext(i.T),
          b = g.user,
          E = g.setUser,
          w = g.cookie_name;
        function x(e, t) {
          h(!0),
            fetch('/apiauth/github/token', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: e, token: t }),
            })
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                'success' === e.status
                  ? ((0, c.d8)(w, e.access_token, 2),
                    E(e),
                    history.replaceState(
                      { foo: 'bar' },
                      'Login Page',
                      s + '/#'
                    ))
                  : v(e);
              })
              .catch(function (e) {
                console.log(e.message),
                  v({
                    status: 'error',
                    statusText: 'Error connecting to auth server.',
                  }),
                  h(!1);
              });
        }
        r.useEffect(
          function () {
            b && (0, u.navigate)('/');
          },
          [b]
        ),
          r.useEffect(function () {
            var e = n
                ? new URLSearchParams(window.location.search).get('code')
                : null,
              t = (0, c.ej)(w);
            t && x(e, t), e && x(e, null);
          }, []);
        var S = 'error' === m.status ? 'orange' : 'green',
          O = 'text-' + S + '-500',
          k = 'border-' + S + '-500';
        return r.createElement(
          'main',
          { className: ' ' },
          r.createElement(
            'div',
            {
              className:
                'min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8',
            },
            r.createElement(
              'div',
              { className: 'sm:mx-auto sm:w-full sm:max-w-md' },
              r.createElement(
                'div',
                {
                  className:
                    ' mx-auto block   w-full  h-12  text-center text-green-600',
                },
                r.createElement(a.Z, { icon: 'app', size: 12 })
              ),
              r.createElement(
                'h2',
                {
                  className:
                    'mt-6 text-center text-3xl font-extrabold text-gray-700',
                },
                null == t ? void 0 : t.title,
                ' '
              ),
              r.createElement(
                'p',
                { className: 'mt-2 text-center text-sm text-gray-600' },
                null == t ? void 0 : t.description
              )
            ),
            r.createElement(
              'div',
              { className: 'mt-8 sm:mx-auto sm:w-full sm:max-w-md' },
              r.createElement(
                'div',
                {
                  className: 'bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10',
                },
                r.createElement(
                  'div',
                  { className: 'mt-4' },
                  r.createElement(
                    'div',
                    { className: 'relative' },
                    r.createElement(
                      'div',
                      { className: 'absolute inset-0 flex items-center' },
                      r.createElement('div', {
                        className: 'w-full border-t border-gray-300',
                      })
                    ),
                    r.createElement(
                      'div',
                      { className: 'relative flex justify-center text-sm' },
                      r.createElement(
                        'span',
                        { className: 'px-2 bg-white text-gray-500' },
                        'Sign in with Github'
                      )
                    )
                  ),
                  r.createElement(
                    'div',
                    null,
                    r.createElement(
                      'button',
                      {
                        onClick: function () {
                          n && window.open(f, '_self');
                        },
                        type: 'submit',
                        className:
                          'w-full mt-4 flex justify-center py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
                      },
                      r.createElement(
                        'svg',
                        {
                          className: 'w-5 h-5 mr-4 ',
                          'aria-hidden': 'true',
                          fill: 'currentColor',
                          viewBox: '0 0 20 20',
                        },
                        r.createElement('path', {
                          fillRule: 'evenodd',
                          d: 'M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z',
                          clipRule: 'evenodd',
                        })
                      ),
                      'Sign in'
                    ),
                    m.status &&
                      r.createElement(
                        'div',
                        {
                          className:
                            O + ' ' + k + '  mt-3 border p-2 rounded text-sm ',
                        },
                        r.createElement(o.Z, {
                          className: O + ' h-5 w-5 inline-block mr-2 ',
                        }),
                        m.statusText,
                        ' '
                      ),
                    y &&
                      r.createElement(
                        'div',
                        {
                          className:
                            'mt-4 p-3 text-sm border border-green-500 rounded',
                        },
                        ' ',
                        r.createElement(
                          'span',
                          { className: 'inline-block text-gray-500  mr-2' },
                          r.createElement(a.Z, { icon: 'loading', size: 4 })
                        ),
                        ' ',
                        'Signing in ...',
                        ' '
                      )
                  )
                )
              )
            )
          )
        );
      };
    },
    34610: function (e, t, n) {
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    37997: function (e, t, n) {
      function r(e) {
        if (Array.isArray(e)) return e;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    89907: function (e, t, n) {
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    5626: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(83246);
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, (0, r.Z)(o.key), o);
        }
      }
      function a(e, t, n) {
        return (
          t && o(e.prototype, t),
          n && o(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
    },
    35774: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(83246);
      function o(e, t, n) {
        return (
          (t = (0, r.Z)(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
    },
    15663: function (e, t, n) {
      function r(e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    20011: function (e, t, n) {
      function r() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    39784: function (e, t, n) {
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    64055: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(37997);
      var o = n(29719),
        a = n(20011);
      function i(e, t) {
        return (
          (0, r.Z)(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                o,
                a,
                i,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = a.call(n)).done) &&
                    (u.push(r.value), u.length !== t);
                    c = !0
                  );
              } catch (s) {
                (l = !0), (o = s);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(e, t) ||
          (0, o.Z)(e, t) ||
          (0, a.Z)()
        );
      }
    },
    53994: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(34610);
      var o = n(15663),
        a = n(29719);
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (0, o.Z)(e) ||
          (0, a.Z)(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
    },
    83246: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(4997);
      function o(e) {
        var t = (function (e, t) {
          if ('object' !== (0, r.Z)(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || 'default');
            if ('object' !== (0, r.Z)(o)) return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === (0, r.Z)(t) ? t : String(t);
      }
    },
    4997: function (e, t, n) {
      function r(e) {
        return (
          (r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          r(e)
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    29719: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(34610);
      function o(e, t) {
        if (e) {
          if ('string' == typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(e, t)
              : void 0
          );
        }
      }
    },
  },
]);
//# sourceMappingURL=21614df092a0a42959abd49fa5ffec5702fa9463-ea1bf954f60f23d1e6a7.js.map
