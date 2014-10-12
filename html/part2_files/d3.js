(function(){function t(t){return t?t/Math.sin(t):1}function a(t){return t>0?1:0>t?-1:0}function n(t){return t>0?Math.sqrt(t):0}function r(t){return t>1?Fa/2:-1>t?-Fa/2:Math.asin(t)}function e(t){return t>1?0:-1>t?Fa:Math.acos(t)}function o(t){var a=0,n=Ba(t),r=n(a);return r.parallel=function(t){return arguments.length?n(a=t*Fa/180):180*(a/Fa)},r}function h(t){var a=0,n=Fa/3,r=Ba(t),e=r(a,n);return e.parallels=function(t){return arguments.length?r(a=t[0]*Fa/180,n=t[1]*Fa/180):[180*(a/Fa),180*(n/Fa)]},e}function i(a,n){var r=Math.cos(n),o=t(e(r*Math.cos(a/=2)));return[2*r*Math.sin(a)*o,Math.sin(n)*o]}function u(t,n){return M(t,a(n)*Math.log(Math.tan(.5*(Math.abs(n)+Fa/2))),.5)}function M(t,n,r){var e=Math.abs(t),o=Math.abs(n),h=.5*((h=Math.exp(o))-1/h);if(e){var i=1/Math.sin(e),u=(u=Math.cos(e)*i)*u,M=-(u+r*(h*h*i*i+1)-1),c=.5*(-M+Math.sqrt(M*M-4*(r-1)*u));return[s(Math.atan(1/Math.sqrt(c)),r)*a(t),s(Math.atan(Math.sqrt(c/u-1)/r),1-r)*a(n)]}return[0,s(Math.atan(h),1-r)*a(n)]}function s(t,a){for(var n=1,r=Math.sqrt(1-a),e=Math.sqrt(a),o=0;Math.abs(e)>Ga;o++){if(t%Fa){var h=Math.atan(r*Math.tan(t)/n);0>h&&(h+=Fa),t+=h+~~(t/Fa)*Fa}else t+=t;e=(n+r)/2,r=Math.sqrt(n*r),e=((n=e)-r)/2}return t/(Math.pow(2,o)*n)}function c(t){return function(a){var n,r=t*Math.sin(a),e=30;do a-=n=(a+Math.sin(a)-r)/(1+Math.cos(a));while(Math.abs(n)>Ga&&--e>0);return a/2}}function f(t,a,n){function e(n,r){return[t*n*Math.cos(r=o(r)),a*Math.sin(r)]}var o=c(n);return e.invert=function(e,o){var h=r(o/a);return[e/(t*Math.cos(h)),r((2*h+Math.sin(2*h))/n)]},e}function v(t,a){return[t*Math.cos(a),a]}function l(t,a){return a>-La?(t=Ka(t,a),t[1]+=Na,t):v(t,a)}function g(t){function a(t,a){var i=Math.cos(a),u=Math.cos(t/=2);return[(1+i)*Math.sin(t),(e*a>-Math.atan2(u,o)-.001?0:10*-e)+h+Math.sin(a)*r-(1+i)*n*u]}var n=Math.sin(t),r=Math.cos(t),e=t>0?1:-1,o=Math.tan(e*t),h=(1+n-r)/2;return a.invert=function(t,a){var i=0,u=0,M=50;do{var s=Math.cos(i),c=Math.sin(i),f=Math.cos(u),v=Math.sin(u),l=1+f,g=l*c-t,d=h+v*r-l*n*s-a,b=.5*l*s,w=-c*v,q=.5*n*l*c,m=r*f+n*s*v,p=w*q-m*b,S=.5*(d*w-g*m)/p,Q=(g*q-d*b)/p;i-=S,u-=Q}while((Math.abs(S)>Ga||Math.abs(Q)>Ga)&&--M>0);return e*u>-Math.atan2(Math.cos(i),o)-.001?[2*i,u]:null},a}function d(){var t=Fa/9,a=t>0?1:-1,n=Math.tan(a*t),r=Ba(g),e=r(t),o=e.stream;return e.parallel=function(e){return arguments.length?(n=Math.tan((a=(t=e*Fa/180)>0?1:-1)*t),r(t)):180*(t/Fa)},e.stream=function(r){var h=e.rotate(),i=o(r),u=(e.rotate([0,0]),o(r));return e.rotate(h),i.sphere=function(){u.polygonStart(),u.lineStart();for(var r=-180*a;180>a*r;r+=90*a)u.point(r,90*a);for(;a*(r-=t)>=-180;)u.point(r,a*-Math.atan2(Math.cos(r*Ca/2),n)*Ha);u.lineEnd(),u.polygonEnd()},i},e}function b(t,a){var n=Math.tan(a/2),r=1-n*n,e=1+r*Math.cos(t/=2),o=Math.sin(t)*r/e,h=n/e,i=o*o,u=h*h;return[4/3*o*(3+i-3*u),4/3*h*(3+3*i-u)]}function w(t,n){var r=Math.abs(n);return Fa/4>r?[t,Math.log(Math.tan(Fa/4+n/2))]:[t*Math.cos(r)*(2*Math.SQRT2-1/Math.sin(r)),a(n)*(2*Math.SQRT2*(r-Fa/4)-Math.log(Math.tan(r/2)))]}function q(t){function a(t,a){var e=Ua(t,a);if(Math.abs(t)>Fa/2){var o=Math.atan2(e[1],e[0]),h=Math.sqrt(e[0]*e[0]+e[1]*e[1]),i=n*Math.round((o-Fa/2)/n)+Fa/2,u=Math.atan2(Math.sin(o-=i),2-Math.cos(o));o=i+r(Fa/h*Math.sin(u))-u,e[0]=h*Math.cos(o),e[1]=h*Math.sin(o)}return e}var n=2*Fa/t;return a}function m(){var t=5,a=Ba(q),n=a(t),r=n.stream;return n.lobes=function(n){return arguments.length?a(t=+n):t},n.stream=function(a){var e=n.rotate(),o=r(a),h=(n.rotate([0,0]),r(a));return n.rotate(e),o.sphere=function(){h.polygonStart(),h.lineStart();for(var a=1e-4,n=0,r=360/t,e=90-180/t;t>n;++n,e-=r)h.point(180,0),-90>e?(h.point(-90,180-e-a),h.point(-90,180-e+a)):(h.point(90,e+a),h.point(90,e-a));h.lineEnd(),h.polygonEnd()},o},n}function p(t,a){var n=2.00276,r=Ja(a);return[n*t/(1/Math.cos(a)+1.11072/Math.cos(r)),(a+Math.SQRT2*Math.sin(r))/n]}function S(t){function a(a,r){var e=n+t-r,o=e?a*Math.cos(r)/e:e;return[e*Math.sin(o),n-e*Math.cos(o)]}if(!t)return v;var n=1/Math.tan(t);return a.invert=function(a,r){var e=Math.sqrt(a*a+(r=n-r)*r),o=n+t-e;return[e/Math.cos(o)*Math.atan2(a,r),o]},a}function Q(t,a){var r=n(1-Math.sin(a));return[2/_a*t*r,_a*(1-r)]}function R(t,n){function r(t,a){var n=Ga>Math.abs(Math.abs(a)-Fa/2)?0:i/Math.pow(o(a),h);return[n*Math.sin(h*t),i-n*Math.cos(h*t)]}var e=Math.cos(t),o=function(t){return Math.tan(Fa/4+t/2)},h=t===n?Math.sin(t):Math.log(e/Math.cos(n))/Math.log(o(n)/o(t)),i=e*Math.pow(o(t),h)/h;return h?(r.invert=function(t,n){var r=i-n,e=a(h)*Math.sqrt(t*t+r*r);return[Math.atan2(t,r)/h,2*Math.atan(Math.pow(i/e,1/h))-Fa/2]},r):T}function T(t,a){return[t,Math.log(Math.tan(Fa/4+a/2))]}function y(t,n){function r(t,a){var n=h-a;return[n*Math.sin(o*t),h-n*Math.cos(o*t)]}var e=Math.cos(t),o=t===n?Math.sin(t):(e-Math.cos(n))/(n-t),h=e/o+t;return Ga>Math.abs(o)?d3.geo.equirectangular.raw:(r.invert=function(t,n){var r=h-n;return[Math.atan2(t,r)/o,h-a(o)*Math.sqrt(t*t+r*r)]},r)}function k(t){function a(t,a){return[t,(t?t/Math.sin(t):1)*(Math.sin(a)*Math.cos(t)-n*Math.cos(a))]}var n=Math.tan(t);return a}function E(t,a){var n=Math.sqrt(3);return[n*t*(2*Math.cos(2*a/3)-1)/_a,n*_a*Math.sin(a/3)]}function P(t){function a(t,a){return[t*n,Math.sin(a)/n]}var n=Math.cos(t);return a.invert=function(t,a){return[t/n,r(a*n)]},a}function x(t,a){var n=Math.sqrt(8/(3*Fa));return[n*t*(1-Math.abs(a)/Fa),n*a]}function z(t,n){var r=Math.sqrt(4-3*Math.sin(Math.abs(n)));return[2/Math.sqrt(6*Fa)*t*r,a(n)*Math.sqrt(2*Fa/3)*(2-r)]}function A(t,a){var n=Math.sqrt(Fa*(4+Fa));return[2/n*t*(1+Math.sqrt(1-4*a*a/(Fa*Fa))),4/n*a]}function D(t,a){var n=(2+Fa/2)*Math.sin(a);a/=2;for(var r=0,e=1/0;10>r&&Math.abs(e)>Ga;r++){var o=Math.cos(a);a-=e=(a+Math.sin(a)*(o+2)-n)/(2*o*(1+o))}return[2/Math.sqrt(Fa*(4+Fa))*t*(1+Math.cos(a)),2*Math.sqrt(Fa/(4+Fa))*Math.sin(a)]}function G(t,a){return[t*(1+Math.cos(a))/Math.sqrt(2+Fa),2*a/Math.sqrt(2+Fa)]}function j(t,a){for(var n=(1+Fa/2)*Math.sin(a),r=0,e=1/0;10>r&&Math.abs(e)>Ga;r++)a-=e=(a+Math.sin(a)-n)/(1+Math.cos(a));return n=Math.sqrt(2+Fa),[t*(1+Math.cos(a))/n,2*a/n]}function F(t,a){var n=3+Math.sqrt(8),r=Math.sin(t/=2),e=Math.cos(t),o=Math.sqrt(Math.cos(a)/2),h=Math.cos(a/=2),i=Math.sin(a)/(h+2*e*o),u=Math.sqrt(2/(1+i*i)),M=Math.sqrt((h+(e+r)*o)/(h+(e-r)*o));return[n*(u*(M-1/M)-2*Math.log(M)),n*(u*i*(M+1/M)-2*Math.atan(i))]}function _(t,a){var r=Math.tan(a/2);return[t*Wa*n(1-r*r),(1+Wa)*r]}function C(){var t=!1,a=Ba(H),n=a(t);return n.quincuncial=function(n){return arguments.length?a(t=!!n):t},n}function H(t){return function(a,n){var e=Math.cos(n),o=Math.cos(a)*e,h=Math.sin(a)*e,i=Math.sin(n);for(t?(a=Math.atan2(h,-i)-Fa/4,n=r(o)):(a=Math.atan2(i,o)+Fa/2,n=r(-h));0>a;)a+=2*Fa;var u=0>n,M=~~(a/(Fa/4));a%=Fa/2;var s,c=I(1&M?Fa/2-a:a,Math.abs(n)),o=c[0],h=c[1];switch(t&&u&&(h=-2-h),M>3&&(o=-o,h=-h),M%4){case 1:o=-o;case 2:s=o,o=-h,h=s;break;case 3:h=-h}return!t&&u&&(o=2-o),t?[(o-h)/Math.SQRT2,(o+h)/Math.SQRT2]:[o,h]}}function I(t,a){if(a===Fa/2)return[0,0];var e=Math.sin(a),o=e*e,h=o*o,i=1+h,u=1+3*h,M=1-h,s=r(1/Math.sqrt(i)),c=M+o*i*s,f=(1-e)/c,v=Math.sqrt(f),l=f*i,g=Math.sqrt(l),d=v*M;if(0===t)return[0,-(d+o*g)];var b=Math.cos(a),w=1/b,q=2*e*b,m=(-3*o+s*u)*q,p=(-c*b-(1-e)*m)/(c*c),S=.5*p/v,Q=M*S-2*o*v*q,R=o*i*p+f*u*q,T=-w*q,y=-w*R,k=-2*w*Q,E=4*t/Fa;if(t>.222*Fa||Fa/4>a&&t>.175*Fa){var P=(d+o*n(l*(1+h)-d*d))/(1+h);if(t>Fa/4)return[P,P];var x=P,z=.5*P,A=-1;P=.5*(z+x);do{var D=Math.sqrt(l-P*P),G=P*(k+T*D)+y*r(P/g)-E;if(!G)break;0>G?z=P:x=P,P=.5*(z+x)}while(50>++A&&Math.abs(x-z)>Ga)}else for(var P=Ga,A=0;25>A;A++){var j=P*P,D=n(l-j),F=k+T*D,G=P*F+y*r(P/g)-E,_=F+(y-T*j)/D,C=D?-G/_:0;if(P+=C,Ga>Math.abs(C))break}return[P,-d-o*n(l-P*P)]}function B(t){function a(t,a){var h=Math.cos(a),i=Math.cos(t)*h,u=Math.sin(t)*h,M=Math.sin(a),s=M*o+i*n,c=Math.cos(t=Math.atan2(u,i*o-M*n)),h=Math.cos(a=r(s)),M=e(n*s+o*h*c),f=Math.sin(M),v=Math.abs(f)>Ga?M/f:1;return[v*o*Math.sin(t),(Math.abs(t)>Fa/2?v:-v)*(n*h-o*s*c)]}var n=Math.sin(t),o=Math.cos(t);return a}function J(){var t=0,a=Ba(B),n=a(t),r=n.rotate,e=n.stream,o=d3.geo.circle();return n.parallel=function(r){if(!arguments.length)return 180*(t/Fa);var e=n.rotate();return a(t=r*Fa/180).rotate(e)},n.rotate=function(a){return arguments.length?(r.call(n,[a[0],a[1]-180*(t/Fa)]),o.origin([-a[0],-a[1]]),n):(a=r.call(n),a[1]+=180*(t/Fa),a)},n.stream=function(t){return t=e(t),t.sphere=function(){t.polygonStart();var a,n=.01,r=o.angle(90-n)().coordinates[0],e=r.length-1,h=-1;for(t.lineStart();e>++h;)t.point((a=r[h])[0],a[1]);for(t.lineEnd(),r=o.angle(90+n)().coordinates[0],e=r.length-1,t.lineStart();--h>=0;)t.point((a=r[h])[0],a[1]);t.lineEnd(),t.polygonEnd()},t},n}function K(t,a){function n(n,r){var e=Xa(n/a,r);return e[0]*=t,e}return 2>arguments.length&&(a=t),1===a?Xa:1/0===a?N:(n.invert=function(n,r){var e=Xa.invert(n/t,r);return e[0]*=a,e},n)}function L(){var t=2,a=Ba(K),n=a(t);return n.coefficient=function(n){return arguments.length?a(t=+n):t},n}function N(t,a){return[t*Math.cos(a)/Math.cos(a/=2),2*Math.sin(a)]}function O(t,a){for(var n,r=Math.sin(a)*(0>a?2.43763:2.67595),e=0;20>e&&(a-=n=(a+Math.sin(a)-r)/(1+Math.cos(a)),!(Ga>Math.abs(n)));e++);return[.85*t*Math.cos(a*=.5),Math.sin(a)*(0>a?1.93052:1.75859)]}function U(t){var a=d3.geo.cylindricalEqualArea.raw(0),n=Ya*Fa/180,r=a(Fa,0)[0]-a(-Fa,0)[0],e=d3.geo.collignon.raw(Fa,n)[0]-d3.geo.collignon.raw(-Fa,n)[0],o=a(0,n)[1],h=d3.geo.collignon.raw(0,n)[1],i=d3.geo.collignon.raw(0,Fa/2)[1]-h,u=2*Fa/t;return function(M,s){var c;if(Math.abs(s)>n){var f=Math.min(t-1,Math.max(0,Math.floor((M+Fa)/u)));M=M+Fa*(t-1)/t-f*u,c=d3.geo.collignon.raw(M,Math.abs(s)),c[0]=c[0]*r/e-r*(t-1)/(2*t)+f*r/t,c[1]=o+4*(c[1]-h)*i/r,0>s&&(c[1]=-c[1])}else c=a(M,s);return c[0]/=2,c}}function V(){function t(){var t=180/a;return{type:"Polygon",coordinates:[d3.range(-180,180+t/2,t).map(function(t,a){return[t,1&a?90-1e-6:Ya]}).concat(d3.range(180,-180-t/2,-t).map(function(t,a){return[t,1&a?-90+1e-6:-Ya]}))]}}var a=2,n=Ba(U),r=n(a),e=r.stream;return r.lobes=function(t){return arguments.length?n(a=+t):a},r.stream=function(a){var n=r.rotate(),o=e(a),h=(r.rotate([0,0]),e(a));return r.rotate(n),o.sphere=function(){d3.geo.stream(t(),h)},o},r}function W(t){function a(a,r){var e,h,f=1-Math.sin(r);if(f&&2>f){var v,l=Fa/2-r,g=25;do{var d=Math.sin(l),b=Math.cos(l),w=i+Math.atan2(d,o-b),q=1+c-2*o*b;l-=v=(l-s*i-o*d+q*w-.5*f*n)/(2*o*d*w)}while(Math.abs(v)>ja&&--g>0);e=u*Math.sqrt(q),h=a*w/Fa}else e=u*(t+f),h=a*i/Fa;return[e*Math.sin(h),M-e*Math.cos(h)]}var n,o=1+t,h=Math.sin(1/o),i=r(h),u=2*Math.sqrt(Fa/(n=Fa+4*i*o)),M=.5*u*(o+Math.sqrt(t*(2+t))),s=t*t,c=o*o;return a.invert=function(t,a){var h=t*t+(a-=M)*a,f=(1+c-h/(u*u))/(2*o),v=e(f),l=Math.sin(v),g=i+Math.atan2(l,o-f);return[r(t/Math.sqrt(h))*Fa/g,r(1-2*(v-s*i-o*l+(1+c-2*o*f)*g)/n)]},a}function X(){var t=1,a=Ba(W),n=a(t);return n.ratio=function(n){return arguments.length?a(t=+n):t},n}function Y(t,a){return Math.abs(a)>La?(t=Ka(t,a),t[1]-=a>0?Na:-Na,t):v(t,a)}function Z(t,a){return[3*t/(2*Fa)*Math.sqrt(Fa*Fa/3-a*a),a]}function $(t){return function(a,n){if(Ga>Math.abs(Math.abs(n)-Fa/2))return[0,0>n?-2:2];var r=Math.sin(n),e=Math.pow((1+r)/(1-r),t/2),o=.5*(e+1/e)+Math.cos(a*=t);return[2*Math.sin(a)/o,(e-1/e)/o]}}function ta(){var t=.5,a=Ba($),n=a(t);return n.spacing=function(n){return arguments.length?a(t=+n):t},n}function aa(t,a){return[t*(1+Math.sqrt(Math.cos(a)))/2,a/(Math.cos(a/2)*Math.cos(t/6))]}function na(t,a){var n=t*t,r=a*a;return[t*(.975534+r*(-.119161+n*-.0143059+r*-.0547009)),a*(1.00384+n*(.0802894+r*-.02855+199025e-9*n)+r*(.0998909+r*-.0491032))]}function ra(t,a){return[Math.sin(t)/Math.cos(a),Math.tan(a)*Math.cos(t)]}function ea(t){function a(a,e){var o=e-t,h=Ga>Math.abs(o)?a*n:Ga>Math.abs(h=Fa/4+e/2)||Ga>Math.abs(Math.abs(h)-Fa/2)?0:a*o/Math.log(Math.tan(h)/r);return[h,o]}var n=Math.cos(t),r=Math.tan(Fa/4+t/2);return a.invert=function(a,e){var o,h=e+t;return[Ga>Math.abs(e)?a/n:Ga>Math.abs(o=Fa/4+h/2)||Ga>Math.abs(Math.abs(o)-Fa/2)?0:a*Math.log(Math.tan(o)/r)/e,h]},a}function oa(t,a){return[t,1.25*Math.log(Math.tan(Fa/4+.4*a))]}function ha(t){function a(a,r){for(var e,o=Math.cos(r),h=2/(1+o*Math.cos(a)),i=h*o*Math.sin(a),u=h*Math.sin(r),M=n,s=t[M],c=s[0],f=s[1];--M>=0;)s=t[M],c=s[0]+i*(e=c)-u*f,f=s[1]+i*f+u*e;return c=i*(e=c)-u*f,f=i*f+u*e,[c,f]}var n=t.length-1;return a.invert=function(a,e){var o=20,h=a,i=e;do{for(var u,M=n,s=t[M],c=s[0],f=s[1],v=0,l=0;--M>=0;)s=t[M],v=c+h*(u=v)-i*l,l=f+h*l+i*u,c=s[0]+h*(u=c)-i*f,f=s[1]+h*f+i*u;v=c+h*(u=v)-i*l,l=f+h*l+i*u,c=h*(u=c)-i*f-a,f=h*f+i*u-e;var g,d,b=v*v+l*l;h-=g=(c*v+f*l)/b,i-=d=(f*v-c*l)/b}while(Math.abs(g)+Math.abs(d)>Ga*Ga&&--o>0);if(o){var w=Math.sqrt(h*h+i*i),q=2*Math.atan(.5*w),m=Math.sin(q);return[Math.atan2(h*m,w*Math.cos(q)),w?r(i*m/w):0]}},a}function ia(){var t=Za.miller,a=Ba(ha),n=a(t);return n.coefficients=function(n){return arguments.length?a(t="string"==typeof n?Za[n]:n):t},n}function ua(t,a){var n=Math.sqrt(6),r=Math.sqrt(7),e=Math.asin(7*Math.sin(a)/(3*n));return[n*t*(2*Math.cos(2*e/3)-1)/r,9*Math.sin(e/3)/r]}function Ma(t,a){for(var n,r=(1+Math.SQRT1_2)*Math.sin(a),e=a,o=0;25>o&&(e-=n=(Math.sin(e/2)+Math.sin(e)-r)/(.5*Math.cos(e/2)+Math.cos(e)),!(Ga>Math.abs(n)));o++);return[t*(1+2*Math.cos(e)/Math.cos(e/2))/(3*Math.SQRT2),2*Math.sqrt(3)*Math.sin(e/2)/Math.sqrt(2+Math.SQRT2)]}function sa(t,a){for(var n,r=Math.sqrt(6/(4+Fa)),e=(1+Fa/4)*Math.sin(a),o=a/2,h=0;25>h&&(o-=n=(o/2+Math.sin(o)-e)/(.5+Math.cos(o)),!(Ga>Math.abs(n)));h++);return[r*(.5+Math.cos(o))*t/1.5,r*o]}function ca(t,a){var n=a*a,r=n*n;return[t*(.8707-.131979*n+r*(-.013791+r*(.003971*n-.001529*r))),a*(1.007226+n*(.015085+r*(-.044475+.028874*n-.005916*r)))]}function fa(t,a){return[t*(1+Math.cos(a))/2,2*(a-Math.tan(a/2))]}function va(t,n){var r=Fa/2>Math.abs(t),e=u(r?t:-a(t)*(Fa-Math.abs(t)),n),o=e[0]/Math.SQRT2-e[1]/Math.SQRT2,h=e[1]/Math.SQRT2+e[0]/Math.SQRT2;if(r)return[o,h];var i=2.622057554164566,M=o>0^h>0?-1:1;return[M*o-a(h)*i,M*h-a(o)*i]}function la(t,a){if(Ga>Math.abs(a))return[t,0];var n=Math.tan(a),r=t*Math.sin(a);return[Math.sin(r)/n,a+(1-Math.cos(r))/n]}function ga(t){function a(a,r){var e=n?Math.tan(a*n/2)/n:a/2;if(!r)return[2*e,-t];var o=2*Math.atan(e*Math.sin(r)),h=1/Math.tan(r);return[h*Math.sin(o),r-t+h*(1-Math.cos(o))]}var n=Math.sin(t);return a}function da(t,a){var n,r=Math.min(18,36*Math.abs(a)/Fa),e=Math.floor(r),o=r-e,h=(n=$a[e])[0],i=n[1],u=(n=$a[++e])[0],M=n[1],s=(n=$a[Math.min(19,++e)])[0],c=n[1];return[t*(u+o*(s-h)/2+o*o*(s-2*u+h)/2),(a>0?Fa:-Fa)/2*(M+o*(c-i)/2+o*o*(c-2*M+i)/2)]}function ba(t){function a(a,n){var r=Math.cos(n),e=(t-1)/(t-r*Math.cos(a));return[e*r*Math.sin(a),e*Math.sin(n)]}return a.invert=function(a,n){var e=a*a+n*n,o=Math.sqrt(e),h=(t-Math.sqrt(1-e*(t+1)/(t-1)))/((t-1)/o+o/(t-1));return[Math.atan2(a*h,o*Math.sqrt(1-h*h)),o?r(n*h/o):0]},a}function wa(t,a){function n(a,n){var h=r(a,n),i=h[1],u=i*o/(t-1)+e;return[h[0]*e/u,i/u]}var r=ba(t);if(!a)return r;var e=Math.cos(a),o=Math.sin(a);return n.invert=function(a,n){var h=(t-1)/(t-1-n*o);return r.invert(h*a,h*n*e)},n}function qa(){var t=1.4,a=0,n=Ba(wa),r=n(t,a);return r.distance=function(r){return arguments.length?n(t=+r,a):t},r.tilt=function(r){return arguments.length?n(t,a=r*Fa/180):180*a/Fa},r}function ma(t,a){var n=Math.tan(a/2),r=Math.sin(Fa/4*n);return[t*(.74482-.34588*r*r),1.70711*n]}function pa(t){function a(t,a){var r=d3.geo.gnomonic.raw(t,a);return r[0]*=n,r}var n=Math.cos(t);return a.invert=function(t,a){return d3.geo.gnomonic.raw.invert(t/n,a)},a}function Sa(){var t=[[0,0],[0,0]],a=Ba(pa),n=a(0),e=n.rotate;return delete n.rotate,n.points=function(n){if(!arguments.length)return t;t=n;var o=d3.geo.interpolate(n[0],n[1]),h=o(.5),i=Ta(-h[0]*Ca,-h[1]*Ca,n[0][0]*Ca,n[0][1]*Ca),u=.5*o.distance,M=(0>i[0]?-1:1)*i[1],s=r(Math.sin(M)/Math.sin(u));return e.call(i,[-h[0],-h[1],-s*Ha]),a(u)},n}function Qa(t){function a(a,i){var u=e(Math.cos(i)*Math.cos(a-r)),M=e(Math.cos(i)*Math.cos(a-o)),s=0>i?-1:1;return u*=u,M*=M,[(u-M)/(2*t),s*n(4*h*M-(h-u+M)*(h-u+M))/(2*t)]}if(!t)return d3.geo.azimuthalEquidistant.raw;var r=-t/2,o=-r,h=t*t,i=Math.tan(o),u=.5/Math.sin(o);return a.invert=function(t,a){var n,h,M=a*a,s=Math.cos(Math.sqrt(M+(n=t+r)*n)),c=Math.cos(Math.sqrt(M+(n=t+o)*n));return[Math.atan2(h=s-c,n=(s+c)*i),(0>a?-1:1)*e(Math.sqrt(n*n+h*h)*u)]},a}function Ra(){var t=[[0,0],[0,0]],a=Ba(Qa),n=a(0),e=n.rotate;return delete n.rotate,n.points=function(n){if(!arguments.length)return t;t=n;var o=d3.geo.interpolate(n[0],n[1]),h=o(.5),i=Ta(-h[0]*Ca,-h[1]*Ca,n[0][0]*Ca,n[0][1]*Ca),u=.5*o.distance,M=(0>i[0]?-1:1)*i[1],s=r(Math.sin(M)/Math.sin(u));return e.call(i,[-h[0],-h[1],-s*Ha]),a(2*u)},n}function Ta(t,a,n,e){var o=Math.cos(a),h=Math.sin(a),i=Math.cos(e),u=Math.cos(n+=t)*i,M=Math.sin(n)*i,s=Math.sin(e);return[Math.atan2(M,u*o-s*h),r(s*o+u*h)]}function ya(t,n){if(Ga>Math.abs(n))return[t,0];var e=Math.abs(2*n/Fa),o=r(e);if(Ga>Math.abs(t)||Ga>Math.abs(Math.abs(n)-Fa/2))return[0,a(n)*Fa*Math.tan(o/2)];var h=Math.cos(o),i=Math.abs(Fa/t-t/Fa)/2,u=i*i,M=h/(e+h-1),s=M*(2/e-1),c=s*s,f=c+u,v=M-c,l=u+M;return[a(t)*Fa*(i*v+Math.sqrt(u*v*v-f*(M*M-c)))/f,a(n)*Fa*(s*l-i*Math.sqrt((u+1)*f-l*l))/f]}function ka(t,e){if(Ga>Math.abs(e))return[t,0];var o=Math.abs(2*e/Fa),h=r(o);if(Ga>Math.abs(t)||Ga>Math.abs(Math.abs(e)-Fa/2))return[0,a(e)*Fa*Math.tan(h/2)];var i=Math.cos(h),u=Math.abs(Fa/t-t/Fa)/2,M=u*u,s=i*(Math.sqrt(1+M)-u*i)/(1+M*o*o);return[a(t)*Fa*s,a(e)*Fa*n(1-s*(2*u+s))]}function Ea(t,e){if(Ga>Math.abs(e))return[t,0];var o=Math.abs(2*e/Fa),h=r(o);if(Ga>Math.abs(t)||Ga>Math.abs(Math.abs(e)-Fa/2))return[0,a(e)*Fa*Math.tan(h/2)];var i=Math.cos(h),u=Math.abs(Fa/t-t/Fa)/2,M=o/(1+i);return[a(t)*Fa*(n(u*u+1-M*M)-u),a(e)*Fa*M]}function Pa(t,r){if(!r)return[t,0];var e=Math.abs(r);if(!t||e===Fa/2)return[0,r];var o,h=2*e/Fa,i=h*h,u=(8*h-i*(i+2)-5)/(2*i*(h-1)),M=u*u,s=h*u,c=i+M+2*s,f=a(Math.abs(t)-Fa/2)*Math.sqrt((o=(o=2*t/Fa)+1/o)*o-4),v=f*f,l=c*(i+M*v-1)+(1-i)*(i*((o=h+3*u)*o+4*M)+12*s*M+4*M*M),g=(f*(c+M-1)+2*Math.sqrt(l))/(4*c+v);return[a(t)*Fa*g/2,a(r)*Fa/2*n(1+f*Math.abs(g)-g*g)]}function xa(t,a){return[t*Math.sqrt(1-3*a*a/(Fa*Fa)),a]}function za(t,a){var n=.90631*Math.sin(a),r=Math.sqrt(1-n*n),e=Math.sqrt(2/(1+r*Math.cos(t/=3)));return[2.66723*r*e*Math.sin(t),1.24104*n*e]}function Aa(t,a){var r=Math.cos(a),e=Math.cos(t)*r,o=1-e,h=Math.cos(t=Math.atan2(Math.sin(t)*r,-Math.sin(a))),i=Math.sin(t);return r=n(1-e*e),[i*r-h*o,-h*r-i*o]}function Da(t,a){var n=i(t,a);return[(n[0]+2*t/Fa)/2,(n[1]+a)/2]}var Ga=1e-6,ja=Ga*Ga,Fa=Math.PI,_a=Math.sqrt(Fa),Ca=Fa/180,Ha=180/Fa,Ia=d3.geo.projection,Ba=d3.geo.projectionMutator;d3.geo.interrupt=function(t){function a(){for(var t=1e-6,a=[],e=0,o=r[0].length;o>e;++e){var h=r[0][e],i=180*h[0][0]/Fa,u=180*h[0][1]/Fa,M=180*h[1][1]/Fa,s=180*h[2][0]/Fa,c=180*h[2][1]/Fa;a.push(n([[i+t,u+t],[i+t,M-t],[s-t,M-t],[s-t,c+t]],30))}for(var e=r[1].length-1;e>=0;--e){var h=r[1][e],i=180*h[0][0]/Fa,u=180*h[0][1]/Fa,M=180*h[1][1]/Fa,s=180*h[2][0]/Fa,c=180*h[2][1]/Fa;a.push(n([[s-t,c-t],[s-t,M+t],[i+t,M+t],[i+t,u-t]],30))}return{type:"Polygon",coordinates:[d3.merge(a)]}}function n(t,a){for(var n,r,e,o=-1,h=t.length,i=t[0],u=[];h>++o;){n=t[o],r=(n[0]-i[0])/a,e=(n[1]-i[1])/a;for(var M=0;a>M;++M)u.push([i[0]+M*r,i[1]+M*e]);i=n}return u.push(n),u}var r=[[[[-Fa,0],[0,Fa/2],[Fa,0]]],[[[-Fa,0],[0,-Fa/2],[Fa,0]]]],e=d3.geo.projection(function(a,n){for(var e=0>n?-1:1,o=r[+(0>n)],h=0,i=o.length-1;i>h&&a>o[h][2][0];++h);var u=t(a-o[h][1][0],n);return u[0]+=t(o[h][1][0],e*n>e*o[h][0][1]?o[h][0][1]:n)[0],u}),o=e.stream;return e.stream=function(t){var n=e.rotate(),r=o(t),h=(e.rotate([0,0]),o(t));return e.rotate(n),r.sphere=function(){d3.geo.stream(a(),h)},r},e.lobes=function(t){return arguments.length?(r=t.map(function(t){return t.map(function(t){return[[t[0][0]*Fa/180,t[0][1]*Fa/180],[t[1][0]*Fa/180,t[1][1]*Fa/180],[t[2][0]*Fa/180,t[2][1]*Fa/180]]})}),e):r.map(function(t){return t.map(function(t){return[[180*t[0][0]/Fa,180*t[0][1]/Fa],[180*t[1][0]/Fa,180*t[1][1]/Fa],[180*t[2][0]/Fa,180*t[2][1]/Fa]]})})},e},i.invert=function(t,a){var n=t,r=a,o=25;do{var h,i=Math.sin(n),u=Math.sin(n/2),M=Math.cos(n/2),s=Math.sin(r),c=Math.cos(r),f=Math.sin(2*r),v=s*s,l=c*c,g=u*u,d=1-l*M*M,b=d?e(c*M)*Math.sqrt(h=1/d):h=0,w=2*b*c*u-t,q=b*s-a,m=h*(l*g+b*c*M*v),p=h*(.5*i*f-2*b*s*u),S=.25*h*(f*u-b*s*l*i),Q=h*(v*M+b*g*c),R=p*S-Q*m;if(!R)break;var T=(q*p-w*Q)/R,y=(w*S-q*m)/R;n-=T,r-=y}while((Math.abs(T)>Ga||Math.abs(y)>Ga)&&--o>0);return[n,r]},(d3.geo.aitoff=function(){return Ia(i)}).raw=i,(d3.geo.guyou=function(){return Ia(u)}).raw=u;var Ja=c(Fa),Ka=f(2*Math.SQRT2/Fa,Math.SQRT2,Fa);(d3.geo.mollweide=function(){return Ia(Ka)}).raw=Ka,v.invert=function(t,a){return[t/Math.cos(a),a]},(d3.geo.sinusoidal=function(){return Ia(v)}).raw=v;var La=.7109889596207567,Na=.0528035274542;l.invert=function(t,a){return a>-La?Ka.invert(t,a-Na):v.invert(t,a)},(d3.geo.sinuMollweide=function(){return Ia(l).rotate([-20,-55])}).raw=l,(d3.geo.armadillo=d).raw=g,(d3.geo.august=function(){return Ia(b)}).raw=b;var Oa=Math.log(1+Math.SQRT2);w.invert=function(t,n){if(Oa>(e=Math.abs(n)))return[t,2*Math.atan(Math.exp(n))-Fa/2];var r,e,o=Math.sqrt(8),h=Fa/4,i=25;do{var u=Math.cos(h/2),M=Math.tan(h/2);h-=r=(o*(h-Fa/4)-Math.log(M)-e)/(o-.5*u*u/M)}while(Math.abs(r)>ja&&--i>0);return[t/(Math.cos(h)*(o-1/Math.sin(h))),a(n)*h]},(d3.geo.baker=function(){return Ia(w)}).raw=w;var Ua=d3.geo.azimuthalEquidistant.raw;(d3.geo.berghaus=m).raw=q,p.invert=function(t,a){var n,r,e=2.00276,o=e*a,h=0>a?-Fa/4:Fa/4,i=25;do r=o-Math.SQRT2*Math.sin(h),h-=n=(Math.sin(2*h)+2*h-Fa*Math.sin(r))/(2*Math.cos(2*h)+2+Fa*Math.cos(r)*Math.SQRT2*Math.cos(h));while(Math.abs(n)>Ga&&--i>0);return r=o-Math.SQRT2*Math.sin(h),[t*(1/Math.cos(r)+1.11072/Math.cos(h))/e,r]},(d3.geo.boggs=function(){return Ia(p)}).raw=p,(d3.geo.bonne=function(){return o(S).parallel(45)}).raw=S;var Va=f(1,4/Fa,Fa);(d3.geo.bromley=function(){return Ia(Va)}).raw=Va,Q.invert=function(t,a){var n=(n=a/_a-1)*n;return[n>0?t*Math.sqrt(Fa/n)/2:0,r(1-n)]},(d3.geo.collignon=function(){return Ia(Q)}).raw=Q,T.invert=function(t,a){return[t,2*Math.atan(Math.exp(a))-Fa/2]},(d3.geo.conicConformal=function(){return h(R)}).raw=R,(d3.geo.conicEquidistant=function(){return h(y)}).raw=y,(d3.geo.craig=function(){return o(k)}).raw=k,E.invert=function(t,a){var n=Math.sqrt(3),e=3*r(a/(n*_a));return[_a*t/(n*(2*Math.cos(2*e/3)-1)),e]},(d3.geo.craster=function(){return Ia(E)}).raw=E,(d3.geo.cylindricalEqualArea=function(){return o(P)}).raw=P,x.invert=function(t,a){var n=Math.sqrt(8/(3*Fa)),r=a/n;return[t/(n*(1-Math.abs(r)/Fa)),r]},(d3.geo.eckert1=function(){return Ia(x)}).raw=x,z.invert=function(t,n){var e=2-Math.abs(n)/Math.sqrt(2*Fa/3);return[t*Math.sqrt(6*Fa)/(2*e),a(n)*r((4-e*e)/3)]},(d3.geo.eckert2=function(){return Ia(z)}).raw=z,A.invert=function(t,a){var r=Math.sqrt(Fa*(4+Fa))/2;return[t*r/(1+n(1-a*a*(4+Fa)/(4*Fa))),a*r/2]},(d3.geo.eckert3=function(){return Ia(A)}).raw=A,D.invert=function(t,a){var n=2*Math.sqrt(Fa/(4+Fa)),e=r(a/cy),o=Math.cos(e);return[t/(2/Math.sqrt(Fa*(4+Fa))*(1+o)),r((e+a/n*(o+2))/(2+Fa/2))]},(d3.geo.eckert4=function(){return Ia(D)}).raw=D,G.invert=function(t,a){var n=Math.sqrt(2+Fa),r=a*n/2;return[n*t/(1+Math.cos(r)),r]},(d3.geo.eckert5=function(){return Ia(G)}).raw=G,j.invert=function(t,a){var n=1+Fa/2,e=Math.sqrt(n/2);return[2*t*e/(1+Math.cos(a*=e)),r((a+Math.sin(a))/n)]},(d3.geo.eckert6=function(){return Ia(j)}).raw=j,(d3.geo.eisenlohr=function(){return Ia(F)}).raw=F,_.invert=function(t,a){var r=a/(1+Wa);return[t?t/(Wa*n(1-r*r)):0,2*Math.atan(r)]};var Wa=Math.cos(35*Ca);(d3.geo.fahey=function(){return Ia(_)}).raw=_,(d3.geo.gringorten=C).raw=H,(d3.geo.hammerRetroazimuthal=J).raw=B;var Xa=d3.geo.azimuthalEqualArea.raw;N.invert=function(t,a){var n=2*r(a/2);return[t*Math.cos(n/2)/Math.cos(n),n]},(d3.geo.hammer=L).raw=K,O.invert=function(t,a){var n=Math.abs(n=a*(0>a?.5179951515653813:.5686373742600607))>1-Ga?n>0?Fa/2:-Fa/2:r(n);return[1.1764705882352942*t/Math.cos(n),Math.abs(n=((n+=n)+Math.sin(n))*(0>a?.4102345310814193:.3736990601468637))>1-Ga?n>0?Fa/2:-Fa/2:r(n)]},(d3.geo.hatano=function(){return Ia(O)}).raw=O;var Ya=41+48/36+37/3600;(d3.geo.healpix=V).raw=U,(d3.geo.hill=X).raw=W,Y.invert=function(t,a){return Math.abs(a)>La?Ka.invert(t,a+(a>0?Na:-Na)):v.invert(t,a)},(d3.geo.homolosine=function(){return Ia(Y)}).raw=Y,Z.invert=function(t,a){return[2/3*Fa*t/Math.sqrt(Fa*Fa/3-a*a),a]},(d3.geo.kavrayskiy7=function(){return Ia(Z)}).raw=Z,(d3.geo.lagrange=ta).raw=$,aa.invert=function(t,a){var r=Math.abs(t),o=Math.abs(a),h=Fa/Math.SQRT2,i=Ga,u=Fa/2;h>o?u*=o/h:i+=6*e(h/o);for(var M=0;25>M;M++){var s=Math.sin(u),c=n(Math.cos(u)),f=Math.sin(u/2),v=Math.cos(u/2),l=Math.sin(i/6),g=Math.cos(i/6),d=.5*i*(1+c)-r,b=u/(v*g)-o,w=c?-.25*i*s/c:0,q=.5*(1+c),m=(1+.5*u*f/v)/(v*g),p=u/v*(l/6)/(g*g),S=w*p-m*q,Q=(d*p-b*q)/S,R=(b*w-d*m)/S;if(u-=Q,i-=R,Ga>Math.abs(Q)&&Ga>Math.abs(R))break}return[0>t?-i:i,0>a?-u:u]},(d3.geo.larrivee=function(){return Ia(aa)}).raw=aa,na.invert=function(t,a){var n=t,r=a,e=50;do{var o=n*n,h=r*r,i=n*r,u=n*(.975534+h*(-.119161+o*-.0143059+h*-.0547009))-t,M=r*(1.00384+o*(.0802894+h*-.02855+199025e-9*o)+h*(.0998909+h*-.0491032))-a,s=.975534-h*(.119161+.0143059*3*o+.0547009*h),c=-i*(.238322+.2188036*h+.0286118*o),f=i*(.1605788+7961e-7*o+-0.0571*h),v=1.00384+o*(.0802894+199025e-9*o)+h*(3*(.0998909-.02855*o)-.245516*h),l=c*f-v*s,g=(M*c-u*v)/l,d=(u*f-M*s)/l;n-=g,r-=d}while((Math.abs(g)>Ga||Math.abs(d)>Ga)&&--e>0);return[n,r]},(d3.geo.laskowski=function(){return Ia(na)}).raw=na,ra.invert=function(t,n){var o=t*t,h=n*n,i=h+1,u=t?Math.SQRT1_2*Math.sqrt((i-Math.sqrt(o*o+2*o*(h-1)+i*i))/o+1):1/Math.sqrt(i);return[r(t*u),a(n)*e(u)]},(d3.geo.littrow=function(){return Ia(ra)}).raw=ra,(d3.geo.loximuthal=function(){return o(ea).parallel(40)}).raw=ea,oa.invert=function(t,a){return[t,2.5*Math.atan(Math.exp(.8*a))-.625*Fa]},(d3.geo.miller=function(){return Ia(oa)}).raw=oa;var Za={alaska:[[.9972523,0],[.0052513,-.0041175],[.0074606,.0048125],[-.0153783,-.1968253],[.0636871,-.1408027],[.3660976,-.2937382]],gs48:[[.98879,0],[0,0],[-.050909,0],[0,0],[.075528,0]],gs50:[[.984299,0],[.0211642,.0037608],[-.1036018,-.0575102],[-.0329095,-.0320119],[.0499471,.1223335],[.026046,.0899805],[7388e-7,-.1435792],[.0075848,-.1334108],[-.0216473,.0776645],[-.0225161,.0853673]],miller:[[.9245,0],[0,0],[.01943,0]],lee:[[.721316,0],[0,0],[-.00881625,-.00617325]]};(d3.geo.modifiedStereographic=ia).raw=ha,ua.invert=function(t,a){var n=Math.sqrt(6),e=Math.sqrt(7),o=3*r(a*e/9);return[t*e/(n*(2*Math.cos(2*o/3)-1)),r(3*Math.sin(o)*n/7)]},(d3.geo.mtFlatPolarParabolic=function(){return Ia(ua)}).raw=ua,Ma.invert=function(t,a){var n=a*Math.sqrt(2+Math.SQRT2)/(2*Math.sqrt(3)),e=2*r(n);return[3*Math.SQRT2*t/(1+2*Math.cos(e)/Math.cos(e/2)),r((n+Math.sin(e))/(1+Math.SQRT1_2))]},(d3.geo.mtFlatPolarQuartic=function(){return Ia(Ma)}).raw=Ma,sa.invert=function(t,a){var n=Math.sqrt(6/(4+Fa)),e=a/n;return Ga>Math.abs(Math.abs(e)-Fa/2)&&(e=0>e?-Fa/2:Fa/2),[1.5*t/(n*(.5+Math.cos(e))),r((e/2+Math.sin(e))/(1+Fa/4))]},(d3.geo.mtFlatPolarSinusoidal=function(){return Ia(sa)}).raw=sa,ca.invert=function(t,a){var n,r=a,e=25;do{var o=r*r,h=o*o;r-=n=(r*(1.007226+o*(.015085+h*(-.044475+.028874*o-.005916*h)))-a)/(1.007226+o*(.045255+h*(-0.311325+.259866*o-.005916*11*h)))}while(Math.abs(n)>Ga&&--e>0);return[t/(.8707+(o=r*r)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),r]},(d3.geo.naturalEarth=function(){return Ia(ca)}).raw=ca,fa.invert=function(t,a){for(var n=a/2,r=0,e=1/0;10>r&&Math.abs(e)>Ga;r++){var o=Math.cos(a/2);a-=e=(a-Math.tan(a/2)-n)/(1-.5/(o*o))}return[2*t/(1+Math.cos(a)),a]},(d3.geo.nellHammer=function(){return Ia(fa)}).raw=fa,(d3.geo.peirceQuincuncial=function(){return Ia(va).rotate([-90,-90,45]).clipAngle(180-1e-6)}).raw=va,la.invert=function(t,a){if(Ga>Math.abs(a))return[t,0];for(var n=t*t+a*a,e=a,o=0,h=1/0;10>o&&Math.abs(h)>Ga;o++){var i=Math.tan(e);e-=h=(a*(e*i+1)-e-.5*(e*e+n)*i)/((e-a)/i-1)}return[r(t*Math.tan(e))/Math.sin(e),e]},(d3.geo.polyconic=function(){return Ia(la)}).raw=la,(d3.geo.rectangularPolyconic=function(){return o(ga)}).raw=ga;var $a=[[.9986,-.062],[1,0],[.9986,.062],[.9954,.124],[.99,.186],[.9822,.248],[.973,.31],[.96,.372],[.9427,.434],[.9216,.4958],[.8962,.5571],[.8679,.6176],[.835,.6769],[.7986,.7346],[.7597,.7903],[.7186,.8435],[.6732,.8936],[.6213,.9394],[.5722,.9761],[.5322,1]];$a.forEach(function(t){t[1]*=1.0144}),da.invert=function(t,a){var n=2*a/Fa,r=90*n,e=Math.min(18,Math.abs(r/5)),o=Math.max(0,Math.floor(e));do{var h=$a[o][1],i=$a[o+1][1],u=$a[Math.min(19,o+2)][1],M=u-h,s=u-2*i+h,c=2*(Math.abs(n)-i)/M,f=s/M,v=c*(1-f*c*(1-2*f*c));if(v>=0||1===o){r=(a>=0?5:-5)*(v+e);var l,g=50;do e=Math.min(18,Math.abs(r)/5),o=Math.floor(e),v=e-o,h=$a[o][1],i=$a[o+1][1],u=$a[Math.min(19,o+2)][1],r-=(l=(a>=0?Fa:-Fa)/2*(i+v*(u-h)/2+v*v*(u-2*i+h)/2)-a)*Ha;while(Math.abs(l)>ja&&--g>0);break}}while(--o>=0);var d=$a[o][0],b=$a[o+1][0],w=$a[Math.min(19,o+2)][0];return[t/(b+v*(w-d)/2+v*v*(w-2*b+d)/2),r*Ca]},(d3.geo.robinson=function(){return Ia(da)}).raw=da,(d3.geo.satellite=qa).raw=wa,ma.invert=function(t,a){var n=a/1.70711,r=Math.sin(Fa/4*n);return[t/(.74482-.34588*r*r),2*Math.atan(n)]},(d3.geo.times=function(){return Ia(ma)}).raw=ma,(d3.geo.twoPointAzimuthal=Sa).raw=pa,(d3.geo.twoPointEquidistant=Ra).raw=Qa,ya.invert=function(t,n){if(Ga>Math.abs(n))return[t,0];if(Ga>Math.abs(t))return[0,Fa/2*Math.sin(2*Math.atan(n/Fa))];var r=(t/=Fa)*t,o=(n/=Fa)*n,h=r+o,i=h*h,u=-Math.abs(n)*(1+h),M=u-2*o+r,s=-2*u+1+2*o+i,c=o/s+(2*M*M*M/(s*s*s)-9*u*M/(s*s))/27,f=(u-M*M/(3*s))/s,v=2*Math.sqrt(-f/3),l=e(3*c/(f*v))/3;return[Fa*(h-1+Math.sqrt(1+2*(r-o)+i))/(2*t),a(n)*Fa*(-v*Math.cos(l+Fa/3)-M/(3*s))]},(d3.geo.vanDerGrinten=function(){return Ia(ya)}).raw=ya,(d3.geo.vanDerGrinten2=function(){return Ia(ka)}).raw=ka,(d3.geo.vanDerGrinten3=function(){return Ia(Ea)}).raw=Ea,(d3.geo.vanDerGrinten4=function(){return Ia(Pa)}).raw=Pa;var tn=function(){var t=4*Fa+3*Math.sqrt(3),a=2*Math.sqrt(2*Fa*Math.sqrt(3)/t);return f(a*Math.sqrt(3)/Fa,a,t/6)}();(d3.geo.wagner4=function(){return Ia(tn)}).raw=tn,xa.invert=function(t,a){return[t/Math.sqrt(1-3*a*a/(Fa*Fa)),a]},(d3.geo.wagner6=function(){return Ia(xa)}).raw=xa,za.invert=function(t,a){var n=t/2.66723,e=a/1.24104,o=Math.sqrt(n*n+e*e),h=2*r(o/2);return[3*Math.atan2(t*Math.tan(h),2.66723*o),o&&r(a*Math.sin(h)/(1.24104*.90631*o))]},(d3.geo.wagner7=function(){return Ia(za)}).raw=za,(d3.geo.wiechel=function(){return Ia(Aa)}).raw=Aa,Da.invert=function(t,a){var n=t,r=a,o=25;do{var h,i=Math.cos(r),u=Math.sin(r),M=Math.sin(2*r),s=u*u,c=i*i,f=Math.sin(n),v=Math.cos(n/2),l=Math.sin(n/2),g=l*l,d=1-c*v*v,b=d?e(i*v)*Math.sqrt(h=1/d):h=0,w=.5*(2*b*i*l+2*n/Fa)-t,q=.5*(b*u+r)-a,m=.5*h*(c*g+b*i*v*s)+1/Fa,p=h*(f*M/4-b*u*l),S=.125*h*(M*l-b*u*c*f),Q=.5*h*(s*v+b*g*i)+.5,R=p*S-Q*m,T=(q*p-w*Q)/R,y=(w*S-q*m)/R;n-=T,r-=y}while((Math.abs(T)>Ga||Math.abs(y)>Ga)&&--o>0);return[n,r]},(d3.geo.winkel3=function(){return Ia(Da)}).raw=Da})();