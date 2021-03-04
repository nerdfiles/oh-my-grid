/**
 * @module domain/organization/transitions
 * @memberof transitions
 * @property {object} forms          - All forms.
 * @property {array} forms.itemForms - Item forms.
 * @property {array} forms.pageForms - Page forms.
 */
module.exports = {
  itemForms: [
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
  ],
  pageForms: []
};

// EOF

