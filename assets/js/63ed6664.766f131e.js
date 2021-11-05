"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[667],{3233:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return k}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],o={title:"Hardhat Tasks",slug:"/tasks"},l="Hardhat Tasks",u={unversionedId:"turbo/hardhat-tasks",id:"turbo/hardhat-tasks",isDocsHomePage:!1,title:"Hardhat Tasks",description:"Augur Turbo takes advantage of Hardhat to handle smart contract development,",source:"@site/docs/turbo/hardhat-tasks.md",sourceDirName:"turbo",slug:"/tasks",permalink:"/tasks",editUrl:"https://github.com/AugurProject/docs/edit/main/website/docs/turbo/hardhat-tasks.md",tags:[],version:"current",frontMatter:{title:"Hardhat Tasks",slug:"/tasks"},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/"},next:{title:"Augur Turbo",permalink:"/turbo"}},d=[{value:"Utilities",id:"utilities",children:[],level:2},{value:"Selecting a network",id:"selecting-a-network",children:[],level:2},{value:"Specifying a private key",id:"specifying-a-private-key",children:[],level:2},{value:"Canned Markets",id:"canned-markets",children:[],level:2},{value:"The Rundown",id:"the-rundown",children:[],level:2},{value:"Fund link",id:"fund-link",children:[],level:2},{value:"Request score",id:"request-score",children:[],level:2}],c={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"hardhat-tasks"},"Hardhat Tasks"),(0,s.kt)("p",null,"Augur Turbo takes advantage of Hardhat to handle smart contract development,\nand comes pre-packaged with a variety of useful tasks for interacting with the\nAugur contracts."),(0,s.kt)("p",null,"The source for these tasks are all available in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/AugurProject/turbo/tree/dev/packages/smart/tasks"},"packages/smart/tasks\n")," directory."),(0,s.kt)("h2",{id:"utilities"},"Utilities"),(0,s.kt)("p",null,"There are a variety of utility tasks available, for instance:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Print the list of accounts\nyarn hardhat accounts\n\n# Print an account's balance\nyarn hardhat --account [account address]\n")),(0,s.kt)("p",null,"To get a complete list run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn hardhat\n")),(0,s.kt)("h2",{id:"selecting-a-network"},"Selecting a network"),(0,s.kt)("p",null,"Default network settings are registered to allow you to select a network. These\nare defined in\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/AugurProject/turbo/tree/dev/packages/smart/hardhat.config.ts"},"packages/smart/hardhat.config.ts"),".\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"--network")," argument can be used with hardhat tasks to direct the task to\nconnect to a specific network."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn hardhat [task] --network [kovan|mumbai|arbitrum|...]\n")),(0,s.kt)("h2",{id:"specifying-a-private-key"},"Specifying a private key"),(0,s.kt)("p",null,"To deploy to anywhere but hardhat or localhost, you must provide a private key using an environment variable like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 yarn hardhat --network kovan deploy\n")),(0,s.kt)("p",null,"Or you may export the environment variable into your shell's ENV list:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80\nyarn hardhat --network kovan deploy\n")),(0,s.kt)("h2",{id:"canned-markets"},"Canned Markets"),(0,s.kt)("p",null,"A variety of test markets can be created by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"cannedMarkets"),"\ntask. This is useful for both local and testnet deploys, allowing you to\nstart with a list of markets that is consistent."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn hardhat cannedMarkets\n")),(0,s.kt)("h2",{id:"the-rundown"},"The Rundown"),(0,s.kt)("p",null,"We are adding tasks to make it easy to fetch data from TheRunDown. In order to\nuse these you will need a rundown api key from rapidapi."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"yarn hardhat fetch-rundown-event --event [eventId] --key [rundownApiKey]\n")),(0,s.kt)("h2",{id:"fund-link"},"Fund link"),(0,s.kt)("p",null,"This task funds an address with 1 LINK. Call this task with a private key and network. Make sure that private key account has LINK. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"yarn hardhat fundLink --contract [contractAddress]\n")),(0,s.kt)("h2",{id:"request-score"},"Request score"),(0,s.kt)("p",null,"This request the score for a match. Call this task with a private key and network. Fund TheRundownChainlink contract with LINK first. You can use the fundLink task for this. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"yarn hardhat requestScore\n")))}k.isMDXComponent=!0}}]);