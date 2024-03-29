/**
 * @namespace transitions
 * @author Mike Amundsen (@mamund)
 * @created 2020-02-01
 * @description
 * DARRT Framework
 * transitions
 */

/**
 * @memberof transitions
 * @property {object} forms          - All forms.
 * @property {array} forms.pageForms - Page forms.
 * @property {array} forms.itemForms - Item forms.
 * @description
 * page- and item-level forms
 */
module.exports = {
   pageForms: [
     {
       id:"self",
       name:"self",
       href:"{fullurl}",
       rel: "self collection api",
       tags: "collection api self home list item",
       title: "Self",
       method: "GET",
       properties:[]
     },
     {
       id:"home",
       name:"home",
       href:"{fullhost}/",
       rel: "collection api",
       tags: "collection api home list item",
       title: "Home",
       method: "GET",
       properties:[]
     },
     {
       id:"list",
       name:"list",
       href:"{fullhost}/list/",
       rel:"collection api",
       tags:"collection api home list item",
       title:"List",
       method:"GET",
       properties:[]
     },
     {
       id:"filter",
       name:"filter",
       href:"{fullhost}/filter/",
       rel:"collection api filter",
       tags:"collection api filter list item",
       title:"Search",
       method:"GET",
       properties:[
         {name:"status",value:""},
         {name:"email",value:""},
         {name:"familyName",value:""}
       ]
     },
     {
       id: "create",
       name: "create",
       href: "{fullhost}/",
       rel: "create-form api",
       tags: "collection api list",
       title: "Create",
       method: "POST",
       properties: [
        {name:"id",value:"{makeid}"},
        {name:"givenName",value:""},
        {name:"familyName",value:""},
        {name:"telephone",value:""},
        {name:"email",value:""},
        {name:"status",value:"pending"}
       ]
     }
   ],
   itemForms: [
     {
       id:"read_{id}",
       name: "read",
       href: "{fullhost}/{id}",
       rel: "item api read",
       title: "Read",
       method: "GET",
       properties: []
     },
     {
       id:"update_{id}",
       name:"update",
       href:"{fullhost}/{id}",
       rel: "item edit-form api",
       tags: "organization list item",
       title: "Edit",
       method: "PUT",
       properties: [
         {name:"id",value:"{id}"},
         {name:"givenName",value:"{givenName}"},
         {name:"familyName",value:"{familyName}"},
         {name:"status",value:"{status}"},
         {name:"email",value:"{email}"}
       ]
     },
     {
       id:"status_{id}",
       name:"status",
       href:"{fullhost}/status/{id}",
       rel: "item api status",
       tags: "api item list status",
       title: "Status",
       method: "PATCH",
       properties: [
         {name:"status",value:"{status}"}
       ]
     },
     {
       id:"remove_{id}",
       name: "remove",
       href: "{fullhost}/{id}",
       rel: "item api remove",
       tags: "api item list status",
       title: "Remove",
       method: "DELETE",
       properties: []
     }
   ]
 }

// EOF

