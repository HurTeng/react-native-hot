__d(function(e,o,s,c){var r=o(91),n=o(92),i=r(),v=[1|i[0],i[1],i[2],i[3],i[4],i[5]],t=16383&(i[6]<<8|i[7]),a=0,d=0;s.exports=function(e,o,s){var c=o&&s||0,r=o||[],i=void 0!==(e=e||{}).clockseq?e.clockseq:t,u=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:d+1,m=u-a+(f-d)/1e4;if(m<0&&void 0===e.clockseq&&(i=i+1&16383),(m<0||u>a)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');a=u,d=f,t=i;var k=(1e4*(268435455&(u+=122192928e5))+f)%4294967296;r[c++]=k>>>24&255,r[c++]=k>>>16&255,r[c++]=k>>>8&255,r[c++]=255&k;var l=u/4294967296*1e4&268435455;r[c++]=l>>>8&255,r[c++]=255&l,r[c++]=l>>>24&15|16,r[c++]=l>>>16&255,r[c++]=i>>>8|128,r[c++]=255&i;for(var q=e.node||v,w=0;w<6;++w)r[c+w]=q[w];return o||n(r)}},90);