(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),o=n(8),u=n.n(o),a=(n(14),n(15),n(6)),s=n(2),c=n(3),l=n(5),f=n(4),d=(n(16),function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props,e=t.col,n=t.isFinish,i=t.isStart,o=t.isWall,u=t.onMouseDown,a=t.onMouseEnter,s=t.onMouseUp,c=t.row,l=n?"node-finish":i?"node-start":o?"node-wall":"";return r.a.createElement("div",{id:"node-".concat(c,"-").concat(e),className:"node ".concat(l),onMouseDown:function(){return u(c,e)},onMouseEnter:function(){return a(c,e)},onMouseUp:function(){return s()}})}}]),n}(i.Component)),h=n(1);function v(t,e,n){var i=[];e.distance=0;for(var r=function(t){var e,n=[],i=Object(h.a)(t);try{for(i.s();!(e=i.n()).done;){var r,o=e.value,u=Object(h.a)(o);try{for(u.s();!(r=u.n()).done;){var a=r.value;n.push(a)}}catch(s){u.e(s)}finally{u.f()}}}catch(s){i.e(s)}finally{i.f()}return n}(t);r.length;){p(r);var o=r.shift();if(!o.isWall){if(o.distance===1/0)return i;if(o.isVisited=!0,i.push(o),o===n)return i;g(o,t)}}}function p(t){t.sort((function(t,e){return t.distance-e.distance}))}function g(t,e){var n,i=function(t,e){var n=[],i=t.col,r=t.row;r>0&&n.push(e[r-1][i]);r<e.length-1&&n.push(e[r+1][i]);i>0&&n.push(e[r][i-1]);i<e[0].length-1&&n.push(e[r][i+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),r=Object(h.a)(i);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.distance=t.distance+1,o.previousNode=t}}catch(u){r.e(u)}finally{r.f()}}function m(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e}function w(t,e,n){if(!e||!n||e===n)return!1;var i=[];e.distance=0;for(var r=function(t){var e,n=[],i=Object(h.a)(t);try{for(i.s();!(e=i.n()).done;){var r,o=e.value,u=Object(h.a)(o);try{for(u.s();!(r=u.n()).done;){var a=r.value;n.push(a)}}catch(s){u.e(s)}finally{u.f()}}}catch(s){i.e(s)}finally{i.f()}return n}(t);r.length;){var o=b(r);if(!b.isWall){if(b.distance===1/0)return i;if(o.isVisited=!0,i.push(b),b===n)return i;j(b,t)}}}function b(t){for(var e,n,i=0;i<t.length;i++)(!e||e.distance>t[i].distance||e.distance===t[i].distance)&&(e=t[i],n=i);return t.splice(n,1),e}function y(t,e){var n=function(t,e){var n=t.id.split("-"),i=e.id.split("-"),r=parseInt(n[0]),o=parseInt(n[1]),u=parseInt(i[0]),a=parseInt(i[1]);if(u<r)return console.log("Distance between "+t+" and "+e+" is 3"),3;if(u>r)return console.log("Distance between "+t+" and "+e+" is 1"),1;if(a<o||o<a)return console.log("Distance between "+t+" and "+e+" is 2"),2;if(u<r&&o===a){if("up"===t.direction)return[1,["f"],"up"];if("right"===t.direction)return[2,["l","f"],"up"];if("left"===t.direction)return[2,["r","f"],"up"];if("down"===t.direction)return[3,["r","r","f"],"up"];if("up-right"===t.direction)return[1.5,null,"up"];if("down-right"===t.direction)return[2.5,null,"up"];if("up-left"===t.direction)return[1.5,null,"up"];if("down-left"===t.direction)return[2.5,null,"up"]}else if(u>r&&o===a){if("up"===t.direction)return[3,["r","r","f"],"down"];if("right"===t.direction)return[2,["r","f"],"down"];if("left"===t.direction)return[2,["l","f"],"down"];if("down"===t.direction)return[1,["f"],"down"];if("up-right"===t.direction)return[2.5,null,"down"];if("down-right"===t.direction)return[1.5,null,"down"];if("up-left"===t.direction)return[2.5,null,"down"];if("down-left"===t.direction)return[1.5,null,"down"]}if(a<o&&r===u){if("up"===t.direction)return[2,["l","f"],"left"];if("right"===t.direction)return[3,["l","l","f"],"left"];if("left"===t.direction)return[1,["f"],"left"];if("down"===t.direction)return[2,["r","f"],"left"];if("up-right"===t.direction)return[2.5,null,"left"];if("down-right"===t.direction)return[2.5,null,"left"];if("up-left"===t.direction)return[1.5,null,"left"];if("down-left"===t.direction)return[1.5,null,"left"]}else if(a>o&&r===u){if("up"===t.direction)return[2,["r","f"],"right"];if("right"===t.direction)return[1,["f"],"right"];if("left"===t.direction)return[3,["r","r","f"],"right"];if("down"===t.direction)return[2,["l","f"],"right"];if("up-right"===t.direction)return[1.5,null,"right"];if("down-right"===t.direction)return[1.5,null,"right"];if("up-left"===t.direction)return[2.5,null,"right"];if("down-left"===t.direction)return[2.5,null,"right"]}}(t,e),i=t.distance+n;i<e.distance&&(e.distance=i,e.previousNode=t)}function j(t,e){var n,i=function(t,e){var n=[],i=t.col,r=t.row;r>0&&n.push(e[r-1][i]);r<e.length-1&&n.push(e[r+1][i]);i>0&&n.push(e[r][i-1]);i<e[0].length-1&&n.push(e[r][i+1]);r>0&&i>0&&n.push(e[r-1][i-1]);r<e.length-1&&i<e[0].length-1&&n.push(e[r+1][i+1]);r>0&&i<e[0].length-1&&n.push(e[r-1][i+1]);r<e.length-1&&i>0&&n.push(e[r+1][i-1]);return n.filter((function(t){return!t.isVisited}))}(t,e),r=Object(h.a)(i);try{for(r.s();!(n=r.n()).done;){var o=n.value;y(t,o),o.distance=t.distance+1,o.previousNode=t}}catch(u){r.e(u)}finally{r.f()}}n(17);var k=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={grid:[],mouseIsPressed:!1},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=E();this.setState({grid:t})}},{key:"handleMouseDown",value:function(t,e){var n=O(this.state.grid,t,e);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(t,e){if(this.state.mouseIsPressed){var n=O(this.state.grid,t,e);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateDijkstra",value:function(t,e){for(var n=this,i=function(i){if(i===t.length)return setTimeout((function(){n.animateShortestPath(e)}),5*i),{v:void 0};setTimeout((function(){var e=t[i];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited"}),5*i)},r=0;r<=t.length;r++){var o=i(r);if("object"===typeof o)return o.v}}},{key:"animateShortestPath",value:function(t){for(var e=function(e){setTimeout((function(){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),25*e)},n=0;n<t.length;n++)e(n)}},{key:"visualizeDijkstra",value:function(){var t=this.state.grid,e=t[10][15],n=t[10][35],i=v(t,e,n),r=m(n);this.animateDijkstra(i,r)}},{key:"visualizeAstar",value:function(){var t=this.state.grid,e=t[10][15],n=t[10][35],i=w(t,e,n),r=m(n);this.animateAstar(i,r)}},{key:"animateAstar",value:function(t,e){for(var n=this,i=function(i){if(i===t.length)return setTimeout((function(){n.animateShortestPath(e)}),5*i),{v:void 0};setTimeout((function(){var e=t[i];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited"}),5*i)},r=0;r<=t.length;r++){var o=i(r);if("object"===typeof o)return o.v}}},{key:"render",value:function(){var t=this,e=this.state,n=e.grid,i=e.mouseIsPressed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn menu_btn",onClick:function(){return t.visualizeDijkstra()}},"Visualize Dijkstra's Algorithm"),r.a.createElement("button",{className:"btn_disabled",onClick:function(){return t.visualizeAstar()},disabled:!0},"Visualize A* Algorithm [in dev]"),r.a.createElement("button",{className:"btn menu_btn",onClick:function(){return window.location.reload(!1)}},"Clear Grid"),r.a.createElement("div",{className:"grid"},n.map((function(e,n){return r.a.createElement("div",{key:n},e.map((function(e,n){var o=e.row,u=e.col,a=e.isFinish,s=e.isStart,c=e.isWall;return r.a.createElement(d,{key:n,col:u,isFinish:a,isStart:s,isWall:c,mouseIsPressed:i,onMouseDown:function(e,n){return t.handleMouseDown(e,n)},onMouseEnter:function(e,n){return t.handleMouseEnter(e,n)},onMouseUp:function(){return t.handleMouseUp()},row:o})})))}))))}}]),n}(i.Component),E=function(){for(var t=[],e=0;e<20;e++){for(var n=[],i=0;i<50;i++)n.push(M(i,e));t.push(n)}return t},M=function(t,e){return{col:t,row:e,isStart:10===e&&15===t,isFinish:10===e&&35===t,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},O=function(t,e,n){var i=t.slice(),r=i[e][n],o=Object(a.a)(Object(a.a)({},r),{},{isWall:!r.isWall});return i[e][n]=o,i};var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.366aa230.chunk.js.map