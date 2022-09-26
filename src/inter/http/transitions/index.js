/**
 * @filepath ./src/inter/http/transitions/index.js
 * @module interfaces/http/transitions
 * @author mamund <mamund@gmail.com>
 * @created 2020-02-01
 * @description # DARRT Framework Transitions
 */
// page- and item-level forms
exports.forms = {
	pageForms: [
		{
		id:"self",
		name:"self",
		href:"{fullurl}",
		rel: "self colllection api",
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
  templates: [
    {
      id: "{{cuid()}}",
      name: "$ yuml -c {config.json} topography.png",
      href: "https://example.org/"
    },
    {
      id: "{{uuidv4()}}",
      name: "$ yuml -c {config.json} cqrs_etc.png",
      href: "https://example.org/"
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
			tags: "company list item",
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
