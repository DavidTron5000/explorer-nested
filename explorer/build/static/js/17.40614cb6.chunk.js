(this["webpackJsonpvendia-explorer"]=this["webpackJsonpvendia-explorer"]||[]).push([[17],{217:function(e,r,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var n=a(t(199)),i=t(55),s=["error","warning","information","hint"],o={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};n.default.registerHelper("lint","graphql",(function(e,r){var t=r.schema;return i.getDiagnostics(e,t,r.validationRules,void 0,r.externalFragments).map((function(e){return{message:e.message,severity:e.severity?s[e.severity-1]:s[0],type:e.source?o[e.source]:void 0,from:n.default.Pos(e.range.start.line,e.range.start.character),to:n.default.Pos(e.range.end.line,e.range.end.character)}}))}))}}]);
//# sourceMappingURL=17.40614cb6.chunk.js.map