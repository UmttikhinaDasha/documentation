"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3267],{9387:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var i=n(3117),r=n(102),o=(n(7294),n(4137)),s=["components"],a={sidebar_position:7},l="Entities",d={unversionedId:"reference/layers/entities",id:"reference/layers/entities",isDocsHomePage:!1,title:"Entities",description:"entities-themed-bordered",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/layers/entities.md",sourceDirName:"reference/layers",slug:"/reference/layers/entities",permalink:"/en/docs/reference/layers/entities",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/reference/layers/entities.md",tags:[],version:"current",lastUpdatedAt:1635072443,formattedLastUpdatedAt:"10/24/2021",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/en/docs/reference/layers/features"},next:{title:"Shared",permalink:"/en/docs/reference/layers/shared"}},u=[{value:"Description",id:"description",children:[],level:2},{value:"Structure",id:"structure",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Using the Entity Model",id:"using-the-entity-model",children:[],level:3},{value:"Using Entity components",id:"using-entity-components",children:[],level:3}],level:2}],c={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"entities"},"Entities"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"entities-themed-bordered",src:n(3698).Z})),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"There are usually placed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"business entities, for building the business logic of the application",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"For example: ",(0,o.kt)("inlineCode",{parentName:"em"},"user"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"order"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"post"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"journal"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"navigation"),", ...")))),(0,o.kt)("li",{parentName:"ul"},"components with the representation of entities, for building the UI of the overlying layers",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"For example: ",(0,o.kt)("inlineCode",{parentName:"em"},"UserCard"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"TweetCard"),", ..."))))),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 entities/{slice}\n          \u251c\u2500\u2500 lib/\n          \u251c\u2500\u2500 model/\n          \u251c\u2500\u2500 ui/\n          \u2514\u2500\u2500 index.ts\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"using-the-entity-model"},"Using the Entity Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=**/**/index.tsx",title:"**/**/index.tsx"},'import { viewerModel } from "entities/viewer";\n\nexport const Wallet = () => {\n    const viewer = viewerModel.useViewer();\n    const { moneyCount } = viewer;\n    \n    ...\n}\n')),(0,o.kt)("h3",{id:"using-entity-components"},"Using Entity components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/book/index.ts",title:"entities/book/index.ts"},'export { BookCard, ... } from "./ui";\nexport * as bookModel from "./model";\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/**/index.tsx",title:"pages/**/index.tsx"},'import { BookCard } from "entities/book";\n\nexport const CatalogPage = () => {\n    const bookQuery = ...;\n    return (\n        ...\n        {bookQuery.map((book) => (\n            <Book key={book.id} data={book} />\n        ))}\n        ...\n    )\n}\n')))}p.isMDXComponent=!0},3698:function(e,t,n){t.Z=n.p+"assets/images/entities-5371350e42cfad7a170dfe64658c5839.png"}}]);