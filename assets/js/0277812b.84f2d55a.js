"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[736],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return g}});var l=r(7294);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,l)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,l,s=function(t,e){if(null==t)return{};var r,l,s={},o=Object.keys(t);for(l=0;l<o.length;l++)r=o[l],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)r=o[l],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}var n=l.createContext({}),k=function(t){var e=l.useContext(n),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},d=function(t){var e=k(t.components);return l.createElement(n.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},f=l.forwardRef((function(t,e){var r=t.components,s=t.mdxType,o=t.originalType,n=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),f=k(r),g=s,u=f["".concat(n,".").concat(g)]||f[g]||i[g]||o;return r?l.createElement(u,a(a({ref:e},d),{},{components:r})):l.createElement(u,a({ref:e},d))}));function g(t,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var n in e)hasOwnProperty.call(e,n)&&(c[n]=e[n]);c.originalType=t,c.mdxType="string"==typeof t?t:s,a[1]=c;for(var k=2;k<o;k++)a[k]=r[k];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9423:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return n},metadata:function(){return k},toc:function(){return d},default:function(){return f}});var l=r(7462),s=r(3366),o=(r(7294),r(3905)),a=["components"],c={title:"Contract API",sidebar_position:4},n="Augur Turbo - Contract API",k={unversionedId:"turbo/contract-api",id:"turbo/contract-api",isDocsHomePage:!1,title:"Contract API",description:"Augur Turbo has a relatively simple contract design, consisting of three major components.",source:"@site/docs/turbo/contract-api.md",sourceDirName:"turbo",slug:"/turbo/contract-api",permalink:"/turbo/contract-api",editUrl:"https://github.com/AugurProject/docs/edit/master/docs/turbo/contract-api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Contract API",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Contract Overview",permalink:"/turbo/contract-overview"},next:{title:"Hardhat Tasks",permalink:"/turbo/hardhat-tasks"}},d=[{value:"Actors",id:"actors",children:[],level:2},{value:"Index",id:"index",children:[],level:2}],i={toc:d};function f(t){var e=t.components,r=(0,s.Z)(t,a);return(0,o.kt)("wrapper",(0,l.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"augur-turbo---contract-api"},"Augur Turbo - Contract API"),(0,o.kt)("p",null,"Augur Turbo has a relatively simple contract design, consisting of three major components."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Market Factories"),(0,o.kt)("li",{parentName:"ul"},"AMM Factories"),(0,o.kt)("li",{parentName:"ul"},"FeePot")),(0,o.kt)("p",null,"In the current system there is very little trust of any of these contracts."),(0,o.kt)("p",null,"A market factory is a contract interface that Chainlink nodes can use to put market data on chain and update it upon resolution. For each of these markets, a user will interact with an AMMFactory to create an AMM associated with that market. In the current implementation this AMM is a simple Balancer v1 pool."),(0,o.kt)("p",null,"The FeePot is a contract which will be used in the future to handle REPv2 staking for claiming a portion of fees generated by trading in the system."),(0,o.kt)("h2",{id:"actors"},"Actors"),(0,o.kt)("p",null,"There are four main Actors in the system."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Liquidity Providers (LPs)"),(0,o.kt)("li",{parentName:"ol"},"Traders"),(0,o.kt)("li",{parentName:"ol"},"Chainlink Nodes"),(0,o.kt)("li",{parentName:"ol"},"UIs / Data Clients")),(0,o.kt)("p",null,"Each API is associated with one or more of these actors."),(0,o.kt)("h2",{id:"index"},"Index"),(0,o.kt)("table",{border:"2",cellspacing:"0",cellpadding:"6",rules:"groups",frame:"hsides"},(0,o.kt)("colgroup",null,(0,o.kt)("col",{class:"org-left"}),(0,o.kt)("col",{class:"org-left"}),(0,o.kt)("col",{class:"org-left"}),(0,o.kt)("col",{class:"org-left"}),(0,o.kt)("col",{class:"org-left"}),(0,o.kt)("col",{class:"org-left"})),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"col",class:"org-left"},"Actor"),(0,o.kt)("th",{scope:"col",class:"org-left"},"Action"),(0,o.kt)("th",{scope:"col",class:"org-left"},"Contract"),(0,o.kt)("th",{scope:"col",class:"org-left"},"Method"),(0,o.kt)("th",{scope:"col",class:"org-left"},"Approvals"),(0,o.kt)("th",{scope:"col",class:"org-left"},"Notes"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"LP"),(0,o.kt)("td",{class:"org-left"},"add initial liquidity"),(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"createPool"),(0,o.kt)("td",{class:"org-left"},"collateral"),(0,o.kt)("td",{class:"org-left"},"\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"LP"),(0,o.kt)("td",{class:"org-left"},"add subsequent liquidity"),(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"addLiquidity"),(0,o.kt)("td",{class:"org-left"},"collateral"),(0,o.kt)("td",{class:"org-left"},"\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"LP"),(0,o.kt)("td",{class:"org-left"},"remove liquidity"),(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"removeLiquidity"),(0,o.kt)("td",{class:"org-left"},"lp token"),(0,o.kt)("td",{class:"org-left"},"each market has its own lp token")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"LP, trader"),(0,o.kt)("td",{class:"org-left"},"trade winning shares for collateral"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"claimWinnings, claimManyWinnings"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"trader"),(0,o.kt)("td",{class:"org-left"},"trade collateral for shares"),(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"buy"),(0,o.kt)("td",{class:"org-left"},"collateral"),(0,o.kt)("td",{class:"org-left"},"\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"trader"),(0,o.kt)("td",{class:"org-left"},"trade shares for collateral"),(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"sellForCollateral"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"share tokens trust AMMFactory so no approval needed")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"link node"),(0,o.kt)("td",{class:"org-left"},"create market"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"createMarket"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"link node only. use encodeCreation to build the argument. creates 3 markets off of the event")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"link node"),(0,o.kt)("td",{class:"org-left"},"resolve market"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"trustedResolveMarkets"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"link node only. use encodeResolutin to build the argument. resolves all 3 markets for the event")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"link node"),(0,o.kt)("td",{class:"org-left"},"claim settlement fees"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"claimSettlementFees"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"link node only")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"UI"),(0,o.kt)("td",{class:"org-left"},"get share prices"),(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"tokenRatios"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"one of each share equals one collateral, adjusted by shareFactor")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"UI"),(0,o.kt)("td",{class:"org-left"},"get pool liquidity"),(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"getPoolBalances and getPoolWeights"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"one of each share equals one collateral, adjusted by shareFactor")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"UI"),(0,o.kt)("td",{class:"org-left"},"get trading fee"),(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"getSwapFee"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"UI"),(0,o.kt)("td",{class:"org-left"},"get someone's token balance"),(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"getPoolTokenBalance"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"works well with multicall")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"UI"),(0,o.kt)("td",{class:"org-left"},"get pool associated with market"),(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"getPool"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"UI"),(0,o.kt)("td",{class:"org-left"},"get basic market info"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"getMarket"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"UI"),(0,o.kt)("td",{class:"org-left"},"get market info for SportsLink"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"getMarketDetails"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"UI"),(0,o.kt)("td",{class:"org-left"},"get quantity of markets"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"marketCount"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"market ids increment from 1 so this implies the list of all markets")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"turn collateral into n of each share"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"mintShares"),(0,o.kt)("td",{class:"org-left"},"collateral"),(0,o.kt)("td",{class:"org-left"},"AMMFactory uses this for more liquidity-efficient buys")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"AMMFactory"),(0,o.kt)("td",{class:"org-left"},"turn n of each share into collateral"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"burnShares"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"AMMFactory uses this for more liquidity-efficient sells")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"link node"),(0,o.kt)("td",{class:"org-left"},"check if market is resolved"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"isMarketResolved"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"link node"),(0,o.kt)("td",{class:"org-left"},"list all unresolved markets"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"listUnresolvedMarkets"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"unusable on-chain due to O(n) gas cost")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"nobody"),(0,o.kt)("td",{class:"org-left"},"get conversion rate from shares to collateral"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"calcCost"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"does the shareFactor adjustment for shares and collateral. dies if there's a remainder")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"nobody"),(0,o.kt)("td",{class:"org-left"},"get conversion rate from collateral to shares"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"calcShares"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"reverse of calcCost")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"link node"),(0,o.kt)("td",{class:"org-left"},"get markets associated with event"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"getEventMarkets"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"list of 3 market IDS. zero means the market wasn't created")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"link node"),(0,o.kt)("td",{class:"org-left"},"check if event was already registered"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"isEventRegistered"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"return true only if all markets were created - often the first (head2head) is created alone")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"link node"),(0,o.kt)("td",{class:"org-left"},"pack market creation args into a bytes32"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"encodeCreation"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"use with createMarket")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"nobody"),(0,o.kt)("td",{class:"org-left"},"unpack market creation args from bytes32"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"decodeCreation"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"used internally")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"link node"),(0,o.kt)("td",{class:"org-left"},"pack market resolution args into a bytes32"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"encodeResolution"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"use with trustedResolveMarkets")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"org-left"},"nobody"),(0,o.kt)("td",{class:"org-left"},"unpack market resolution args from a bytes32"),(0,o.kt)("td",{class:"org-left"},"SportsLinkMarketFactory"),(0,o.kt)("td",{class:"org-left"},"decodeResolution"),(0,o.kt)("td",{class:"org-left"},"\xa0"),(0,o.kt)("td",{class:"org-left"},"used internally")))))}f.isMDXComponent=!0}}]);